var slidesPassos = document.querySelector('.slidesWrapper');

var slidePasso1 = slidesPassos.children.item(0);
var slidePasso2 = slidesPassos.children.item(1);
var slidePasso3 = slidesPassos.children.item(2);
var slidePasso4 = slidesPassos.children.item(3);
var slidePasso5 = slidesPassos.children.item(4);
var slideArrowRight = document.getElementById('slidesArrowRight');
var slideArrowLeft = document.getElementById('slidesArrowLeft');



var SlideRefer1 = document.getElementById('SlideRefOne');
var SlideRefer2 = document.getElementById('SlideRefTwo');
var SlideRefer3 = document.getElementById('SlideRefTree');
var SlideRefer4 = document.getElementById('SlideRefFour');
var SlideRefer5 = document.getElementById('SlideRefFive');
var SlideRefer6 = document.getElementById('SlideRefSix');


// CalendarDay_container CalendarDay_container_1 CalendarDay__selected CalendarDay__selected_2

// toogle botões passo1
    var x = document.getElementById("svg-check21");
    var y = document.getElementById("svg-check22");
    var xbg = document.getElementById("but-imed");
    var ybg = document.getElementById("but-agendar");
    var datePicker = document.querySelector('.datePicker');
    var textAgendarOne = document.querySelector('#textAgendar');
    var textAgendarTwo = document.querySelector('#agendadoText');
    var dateChoose = document.querySelector('#dataAgendada');


function imediatamente() {
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        xbg.style.backgroundColor = "#1f8a70";
        ybg.style.backgroundColor = "#004358";
        textAgendarOne.style.display = "block";
        textAgendarTwo.style.display = 'none';
        dateChoose.style.display = 'none';
    } else {
        x.style.display = "block";
        y.style.display = "none";
        xbg.style.backgroundColor = "#1f8a70";
        ybg.style.backgroundColor = "#004358";
    }
}

function agendar() {
    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
        ybg.style.backgroundColor = "#1f8a70";
        xbg.style.backgroundColor = "#004358";
        datePicker.style.display = "none";
        textAgendarOne.style.display = "block";
    } else {
        y.style.display = "block";
        x.style.display = "none";
        ybg.style.backgroundColor = "#1f8a70";
        xbg.style.backgroundColor = "#004358";
        datePicker.style.display = "flex";
        textAgendarOne.style.display = "none";
        textAgendarTwo.style.display = 'block';
        dateChoose.style.display = 'block';
    }
}

// toogle botões passo1




// toogle botões passo3
    var aixSvg = document.getElementById("svg-check31");
    var aiySvg = document.getElementById("svg-check32");
    var aizSvg = document.getElementById("svg-check33");
    var aixBg = document.getElementById("but-ai-1");
    var aiyBg = document.getElementById("but-ai-2");
    var aizBg = document.getElementById("but-ai-3");


function aiY() {
    if (aiySvg.style.display === "none") {
        aiySvg.style.display = "block";
        aixSvg.style.display = "none";
        aizSvg.style.display = "none";
        aiyBg.style.backgroundColor = "#1f8a70";
        aixBg.style.backgroundColor = "#004358";
        aizBg.style.backgroundColor = "#004358";
    } else {
        aiySvg.style.display = "block";
        aixSvg.style.display = "none";
        aizSvg.style.display = "none";
        aiyBg.style.backgroundColor = "#1f8a70";
        aixBg.style.backgroundColor = "#004358";
        aizBg.style.backgroundColor = "#004358";
    }
}

function aiX() {
    if (aixSvg.style.display === "none") {
        aixSvg.style.display = "block";
        aiySvg.style.display = "none";
        aizSvg.style.display = "none";
        aiyBg.style.backgroundColor = "#004358";
        aixBg.style.backgroundColor = "#1f8a70";
        aizBg.style.backgroundColor = "#004358";
    } else {
        aixSvg.style.display = "block";
        aiySvg.style.display = "none";
        aizSvg.style.display = "none";
        aiyBg.style.backgroundColor = "#004358";
        aixBg.style.backgroundColor = "#1f8a70";
        aizBg.style.backgroundColor = "#004358";
    }
}

