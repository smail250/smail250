var canvas=document.getElementById("canvas")
var ctx=canvas.getContext("2d")
var x=250
var y=250

var draw_arc=function(x,y,radius,fill_circle){
    ctx.beginPath()
    ctx.arc(x,y,radius,0,Math.PI*2,false)
    if(fill_circle){
        ctx.fill()
    }
    else{
        ctx.stroke()
    }
}
   var moving=function(coordinate){
       var position=Math.random()*4-2
       coordinate+=position
       if(coordinate>200){
           coordinate=200
       }
       if(coordinate<0){
           coordinate=0
       }
       return coordinate
   }
   setInterval(function(){
       ctx.clearRect(0,0,500,500)
       ctx.lineWidth=2
       ctx.stokeStyle="Black"
       ctx.fillStyle="Gold"
    draw_arc(x,y,15,true)
    draw_arc(x,y,15,false)
    draw_arc(x-8,y-23,10,false)
    draw_arc(x+11,y-23,10,false)
    draw_arc(x-4,y-2,3,false)
    draw_arc(x+6,y-2,3,false)
       x=moving(x)
       y=moving(y)
       ctx.strokeRect(0,0,500,500)
   },30)