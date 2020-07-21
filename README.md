
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
