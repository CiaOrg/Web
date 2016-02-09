function acenderLampBanheiro() {
    var lampada = document.getElementById('lampBanheiro');
    if (lampada.src.match("../img/ledligada.png")) {
        lampada.src = "../img/leddesligada.png";
        document.getElementById('lmpBanheiro').innerHTML = "Desligada";
        document.getElementById('lmpBanheiro').style.background = "#d9534f";
        document.getElementById('lmpBanheiro').style.border = "1px solid #d43f3a";
    } else {
        lampada.src = "../img/ledligada.png";
        document.getElementById('lmpBanheiro').innerHTML = "Ligada";
        document.getElementById('lmpBanheiro').style.background = "#5cb85c";
        document.getElementById('lmpBanheiro').style.border = "1px solid #4cae4c";
}
}
function acenderLampCozinha() {
    var lampada = document.getElementById('lampCozinha');
    if (lampada.src.match("../img/ledligada.png")) {
        lampada.src = "../img/leddesligada.png";
        document.getElementById('lmpCozinha').innerHTML = "Desligada";
        document.getElementById('lmpCozinha').style.background = "#d9534f";
        document.getElementById('lmpCozinha').style.border = "1px solid #d43f3a";
    } else {
        lampada.src = "../img/ledligada.png";
        document.getElementById('lmpCozinha').innerHTML = "Ligada";
        document.getElementById('lmpCozinha').style.background = "#5cb85c";
        document.getElementById('lmpCozinha').style.border = "1px solid #4cae4c";
}
}
function acenderLampQuarto() {
    var lampada = document.getElementById('lampQuarto');
    if (lampada.src.match("../img/ledligada.png")) {
        lampada.src = "../img/leddesligada.png";
         document.getElementById('lmpQuarto').innerHTML = "Desligada";
         document.getElementById('lmpQuarto').style.background = "#d9534f";
         document.getElementById('lmpQuarto').style.border = "1px solid #d43f3a";
    } else {
        lampada.src = "../img/ledligada.png";
         document.getElementById('lmpQuarto').innerHTML = "Ligada";
         document.getElementById('lmpQuarto').style.background = "#5cb85c";
         document.getElementById('lmpQuarto').style.border = "1px solid #4cae4c";
    }
}
function acenderLampSala1() {
    var lampada = document.getElementById('lamp1Sala');
    if (lampada.src.match("../img/ledligada.png")) {
        lampada.src = "../img/leddesligada.png";
         document.getElementById('lmp1sala').innerHTML = "Desligada";
         document.getElementById('lmp1sala').style.background = "#d9534f";
         document.getElementById('lmp1sala').style.border = "1px solid #d43f3a";
    } else {
        lampada.src = "../img/ledligada.png";
         document.getElementById('lmp1sala').innerHTML = "Ligada";
         document.getElementById('lmp1sala').style.background = "#5cb85c";
         document.getElementById('lmp1sala').style.border = "1px solid #4cae4c";
    }
}
function acenderLampSala2() {
    var lampada = document.getElementById('lamp2Sala');
    if (lampada.src.match("../img/ledligada.png")) {
        lampada.src = "../img/leddesligada.png";
         document.getElementById('lmp2sala').innerHTML = "Desligada";
         document.getElementById('lmp2sala').style.background = "#d9534f";
         document.getElementById('lmp2sala').style.border = "1px solid #d43f3a";
    } else {
        lampada.src = "../img/ledligada.png";
         document.getElementById('lmp2sala').innerHTML = "Ligada";
         document.getElementById('lmp2sala').style.background = "#5cb85c";
         document.getElementById('lmp2sala').style.border = "1px solid #4cae4c";
    }
}
function acenderTodas() {
    var lampada = document.getElementById('lampTodas');
    if (lampada.src.match("../img/ledligada.png")) {
        lampada.src = "../img/leddesligada.png";
         document.getElementById('lmpTodas').innerHTML = "Desligadas";
         document.getElementById('lmpTodas').style.background = "#d9534f";
         document.getElementById('lmpTodas').style.border = "1px solid #d43f3a";

         document.getElementById('lamp1Sala').src = "../img/leddesligada.png";
		 document.getElementById('lmp1sala').innerHTML = "Desligada";
         document.getElementById('lmp1sala').style.background = "#d9534f";
         document.getElementById('lmp1sala').style.border = "1px solid #d43f3a";

         document.getElementById('lamp2Sala').src = "../img/leddesligada.png";
         document.getElementById('lmp2sala').innerHTML = "Desligada";
         document.getElementById('lmp2sala').style.background = "#d9534f";
         document.getElementById('lmp2sala').style.border = "1px solid #d43f3a";

         document.getElementById('lampQuarto').src = "../img/leddesligada.png";
         document.getElementById('lmpQuarto').innerHTML = "Desligada";
         document.getElementById('lmpQuarto').style.background = "#d9534f";
         document.getElementById('lmpQuarto').style.border = "1px solid #d43f3a";

        document.getElementById('lampCozinha').src = "../img/leddesligada.png";
        document.getElementById('lmpCozinha').innerHTML = "Desligada";
        document.getElementById('lmpCozinha').style.background = "#d9534f";
        document.getElementById('lmpCozinha').style.border = "1px solid #d43f3a";

        document.getElementById('lampBanheiro').src = "../img/leddesligada.png";
        document.getElementById('lmpBanheiro').innerHTML = "Desligada";
        document.getElementById('lmpBanheiro').style.background = "#d9534f";
        document.getElementById('lmpBanheiro').style.border = "1px solid #d43f3a";
    } else {
        lampada.src = "../img/ledligada.png";
         document.getElementById('lmpTodas').innerHTML = "Ligadas";
         document.getElementById('lmpTodas').style.background = "#5cb85c";
         document.getElementById('lmpTodas').style.border = "1px solid #4cae4c";
         
         document.getElementById('lamp1Sala').src = "../img/ledligada.png";
         document.getElementById('lmp1sala').innerHTML = "Ligada";
         document.getElementById('lmp1sala').style.background = "#5cb85c";
         document.getElementById('lmp1sala').style.border = "1px solid #4cae4c";

         document.getElementById('lamp2Sala').src = "../img/ledligada.png";
         document.getElementById('lmp2sala').innerHTML = "Ligada";
         document.getElementById('lmp2sala').style.background = "#5cb85c";
         document.getElementById('lmp2sala').style.border = "1px solid #4cae4c";

         document.getElementById('lampQuarto').src = "../img/ledligada.png";
         document.getElementById('lmpQuarto').innerHTML = "Ligada";
         document.getElementById('lmpQuarto').style.background = "#5cb85c";
         document.getElementById('lmpQuarto').style.border = "1px solid #4cae4c";

         document.getElementById('lampCozinha').src = "../img/ledligada.png";
	     document.getElementById('lmpCozinha').innerHTML = "Ligada";
	     document.getElementById('lmpCozinha').style.background = "#5cb85c";
	     document.getElementById('lmpCozinha').style.border = "1px solid #4cae4c";

	    document.getElementById('lampBanheiro').src = "../img/ledligada.png";
	    document.getElementById('lmpBanheiro').innerHTML = "Ligada";
        document.getElementById('lmpBanheiro').style.background = "#5cb85c";
        document.getElementById('lmpBanheiro').style.border = "1px solid #4cae4c";
    }
}
