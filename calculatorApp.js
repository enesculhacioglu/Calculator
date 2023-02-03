const res = document.querySelector('.resultScreen');
let elements = [];
let valuesArray;
let number = '';
let keeperNumber;


res.value = "";

function clean(){
    res.value = '';
    res.innerHTML = '';
    elements = [];
}
function display(val){
    elements.push(val);
    res.value += val;

    if (val == "*"){
        val = "&#215;"; 
    }
    else if(val == "/"){
        val = "&#247;";
    }

    res.innerHTML += val;
}
function solve(){
    let i = 0;
    elements = [];
    res.innerHTML = eval(res.value);
    res.value = res.innerHTML;
    valuesArray = Array.from(String(res.value), Number);

    for(i; i < valuesArray.length; i++){
        let value = valuesArray[i];
        elements.push(value);
    }
}
function del(){
    elements.pop();
    for(i=0; i<elements.length; i++){
        number += elements[i]; 
    }
    res.innerHTML = number;
    keeperNumber = number;
    number = '';
    res.value = res.innerHTML;
}






