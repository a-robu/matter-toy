
function show_canvas(canvas) {
    $$.png(canvas.toBuffer().toString('base64'))
}

module.exports = show_canvas
