function empty(){
    document.getElementById("inputbox").value=""
}

function clickable(val){
    document.getElementById("inputbox").value+=val;
}

function equal(){
    let a= document.getElementById("inputbox").value;
    document.getElementById("inputbox").value=eval(a);
}
