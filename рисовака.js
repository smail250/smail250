var val=5
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  $("html").mousemove(mainfunk=function(event){
     ctx.beginPath()
     ctx.arc(event.pageX,event.pageY,val,0,Math.PI*2,true)
     
  })
  $("html").keydown(function(event){
     ctx.fillStyle="black"
     ctx.fill()
  })
  $("html").keyup(function(event){
     ctx.fillStyle="white"
  })
  var mainfunc=mainfunk(event)