function aiZ() {
    if (aizSvg.style.display === "none") {
        aizSvg.style.display = "block";
        aiySvg.style.display = "none";
        aixSvg.style.display = "none";
        aiyBg.style.backgroundColor = "#004358";
        aixBg.style.backgroundColor = "#004358";
        aizBg.style.backgroundColor = "#1f8a70";
    } else {
        aizSvg.style.display = "block";
        aiySvg.style.display = "none";
        aixSvg.style.display = "none";
        aiyBg.style.backgroundColor = "#004358";
        aixBg.style.backgroundColor = "#004358";
        aizBg.style.backgroundColor = "#1f8a70";
    }
}
// toogle botões passo3


// botões trilho passos
	var passo1 = document.getElementById('passo1');
	var passo2 = document.getElementById('passo2');
	var passo3 = document.getElementById('passo3');
	var passo4 = document.getElementById('passo4');
	var passo5 = document.getElementById('passo5');

	var passo1Checkpoint = true;
	var passo2Checkpoint = false;
	var passo3Checkpoint = false;
	var passo4Checkpoint = false;
	var passo5Checkpoint = false;
	var passo6Checkpoint = false;


	var passo1stepItens = passo1.children.item(0);
	var passo1Border = passo1stepItens.children.item(0);
	var passo1Number = passo1stepItens.children.item(1);
	var passo1LineAfter = passo1stepItens.children.item(3);

	var passo2stepItens = passo2.children.item(0);
	var passo2LineBefore = passo2stepItens.children.item(0);
	var passo2Border = passo2stepItens.children.item(1);
	var passo2Number = passo2stepItens.children.item(2);
	var passo2LineAfter = passo2stepItens.children.item(4);

	var passo3stepItens = passo3.children.item(0);
	var passo3LineBefore = passo3stepItens.children.item(0);
	var passo3Border = passo3stepItens.children.item(1);
	var passo3Number = passo3stepItens.children.item(2);
	var passo3LineAfter = passo3stepItens.children.item(4);

	var passo4stepItens = passo4.children.item(0);
	var passo4LineBefore = passo4stepItens.children.item(0);
	var passo4Border = passo4stepItens.children.item(1);
	var passo4Number = passo4stepItens.children.item(2);
	var passo4LineAfter = passo4stepItens.children.item(4);

	var passo5stepItens = passo5.children.item(0);
	var passo5LineBefore = passo5stepItens.children.item(0);
	var passo5Border = passo5stepItens.children.item(1);
	var passo5Number = passo5stepItens.children.item(2);


	passo1.onclick = function() {
		passo1stepItens.classList.remove('step-before');
		passo1stepItens.classList.remove('step-after-pass');
		passo1stepItens.classList.remove('step-select');
		passo1stepItens.classList.add('step-select');

		passo2stepItens.classList.remove('step-before');
		passo2stepItens.classList.remove('step-select');
		passo2stepItens.classList.remove('step-after-pass');
		passo2stepItens.classList.add('step-after-pass');

		passo3stepItens.classList.remove('step-before');
		passo3stepItens.classList.remove('step-select');
		passo3stepItens.classList.remove('step-after-pass');
		passo3stepItens.classList.add('step-after-pass');

		passo4stepItens.classList.remove('step-before');
		passo4stepItens.classList.remove('step-select');
		passo4stepItens.classList.remove('step-after-pass');
		passo4stepItens.classList.add('step-after-pass');

		passo5stepItens.classList.remove('step-before');
		passo5stepItens.classList.remove('step-select');
		passo5stepItens.classList.remove('step-after-pass');
		passo5stepItens.classList.add('step-after-pass');


		slidePasso1.scrollIntoView(false);
		// SlideRefer1.scrollIntoView(false);

		passo1Checkpoint = true;
		passo2Checkpoint = false;
		passo3Checkpoint = false;
		passo4Checkpoint = false;
		passo5Checkpoint = false;
		passo6Checkpoint = false;
	}


	passo2.onclick = function() {
		passo1stepItens.classList.remove('step-before');
		passo1stepItens.classList.remove('step-after-pass');
		passo1stepItens.classList.remove('step-select');
		passo1stepItens.classList.add('step-before');

		passo2stepItens.classList.remove('step-before');
		passo2stepItens.classList.remove('step-select');
		passo2stepItens.classList.remove('step-after-pass');
		passo2stepItens.classList.add('step-select');

		passo3stepItens.classList.remove('step-before');
		passo3stepItens.classList.remove('step-select');
		passo3stepItens.classList.remove('step-after-pass');
		passo3stepItens.classList.add('step-after-pass');

		passo4stepItens.classList.remove('step-before');
		passo4stepItens.classList.remove('step-select');
		passo4stepItens.classList.remove('step-after-pass');
		passo4stepItens.classList.add('step-after-pass');

		passo5stepItens.classList.remove('step-before');
		passo5stepItens.classList.remove('step-select');
		passo5stepItens.classList.remove('step-after-pass');
		passo5stepItens.classList.add('step-after-pass');

		slidePasso2.scrollIntoView(false);
		// SlideRefer2.scrollIntoView(false);

		passo1Checkpoint = false;
		passo2Checkpoint = true;
		passo3Checkpoint = false;
		passo4Checkpoint = false;
		passo5Checkpoint = false;
		passo6Checkpoint = false;

	}


	passo3.onclick = function() {
		passo1stepItens.classList.remove('step-before');
		passo1stepItens.classList.remove('step-after-pass');
		passo1stepItens.classList.remove('step-select');
		passo1stepItens.classList.add('step-before');

		passo2stepItens.classList.remove('step-before');
		passo2stepItens.classList.remove('step-select');
		passo2stepItens.classList.remove('step-after-pass');
		passo2stepItens.classList.add('step-before');

		passo3stepItens.classList.remove('step-before');
		passo3stepItens.classList.remove('step-select');
		passo3stepItens.classList.remove('step-after-pass');
		passo3stepItens.classList.add('step-select');

		passo4stepItens.classList.remove('step-before');
		passo4stepItens.classList.remove('step-select');
		passo4stepItens.classList.remove('step-after-pass');
		passo4stepItens.classList.add('step-after-pass');

		passo5stepItens.classList.remove('step-before');
		passo5stepItens.classList.remove('step-select');
		passo5stepItens.classList.remove('step-after-pass');
		passo5stepItens.classList.add('step-after-pass');


		slidePasso3.scrollIntoView(false);
		// SlideRefer3.scrollIntoView(false);

		passo1Checkpoint = false;
		passo2Checkpoint = false;
		passo3Checkpoint = true;
		passo4Checkpoint = false;
		passo5Checkpoint = false;
		passo6Checkpoint = false;

	}

	passo4.onclick = function() {
		passo1stepItens.classList.remove('step-before');
		passo1stepItens.classList.remove('step-after-pass');
		passo1stepItens.classList.remove('step-select');
		passo1stepItens.classList.add('step-before');

		passo2stepItens.classList.remove('step-before');
		passo2stepItens.classList.remove('step-select');
		passo2stepItens.classList.remove('step-after-pass');
		passo2stepItens.classList.add('step-before');

		passo3stepItens.classList.remove('step-before');
		passo3stepItens.classList.remove('step-select');
		passo3stepItens.classList.remove('step-after-pass');
		passo3stepItens.classList.add('step-before');

		passo4stepItens.classList.remove('step-before');
		passo4stepItens.classList.remove('step-select');
		passo4stepItens.classList.remove('step-after-pass');
		passo4stepItens.classList.add('step-select');

		passo5stepItens.classList.remove('step-before');
		passo5stepItens.classList.remove('step-select');
		passo5stepItens.classList.remove('step-after-pass');
		passo5stepItens.classList.add('step-after-pass');

		slidePasso4.scrollIntoView(false);
		// SlideRefer4.scrollIntoView(false);

		passo1Checkpoint = false;
		passo2Checkpoint = false;
		passo3Checkpoint = false;
		passo4Checkpoint = true;
		passo5Checkpoint = false;
		passo6Checkpoint = false;

	}


	passo5.onclick = function() {
		passo1stepItens.classList.remove('step-before');
		passo1stepItens.classList.remove('step-after-pass');
		passo1stepItens.classList.remove('step-select');
		passo1stepItens.classList.add('step-before');

		passo2stepItens.classList.remove('step-before');
		passo2stepItens.classList.remove('step-select');
		passo2stepItens.classList.remove('step-after-pass');
		passo2stepItens.classList.add('step-before');

		passo3stepItens.classList.remove('step-before');
		passo3stepItens.classList.remove('step-select');
		passo3stepItens.classList.remove('step-after-pass');
		passo3stepItens.classList.add('step-before');

		passo4stepItens.classList.remove('step-before');
		passo4stepItens.classList.remove('step-select');
		passo4stepItens.classList.remove('step-after-pass');
		passo4stepItens.classList.add('step-before');

		passo5stepItens.classList.remove('step-before');
		passo5stepItens.classList.remove('step-select');
		passo5stepItens.classList.remove('step-after-pass');
		passo5stepItens.classList.add('step-select');

		slidePasso5.scrollIntoView(false);
		// SlideRefer5.scrollIntoView(false);

		passo1Checkpoint = false;
		passo2Checkpoint = false;
		passo3Checkpoint = false;
		passo4Checkpoint = false;
		passo5Checkpoint = true;
		passo6Checkpoint = false;
	}
