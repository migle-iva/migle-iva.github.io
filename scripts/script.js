
///////SKROLINANT PASIŽYMI MENIU PUNKTAI

window.addEventListener('load', function() {

	window.addEventListener("scroll", function() {

		var aboutMenu = document.querySelector("a[href*='#about']");
		var experienceMenu = document.querySelector("a[href*='#experience']");
		var educationMenu = document.querySelector("a[href*='#education']");
		var skillsMenu = document.querySelector("a[href*='#skills']");
		var otherMenu = document.querySelector("a[href*='#other']");
		var contactMenu = document.querySelector("a[href*='#contact']");

		var aboutSection = document.querySelector("#about").offsetTop;
		var experienceSection = document.querySelector("#experience").offsetTop;
		var educationSection = document.querySelector("#education").offsetTop;
		var skillsSection = document.querySelector("#skills").offsetTop;
		var otherSection = document.querySelector("#other").offsetTop;
		var contactSection = document.querySelector("#contact").offsetTop;
  
  		var current = window.scrollY;
  

		if (current > aboutSection + 90 && current < experienceSection - 90 && current < educationSection - 90 && 
		current < skillsSection - 90 && current < otherSection - 90 && current < contactSection - 90) {

			aboutMenu.classList.add("greentext");
			experienceMenu.setAttribute("class", "");
		}


		if (current > experienceSection - 90 && current < educationSection - 91 && 
		current < skillsSection - 91 && current < otherSection - 91 && current < contactSection - 91) {

			aboutMenu.setAttribute("class", "");
			experienceMenu.classList.add("greentext");
			educationMenu.setAttribute("class", "");
		}


		if (current > educationSection - 91 && current < skillsSection - 91 && 
			current < otherSection - 91 && current < contactSection - 91) {

			experienceMenu.setAttribute("class", "");
			educationMenu.classList.add("greentext");
			skillsMenu.setAttribute("class", "");
		}


		if (current > skillsSection - 91 && current < otherSection - 91 && current < contactSection - 91) {

			educationMenu.setAttribute("class", "");
			skillsMenu.classList.add("greentext");
			otherMenu.setAttribute("class", "");
		}


		if (current > otherSection - 91 && current < contactSection - 91) {

			skillsMenu.setAttribute("class", "");
			otherMenu.classList.add("greentext");
			contactMenu.setAttribute("class", "");
		}


		if (current > contactSection - 91) {

			otherMenu.setAttribute("class", "");
			contactMenu.classList.add("greentext");
		}

 	});
  
});


//////HAMBURGER ANIMACIJA IR MENIU SUSISKLEIDŽIA/IŠSISKLEIDŽIA

var hamburger = document.querySelector(".menu_bar");

hamburger.addEventListener("click", function() {

	var menu = document.querySelector("#allmenu");
	menu.classList.toggle("active");

	hamburger.classList.toggle("xmenu");
});



/////SMOOTH SCROLL

var menuButtons = document.querySelectorAll("div.menu a");

for (var i = 0; i < menuButtons.length; i++) {

	menuButtons[i].addEventListener("click", function(event) {

		event.preventDefault();
		var section = document.querySelector(this.getAttribute("href"));


		// console.log(document.querySelector("header").offsetHeight);

		window.scroll({
			top: section.offsetTop - document.querySelector("header").offsetHeight,
			left: 0,
			behavior: "smooth"
		});

	});
}


/////SKILLS SECTION

var skrolas = document.querySelectorAll(".other-item i");

for (var i = 0; i < skrolas.length; i++) {
  
  skrolas[i].addEventListener("mouseover", function() {
    this.classList.add("onscroll");
  });
}