/*changing CSS class by ID*/
function changecolor(){
    var dd1 = document.getElementById("id1");
    var dd2 = document.getElementById("id2");
    dd1.className = "blueback";
    dd2.className = "yellowback";
}
/*changing HTML text*/
function changetext(){
    var dd1 = document.getElementById("id1");
    var dd2 = document.getElementById("id2");
    dd1.innerHTML = "Bonjour";
    dd2.innerHTML =  "Sayonora";
}
/*Changing canvas element*/
function dolime(){
    var dd1 = document.getElementById("d1");
    dd1.style.backgroundColor = "lime";
}
function doyellow(){
    var dd1 = document.getElementById("d1");
    dd1.style.backgroundColor = "yellow";

    var ctx = dd1.getContext("2d");
    ctx.fillStyle = "cyan";
    ctx.fillRect(10,10,40,40);/*fillRect(x,y,width,height)*/
    ctx.fillRect(60,10,40,40);

    ctx.fillStyle = "Black";
    ctx.font = "30px Arial";
    ctx.fillText("Hello World!",10,80);
}

/*Code for color picker*/
function makelime(){
    var dd1 = document.getElementById("c1");
    dd1.style.backgroundColor = "lime";
}
function docolor(){
    var dd2 = document.getElementById("c1");
    var colorinput = document.getElementById("clr");
    var color = colorinput.value;
    dd2.style.backgroundColor = color;
}
/*Code for slider*/
function dosquare(){
    var dd1 = document.getElementById("c1");
    var sizeinput = document.getElementById("sldr");
    var size = sizeinput.value;
    var ctx = dd1.getContext("2d");
    ctx.clearRect(0,0,dd1.width,dd1.height);
    ctx.fillStyle = "yellow";
    ctx.fillRect(10,10,size,size);
}