// final botões trilho passos


// botão passos continuar
	var passo1BtnContinue = document.querySelector('.slide1ContinueBtn');
	var passo2BtnContinue = document.querySelector('.slide2ContinueBtn');
	var passo3BtnContinue = document.querySelector('.slide3ContinueBtn');
	var passo4BtnContinue = document.querySelector('.slide4ContinueBtn');


		passo1BtnContinue.onclick = function() {
		passo1stepItens.classList.remove('step-before');
		passo1stepItens.classList.remove('step-after-pass');
		passo1stepItens.classList.remove('step-select');
		passo1stepItens.classList.add('step-select');

		passo2stepItens.classList.remove('step-before');
		passo2stepItens.classList.remove('step-select');
		passo2stepItens.classList.remove('step-after-pass');
		passo2stepItens.classList.add('step-after-pass');

		passo3stepItens.classList.remove('step-before');
		passo3stepItens.classList.remove('step-select');
		passo3stepItens.classList.remove('step-after-pass');
		passo3stepItens.classList.add('step-after-pass');

		passo4stepItens.classList.remove('step-before');
		passo4stepItens.classList.remove('step-select');
		passo4stepItens.classList.remove('step-after-pass');
		passo4stepItens.classList.add('step-after-pass');

		passo5stepItens.classList.remove('step-before');
		passo5stepItens.classList.remove('step-select');
		passo5stepItens.classList.remove('step-after-pass');
		passo5stepItens.classList.add('step-after-pass');


		slidePasso1.scrollIntoView(false);
		// SlideRefer1.scrollIntoView(false);

		passo1Checkpoint = true;
		passo2Checkpoint = false;
		passo3Checkpoint = false;
		passo4Checkpoint = false;
		passo5Checkpoint = false;
		passo6Checkpoint = false;
	}


	passo2BtnContinue.onclick = function() {
		passo1stepItens.classList.remove('step-before');
		passo1stepItens.classList.remove('step-after-pass');
		passo1stepItens.classList.remove('step-select');
		passo1stepItens.classList.add('step-before');

		passo2stepItens.classList.remove('step-before');
		passo2stepItens.classList.remove('step-select');
		passo2stepItens.classList.remove('step-after-pass');
		passo2stepItens.classList.add('step-select');

		passo3stepItens.classList.remove('step-before');
		passo3stepItens.classList.remove('step-select');
		passo3stepItens.classList.remove('step-after-pass');
		passo3stepItens.classList.add('step-after-pass');

		passo4stepItens.classList.remove('step-before');
		passo4stepItens.classList.remove('step-select');
		passo4stepItens.classList.remove('step-after-pass');
		passo4stepItens.classList.add('step-after-pass');

		passo5stepItens.classList.remove('step-before');
		passo5stepItens.classList.remove('step-select');
		passo5stepItens.classList.remove('step-after-pass');
		passo5stepItens.classList.add('step-after-pass');

		slidePasso2.scrollIntoView(false);
		// SlideRefer2.scrollIntoView(false);

		passo1Checkpoint = false;
		passo2Checkpoint = true;
		passo3Checkpoint = false;
		passo4Checkpoint = false;
		passo5Checkpoint = false;
		passo6Checkpoint = false;

	}


	passo3BtnContinue.onclick = function() {
		passo1stepItens.classList.remove('step-before');
		passo1stepItens.classList.remove('step-after-pass');
		passo1stepItens.classList.remove('step-select');
		passo1stepItens.classList.add('step-before');

		passo2stepItens.classList.remove('step-before');
		passo2stepItens.classList.remove('step-select');
		passo2stepItens.classList.remove('step-after-pass');
		passo2stepItens.classList.add('step-before');

		passo3stepItens.classList.remove('step-before');
		passo3stepItens.classList.remove('step-select');
		passo3stepItens.classList.remove('step-after-pass');
		passo3stepItens.classList.add('step-select');

		passo4stepItens.classList.remove('step-before');
		passo4stepItens.classList.remove('step-select');
		passo4stepItens.classList.remove('step-after-pass');
		passo4stepItens.classList.add('step-after-pass');

		passo5stepItens.classList.remove('step-before');
		passo5stepItens.classList.remove('step-select');
		passo5stepItens.classList.remove('step-after-pass');
		passo5stepItens.classList.add('step-after-pass');


		slidePasso3.scrollIntoView(false);
		// SlideRefer3.scrollIntoView(false);

		passo1Checkpoint = false;
		passo2Checkpoint = false;
		passo3Checkpoint = true;
		passo4Checkpoint = false;
		passo5Checkpoint = false;
		passo6Checkpoint = false;

	}

	passo4BtnContinue.onclick = function() {
		passo1stepItens.classList.remove('step-before');
		passo1stepItens.classList.remove('step-after-pass');
		passo1stepItens.classList.remove('step-select');
		passo1stepItens.classList.add('step-before');

		passo2stepItens.classList.remove('step-before');
		passo2stepItens.classList.remove('step-select');
		passo2stepItens.classList.remove('step-after-pass');
		passo2stepItens.classList.add('step-before');

		passo3stepItens.classList.remove('step-before');
		passo3stepItens.classList.remove('step-select');
		passo3stepItens.classList.remove('step-after-pass');
		passo3stepItens.classList.add('step-before');

		passo4stepItens.classList.remove('step-before');
		passo4stepItens.classList.remove('step-select');
		passo4stepItens.classList.remove('step-after-pass');
		passo4stepItens.classList.add('step-select');

		passo5stepItens.classList.remove('step-before');
		passo5stepItens.classList.remove('step-select');
		passo5stepItens.classList.remove('step-after-pass');
		passo5stepItens.classList.add('step-after-pass');

		slidePasso4.scrollIntoView(false);
		// SlideRefer4.scrollIntoView(false);

		passo1Checkpoint = false;
		passo2Checkpoint = false;
		passo3Checkpoint = false;
		passo4Checkpoint = true;
		passo5Checkpoint = false;
		passo6Checkpoint = false;

	}

