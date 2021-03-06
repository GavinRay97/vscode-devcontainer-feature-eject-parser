// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

/**
 * Defines a dev container
 */
export interface DevcontainerSchema {
  /**
   * Application ports that are exposed by the container. This can be a single port or an
   * array of ports. Each port can be a number or a string. A number is mapped to the same
   * port on the host. A string is passed to Docker unchanged and can be used to map ports
   * differently, e.g. "8000:8010".
   */
  appPort?: Array<number | string> | number | string
  /**
   * Docker build-related options.
   */
  build?: Build
  /**
   * Codespaces-specific configuration.
   */
  codespaces?: { [key: string]: any }
  /**
   * Container environment variables.
   */
  containerEnv?: { [key: string]: string }
  /**
   * The user the container will be started with. The default is the user on the Docker image.
   */
  containerUser?: string
  /**
   * The port VS Code can use to connect to its backend.
   */
  devPort?: number
  /**
   * An array of extensions that should be installed into the container.
   */
  extensions?: string[]
  /**
   * Features to add to the dev container.
   */
  features?: { [key: string]: any }
  /**
   * Ports that are forwarded from the container to the local machine. Can be an integer port
   * number, or a string of the format "host:port_number".
   */
  forwardPorts?: Array<number | string>
  /**
   * Host hardware requirements.
   */
  hostRequirements?: HostRequirements
  /**
   * A command to run locally before anything else. This command is run before
   * "onCreateCommand". If this is a single string, it will be run in a shell. If this is an
   * array of strings, it will be run as a single command without shell.
   */
  initializeCommand?: string[] | string
  /**
   * Mount points to set up when creating the container. See Docker's documentation for the
   * --mount option for the supported syntax.
   */
  mounts?: string[]
  /**
   * A name to show for the workspace folder.
   */
  name?: string
  /**
   * A command to run when creating the container. This command is run after
   * "initializeCommand" and before "updateContentCommand". If this is a single string, it
   * will be run in a shell. If this is an array of strings, it will be run as a single
   * command without shell.
   */
  onCreateCommand?: string[] | string
  otherPortsAttributes?: OtherPortsAttributes
  /**
   * Whether to overwrite the command specified in the image. The default is true.
   *
   * Whether to overwrite the command specified in the image. The default is false.
   */
  overrideCommand?: boolean
  portsAttributes?: PortsAttributes
  /**
   * A command to run when attaching to the container. This command is run after
   * "postStartCommand". If this is a single string, it will be run in a shell. If this is an
   * array of strings, it will be run as a single command without shell.
   */
  postAttachCommand?: string[] | string
  /**
   * A command to run after creating the container. This command is run after
   * "updateContentCommand" and before "postStartCommand". If this is a single string, it will
   * be run in a shell. If this is an array of strings, it will be run as a single command
   * without shell.
   */
  postCreateCommand?: string[] | string
  /**
   * A command to run after starting the container. This command is run after
   * "postCreateCommand" and before "postAttachCommand". If this is a single string, it will
   * be run in a shell. If this is an array of strings, it will be run as a single command
   * without shell.
   */
  postStartCommand?: string[] | string
  /**
   * Remote environment variables. If these are used in the Integrated Terminal, make sure the
   * 'Terminal > Integrated: Inherit Env' setting is enabled.
   */
  remoteEnv?: { [key: string]: null | string }
  /**
   * The user VS Code Server will be started with. The default is the same user as the
   * container.
   */
  remoteUser?: string
  /**
   * The arguments required when starting in the container.
   */
  runArgs?: string[]
  /**
   * Machine specific settings that should be copied into the container. These are only copied
   * when connecting to the container for the first time, rebuilding the container then
   * triggers it again.
   */
  settings?: { [key: string]: any }
  /**
   * Action to take when the VS Code window is closed. The default is to stop the container.
   *
   * Action to take when the VS Code window is closed. The default is to stop the containers.
   */
  shutdownAction?: ShutdownAction
  /**
   * A command to run when creating the container and rerun when the workspace content was
   * updated while creating the container. This command is run after "onCreateCommand" and
   * before "postCreateCommand". If this is a single string, it will be run in a shell. If
   * this is an array of strings, it will be run as a single command without shell.
   */
  updateContentCommand?: string[] | string
  /**
   * Controls whether on Linux the container's user should be updated with the local user's
   * UID and GID. On by default when opening from a local folder.
   */
  updateRemoteUserUID?: boolean
  /**
   * User environment probe to run. The default is none.
   */
  userEnvProbe?: UserEnvProbe
  /**
   * The user command to wait for before continuing execution in the background while the UI
   * is starting up. The default is "updateContentCommand".
   */
  waitFor?: WaitFor
  /**
   * The path of the workspace folder inside the container.
   *
   * The path of the workspace folder inside the container. This is typically the target path
   * of a volume mount in the docker-compose.yml.
   */
  workspaceFolder?: string
  /**
   * The --mount parameter for docker run. The default is to mount the project folder at
   * /workspaces/$project.
   */
  workspaceMount?: string
  /**
   * The location of the context folder for building the Docker image. The path is relative to
   * the folder containing the `devcontainer.json` file.
   */
  context?: string
  /**
   * The location of the Dockerfile that defines the contents of the container. The path is
   * relative to the folder containing the `devcontainer.json` file.
   */
  dockerFile?: string
  /**
   * The docker image that will be used to create the container.
   */
  image?: string
  /**
   * The name of the docker-compose file(s) used to start the services.
   */
  dockerComposeFile?: string[] | string
  /**
   * An array of services that should be started and stopped.
   */
  runServices?: string[]
  /**
   * The service you want to work on.
   */
  service?: string
}

