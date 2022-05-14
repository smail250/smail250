var Car=function(x,y){
   this.x=x
   this.y=y
   this.draw()
};
Car.prototype.draw=function(){
   var carhtml='<img src="https://png.pngtree.com/element_our/png_detail/20181223/super-red-sports-car-png_293223.jpg">'
   this.Carelement=$(carhtml);
   this.Carelement.css({
     position:"absolute", 
     left:this.x,
     top:this.y
   })
   $("body").append(this.Carelement);
   
}
Car.prototype.moveright=function(speed){
   this.x += speed
   this.Carelement.css({
      left:this.x,
      top:this.y

   })

}
Car.prototype.moveleft=function(speed){
   this.x -= speed
   this.Carelement.css({
      left:this.x,
      top:this.y

   })

}
Car.prototype.movetop=function(speed){
   this.y -= speed
   this.Carelement.css({
      left:this.x,
      top:this.y

   })

}
Car.prototype.movedown=function(speed){
   this.y += speed
   this.Carelement.css({
      left:this.x,
      top:this.y

   })

}
var tesla = new Car(100,30)
tesla.moveright(100)