// final botão passos continuar

/*
slideArrowRight.onclick = function() {
	if (passo1Checkpoint == true) {
		slidePasso2.scrollIntoView(false);
		passo1Checkpoint = false;
		passo2Checkpoint = true;
		passo3Checkpoint = false;
		passo4Checkpoint = false;
		passo5Checkpoint = false;
		passo6Checkpoint = false;
		console.log('passo1: '+passo1Checkpoint);
		console.log('passo2: '+passo2Checkpoint);
		console.log('passo3: '+passo3Checkpoint);
		console.log('passo4: '+passo4Checkpoint);
		console.log('passo5: '+passo5Checkpoint);
	} else if (passo2Checkpoint == true) {
		slidePasso3.scrollIntoView(false);
		passo1Checkpoint = false;
		passo2Checkpoint = false;
		passo3Checkpoint = true;
		passo4Checkpoint = false;
		passo5Checkpoint = false;
		passo6Checkpoint = false;
		console.log('passo1: '+passo1Checkpoint);
		console.log('passo2: '+passo2Checkpoint);
		console.log('passo3: '+passo3Checkpoint);
		console.log('passo4: '+passo4Checkpoint);
		console.log('passo5: '+passo5Checkpoint);
	} else if (passo3Checkpoint == true) {
		slidePasso4.scrollIntoView(false);
		passo1Checkpoint = false;
		passo2Checkpoint = false;
		passo3Checkpoint = false;
		passo4Checkpoint = true;
		passo5Checkpoint = false;
		passo6Checkpoint = false;
		console.log('passo1: '+passo1Checkpoint);
		console.log('passo2: '+passo2Checkpoint);
		console.log('passo3: '+passo3Checkpoint);
		console.log('passo4: '+passo4Checkpoint);
		console.log('passo5: '+passo5Checkpoint);
	} else if (passo4Checkpoint == true) {
		slidePasso5.scrollIntoView(false);
		passo1Checkpoint = false;
		passo2Checkpoint = false;
		passo3Checkpoint = false;
		passo4Checkpoint = false;
		passo5Checkpoint = true;
		passo6Checkpoint = false;
		console.log('passo1: '+passo1Checkpoint);
		console.log('passo2: '+passo2Checkpoint);
		console.log('passo3: '+passo3Checkpoint);
		console.log('passo4: '+passo4Checkpoint);
		console.log('passo5: '+passo5Checkpoint);
	}
}



slideArrowLeft.onclick = function() {
	if (passo2Checkpoint == true) {
		slidePasso1.scrollIntoView(false);
		passo1Checkpoint = false;
		passo2Checkpoint = true;
		passo3Checkpoint = false;
		passo4Checkpoint = false;
		passo5Checkpoint = false;
		passo6Checkpoint = false;
		console.log('passo1: '+passo1Checkpoint);
		console.log('passo2: '+passo2Checkpoint);
		console.log('passo3: '+passo3Checkpoint);
		console.log('passo4: '+passo4Checkpoint);
		console.log('passo5: '+passo5Checkpoint);
	} else if (passo3Checkpoint == true) {
		slidePasso2.scrollIntoView(false);
		passo1Checkpoint = false;
		passo2Checkpoint = true;
		passo3Checkpoint = false;
		passo4Checkpoint = false;
		passo5Checkpoint = false;
		passo6Checkpoint = false;
		console.log('passo1: '+passo1Checkpoint);
		console.log('passo2: '+passo2Checkpoint);
		console.log('passo3: '+passo3Checkpoint);
		console.log('passo4: '+passo4Checkpoint);
		console.log('passo5: '+passo5Checkpoint);
	} else if (passo4Checkpoint == true) {
		slidePasso3.scrollIntoView(false);
		passo1Checkpoint = false;
		passo2Checkpoint = false;
		passo3Checkpoint = true;
		passo4Checkpoint = false;
		passo5Checkpoint = false;
		passo6Checkpoint = false;
		console.log('passo1: '+passo1Checkpoint);
		console.log('passo2: '+passo2Checkpoint);
		console.log('passo3: '+passo3Checkpoint);
		console.log('passo4: '+passo4Checkpoint);
		console.log('passo5: '+passo5Checkpoint);
	} else if (passo5Checkpoint == true) {
		slidePasso4.scrollIntoView(false);
		passo1Checkpoint = false;
		passo2Checkpoint = false;
		passo3Checkpoint = false;
		passo4Checkpoint = true;
		passo5Checkpoint = false;
		passo6Checkpoint = false;
		console.log('passo1: '+passo1Checkpoint);
		console.log('passo2: '+passo2Checkpoint);
		console.log('passo3: '+passo3Checkpoint);
		console.log('passo4: '+passo4Checkpoint);
		console.log('passo5: '+passo5Checkpoint);
	}
}
*/


