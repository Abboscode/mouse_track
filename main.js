const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let x=10
let y=10
let c=0
let flag=false
const width=10
const heght = 10
let a=6
let t=1
let v=1
let energyLost=0.25
let xx = v*t+ (1/2)*a*t*t
let yy = v*t+ (1/2)*a*t*t

function drawObjectX(cordinate,initalPosition,w, h){

    ctx.clearRect(cordinate+initalPosition-1,y,w,h);
    //y corditer
    //ctx.clearRect(x,y+yy-1,width,heght);
    ctx.fillStyle = "green";
    
    
    //yy=yy+v*t+ (1/2)*a*t*t


}
function drawObjectY(cordinate,initalPosition,w, h){

    ctx.clearRect(x,cordinate+initalPosition-1,w,h);
    //y corditer
    //ctx.clearRect(x,y+yy-1,width,heght);
    ctx.fillStyle = "green";
    
    
    //yy=yy+v*t+ (1/2)*a*t*t


}
//check for object not to leave the canvas check*
const checkWidth = (cordinate ,positon)=>{

return canvas.width-width<cordinate+positon-1

}

function draw(){

if(canvas.width!=x+xx-1 && flag==false){
   
    drawObjectX(x,xx,width,heght)
    //drawObjectY(y,yy,width,heght)
    // ctx.clearRect(x+xx-1,y,width,heght);
    // //y corditer
    // //ctx.clearRect(x,y+yy-1,width,heght);
    // ctx.fillStyle = "green";
     xx=xx+v*t+ (1/2)*a*t*t
    
    // //yy=yy+v*t+ (1/2)*a*t*t
    ctx.fillRect(x+xx, y, width, heght);

//*
if (checkWidth(x,xx)){
    flag=true
    
    //losing energy
    a=a-energyLost
}
  
    //ctx.fillRect(x, y+yy, width, heght);
}else{
//left side of the wall
//+2since drawObject used inside delay of -1,but it is oposite dir so wee need +1,to make it +2 added
  drawObjectX(x+2,xx,width,heght)
    //ctx.clearRect(x+xx+1,y,width,heght);
   // ctx.fillStyle = "green";

    xx=xx-v*t-(1/2)*a*t*t

    ctx.fillRect(x+xx, y, width, heght);
    if(xx<1){
        flag=false
        //lsoing energy on evry contanct with corners
        a=a-energyLost
    }

}
window.requestAnimationFrame(draw)
}


window.requestAnimationFrame(draw)