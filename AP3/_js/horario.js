function carregar(){
    var msg = window.document.getElementById("msg");
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    msg.innerHTML = `Informação atualizada às ${hora}:${min}.`
}