/**
 * Docker build-related options.
 */
export interface Build {
  /**
   * Build arguments.
   */
  args?: { [key: string]: string }
  /**
   * The image to consider as a cache. Use an array to specify multiple images.
   */
  cacheFrom?: string[] | string
  /**
   * The location of the context folder for building the Docker image. The path is relative to
   * the folder containing the `devcontainer.json` file.
   */
  context?: string
  /**
   * The location of the Dockerfile that defines the contents of the container. The path is
   * relative to the folder containing the `devcontainer.json` file.
   */
  dockerfile?: string
  /**
   * Target stage in a multi-stage build.
   */
  target?: string
}

/**
 * Host hardware requirements.
 */
export interface HostRequirements {
  /**
   * Number of required CPUs.
   */
  cpus?: number
  /**
   * Amount of required RAM in bytes. Supports units tb, gb, mb and kb.
   */
  memory?: string
  /**
   * Amount of required disk space in bytes. Supports units tb, gb, mb and kb.
   */
  storage?: string
}

export interface OtherPortsAttributes {
  /**
   * Automatically prompt for elevation (if needed) when this port is forwarded. Elevate is
   * required if the local port is a privileged port.
   */
  elevateIfNeeded?: boolean
  /**
   * Label that will be shown in the UI for this port.
   */
  label?: string
  /**
   * Defines the action that occurs when the port is discovered for automatic forwarding
   */
  onAutoForward?: OnAutoForward
  /**
   * The protocol to use when forwarding this port.
   */
  protocol?: Protocol
  requireLocalPort?: boolean
}

/**
 * Defines the action that occurs when the port is discovered for automatic forwarding
 */
export enum OnAutoForward {
  Ignore = "ignore",
  Notify = "notify",
  OpenBrowser = "openBrowser",
  OpenPreview = "openPreview",
  Silent = "silent",
}

/**
 * The protocol to use when forwarding this port.
 */
export enum Protocol {
  HTTP = "http",
  HTTPS = "https",
}

export interface PortsAttributes {}

/**
 * Action to take when the VS Code window is closed. The default is to stop the container.
 *
 * Action to take when the VS Code window is closed. The default is to stop the containers.
 */
export enum ShutdownAction {
  None = "none",
  StopCompose = "stopCompose",
  StopContainer = "stopContainer",
}

/**
 * User environment probe to run. The default is none.
 */
export enum UserEnvProbe {
  InteractiveShell = "interactiveShell",
  LoginInteractiveShell = "loginInteractiveShell",
  LoginShell = "loginShell",
  None = "none",
}

/**
 * The user command to wait for before continuing execution in the background while the UI
 * is starting up. The default is "updateContentCommand".
 */
export enum WaitFor {
  InitializeCommand = "initializeCommand",
  OnCreateCommand = "onCreateCommand",
  PostCreateCommand = "postCreateCommand",
  PostStartCommand = "postStartCommand",
  UpdateContentCommand = "updateContentCommand",
}