var slide4Check4hrs = document.getElementById('Btn4hrs');
var slide4Check6hrs = document.getElementById('Btn6hrs');
var slide4Check8hrs = document.getElementById('Btn8hrs');
var slide4Check12hrs = document.getElementById('Btn12hrs');
var slide4Check18hrs = document.getElementById('Btn18hrs');
var slide4Check24hrs = document.getElementById('Btn24hrs');
var slide4Check48hrs = document.getElementById('Btn48hrs');
var slide4Btn1 = document.querySelector('.check1');
var slide4Btn2 = document.querySelector('.check2');
var slide4Btn3 = document.querySelector('.check3');
var slide4Btn4 = document.querySelector('.check4');
var slide4Btn5 = document.querySelector('.check5');
var slide4Btn6 = document.querySelector('.check6');
var slide4Btn7 = document.querySelector('.check7');


slide4Btn1.onclick = function() {
	slide4Check4hrs.style.display = 'block';
	slide4Check6hrs.style.display = 'none';
	slide4Check8hrs.style.display = 'none';
	slide4Check12hrs.style.display = 'none';
	slide4Check18hrs.style.display = 'none';
	slide4Check24hrs.style.display = 'none';
	slide4Check48hrs.style.display = 'none';
	slide4Btn1.style.backgroundColor = '#1f8a70';
	slide4Btn2.style.backgroundColor = '#26547c';
	slide4Btn3.style.backgroundColor = '#26547c';
	slide4Btn4.style.backgroundColor = '#26547c';
	slide4Btn5.style.backgroundColor = '#26547c';
	slide4Btn6.style.backgroundColor = '#26547c';
	slide4Btn7.style.backgroundColor = '#26547c';
}

