// JSON containing the data

var work = {
	'jobs': [
		{
			'employer': 'MER',
			'title': 'Architect',
			'location': 'Stockholm, Sweden',
			'dates': 'May 2013 - Ongoing',
			'description': 
				'Design of activity based offices. Conceptual work, production of construction drawings, ' +
				'contact with clients, 3D rendering.',
			'url': 'http://www.mer.se'
		},
		{
			'employer': 'Byens Tegnestue',
			'title': 'Architect',
			'location': 'Copenhagen, Denmark',
			'dates': 'November 2012 - February 2013',
			'description': 'Production of construction details, 3D rendering.',
			'url': 'http://byens-tegnestue.dk/'
		}
	]
}

var projects = {
	'projects': [
		{
			'title': 'Example',
			'dates': 'September 2015 - December 2015',
			'description': 'An exemplar project example.',
			'images': ['images/197x148.gif','images/197x148.gif']
		},
		{
			'title': 'Example 2',
			'dates': 'January 2016 - March 2017',
			'description': 'Another exemplar project example.',
			'images': ['images/197x148.gif','images/197x148.gif']
		}
	]
}

var bio = {
	'name' : 'Paulo Cunha',
	'role' : 'Web Developer',
	'contacts' : {
		'mobile' : '0046-070-xxxx-xxxx',
		'email' : 'pc@paulocunha.me',
		'github' : 'pmrcunha',
		'twitter' : 'pmrcunha',
		'location' : 'Stockholm, Sweden'
	},
	'welcomeMsg' : 'Hello!',
	'skills' : ['programming', 'drawing', 'ArchiCAD', 'Lisp'],
	'bioPic' : 'images/me.jpg'
}

var education = {
	'schools': [
		{
			'name': 'Instituto Superior Técnico',
			'location': 'Lisbon, Portugal',
			'degree': 'BA',
			'majors': ['Architecture'],
			'dates': 2010,
			'url': 'http://www.ist.utl.pt'
		},
		{
			'name': 'Royal Danish Academy of Fine Arts, School of Architecture',
			'location': 'Copenhagen, Denmark',
			'degree': 'Masters',
			'majors': ['Architecture'],
			'dates': 2012,
			'url': 'http://www.kadk.dk'
		}
	],
	'onlineCourses': [
		{
			'title': 'Front End Nanodegree',
			'school': 'Udacity',
			'dates': 2015,
			'url': 'http://www.udacity.com'
		}
	]
}

// Methods formatting the data to HTML

bio.display = function() {
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMsg);
	$('#header').prepend(formattedName, formattedRole);
	$('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
	$('#footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
	$('#banner').append(formattedBioPic);
	var skillsLen = bio.skills.length;
	if(skillsLen > 0) {
		$('#banner').append(HTMLskillsStart);
		for(var i = 0; i < skillsLen; i++) {
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
	}
	$('#header').append(formattedWelcomeMsg);
}

work.display = function() {
	for(job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		formattedEmployer = formattedEmployer.replace('#', work.jobs[job].url);	//Link to Employer instead of top of the page
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$('.work-entry:last').append(
			formattedEmployer + formattedTitle,
			formattedWorkLocation,
			formattedWorkDates,
			formattedWorkDescription
		);
	}
}

education.display = function() {
	for(school in education.schools) {
		$('#education').append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
		formattedName = formattedName.replace('#', education.schools[school].url);	//Link to School instead of top of the page
		var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		$('.education-entry:last').append(formattedName + formattedDegree, formattedLocation, formattedDates);
		var majorsLen = education.schools[school].majors.length;
		for(var i = 0; i < majorsLen; i++) {
			var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors[i]);
			$('.education-entry:last').append(formattedMajor);
		}
	}
	for(course in education.onlineCourses) {
		$('#education').append(HTMLonlineClasses, HTMLschoolStart);	//HTMLschoolStart is necessary to get a wrapper <div> for CSS
		var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
		var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
		$('.education-entry:last').append(
			formattedTitle + formattedSchool,
			formattedDates,
			formattedURL
			);
	}
}

projects.display = function() {
	for(project in projects.projects) {
		$('#projects').append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		$('.project-entry:last').append(
			formattedTitle,
			formattedProjectDates,
			formattedProjectDescription
			);
		var imagesLen = projects.projects[project].images.length;
		for(var i = 0; i < imagesLen; i++) {
			var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[i]);
			$('.project-entry:last').append(formattedImage);
		}
	}
}

// Function calls to display the data on the page

bio.display();
work.display();
education.display();
projects.display();

// Implementation of a button to internationalize the name

function inName() {
	var name = bio.name;
	name = name.trim().split(" ");
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();
	return name[0] + " " + name[1];
}

$('#main').append(internationalizeButton);

// Implementation of a Google Map showing key locations

$('#mapDiv').append(googleMap);