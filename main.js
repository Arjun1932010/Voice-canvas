
x=0;
y=0;
var draw_apple="";
var screen_width=0;
var screen_height=0;
var apple="";
var speak_data="";
var to_number=0;



var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="System is listening please speak";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;   
    document.getElementById("status").innerHTML="The speech has recognised as "+content;
    
    if(content=="apple"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing apple";
        draw_apple="set";
    }
    to_number=Number(content);
    if(Number.isInteger(to_number)){
        draw_apple="set";
        document.getElementById("status").innerHTML="Started drawing apple"; 
    }
    else{
    document.getElementById("status").innerHTML="The speech did not recognise a number";
    }
}  
function setup(){
    canvas=createCanvas(900,600);
    screen_width=window.innerWidth;
    screen_height=window.innerHeight;
    canvas=createCanvas(screen_width-150,screen_height-150);
    canvas.position(0,150);

}
function draw(){
    
    if(draw_apple="set"){
        document.getElementById("status").innerHTML="Apple is drawn";
        draw_apple="";
    }
    for(var i=1; i<=to_number; i++){
        x=Math.floor(Math.random()*700);
        y=Math.floor(Math.random()*400);
        image(apple,x,y,50,50);
        document.getElementById("status").innerHTML=to_number+"Apples drawn";
        speak_data=to_number+"Apples drawn";
        speak();
    }
}
function preload(){
    apple=loadImage("apple.png");

}
