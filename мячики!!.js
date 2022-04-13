var canvas=document.getElementById("canvas")
var ctx=canvas.getContext("2d")
var balls=[]



 var Ball = function(){
   this.x=250
   this.y=250
   this.xSpeed=Math.random()*8-4
   this.ySpeed=Math.random()*8-4
 }
 for(var i=0;i<10;i++){
         balls[i]=new Ball()
        
          
}
 var ball= new Ball()
 var circle= function(x,y,radius,fill_circle){
     ctx.beginPath()
     ctx.arc(x,y,radius,0,Math.PI*2,fill_circle)
     if(fill_circle){
         ctx.fill()
     }
     else{
         ctx.stroke()
     }
 }
 Ball.prototype.draw=function(){
     circle(this.x,this.y,20,true)
 }
Ball.prototype.move=function(){
    this.x+=this.xSpeed
    this.y+=this.ySpeed
}
Ball.prototype.colyde=function(){
    if(this.x+20>500 || this.x-20<0){
        this.xSpeed=-this.xSpeed
    }
    if(this.y+20>500 || this.y-20<0){
        this.ySpeed=-this.ySpeed

    }

}
   setInterval(function(){
       ctx.clearRect(0,0,500,500)
       for(var i=0;i<balls.length;i++){
        balls[i].draw()
        balls[i].move()
        balls[i].colyde()
       }
     
   },30)