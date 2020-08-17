
function mark_poly(ctx, poly) {
    ctx.beginPath()
    ctx.moveTo(...poly[0])
    for (let vec of poly.slice(1)) {
        ctx.lineTo(...vec)
    }
    ctx.lineTo(...poly[0])
}

function show_canvas(canvas) {
    $$.png(canvas.toBuffer().toString('base64'))
}

exports.mark_poly = mark_poly
exports.show_canvas = show_canvas
