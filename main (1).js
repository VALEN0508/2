x=0;
y=0;

draw_circle= "";
draw_rect= "";
draw_square= "";

var SpeechRecongnition = window.webkitSpeechRecongnition;
var recongnition = new SpeechRecongnition();

function start()
{
    document.getElementById("status").innerHTML = "El sistema esta escuchando. Por favor, habla";
    recongnition.start();
}

recongnition.onresult = function(event)
{
    console.log(event);

    var content = event.results [0][0].transcript;

    document.getElementById("status").innerHTML = "la voz se reconocio como:" + content;

    if(content == "circulo")
    {
        x = Math.floor(Math.random() *900);
        y = Math.floor(Math.random() *600);
        document.getElementById("status").innerHTML = "se empezo a dibujar un circulo";
        draw_circle= "set";
    }

    if(content == "rectangulo")
    {
        x = Math.floor(Math.random() *900);
        y = Math.floor(Math.random() *600);
        document.getElementById("status").innerHTML = "se empezo a dibujar un rectangulo";
        draw_rect= "set";
    }

    if(content == "cuadrado")
    {
        x = Math.floor(Math.random() *900);
        y = Math.floor(Math.random() *600);
        document.getElementById("status").innerHTML = "se empezo a dibujar un cuadrado";
        draw_square= "set";
    }

}

function satup()
{
    canvas = createCanvas(900, 600)
}

function draw()
{
    if(draw_circle == "set")
    {
    radius = Match.floor(Math.random()*100);
    circle(x, y, radius);
    document.getElementById("status").innerHTML = "se dibujo un circulo";
    draw_circle = " ";
    }

    if(draw_rect == "set")
    {
    rect(x, y, 70, 50);
    document.getElementById("status").innerHTML = "se dibujo un rectangulo";
    draw_rect = " ";
    }

    if(draw_square == "set")
    {
    rect(x, y, 50, 50);
    document.getElementById("status").innerHTML = "se dibujo un cuadrado";
    draw_square = " ";
    }
}