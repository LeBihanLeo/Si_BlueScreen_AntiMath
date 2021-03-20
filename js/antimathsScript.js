"use strict";

// Main Test
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

//let a = setInterval(addition, 1000);

//notYet
function onLoad() {
    eventListeneButtonHome();
    //eventListenerSquareRoot();
    //eventListenerPow();
    //event of button
    eventListeneButtonItemNotYet();
    eventListenerButtonBasicCalc();
    eventListenerButtonPow();
    eventListenerButtonSquareRoot();
    eventListenerButtonLn();
    eventListenerButtonExp();
    changeMainToHome()

}
window.onload = onLoad;

function init(){
    //<div id="home"><p id="textHome"> <span id="firstWord">Bonjour, nous vous souhaitons la bienvenue dans l'<span class="anti"></span>Anti- <span class="maths"></span>Maths.</span> <br>Cet endroit sera votre porte d'entrée vers un monde de simplicité, où toutes les fonctions sont rassemblées en un seul lieu.<br><br><br>À l'heure actuelle, l'Anti-maths vous propose 5 modes de calculs différents:</p><div id="listMode"><div class="mode"><img class="modeImg" src="../ressources/baseCalc.svg"><p class="descr">Tous les calculs basiques que l'on peut réaliser, addition, soustraction, multiplication et division</p></div><div class="mode"><img class="modeImg" src="../ressources/pow.svg"><p class="descr">Calcul une puissance, le champ supérieur est l'exposant et le champ inférieur est la base, de plus dans chaque champs les calculs basiques sont pris en compte</p></div><div class="mode"><img class="modeImg" src="../ressources/squareRoot.svg"><p class="descr">Calcul une racine carrée, les calculs basiques sont pris en compte</p></div><div class="mode"><img class="modeImg" src="../ressources/ln.svg"><p class="descr">Calcul un logarithme népérien, les calculs basiques sont pris en compte</p></div><div class="mode"><img class="modeImg" src="../ressources/exp.svg"><p class="descr">Calcul l'exponentiel de la valeur indiquée dans le champ texte, ici aussi les calculs basiques sont pris en compte</p></div></div></div>
}

//event listener menu button
function eventListeneButtonItemNotYet(){
    let itemNotYet = document.getElementsByClassName("notYet");
    for(let i = 0 ; i < itemNotYet.length ; i++)
        itemNotYet[i].addEventListener("click", event => {changeMainToNotYet()});
}

//home
function eventListeneButtonHome(){
    console.log("home");
    let home = document.getElementById("homePage");
    home.addEventListener("click", event => {changeMainToHome()});
}

//basic calc
function eventListenerButtonBasicCalc(){
    console.log("calc");
    let basicCalc = document.getElementById("basicCalc");
    basicCalc.addEventListener("click", event => {changeMainToBasicCalc()});
}

//square root
function eventListenerButtonSquareRoot(){
    let squareRoot = document.getElementById("squareRoot");
    squareRoot.addEventListener("click", event => {changeMainToSquareRoot()});
}

//pow
function eventListenerButtonPow(){
    console.log("Pow");
    let pow = document.getElementById("Pow");
    pow.addEventListener("click", event => {changeMainToPow()});
}

//log
function eventListenerButtonLn(){
    console.log("ln");
    let ln = document.getElementById("ln");
    ln.addEventListener("click", event => {changeMainToLn()});
}

//exp
function eventListenerButtonExp(){
    console.log("exp");
    let exp = document.getElementById("exp");
    exp.addEventListener("click", event => {changeMainToExp()});
}
//--------------------------------

//Action of the menu

