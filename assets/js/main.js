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

///////// droping part

var faster_drop = document.querySelector("#faster-drop");
var smarter_drop = document.querySelector("#smarter-drop");
var better_drop = document.querySelector("#better-drop");

var faster_paraghraphe = document.querySelector("#faster-paraghraphe");
var smarter_paraghraphe = document.querySelector("#smarter-paraghraphe");
var better_paraghraphe = document.querySelector("#better-paraghraphe");

var faster = true;
var smarter = true;
var better = true;


function faster_worker()
{
	if( faster == true)
	{
		faster_paraghraphe.id="work-on";
		faster = false ;
	}
	else{
		faster_paraghraphe.id="work-of";
		faster = true;
	}

}

function smarter_worker()
{
	if(smarter == true)
	{
		smarter_paraghraphe.id="work-on";
		smarter = false;
	}
	else{
		smarter_paraghraphe.id="work-of";
		smarter = true
	}
}

function better_worker()
{
	if(better == true)
	{
		better_paraghraphe.id ="work-on";
		better = false;
	}
	else{
		better_paraghraphe.id ="work-of";
		better = true;
	}
}

faster_drop.onclick = faster_worker;
smarter_drop.onclick = smarter_worker;
better_drop.onclick = better_worker;



