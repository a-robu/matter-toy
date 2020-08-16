
# Introduction

This repo is mostly a copy-pasting of code snippets from:
- the _Matter.js_ [Getting started](https://github.com/liabru/matter-js/wiki/Getting-started) and [Rendering](https://github.com/liabru/matter-js/wiki/Rendering) documentation pages.
- and a bit from the [Gamepad API page](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) on MDN.

It is a minimal example showing forces being applied from a Gamepad on `matter-js` objects, using `parcel` for browser bundling.

# Usage

Ensure `parcel` is installed.

```bash
npm install -g parcel-bundler
```

Run development server.

```
parcel index.html
```

A development server should now be running at http://localhost:1234/.

Now, connect an Xbox 360 controller and move the joysticks. The two boxes now move.

# Notes

This experiment may later have parameters and _Dat.GUI_ is a useful thing to use for that case.

# Jupyter Notebooks

I am wondering about whether it is worth doing "integration" tests in Jupyter notebooks (as a way to manage built states and sample data and keep them close to program outputs).

To that end, there is a sample notebook that can run Javascript code with iJavascript.

For this, `python` (Python 3), `npm` and `node` must be present.

To install Jupyter with the iJavascript kernel, run the following command.

```bash
npm install
./setup-ijavascript
```

Now it's possible to run the notebook server with the following command.

```bash
./venv/bin/jupyter notebook
```

A browser window should have opened and it is now possible to run the `fetch-and-show-png.ipynb` notebook and gaze upon its glory.

# Podman

I am using this repo an opportunity to try using Podman to run tests in CI.

Instructions for installing Podman on Ubuntu can be found on the [installation page](https://podman.io/getting-started/installation#ubuntu). And here are the commands, reproduced for convenience.

> ```bash
> . /etc/os-release
> echo "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/> xUbuntu_${VERSION_ID}/ /" | sudo tee /etc/apt/sources.list.d/> devel:kubic:libcontainers:stable.list
> curl -L https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/> xUbuntu_${VERSION_ID}/Release.key | sudo apt-key add -
> sudo apt-get update -qq
> sudo apt-get -qq -y install podman
> ```

```bash
$ podman --version
podman version 2.0.4
```