function addBola(){
    var bola = document.createElement("div");
    bola.setAttribute("class","bola");

    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 400);
    bola.setAttribute("style","left:"+p1+"px;top:"+p2+"px;background-color:"+color()+";");
    bola.setAttribute("onclick","estourar(this)");
    document.body.appendChild(bola);
}
function estourar(elemento){
    document.body.removeChild(elemento);
}

function iniciar (){
    setInterval(addBola,0500)
}
function color() {
    var hexadecimal = ["1", "2", "3", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var cor = "#";
    for (var i=0; i < 6; i++){
        cor += hexadecimal[Math.floor(Math.random() * hexadecimal.length)];
    }
    return cor;
}