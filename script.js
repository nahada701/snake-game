var blockSize=25
var col=20
var row=20
snakeX=blockSize*5
snakeY=blockSize*5
var foodX;
var foodY;
moveX=0
moveY=0
var snakeBody=[]
var gameOver=false


window.onload=function(){
canvas = document.getElementById("board"); 
canvas.width=col*blockSize
canvas.height=row*blockSize
context = canvas.getContext("2d");

placeFood();
addEventListener("keyup",updtePosition)
setInterval(update,1000/10)




}
function update(){
    if(gameOver){
        return
    }
    context.fillStyle="black"
    context.fillRect(0,0,canvas.width,canvas.height)
   
    context.fillStyle="red"
    context.fillRect(foodX,foodY,blockSize,blockSize)

    if(foodX==snakeX && foodY==snakeY){
        snakeBody.push([foodX,foodY])
        placeFood()
    }
    for(let i=snakeBody.length-1;i>0;i--){
        snakeBody[i]=snakeBody[i-1]
      }
      if(snakeBody.length){
        snakeBody[0]=[snakeX,snakeY]
      }
    context.fillStyle="lime"
    snakeX+=moveX;
    snakeY+=moveY;
    context.fillRect(snakeX,snakeY,blockSize,blockSize)
    for (let i = 0; i < snakeBody.length; i++) {
     context.fillRect(snakeBody[i][0],snakeBody[i][1],blockSize,blockSize) 
      }
  
   


    if (snakeX<0 || snakeY<0 || snakeX>row*blockSize || snakeY>col*blockSize) {
        
       gameOver=true
       alert("Game Over")
    }
    for (let i = 0; i < snakeBody.length; i++) {
       if(snakeBody[i][0]==snakeX && snakeBody[i][1]==snakeY){
        gameOver=true
        alert("Game Over")
        break
       }
        
    }

}
function placeFood(){
   
    foodX=Math.floor(Math.random()*col )*blockSize
    foodY=Math.floor(Math.random()*row )*blockSize

}
function updtePosition(e){
    if(e.code=="ArrowUp" && moveY!=blockSize){
        moveX=0;
        moveY=-blockSize;
    }
    else if(e.code=="ArrowDown" && moveY!=-blockSize ){
        moveX=0;
        moveY=blockSize;
    }
    else if(e.code=="ArrowLeft" && moveX!=blockSize){
        moveY=0;
        moveX=-blockSize;
    }
    else if(e.code=="ArrowRight" && moveX!=-blockSize){
        moveY=0;
        moveX=blockSize;
    }
    
}