import p5 from 'p5';

const documentElement = document.documentElement
let time = 0
let cnvs = document.getElementById('canvasContainer') as HTMLCanvasElement
function sketch(p5: p5) {
    const windowsHeight = documentElement.clientHeight - (documentElement.clientHeight * 0.01)
    const windowsWidth = documentElement.clientWidth - (documentElement.clientWidth * 0.01)
    const root: any[] = []
    function setup() {
        p5.createCanvas(windowsWidth, windowsHeight);
        p5.rectMode(p5.CORNERS)
        p5.angleMode(p5.DEGREES)
    }
    p5.setup = setup
    function draw() {
        root.forEach(el => el.draw())
    }
    p5.draw = draw
}

new p5(sketch, cnvs)