const m1 = document.getElementById("m1");
const m2 = document.getElementById("m2");
const m3 = document.getElementById("m3");
const flower1 = document.getElementById("flowers-1");



function changeimg1(){
	if(flower1.getAttribute("src")==="docs/flor.png"){
		flower1.setAttribute("src","docs/gift.png");
	}
	else if(flower1.getAttribute("src")==="docs/gift.png"){
		flower1.setAttribute("src","docs/flor.png");
	}
}


function changeimg2(){
	var flowers=document.getElementsByClassName("flowersgrid2")[0];
	var gift2 = document.getElementById("gift2");

	gift2.classList.toggle("no-active");
	flowers.classList.toggle("no-active");

	//Si NO está activo el regalo: activar el regalo y desactivar flores.

	if(gift2.classList.toggle("no-active")){

		gift2.classList.remove("no-active");
		flowers.classList.add("no-active");
	}

	//Si SÍ está activo el regalo: desactivar el regalo y activar flores.

	else if(!gift2.classList.toggle("no-active")){

		gift2.classList.add("no-active");
		flowers[i].classList.remove("no-active");
	}
}

const changeimg3=()=>{
	const flowers=document.getElementsByClassName("flowersgrid3")[0];
	const gift3 = document.getElementById("gift3");

	changeimg(flowers,gift3);
}

const changeimg4=()=>{
	const flowers=document.getElementsByClassName("flowersgrid4")[0];
	const gift4 = document.getElementById("gift4");

	changeimg(flowers,gift4);
}

const changeimg5=()=>{
	const flowers=document.getElementsByClassName("flowersgrid5")[0];
	const gift5 = document.getElementById("gift5");

	changeimg(flowers,gift5);
}

const changeimg6=()=>{
	const flowers=document.getElementsByClassName("flowersgrid6")[0];
	const gift6 = document.getElementById("gift6");

	changeimg(flowers,gift6);
}

const changeimg7=()=>{
	const flowers=document.getElementsByClassName("flowersgrid7")[0];
	const gift7 = document.getElementById("gift7");

	changeimg(flowers,gift7);
}

const changeimg8=()=>{
	const flowers=document.getElementsByClassName("flowersgrid8")[0];
	const gift8 = document.getElementById("gift8");

	changeimg(flowers,gift8);
}

const changeimg9=()=>{
	const flowers=document.getElementsByClassName("flowersgrid9")[0];
	const gift9 = document.getElementById("gift9");

	changeimg(flowers,gift9);
}

const changeimg10=()=>{
	const flowers=document.getElementsByClassName("flowersgrid10")[0];
	const gift10 = document.getElementById("gift10");

	changeimg(flowers,gift10);
}

const changeimg11=()=>{
	const flowers=document.getElementsByClassName("flowersgrid11")[0];
	const gift11 = document.getElementById("gift11");

	changeimg(flowers,gift11);
}

const changeimg12=()=>{
	const flowers=document.getElementsByClassName("flowersgrid12")[0];
	const gift12 = document.getElementById("gift12");

	changeimg(flowers,gift12);
}



const changeimg=(flowers,gift)=>{
	gift.classList.toggle("no-active");
	flowers.classList.toggle("no-active");

	//Si NO está activo el regalo: activar el regalo y desactivar flores.

	if(gift.classList.toggle("no-active")){

		gift.classList.remove("no-active");
		flowers.classList.add("no-active");
	}

	//Si SÍ está activo el regalo: desactivar el regalo y activar flores.

	else if(!gift.classList.toggle("no-active")){

		gift.classList.add("no-active");
		flowers[i].classList.remove("no-active");
	}
}

m1.addEventListener("click",changeimg1);
m2.addEventListener("click",changeimg2);
m3.addEventListener("click",changeimg3);
m4.addEventListener("click",changeimg4);
m5.addEventListener("click",changeimg5);
m6.addEventListener("click",changeimg6);
m7.addEventListener("click",changeimg7);
m8.addEventListener("click",changeimg8);
m9.addEventListener("click",changeimg9);
m10.addEventListener("click",changeimg10);
m11.addEventListener("click",changeimg11);
m12.addEventListener("click",changeimg12);
