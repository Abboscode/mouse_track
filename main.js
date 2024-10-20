
//shape object
class Shapes {

    constructor(x, y, ctx) {
        this._x = x;
        this._y = y;
        this.ctx = ctx;

    }
    get x() {
        return this._x
    }
    get y() {

        return this._y
    }
    set x(newX) {
        this._x = newX

    }
    set y(newY) {
        this._y = newY

    }

    drawCircle(radius) {

        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI)

        this.ctx.fill();




    }

    drawRectangle() {

        this.ctx.fillRect(25, 25, 22, 22);


    }



}

//----
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const shape = new Shapes(100, 100, ctx)
//----

shape.drawCircle()



//encapsulate all animate functions
const animateShapes = {

    moveHorizontal(shape) {
        let translate = 0
        //flag for that shapes reaches rightCorner 
        let canvasCornerRight = false
        function horizontal() {


            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (translate < canvas.width*0.9 && !canvasCornerRight) {
                translate++
                shape.x = translate

            } else {
                canvasCornerRight=true
                translate--
                shape.x = translate
                if(translate <canvas.width*.1 && canvasCornerRight){
                    canvasCornerRight=false
                } 
            }
            shape.drawCircle(10)


            window.requestAnimationFrame(horizontal)
        }
        window.requestAnimationFrame(horizontal)
    }

}


animateShapes.moveHorizontal(shape);