
var work = {
	"jobs": [
		{
			"employer": "MER",
			"title": "Architect",
			"location": "Stockholm, Sweden",
			"dates": "May 2013 - Ongoing",
			"description": "Design of activity based offices. Conceptual work, production of construction drawings, contact with clients, 3D rendering."
		},
		{
			"employer": "Byens Tegnestue",
			"title": "Architect",
			"location": "Copenhagen, Denmark",
			"dates": "November 2012 - February 2013",
			"description": "Production of construction details, 3D rendering."
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Example",
			"dates": "2015",
			"description": "An exemplar project example.",
			"images": ["images/1.jpg","images/2.jpg"]
		},
		{
			"title": "Example 2",
			"dates": "2015",
			"description": "Another exemplar project example.",
			"images": ["images/3.jpg","images/4.jpg"]
		}
	]
}

var bio = {
	"name" : "Paulo Cunha",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "0046-070-820-5128",
		"email" : "pc@paulocunha.me",
		"github" : "pmrcunha",
		"twitter" : "pmrcunha",
		"location" : "Stockholm, Sweden"
	},
	"welcomeMsg" : "Hello!",
	"skills" : ["programming", "drawing", "ArchiCAD", "Lisp"],
	"bioPic" : "images/me.jpg"
}

var education = {
	"schools": [
		{
			"name": "Instituto Superior Técnico",
			"location": "Lisbon, Portugal",
			"degree": "BA",
			"majors": ["Architecture"],
			"dates": "September 2006 - July 2010",
			"url": "http://www.ist.utl.pt"
		},
		{
			"name": "Royal Danish Academy of Fine Arts, School of Architecture",
			"location": "Copenhagen, Denmark",
			"degree": "Masters",
			"majors": ["Architecture"],
			"dates": "August 2010 - June 2012",
			"url": "http://www.kadk.dk"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Nanodegree",
			"school": "Udacity",
			"dates": "August 2015 - Ongoing",
			"url": "http://www.udacity.com"
		}
		]
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

$("#header").prepend(formattedName, formattedRole);
$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
$("#header").append(formattedBioPic, formattedWelcomeMsg);



if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkill1 = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill1);
}

function displayWork() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(
			formattedEmployer + formattedTitle,
			formattedWorkLocation,
			formattedWorkDates,
			formattedWorkDescription
			);
	}
}

displayWork();


projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(
			formattedTitle,
			formattedProjectDates,
			formattedProjectDescription
			);
		for(image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", image);
			$(".project-entry:last").append(formattedImage);
		}
	}
}

projects.display();


function inName() {
	var name = bio.name;
	name = name.trim().split(" ");
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);


$("#mapDiv").append(googleMap);

//TODO encapsulate functions
//TODO customize
//TODO overlay map (problem set 2)