slide4Btn2.onclick = function() {
	slide4Check4hrs.style.display = 'none';
	slide4Check6hrs.style.display = 'block';
	slide4Check8hrs.style.display = 'none';
	slide4Check12hrs.style.display = 'none';
	slide4Check18hrs.style.display = 'none';
	slide4Check24hrs.style.display = 'none';
	slide4Check48hrs.style.display = 'none';
	slide4Btn1.style.backgroundColor = '#26547c';
	slide4Btn2.style.backgroundColor = '#1f8a70';
	slide4Btn3.style.backgroundColor = '#26547c';
	slide4Btn4.style.backgroundColor = '#26547c';
	slide4Btn5.style.backgroundColor = '#26547c';
	slide4Btn6.style.backgroundColor = '#26547c';
	slide4Btn7.style.backgroundColor = '#26547c';
}

slide4Btn3.onclick = function() {
	slide4Check4hrs.style.display = 'none';
	slide4Check6hrs.style.display = 'none';
	slide4Check8hrs.style.display = 'block';
	slide4Check12hrs.style.display = 'none';
	slide4Check18hrs.style.display = 'none';
	slide4Check24hrs.style.display = 'none';
	slide4Check48hrs.style.display = 'none';
	slide4Btn1.style.backgroundColor = '#26547c';
	slide4Btn2.style.backgroundColor = '#26547c';
	slide4Btn3.style.backgroundColor = '#1f8a70';
	slide4Btn4.style.backgroundColor = '#26547c';
	slide4Btn5.style.backgroundColor = '#26547c';
	slide4Btn6.style.backgroundColor = '#26547c';
	slide4Btn7.style.backgroundColor = '#26547c';
}

