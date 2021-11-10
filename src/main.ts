import fs from "fs/promises"
import * as JSON5 from "json5"
import path from "path"
import type { DevcontainerSchema } from "./devcontainer.types"
import type { Feature, FeaturesJSON } from "./features.types"
import { snakeCase } from "./utils"

////////////////////////////////////////////////////////////////////////////////////////
// NOTE: The type "FeaturesJSON" is a representation of "Features.json" as it looked on 11/10/2021
// SEE: https://github.com/microsoft/vscode-dev-containers/blob/ff5953aa7f9ec26b0a63efa8fdcc0f4fd6e284ef/script-library/container-features/src/features.json
////////////////////////////////////////////////////////////////////////////////////////

function makeEnvExportsForFeature(feature: Feature, version: string) {
  return (
    `# ${feature.id}` +
    "\n" +
    `ENV ${feature.buildArg}=true` +
    "\n" +
    `ENV _BUILD_ARG_${snakeCase(feature.id).toUpperCase()}_VERSION=${version}`
  )
}

function makeInstallScriptCommandForFeature(feature: Pick<Feature, "id">, osVariant: string = "debian") {
  return `bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/${feature.id}-${osVariant}.sh")"`
}

function makeDockerfileForFeatures(features: Feature[], devcontainerJson: DevcontainerSchema) {
  const envExports = features.map((it) => makeEnvExportsForFeature(it, devcontainerJson?.features?.[it.id]))
  const installScripts = [
    makeInstallScriptCommandForFeature({ id: "common" }),
    ...features.map((it) => makeInstallScriptCommandForFeature(it)),
  ]

  return `
ARG VARIANT="hirsute"
FROM mcr.microsoft.com/vscode/devcontainers/base:0-\${VARIANT}

${envExports.join("\n\n")}

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive  \\
    && apt-get -y install --no-install-recommends curl ca-certificates \\
    && ${installScripts.join(" \\ \n\t&& ")}
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*
`
}

interface MakeDockerfileFromDevcontainerJsonParams {
  devcontainer: DevcontainerSchema
  featureDefinitionFile: FeaturesJSON
}

function makeDockerfileFromDevcontainerJson(params: MakeDockerfileFromDevcontainerJsonParams): string {
  const { devcontainer, featureDefinitionFile } = params

  if (!devcontainer.build?.dockerfile) throw Error("Not a Docker based build, can't use features")
  if (!devcontainer.features) throw Error("No features selected")

  const features = featureDefinitionFile.features
  const selectedFeatures = features.filter((it) => Object.keys(devcontainer.features!).includes(it.id))

  const dockerfile = makeDockerfileForFeatures(selectedFeatures, devcontainer)
  return dockerfile
}

async function main() {
  const featuresFilepath = path.join(__dirname, "Features.json")
  const featuresFile: FeaturesJSON = await fs.readFile(featuresFilepath, "utf-8").then(JSON5.parse)

  const devcontainerFilepath = path.join(__dirname, "../", ".devcontainer", "devcontainer.json")
  const devcontainerFile: DevcontainerSchema = await fs.readFile(devcontainerFilepath, "utf-8").then(JSON5.parse)

  const dockerfile = makeDockerfileFromDevcontainerJson({
    devcontainer: devcontainerFile,
    featureDefinitionFile: featuresFile,
  })

  console.log(dockerfile)
}

main().catch((err) => {
  console.log("Err in main()", err)
})
