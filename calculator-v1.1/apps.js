let operator = null,
    premierNumero = null,
    deuxiemeNumero = null,
    screen = document.getElementById('screen');

function calculate(buttonValue) {
    if (buttonValue === 'sqrt') {
        screen.innerHTML = Math.sqrt(parseFloat(screen.innerHTML));
        premierNumero = parseFloat(screen.innerHTML);
        operator = null;
        deuxiemeNumero = null;
    } else if (buttonValue === 'sq') {
        screen.innerHTML = parseFloat(screen.innerHTML) * parseFloat(screen.innerHTML);
        operator = null;
        deuxiemeNumero = null;
    } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
        premierNumero = parseFloat(screen.innerHTML);
        operator = buttonValue;
        screen.innerHTML = '';
    } else if (buttonValue === '=') {
        if (premierNumero != null && operator != null) {
            deuxiemeNumero = parseFloat(screen.innerHTML);
            if (operator === '+') {
                screen.innerHTML = premierNumero + deuxiemeNumero;
            } else if (operator === '-') {
                screen.innerHTML = premierNumero - deuxiemeNumero;
            } else if (operator === '*') {
                screen.innerHTML = premierNumero * deuxiemeNumero;
            } else if (operator === '/') {
                screen.innerHTML = premierNumero / deuxiemeNumero;
            }
            premierNumero = null;
            //premierNumero = '';
            operator = null;
            deuxiemeNumero = null;
        }
    } else {
        //screen.innerHTML ='';
        screen.innerHTML += buttonValue;
    }
}
function effacer() {
    document.getElementById('screen').innerHTML = '';
    premierNumero = null;
    operator = null;
    deuxiemeNumero = null;
}
//Trouvez la difference entre les operateur == et ===//
    //Donnez leur cas d'utilisation//


