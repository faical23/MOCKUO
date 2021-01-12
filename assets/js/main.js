$(() => {
	// ====== [BEGIN] Toggle the sidebar on mobile version ======
	const btnMenu = document.getElementById("menu-icon-trigger");
	btnMenu.addEventListener("click", (e) => {
		e.preventDefault();
		document.querySelector('.menu-icon-wrapper').classList.toggle('open');
		document.querySelector('.nav-content').classList.toggle('is-active');
	});
	// ====== [END] Toggle the sidebar on mobile version ======

	// Enable bootstrap Tooltip
	$('[data-toggle="tooltip"]').tooltip();
});


//// scrooling header
var navbar= document.querySelector(".test")
var logo =  document.querySelector(".header-logo")
var background_brand_on =  document.querySelector(".background-brand")

//// scroll katgolih ila lwindow bdat kathbet ltaht ikhdm la function fixe
function fixe(){
  navbar.classList.toggle('scrollactive' , window.scrollY > 0);	
  logo.classList.toggle('logo-scroll' , window.scrollY > 0);	
  background_brand_on.classList.toggle('background-brand-off' , window.scrollY > 0);	

}

window.addEventListener('scroll', fixe)


/////////// see more onclick features

var see_more = document.querySelector("#see_more");
var second_features_off = document.querySelector("#second-features-off");

var x = true;

function add_more_features(){
	if(x == true){
		second_features_off.id="#second-features-on";
		see_more.innerHTML = "See Less";
		x = false;
	}
	else{
		second_features_off.id="second-features-off";
		see_more.innerHTML = "See More";
		x = true;
	}

}


see_more.onclick = add_more_features;

//////////////// see more onclick how to work

var see_more_work = document.querySelector("#see-more-work");
var second_work_off = document.querySelector("#work-off");

var y = true

function add_more_work(){
	if(y == true){
		second_work_off.id="work-on";
		see_more_work.innerHTML = "See Less";
		y = false;
	}
	else{
		second_work_off.id="work-off";
		see_more_work.innerHTML = "See More";
		y = true;
	}
}

see_more_work.onclick = add_more_work;




/////////////////////// change logo on scroll and color of nab var
var header_menu = document.getElementById("ul").querySelectorAll("a");  

var btn1 = document.querySelector("#btn1");
var nav_content = document.querySelector(".nav-content");

window.onscroll = function () { 
	scrollFunction(); 
}; 

function scrollFunction() { 
	if (document.documentElement.scrollTop > 0) 
	{
		///// change btn1
		btn1.className="change_btn1";
		//////// change logo
		logo.src = "assets/img/logo/Web 1366 - 2-image4.svg"; 
		////////  change all menu
	for(i =0; i<header_menu.length;i++){
		header_menu[i].id="menu_change";
		}
	}

	else{
		//nav_content.style.backgroundColor = "white"; 
		btn1.className="No_change_btn1";
		logo.src = "assets/img/logo/1-02.png"; 
		for(i =0; i<header_menu.length;i++){
			header_menu[i].id="menu_no-change";
			}
	} 

} 


//////////// animation 

