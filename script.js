function EteCambio(){
    var x = Math.floor(Math.random()*256);
    var y = Math.floor(Math.random()*256);
    var z = Math.floor(Math.random()*256);
    var backgroundColor = "rgb(" + x + "," + y + "," + z +")";
    console.log(backgroundColor);
    document.body.style.background = backgroundColor;
}