slide4Btn4.onclick = function() {
	slide4Check4hrs.style.display = 'none';
	slide4Check6hrs.style.display = 'none';
	slide4Check8hrs.style.display = 'none';
	slide4Check12hrs.style.display = 'block';
	slide4Check18hrs.style.display = 'none';
	slide4Check24hrs.style.display = 'none';
	slide4Check48hrs.style.display = 'none';
	slide4Btn1.style.backgroundColor = '#26547c';
	slide4Btn2.style.backgroundColor = '#26547c';
	slide4Btn3.style.backgroundColor = '#26547c';
	slide4Btn4.style.backgroundColor = '#1f8a70';
	slide4Btn5.style.backgroundColor = '#26547c';
	slide4Btn6.style.backgroundColor = '#26547c';
	slide4Btn7.style.backgroundColor = '#26547c';
}

slide4Btn5.onclick = function() {
	slide4Check4hrs.style.display = 'none';
	slide4Check6hrs.style.display = 'none';
	slide4Check8hrs.style.display = 'none';
	slide4Check12hrs.style.display = 'none';
	slide4Check18hrs.style.display = 'block';
	slide4Check24hrs.style.display = 'none';
	slide4Check48hrs.style.display = 'none';
	slide4Btn1.style.backgroundColor = '#26547c';
	slide4Btn2.style.backgroundColor = '#26547c';
	slide4Btn3.style.backgroundColor = '#26547c';
	slide4Btn4.style.backgroundColor = '#26547c';
	slide4Btn5.style.backgroundColor = '#1f8a70';
	slide4Btn6.style.backgroundColor = '#26547c';
	slide4Btn7.style.backgroundColor = '#26547c';
}

