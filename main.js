function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";

}
function draw(){
    image(video,0,0,640,480);
    tint(tint_color);
}
function take_snapshot(){
     save('manasavi_sing:).png');
 }
 function filter_tint() {
      tint_color = document.getElementById("colour_name").value; }
    function canvas(){
        canvas=createCanvas(300,300);
    canvas.center();
    }
    function circle(){      
circle(30, 30, 20);
ellipse(56, 46, 55, 55);
    }
    
function rectangle(){
rect(30, 20, 55, 55);
}
