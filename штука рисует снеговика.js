var canvas=document.getElementById("canvas")
var ctx=canvas.getContext("2d")
var draw_snowman=function(x,y){
var draw_circle=function(x,y,rad,status){
      ctx.beginPath()
      ctx.arc(x,y,rad,0,Math.PI*2)
      var fillCircle=status
      if(status==true){
        fillCircle=ctx.fill()
     }else{
      fillCircle=ctx.stroke()
     }
   } 
   draw_circle(x,y,30,false)
   draw_circle(x+9,y-5,5,true)
   draw_circle(x-9,y-5,5,true)
   draw_circle(x,y+80,50,false)
   draw_circle(x,y+50,5,true)
   draw_circle(x,y+70,5,true)
   draw_circle(x,y+90,5,true)

}
draw_snowman(100,50)