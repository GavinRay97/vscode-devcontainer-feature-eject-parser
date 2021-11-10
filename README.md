# Description

Sample script that takes a `.devcontainer/devcontainer.json` which has a list of selected "features" and converts it into a Dockerfile.

May or may not be correct, the author does not have intimate knowledge of how "features" work at the time of writing.

See links for more info on "features" in VS Code Devcontainers:
- https://github.com/microsoft/vscode-dev-containers/tree/main/script-library/container-features
- https://github.com/microsoft/vscode-dev-containers/tree/main/script-library

To run:
- `yarn install`
- `yarn dev`

Given the file at `.devcontainer/devcontainer.json` as input, this script produces:

```dockerfile
ARG VARIANT="hirsute"
FROM mcr.microsoft.com/vscode/devcontainers/base:0-${VARIANT}

# docker-in-docker
EXPORT _VSC_INSTALL_DOCKER_IN_DOCKER=true
EXPORT _BUILD_ARG_DOCKER_IN_DOCKER_VERSION=latest

# docker-from-docker
EXPORT _VSC_INSTALL_DOCKER_FROM_DOCKER=true
EXPORT _BUILD_ARG_DOCKER_FROM_DOCKER_VERSION=latest

# kubectl-helm-minikube
EXPORT _VSC_INSTALL_KUBECTL_HELM_MINIKUBE=true
EXPORT _BUILD_ARG_KUBECTL_HELM_MINIKUBE_VERSION=1.22

# terraform
EXPORT _VSC_INSTALL_TERRAFORM=true
EXPORT _BUILD_ARG_TERRAFORM_VERSION=1.0

# git
EXPORT _VSC_INSTALL_GIT=true
EXPORT _BUILD_ARG_GIT_VERSION=latest

# git-lfs
EXPORT _VSC_INSTALL_GIT_LFS=true
EXPORT _BUILD_ARG_GIT_LFS_VERSION=latest

# github-cli
EXPORT _VSC_INSTALL_GITHUB_CLI=true
EXPORT _BUILD_ARG_GITHUB_CLI_VERSION=latest

# azure-cli
EXPORT _VSC_INSTALL_AZURE_CLI=true
EXPORT _BUILD_ARG_AZURE_CLI_VERSION=latest

# sshd
EXPORT _VSC_INSTALL_SSH=true
EXPORT _BUILD_ARG_SSHD_VERSION=latest

# desktop-lite
EXPORT _VSC_INSTALL_DESKTOP_LITE=true
EXPORT _BUILD_ARG_DESKTOP_LITE_VERSION=latest

# homebrew
EXPORT _VSC_INSTALL_HOMEBREW=true
EXPORT _BUILD_ARG_HOMEBREW_VERSION=latest

# node
EXPORT _VSC_INSTALL_NODE=true
EXPORT _BUILD_ARG_NODE_VERSION=14

# python
EXPORT _VSC_INSTALL_PYTHON=true
EXPORT _BUILD_ARG_PYTHON_VERSION=3.10

# golang
EXPORT _VSC_INSTALL_GOLANG=true
EXPORT _BUILD_ARG_GOLANG_VERSION=latest

# java
EXPORT _VSC_INSTALL_JAVA=true
EXPORT _BUILD_ARG_JAVA_VERSION=17

# maven
EXPORT _VSC_INSTALL_MAVEN=true
EXPORT _BUILD_ARG_MAVEN_VERSION=3.8

# gradle
EXPORT _VSC_INSTALL_GRADLE=true
EXPORT _BUILD_ARG_GRADLE_VERSION=7

# ruby
EXPORT _VSC_INSTALL_RUBY=true
EXPORT _BUILD_ARG_RUBY_VERSION=3.0

# rust
EXPORT _VSC_INSTALL_RUST=true
EXPORT _BUILD_ARG_RUST_VERSION=1.55

# powershell
EXPORT _VSC_INSTALL_POWERSHELL=true
EXPORT _BUILD_ARG_POWERSHELL_VERSION=7.1

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive  \
    && apt-get -y install --no-install-recommends curl ca-certificates \
    && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/common-debian.sh")" \
        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/docker-in-docker-debian.sh")" \
        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/kubectl-helm-minikube-debian        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/kubectl-helm-minikube-debian.sh")" \
        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/terraform-debian.sh")" \    
        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/git-debian.sh")" \
        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/git-lfs-debian.sh")" \      
        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/github-cli-debian.sh")" \   
        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/azure-cli-debian.sh")" \    
        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/sshd-debian.sh")" \
        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/desktop-lite-debian.sh")" \ 
        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/homebrew-debian.sh")" \     
        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/node-debian.sh")" \
        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/python-debian.sh")" \       
        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/golang-debian.sh")" \       
        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/java-debian.sh")" \
        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/maven-debian.sh")" \        
        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/gradle-debian.sh")" \       
        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/ruby-debian.sh")" \
        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/rust-debian.sh")" \
        && bash -c "$(curl -fsSL "https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/powershell-debian.sh")"     
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*
```