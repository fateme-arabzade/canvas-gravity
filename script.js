/* guide for comments
^ghange code for one ball to balls
!base of project-importatnt
&ghange for next project
?
*math
~
ToDo:
*/ 
//!use canvas
let canvas=document.querySelector("canvas");
//width and height of canvas
canvas.width=window.innerWidth
canvas.height=window.innerHeight
//for use canvas
let c=canvas.getContext("2d")
this.screen={
    width : window.innerWidth ,
    height : window.innerHeight
}
this.mouse={
    x : screen.width ,
    y : screen.height
}
//!use objective metod..build the class that include:
//!.1.cunstructor..2.drow...3.updete
class Ball{
 //!constructor=initialization of variables   
 //& (x , y) for mouse event 
 constructor(x,y,dx,dy,r,color) {
    this.r=r||10
    this.color=color||randomColor()
    ///random starting location
    this.x=x||randomIntFromInterval(0+this.r,window.innerWidth-this.r)
    this.y=y||randomIntFromInterval(0+this.r,window.innerHeight-this.r)
    ///*random starting speed....math.random()-0.5=-0.5_+0.5 
    this.dx=dx||(Math.random()-0.5)*10
    this.dy=dy||(Math.random())*10
    this.gravity=1
    this.friction=0.9
    ////*10=speed
    this.drow()
   }
 //!drow inclod drow metode
 drow(){
    ///c.beginpath() is necessary for starting a new canvas
    c.beginPath()
    //colore must be befor c.fill
    c.fillStyle=this.color
    // arc(x,y,r,starting point of cicle,ending point of cicle,round clock=true!=false)
    c.arc(this.x,this.y,this.r,0,2*Math.PI)
    //the base of drow.if not,the aboving line is nothing
    c.fill()
   }
 //!update includ change on variables  
 update(){
    this.y+=this.dy
    this.x+=this.dx
    if(this.y+this.r+this.dy>screen.height){
        this.dy=-this.dy*this.friction
    }
    else{
        this.dy+=this.gravity
    }
    if(this.x+this.r<screen.width&&this.x-this.r<0){
        this.dx=-this.dx
    }
    this.drow()
   }
} 

let balls=[]
for(let i=0;i<50;i++)
{balls.push(new Ball)}
///the base of movment
function animate(){
    //^balls
    c.clearRect(0,0,window.innerWidth,window.innerHeight)
    balls.forEach(ball=>{ball.update()})
    //^1 ball
    //ball.update();
    requestAnimationFrame(animate)
}

//~eventLstener
//&mouse event
window.addEventListener("mousemove",function(e){
    mouse.x=e.clientX
    mouse.y=e.clientY
})
//&mouse event
//~solve resize prblem
window.addEventListener("resize",function(){
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
})        
animate()
//!random metodssss
function randomColor(){
    
    let hex=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
    let rcolor="#"+hex[randomIntFromInterval(0,15)]+hex[randomIntFromInterval(0,15)]
    +hex[randomIntFromInterval(0,15)]+hex[randomIntFromInterval(0,15)]
    +hex[randomIntFromInterval(0,15)]+hex[randomIntFromInterval(0,15)]
    console.log(rcolor)
    return rcolor
}
function randomIntFromInterval(max,min)
{
    return Math.floor(Math.random()*(max-min+1)+min)
}
