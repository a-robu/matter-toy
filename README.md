
# Introduction

This repo is a tryout of:
- Matter.js physics,
- applying forces with Gamepad,
- using Parcel for browser asset bunding.

# Usage

Run the live dev server with `parcel`.

```bash
npm i -g parcel-bundler
parcel index.html
```

Connect a controller (Xbox 360 known to work) and move the joysticks.

# Snippets

The neat experiments GUI library is _Dat.GUI_. Here's a snippet for  it.

## Dat.GUI

```javascript
var FizzyText = function() {
    this.message = 'dat.gui';
    this.speed = 0.8;
    this.displayOutline = false;
    // this.explode = function() { ... };
    // Define render logic ...
  };
  
  window.onload = function() {
    var text = new FizzyText();
    var gui = new dat.GUI();
    gui.add(text, 'message');
    gui.add(text, 'speed', -5, 5);
    gui.add(text, 'displayOutline');
    gui.add(text, 'explode');
  };
```
