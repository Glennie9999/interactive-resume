
var bio = {
	"name" : "Glenn Ochiltree",
	"role" : "Resident Genius", 
	"contacts" : {
    "address" : "Bishops Stortford, Herts",
    "mobile" : "07957 123456",
    "email" : "glenn_ochiltree@nypd.com",
    "twitter" : "@glennie9999",
    "github" : "Glennie9999",
    "location" : "Bishops Stortford, UK"},
	"bioPicture" : "images/me.jpg",
    "welcome_message" : "Ok, 'Resident Genius' may be stretching it quite a bit !!!",
    "skills" : ["Beginner at Web Design", "Accountant", "Investor", "Raconteur"],

    display: function () {

    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    $("#header").prepend(formattedName);

    var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPicture);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcome_message);
    $("#header").append(formattedWelcomeMsg);

    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);

    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
        $("#skills").append(formattedSkill);

        var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
        $("#skills").append(formattedSkill);

        var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
        $("#skills").append(formattedSkill);

        var formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
        $("#skills").append(formattedSkill);
        };

        var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
        $("#footerContacts").append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
        $("#footerContacts").append(formattedEmail);

        var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
        $("#footerContacts").append(formattedTwitter);

        var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
        $("#footerContacts").append(formattedGithub);

        var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
        $("#footerContacts").append(formattedLocation);
    }
}


var work = {
    "jobs": [
    {
        "employer" : "Ford Motor Company",
        "title" : "Finance Analyst",
        "location" : "Brentwood, Essex", 
        "dates" : "1992 to 1998",
        "description" : "Various roles including profit analysis, decision support, unit volume analysis and internal audit"
    },
        {
        "employer": "Cable & Wireless plc",
        "title": "Finance Manager",
        "location": "London", 
        "dates": "1998 to 2003",
        "description": "Providing decision support to sales and marketing team"
    },
        {
        "employer": "Resources Global Professionals",
        "title": "Senior Associate",
        "location": "London", 
        "dates": "2004 to 2007",
        "description": "Associate working on multiple finance and audit assignments"
    },
        {
        "employer": "Lehman Brothers/ Acenden Ltd",
        "title": "Head of Cash Bond Administration",
        "location": "London", 
        "dates": "2007 to present",
        "description": "Process improvement/ administration of multiple special purpose vehicles and stakeholder support"
        }
    ],

    display: function () {
    for (var job in work.jobs) {
    
        $("#workExperience").append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedEmployerTitle = formattedWorkEmployer + formattedTitle;
        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
}
};  

var education = {
    "schools": [
    {   "name": "Royal Liberty School",
        "location": "Romford",
        "exams": "'O' Levels (12) and 'A' Levels (3)",
        "years": "1981 to 1988",
        "url": "http://www.royalliberty.org.uk"
    },
    {
        "name": "University of East Anglia",
        "location": "Norwich",
        "exams": "BSc Business Finance and Economics",
        "years": "1988 to 1991",
        "url": "https://www.uea.ac.uk/"
    },
    {
        "name": "Chartered Institute of Management Accountants",
        "location": "London",
        "exams": "Associate",
        "years": "1992 to 1994",
        "url": "http://www.cimaglobal.com/"
    }
    ],
    "onlineCourses": [
    {
        "courseName": "Front End Web Developer",
        "school": "Udacity.com",
        "date": "2015",
        "url": "https://www.udacity.com/"
    },    
    {
        "courseName": "Intro to HTML and CSS",
        "school": "Udacity.com",
        "date": "Jan 2015",
        "url": "https://www.udacity.com/"
    },
    {
        "courseName": "How to Use Git and Github",
        "school": "Udacity.com",
        "date": "Feb 2015",
        "url": "https://www.udacity.com/"
    },
    {
        "courseName": "JavaScript Basics",
        "school": "Udacity.com",
        "date": "Mar 2015",
        "url": "https://www.udacity.com/"
    },
    ],

    display: function () {

    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].exams);
        $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].years);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        }

    $(".education-entry:last").append(HTMLonlineClasses);

    for (course in education.onlineCourses) {

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].courseName);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);   

        var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].date);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedOnlineURL);

    }
    }
};

var projects = {
    "projects" : [
    {
        "title": "Sample Project 1",
        "dates": "2015",
        "description": "Fascinating project involving the examination of the composition of belly button fluff from around the globe",
        "images": [
        "http://assets.menshealth.co.uk/main/thumbs/24219/belly__square.jpg"]
    },
     {
        "title": "Sample Project 2",
        "dates": "2014",
        "description": "Interesting project involving the examination of the relative strength of toe nail clippings sourced from around the globe",
        "images": [
        "http://plunge47.files.wordpress.com/2008/02/blog-030208.jpg"]
    }
    ],
    display: function () {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedProjectDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedProjectImages = HTMLprojectImage.replace("%data%",projects.projects[project].images);
                $(".project-entry:last").append(formattedProjectImages);
                }
             } 
         }
        }
    };


bio.display();
work.display ();
projects.display ();
education.display ();

$('#main').append(internationalizeButton);
 
function inName(name) {
    name = bio.name.split(" ");
    return name[0] + " " + name[1].toUpperCase();
    }

$("#mapDiv").append(googleMap);