function changeMainToHome(){
    let menuButton = document.getElementById("homePage");
    removeSelection();
    menuButton.children[0].classList.add('selected');
    let main = document.getElementById("main");
main.innerHTML = "<div id='home'><p id='textHome'> <span id='firstWord'>Bonjour, nous vous souhaitons la bienvenue dans l\'Anti-Maths.</span> <br>Cet endroit sera votre porte d'entrée vers un monde de simplicité, où toutes les fonctions sont rassemblées en un seul lieu.<br><br><br>À l'heure actuelle, l'Anti-maths vous propose 5 modes de calculs différents:</p><div id='listMode'><div class='mode'><img class='modeImg' src='./ressources/baseCalc.svg'><p class='descr'>Tous les calculs basiques que l'on peut réaliser, addition, soustraction, multiplication et division</p></div><div class='mode'><img class='modeImg' src='./ressources/pow.svg'><p class='descr'>Calcul une puissance, le champ supérieur est l'exposant et le champ inférieur est la base, de plus dans chaque champs les calculs basiques sont pris en compte</p></div><div class='mode'><img class='modeImg' src='./ressources/squareRoot.svg'><p class='descr'>Calcul une racine carrée, les calculs basiques sont pris en compte</p></div><div class='mode'><img class='modeImg' src='./ressources/ln.svg'><p class='descr'>Calcul un logarithme népérien, les calculs basiques sont pris en compte</p></div><div class='mode'><img class='modeImg' src='./ressources/exp.svg'><p class='descr'>Calcul l'exponentiel de la valeur indiquée dans le champ texte, ici aussi les calculs basiques sont pris en compte</p></div></div></div>";}

function changeMainToBasicCalc(){
    let menuButton = document.getElementById("basicCalc");
    removeSelection();
    menuButton.children[0].classList.add('selected');
    let main = document.getElementById("main");
    main.innerHTML = "<div id='currentMethode'>Calcul de base</div><div id='calcul'><div id='usefull'><input type='text' id='myInput'></input><input type='button' id='myButton' value='Valider le calcul'></input></div><div id='resBox'><div id='equalSign'> = </div><div id='result'></div></div></div>";
    eventListenerBasicCalc();
}

function changeMainToSquareRoot(){
    let menuButton = document.getElementById("squareRoot");
    removeSelection();
    menuButton.children[0].classList.add('selected');
    let main = document.getElementById("main");
    main.innerHTML = "<div id='currentMethode'>Racine carrée</div><div id='calcul'><div id='usefull'><input type='text' id='myInput'></input><input type='button' id='myButton' value='Valider le calcul'></input></div><div id='resBox'><div id='equalSign'> = </div><div id='result'></div></div></div>";
    eventListenerSquareRoot();
}

function changeMainToPow(){
    let menuButton = document.getElementById("Pow");
    removeSelection();
    menuButton.children[0].classList.add('selected');
    let main = document.getElementById("main");
    main.innerHTML = "<div id='currentMethode'>Puissance</div><div class='pow' id='calcul'><div id='usefull'><input type='text' id='exposant'></input><input class='powzone' type='text' id='myInput'></input><input type='button' id='myButton' value='Valider le calcul'></input></div><div id='resBox'><div id='equalSign'> = </div><div id='result'></div></div></div>";    eventListenerPow();
    eventListenerPow();

}

function changeMainToLn(){
    let menuButton = document.getElementById("ln");
    removeSelection();
    menuButton.children[0].classList.add('selected');
    let main = document.getElementById("main");
    main.innerHTML = "<div id='currentMethode'>logarithme népérien ln()</div><div id='calcul'><div id='usefull'><input type='text' id='myInput'></input><input type='button' id='myButton' value='Valider le calcul'></input></div><div id='resBox'><div id='equalSign'> = </div><div id='result'></div></div></div>";
    eventListenerLn();

}

function changeMainToExp(){
    let menuButton = document.getElementById("exp");
    removeSelection();
    menuButton.children[0].classList.add('selected');
    let main = document.getElementById("main");
    main.innerHTML = "<div id='currentMethode'>Exponentiel e(x)</div><div id='calcul'><div id='usefull'><input type='text' id='myInput'></input><input type='button' id='myButton' value='Valider le calcul'></input></div><div id='resBox'><div id='equalSign'> = </div><div id='result'></div></div></div>";
    eventListenerExp();

}