slide4Btn6.onclick = function() {
	slide4Check4hrs.style.display = 'none';
	slide4Check6hrs.style.display = 'none';
	slide4Check8hrs.style.display = 'none';
	slide4Check12hrs.style.display = 'none';
	slide4Check18hrs.style.display = 'none';
	slide4Check24hrs.style.display = 'block';
	slide4Check48hrs.style.display = 'none';
	slide4Btn1.style.backgroundColor = '#26547c';
	slide4Btn2.style.backgroundColor = '#26547c';
	slide4Btn3.style.backgroundColor = '#26547c';
	slide4Btn4.style.backgroundColor = '#26547c';
	slide4Btn5.style.backgroundColor = '#26547c';
	slide4Btn6.style.backgroundColor = '#1f8a70';
	slide4Btn7.style.backgroundColor = '#26547c';
}

slide4Btn7.onclick = function() {
	slide4Check4hrs.style.display = 'none';
	slide4Check6hrs.style.display = 'none';
	slide4Check8hrs.style.display = 'none';
	slide4Check12hrs.style.display = 'none';
	slide4Check18hrs.style.display = 'none';
	slide4Check24hrs.style.display = 'none';
	slide4Check48hrs.style.display = 'block';
	slide4Btn1.style.backgroundColor = '#26547c';
	slide4Btn2.style.backgroundColor = '#26547c';
	slide4Btn3.style.backgroundColor = '#26547c';
	slide4Btn4.style.backgroundColor = '#26547c';
	slide4Btn5.style.backgroundColor = '#26547c';
	slide4Btn6.style.backgroundColor = '#26547c';
	slide4Btn7.style.backgroundColor = '#1f8a70';
}


// enviar ações
var enviarBtn = document.querySelector('.but-enviar');
var enviarConfirmModal = document.querySelector('.enviarConfirmarModal');
var finalConfirmModal = document.querySelector('.finalConfirmModal');
var finalConfirmBox = document.querySelector('.finalConfirmBox');

enviarBtn.onclick = function() {
	enviarConfirmModal.style.display = 'flex';
}

var enviarSim = document.querySelector('#ConfirmarBoxSim');
var enviarNao = document.querySelector('#ConfirmarBoxNao');

enviarSim.onclick = function() {
	enviarConfirmModal.style.display = 'none';
	finalConfirmModal.style.display = 'flex';
	finalConfirmBox.style.display = 'flex';
	


}

enviarNao.onclick = function() {
	enviarConfirmModal.style.display = 'none';
}



// ações botões passo1

var cxCheiaBtnSim = document.querySelector('#cxCheiaBoxSim');
var cxCheiaBtnNao = document.querySelector('#cxCheiaBoxNao');

cxCheiaBtnSim.onclick = function() {
	var cxCheiaJanela = document.querySelector('.cxCheiaBox');
	cxCheiaJanela.style.display = 'none';
}

cxCheiaBtnNao.onclick = function() {
	var cxCheiaJanela = document.querySelector('.cxCheiaBox');
	cxCheiaJanela.style.display = 'none';
}