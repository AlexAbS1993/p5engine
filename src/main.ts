import p5 from 'p5';
import { Configuration } from './Application/Configuration';

const documentElement = document.documentElement
let time = 0
let cnvs = document.getElementById('canvasContainer') as HTMLCanvasElement
const config = new Configuration().setDisplaySizes(documentElement.clientWidth - (documentElement.clientWidth * 0.01), documentElement.clientHeight - (documentElement.clientHeight * 0.01))
const { width: displayWidth, heigth: displayHeight } = config.getDisplaySizes()

function sketch(p5: p5) {
    const root: any[] = []
    function setup() {
        p5.createCanvas(displayWidth, displayHeight);
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