function changeMainToNotYet(){
    let main = document.getElementById("main");
    main.innerHTML = "<div id='currentMethode'>Not Yet implemented</div>";

}
//--------------------------------

//fonctional listener
function eventListenerBasicCalc(){
document.getElementById("myButton").addEventListener("click", event => {
        let chaine = document.getElementById("myInput").value;
        if(checkValid(chaine)){
            chaine = foisAndDivisionV3(chaine);
            chaine = plusAndMoinsV3(chaine);    
            console.log(chaine);
            document.getElementById("result").innerText = chaine;    
        }
    });
}

function eventListenerSquareRoot(){
    document.getElementById("myButton").addEventListener("click", event => {
        let chaine = document.getElementById("myInput").value;
        if(checkValid(chaine)){
            chaine = racine(chaine);      
            console.log(chaine);
            document.getElementById("result").innerText = chaine;    
        }
    });
}

function eventListenerPow(){
    console.log("Pow inside");
    document.getElementById("myButton").addEventListener("click", event => {
        let chaine1 = document.getElementById("myInput").value;
        let chaine2 = document.getElementById("exposant").value;
        if(checkValid(chaine1) && checkValid(chaine2)){
            let chaine = puissance(chaine1, chaine2);
            console.log(chaine);
            document.getElementById("result").innerText = chaine;    
        }
    });
}

function eventListenerLn(){
    document.getElementById("myButton").addEventListener("click", event => {
        let chaine = document.getElementById("myInput").value;
        if(checkValid(chaine)){
            chaine = ln(chaine);      
            console.log(chaine);
            document.getElementById("result").innerText = chaine;    
        }
    });
}

function eventListenerExp(){
    document.getElementById("myButton").addEventListener("click", event => {
        let chaine = document.getElementById("myInput").value;
        if(checkValid(chaine)){
            chaine = exp(chaine);      
            console.log(chaine);
            document.getElementById("result").innerText = chaine;    
        }
    });
}

//--------------------------------

//calcul function multiplication/division
function foisAndDivisionV3(chaine)
{
    for(let i=0; i<chaine.length; i++)
    {
        if(chaine[i] == '*' || chaine[i] == '/')
        {
            let left=i-1;
            let right=i+1;
            while(left != 0 && chaine[left] != '*' && chaine[left] != '/' && chaine[left] != '+' && chaine[left] != '-')
            {
                if(chaine[left-1] == '-')
                {
                    left--;
                    break;
                }
                else if(chaine[left-1] != '*' && chaine[left-1] != '/' && chaine[left-1] != '+' && chaine[left-1] != '-')
                {
                    left--;
                }
                else break;
            }
            while(right != chaine.length-1 && chaine[right] != '*' && chaine[right] != '/' && chaine[right] != '+')
            {
                if(chaine[right+1] != '*' && chaine[right+1] != '/' && chaine[right+1] != '+' && chaine[right+1] != '-')
                {
                    right++;
                }
                else break;
            }

            let nbLeft = chaine.substring(left,i);
            let nbRight = chaine.substring(i+1, right+1);

            if(chaine[i] == '*')
            {
                let mult = parseFloat(nbLeft) * parseFloat(nbRight);
                //console.log(mult);
                let morc1 = chaine.substring(0, left);
                //console.log(morc1);
                let morc2 = chaine.substring(right+1, chaine.length);
                //console.log(morc2);
                chaine = morc1 + mult.toString() + morc2;
                i=0;
            }
            else if(chaine[i] == '/')
            {
                let mult = parseFloat(nbLeft) / parseFloat(nbRight);
                //console.log(mult);
                let morc1 = chaine.substring(0, left);
                //console.log(morc1);
                let morc2 = chaine.substring(right+1, chaine.length);
                //console.log(morc2);
                chaine = morc1 + mult.toString() + morc2;
                i=0;
            }
        }        
    }
    return chaine;
    //document.getElementById("res").innerText = res;
}

