var print = function(msg) {
    document.getElementById("res").innerHTML = "A palavra tem comprimento igual a " + msg;
}

document.getElementById("btn").onclick = function(event){
    print(document.getElementById('pal').value.length)
}