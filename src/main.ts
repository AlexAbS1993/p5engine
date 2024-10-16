import p5 from 'p5';

const documentElement = document.documentElement
let time = 0
function sketch(p5: p5) {
    const windowsHeight = documentElement.clientHeight
    const windowsWidth = documentElement.clientWidth
    const root: any[] = []
    function setup() {
        let cnvs = document.getElementById('canvas') as HTMLCanvasElement
        p5.createCanvas(windowsWidth, windowsHeight, "p2d", cnvs);
        p5.rectMode(p5.CORNERS)
        p5.angleMode(p5.DEGREES)
    }
    p5.setup = setup
    function draw() {
        root.forEach(el => el.draw())
    }
    p5.draw = draw
}

new p5(sketch)