//calcul function addition/substraction
function plusAndMoinsV3(chaine)
{
    for(let i=0; i<chaine.length; i++)
    {
        if(i != 0)
        {
            if(chaine[i] == '+' || chaine[i] == '-')
            {
                let left=0;
                let right=i+1;
                /*
                while(left != 0 && chaine[left] != '+' && chaine[left] != '-')
                {
                    if(chaine[left-1] != '+' && chaine[left-1] != '-')
                    {
                        left--;
                    }
                    else break;
                }*/
                while(right != chaine.length-1)
                {
                    if(chaine[right+1] != '+' && chaine[right+1] != '-')
                    {
                        right++;
                    }
                    else break;
                }

                let nbLeft = chaine.substring(left,i);
                let nbRight = chaine.substring(i+1, right+1);

                if(chaine[i] == '+')
                {
                    let mult = parseFloat(nbLeft) + parseFloat(nbRight);
                    //console.log(mult);
                    let morc1 = chaine.substring(0, left);
                    //console.log(morc1);
                    let morc2 = chaine.substring(right+1, chaine.length);
                    //console.log(morc2);
                    chaine = morc1 + mult.toString() + morc2;
                    i=0;
                }
                else if(chaine[i] == '-')
                {
                    let mult = parseFloat(nbLeft) - parseFloat(nbRight);
                    //console.log(mult);
                    let morc1 = chaine.substring(0, left);
                    //console.log(morc1);
                    let morc2 = chaine.substring(right+1, chaine.length);
                    //console.log(morc2);
                    chaine = morc1 + mult.toString() + morc2;
                    i=0;
                }
            }
        }        
    }
    return chaine;
    //document.getElementById("res").innerText = res;
}

function racine(chaine)
{
    chaine = foisAndDivisionV3(chaine);
    chaine = plusAndMoinsV3(chaine);
    let res = Math.sqrt(parseFloat(chaine));
    chaine = res.toString();
    return chaine;
}

function puissance(chaine1, chaine2)
{
    chaine1 = foisAndDivisionV3(chaine1);
    chaine1 = plusAndMoinsV3(chaine1);

    chaine2 = foisAndDivisionV3(chaine2);
    chaine2 = plusAndMoinsV3(chaine2);

    let res = Math.pow(parseFloat(chaine1), parseFloat(chaine2));
    let chaine = res.toString();
    return chaine;
}

function ln(chaine)
{
    chaine = foisAndDivisionV3(chaine);
    chaine = plusAndMoinsV3(chaine);

    let res = Math.log(parseFloat(chaine));
    chaine = res.toString();
    return chaine;
}

function exp(chaine)
{
    chaine = foisAndDivisionV3(chaine);
    chaine = plusAndMoinsV3(chaine);

    let res = Math.exp(parseFloat(chaine));
    chaine = res.toString();
    return chaine;
}


// this function used by multAndDiv and addAndSub functions check if the
        // input string is correct or not
        // return true if correct
        // return false if not correct
function checkValid(chaine)
{
    let valid = true;
    for(let i=0; i<chaine.length; i++)
    {
        if(chaine[0] == '*' || chaine[0] == '/')
        {
            valid = false;
        }
        if(chaine[chaine.length-1] == '*' || chaine[chaine.length-1] == '/' || chaine[chaine.length-1] == '+' || chaine[chaine.length-1] == '-')
        {
            valid = false;
        }
        if(chaine[i] == '*' || chaine[i] == '/')
        {
            if(chaine[i-1] == '*' || chaine[i-1] == '/' || chaine[i-1] == '+' || chaine[i-1] == '+')
            {
                valid = false;
            }
            if(chaine[i+1] == '*' || chaine[i+1] == '/' || chaine[i+1] == '+')
            {
                valid = false;
            }
        }
        if(chaine[i] == '+')
        {
            if(chaine[i-1] == '+' || chaine[i+1] == '+')
            {
                valid = false;
            }
        }
    }
    return valid;
}
//--------------------------------

function removeSelection(){
    let lastselected = document.getElementsByClassName('selected');
    for(let i =0 ; i < lastselected.length ; i++)
        lastselected[i].classList.remove('selected');
}
