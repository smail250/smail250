var direction=0  
var ofset=0
$("#heading").offset({left: ofset,top: ofset})
var move=function(){
   if(direction==0){
      $("#heading").offset({left: ofset})
      ofset++
      if(ofset>200){
         ofset=0
         direction=1
      }
   }else if(direction==1){
      $("#heading").offset({top: ofset})
       ofset++
       if(ofset>200){
          direction=2
          ofset=200
       }
   }else if(direction==2){
      $("#heading").offset({left: ofset})
       ofset--
       if(ofset<0){
          direction=3
          ofset=200
       }
   }else if(direction==3){
      $("#heading").offset({top: ofset})
       ofset--
       if(ofset<0){
          direction=0
          ofset=0
       }
   }
}
var speed=100   
var click_count=0
var cancel_interval=setInterval(move, speed);
var click_handler=function(event){
if( $("#heading").click(click_handler)){
   click_count=click_count+1
   speed=speed-1
   clearInterval(cancel_interval)
   setInterval(move, speed)
   $("#heading").text(click_count)
}
}
$("#heading").click(click_handler)