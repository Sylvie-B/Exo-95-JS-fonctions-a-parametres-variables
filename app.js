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

