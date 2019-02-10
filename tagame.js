//Denna funktionen spelare för att kunna skriva ut texterna genom html filen.
function print(txt) {
    document.getElementById("display").innerHTML = txt;
}
//Denna funktionen hämta värderna från inputfälten genom html filen.
function getInput() {
    return document.getElementById("text").value;
}
//Denna funktionen åkallat en annat funktionen om spelare klicka på Submit knappen.
function submit(fun) {
    document.getElementById("submit").addEventListener("click", fun);
}

var playerName; //Denna varibel lagrat spelaren namn.

//Denna funktionen är början av spelet och ber spelaren att skriva in namn.
function gameStart() {
    print("You are the young apprentice of alchemist Ravoul. One <br> day your master Ravoul are on his trip to nearby city. <br> The first task is to make your own potion by your self! <br> By the way, what is your name?");

    submit(nameCheck);//Efter spelaa klicka på knappen går man till nameCheck().

}
//Denna funktion kolla om spelare har skrivit nån namn.
function nameCheck() {
    playerName = getInput(); //Hämta namnen från inputfälten.
    
    //Om inputfälten är tomt kommer den ber spelaren försöka igen.
    if (playerName === "") {
        print("You can't be nameless! Try to give us proper name.");
    
        submit(nameCheck);

    }
    //Denna delen säger spela namn från varibel playerName. Spela ska säga Yes eller No, och sen gå över till takeChallenge()..
    else {          
        print("Yes your name is " + playerName + "! Your first <br> task is to brew Potion of Climbing. <br> Are you ready to face your challenge? <br> Yes or No?");
        
        submit(takeChallenge);
     
        
    }
}

//Denna funktionen kolla om spela vill ta utmaning.
function takeChallenge() {
    var challenge = getInput().toLowerCase(); //Hämta värden från inputfälten och omvandla alla höga bokstäver till små.
    
    //Om spelaren ta utmaning kommer den hoppa till spiderLegs().
    if (challenge === "yes") {
            print("That is the spirit! Your first step is to add 4 left <br> spider legs and also 4 right  spider legs. Hmmm...<br> How many spider legs do you need...? <br> Please type the number of spider legs.");
    
            submit(spiderLegs);
    }
    
    //Om spelaren svara No eller annat kommer den ber spelaren göra om tills hen skriver Yes.
    else if (challenge === "no") {
            print("No? Come on! You can do it! <br> Yes or No?");
            submit(takeChallenge);
    }
    else {
        print("What? Please try again. <br> Yes or No?");
            submit(takeChallenge);
    }
    
}

//Denna funktioner kolla om spelaren gissade rätt.
function spiderLegs() {
    var legs = getInput();//Hämta värden från inputfälten.
    var spiderString = "Let us count through the legs... <br>";//Här kommer man lagra andra strängar som läggs till från for loopar.
    
    //Kolla om värden håller riktiga siffror annars får spelaren göra om.
    if (isNaN(legs) || legs === "") {
        print("That is not an proper number. Please <br> try again with number of spider legs. It <br> was 4 left spider legs and 4 right spider legs.");
        submit(spiderLegs);
    }
    else {
        //Denna for loopen kommer räkna upp antal spider ben. Ojämnt tal bli det vänster ben medan jämt tal bli höger ben.
        for (var i = 1; i <= legs; i++) {
            
            if (i % 2 === 0) {
                spiderString += "" + i + " spider leg taking from right side... <br>";
                }
            else {
                spiderString += "" + i + " spider leg taking from left side... <br>";
                }
        }
    
    //Om spelaren gissade rätt med 8 ben kommer spelaren hoppa till slimeGoo() där hen får gissa en färg. 
    if (legs == 8) {
        print(spiderString + "Yes that is right amount of legs! <br> Next step you will need to add... <br> Slime goo with color of grass? <br> It must be either Green, Brown or Red...");
        submit(slimeGoo);

    }
    //Spelaren får göra om antalen med spider benen.
    else {
        print(spiderString + "That is not right amount of legs... <br> It was 4 left spider legs and 4 right spider legs.");
        submit(spiderLegs);
    }
  }
}
//Denna funktion kolla om man gissade rätt på färgen.
function slimeGoo () {
    var color = getInput().toLowerCase(); //Hämta värden från inputfälten och omvandla alla höga bokstäver till små.
    
    //Om gissade Green får spelaren komma till sista stegen där hen får gissa igen.
    if (color === "green") {
        print("Yes it was the green slime goo! <br> Finally the next step is to add.... <br> Either Batwing, Gecko or Frog? <br> What is the right one...?");
        submit(finalStep);
    }
    //Om gissa fel får spelaren göra om igen.
    else {
        print("It seems that adding " + color + " slime goo <br> is not the right... The color of <br> slime goo suppose be color of grass...");
    }
}
//Den slutligen delen av funktionen om spelaren vinner eller förlora. 
function finalStep() {
    var finalPart = getInput().toLowerCase(); //Hämta värden från inputfälten och omvandla alla höga bokstäver till små.
    //Om spelaren gissade Gecko vinner spelaren.
    if (finalPart === "gecko") {
        print("Yes! With added of gecko in your potion brew, <br> you finally made Potion of Climbing! <br> Congratulation You WIN!!! <br>");

    }
    //Om spelaren gissade fel förlorade spelaren. Får chansen att spela om igen.
    else {
        print("You added the " + finalPart + " in your potion brew... <br> THEN IT EXPLODED!!! <br> Sadly you failed your test... <br> Game Over...!");
    }
}


gameStart(); //Spelen starta funktionen gameStart().

