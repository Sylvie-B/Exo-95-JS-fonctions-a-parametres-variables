let display1 = document.getElementById('display1');
let display2 = document.getElementById('display2');

function hello(div, ...item){
    div.innerHTML = "Bonjour, ";
    for (let idx of item) {
        div.innerHTML += idx + ", ";
    }
    div.innerHTML += '<br>';
}

hello(display1,'toi', 'plus moi');
hello(display2,'toi', 'plus moi', 'plus tous ceux qui sont là');

function add(...item){
    let ref = 0;
    for (let idx of item){
        if(Number.isInteger(idx)){
            ref += idx;
        }
    }
    return ref
}

let display3 = document.createElement('div');

display3.innerHTML = add(1, 'intrus', 2, 3, 'ovni').toString();
document.body.appendChild(display3);

let display4 = document.createElement('div');

display4.innerHTML = add(1, 2, 3, 4, 5, 'ovni', 6).toString();
document.body.appendChild(display4);

let display5 = document.createElement('div');

display5.innerHTML = add(7, 8, 9).toString();
document.body.appendChild(display5);
