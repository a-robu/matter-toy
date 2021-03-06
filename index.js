
import Matter from 'matter-js'

var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine = Engine.create();

var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

World.add(engine.world, [boxA, boxB, ground]);
Engine.run(engine);

let canvas = document.querySelector('canvas')
let context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

function vec2(tuple) {
    return {x: tuple[0], y: tuple[1]}
}

(function render() {
    var bodies = Matter.Composite.allBodies(engine.world);
    let names_ul = document.querySelector('.controller-names')
    names_ul.innerHTML = ''
    for (let gamepad of navigator.getGamepads()) {
        let ul = document.createElement('ul')
        ul.innerText = gamepad.id + ' ' + gamepad.axes.map(x => x.toFixed(2))
        names_ul.appendChild(ul)
    }
    if (navigator.getGamepads().length) {
        let axes = navigator.getGamepads()[0].axes
        Matter.Body.applyForce(boxA, boxA.position, 
            Matter.Vector.div(vec2(axes.slice(0, 2)), 100)
        )
        Matter.Body.applyForce(boxB, boxB.position, 
            Matter.Vector.div(vec2(axes.slice(3, 3 + 2)), 100)
        )
    }
    window.requestAnimationFrame(render);
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    for (let body of bodies) {
        var vertices = body.vertices;
        context.moveTo(vertices[0].x, vertices[0].y);
        for (var j = 1; j < vertices.length; j += 1) {
            context.lineTo(vertices[j].x, vertices[j].y);
        }
        context.lineTo(vertices[0].x, vertices[0].y);
    }
    context.lineWidth = 1;
    context.strokeStyle = '#999';
    context.stroke();
})()
