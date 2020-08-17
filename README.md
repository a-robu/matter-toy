
# Introduction

This repo is mostly a copy-pasting of code snippets from:
- the _Matter.js_ [Getting started](https://github.com/liabru/matter-js/wiki/Getting-started) and [Rendering](https://github.com/liabru/matter-js/wiki/Rendering) documentation pages.
- and a bit from the [Gamepad API page](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) on MDN.

It is a minimal example showing forces being applied from a Gamepad on `matter-js` objects, using `parcel` for browser bundling.

# Using with Docker

The easiest way to run this is from the `Dockerfile`.

```bash
docker-compose up --build -d
```

There is now a Jupyter server listening on http://localhost:8080.

# Using directly

Alternatively, it's possible to run this without Docker, by installing the necessary commands manually.

## Parcel

Install `parcel` with the following command.

```bash
npm install -g parcel-bundler
```

Now, the development server can be run with the following command.

```
parcel index.html
```

A development server should now be running at http://localhost:1234/.

Now, connect an Xbox 360 controller and move the joysticks. The two boxes now move.

## Jupyter Notebooks

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
npx ./venv/bin/jupyter notebook
```

A browser window should have opened and it is now possible to run the `fetch-and-show-png.ipynb` notebook and gaze upon its glory.


# Notes

This experiment may later have parameters and _Dat.GUI_ is a useful thing to use for that case.
