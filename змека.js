
        var canvas=document.getElementById("canvas")
        var ctx=canvas.getContext("2d")
        var width=canvas.width
        var height=canvas.height
        var blockSize=10
        var widthInBlocks=width/blockSize
        var heightInBlocks=height/blockSize
        var score=0
        var drawBorder=function(){
            ctx.fillStyle="Gray"
            ctx.fillRect(0,0,width,blockSize)
            ctx.fillRect(0,height-blockSize,width,blockSize)
            ctx.fillRect(0,0,blockSize,height)
            ctx.fillRect(height-blockSize,0,blockSize,height)
        }
        var drawScore=function(){
            ctx.font="20px Courier"
            ctx.fillStyle="Black"
            ctx.textAlign="left"
            ctx.textBaseline="top"
            ctx.fillText("Score: "+score,blockSize,blockSize)
        }
        var gameOver=function(){
            clearTimeout(intervalId)
            animationTime=100000000
            ctx.font="60px Courier"
            ctx.fillStyle="Black"
            ctx.textAlign="center"
            ctx.textBaseline="middle"
            ctx.fillText("Game Over",width/2,width/2)

        }
        var circle=function(x,y,radius,fillCircle){
            ctx.beginPath()
            ctx.arc(x,y,radius,0,Math.PI*2,false)
            if(fillCircle){
                ctx.fill()
            }
            else{
                ctx.stroke()
            }
        }
        var Block=function(col,row){
            this.col=col
            this.row=row
        }
        Block.prototype.drawSquare=function(color){
            var x=this.col*blockSize
            var y=this.row*blockSize
            ctx.fillStyle=color
            ctx.fillRect(x,y,blockSize,blockSize)
        }
        Block.prototype.drawCircle=function(color){
            var centerX=this.col*blockSize+blockSize/2
            var centerY=this.row*blockSize+blockSize/2
            ctx.fillStyle=color
            circle(centerX,centerY,blockSize/2,true)
        }
        Block.prototype.equal=function(otherBlock){
            return this.col===otherBlock.col && this.row===otherBlock.row
        }
        var Snake=function(){
            this.segments=[
                new Block(7,5),
                new Block(6,5),
                new Block(5,5)
            ]
           
            this.direction="right"
            this.nextDirection="right"
        }
        Snake.prototype.draw=function(){
            var isEven=false
            for(var i=0;i<this.segments.length;i++){
                if(isEven){
                this.segments[i].drawSquare("blue")
                }else{
                this.segments[i].drawSquare("red")
                }
                isEven=!isEven
            }
        }
        Snake.prototype.move=function(){
            var head=this.segments[0]
            var newHead
            this.direction=this.nextDirection
            if(this.direction==="right"){
                newHead=new Block(head.col+1,head.row)
            }
            else if(this.direction==="left"){
            newHead=new Block(head.col-1,head.row)
            }
            else if(this.direction==="up"){
                newHead=new Block(head.col,head.row-1) 
            }
            else if(this.direction==="down"){
                newHead=new Block(head.col,head.row+1)
            }
            if(this.checkColision(newHead)){
                gameOver()
                return
            }
            this.segments.unshift(newHead)
            if(head.equal(apple.position)){
                score++
                apple.move()
                animationTime--

            }else{
                this.segments.pop()
            }
          
        }
        
            Snake.prototype.checkColision=function(head){
              var leftColision=(head.col===0);
              var topColision=(head.row===0)
              var rightColision=(head.col===widthInBlocks-1)
              var bottomColision=(head.row===heightInBlocks-1)
              var wallColision=leftColision || rightColision || topColision || bottomColision
              var selfColision=false
              for(var i = 0;i<this.segments.length;i++){
                  if(head.equal(this.segments[i])){
                      selfColision=true
                  }
              }  
              return wallColision || selfColision
        }
        Snake.prototype.setDirection=function(newDirection){
            if(this.direction==="up" && newDirection==="down"){
                return
            }
           else if(this.direction==="down" && newDirection==="up"){
                return
            }
           else if(this.direction==="left" && newDirection==="right"){
                return
            }
           else if(this.direction==="right" && newDirection==="left"){
                return
            }
            this.nextDirection=newDirection
        }
        var Apple=function(){
            this.position=new Block(6,5)
        }
        Apple.prototype.draw=function(){
            this.position.drawCircle("limeGreen")
        }
        Apple.prototype.move=function(){
            var randomCol=Math.floor(Math.random()*(widthInBlocks-2)+1)
            var randomRow=Math.floor(Math.random()*(heightInBlocks-2)+1)
            this.position=new Block(randomCol,randomRow)
            var colide=false
              for(var i = 0;i<snake.segments.length;i++){
                  if(snake.segments[i].equal(this.position)){
                      colide=true
                      this.move()
                  }
              }  
              

            }
        var snake=new Snake()
        var apple=new Apple()
        var animationTime=100
        var intervalId=function(){
            ctx.clearRect(0,0,width,height)
            drawScore()
            snake.move()
            snake.draw()
            apple.draw()
            drawBorder()
            setTimeout(intervalId,animationTime)
    }
    intervalId()
        var directions={
            37:"left",
            38:"up",
            39:"right",
            40:"down"
        }
        $("body").keydown(function (event) {
      var newDirection = directions[event.keyCode];
      if (newDirection !== undefined) {
        snake.setDirection(newDirection);
      }
    })
  