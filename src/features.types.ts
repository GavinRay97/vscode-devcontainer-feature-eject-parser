export interface FeaturesJSON {
  features: Feature[]
}

export interface Feature {
  id: string
  name: string
  options: { [key: string]: string }
  buildArg: string
  entrypoint?: string
  privileged?: boolean
  init?: boolean
  containerEnv?: { [key: string]: string }
  extensions?: string[]
  mounts?: Mount[]
  include: string[]
  settings?: { [key: string]: string }
  capAdd?: string[]
  securityOpt?: string[]
}

export interface Mount {
  source: string
  target: string
  type: string
}
