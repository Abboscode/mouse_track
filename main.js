
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

//----

const mechanics={
'intialPositon':1,
    'velocity':1,
'acceleration':10,
'energyLost':.2

}
const shapeSetting={

    'x':10,
    'y':30,
}

//fucntoon return shape ,regarding to btn clickec for example ball returns cirlce rec returns rectangule

const ball = (shapeSetting)=>{

return new Shapes(shapeSetting.x,shapeSetting.y ,ctx)

}




//encapsulate all animate functions
const animateShapes = {

    moveHorizontal(shape) {
        let velocity = mechanics.velocity
        let acceleration=mechanics.acceleration
        const energyLost=mechanics.energyLost
        //flag for that shapes reaches rightCorner 
        let canvasCornerRight = false
        function horizontal() {


            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (shape.x > canvas.width-10 ) {
                canvasCornerRight=true

                //lose energy at contact with corner
                acceleration-=energyLost
            }else if (shape.x <10 && canvasCornerRight) {
                canvasCornerRight=false
                
                acceleration=acceleration-energyLost
            }
          
            if (!canvasCornerRight) {
                
                shape.x = shape.x+velocity+(1/2)*acceleration
            

            } else {
        
                
                shape.x = shape.x-velocity-(1/2)*acceleration
               
            }
            shape.drawCircle(10)


            window.requestAnimationFrame(horizontal)
        }
        window.requestAnimationFrame(horizontal)
    }

}

const shape = ball(shapeSetting);
console.log(typeof(shape))
animateShapes.moveHorizontal(shape);