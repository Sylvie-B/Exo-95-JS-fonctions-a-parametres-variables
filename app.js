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
    return ref;
}

function multi(...number){
    let ref =0;
    for (let idx of number){
        if(Number.isInteger(idx)){
            ref += parseInt(idx * 11.76);
        }
    }
    return ref;
}

// point 2
let display = document.createElement('div');

let point21 = add(1, 'intrus', 2, 3, 'ovni').toString();
let point22 = add(1, 2, 3, 4, 5, 'ovni', 6).toString();
let point23 = add(7, 8, 9).toString();

// point 3
let point31 = multi(1, 'intrus', 2, 3, 'ovni').toString();
let point32 = multi(1, 2, 3, 4, 5, 'ovni', 6).toString();
let point33 = multi(7, 8, 9).toString();

recap(point21, point22, point23, point31, point32, point33);

function recap(...item){
    for(let idx in item){
        display.innerHTML += item[idx] + '<br>';
        document.body.appendChild(display);
    }
}
