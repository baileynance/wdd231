const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

document.getElementById('lastModified').innerText = new Date(document.lastModified);
document.getElementById('currentyear').innerText = new Date().getFullYear();

const courseSection = document.getElementById("courses");
const creditCount = document.getElementById("credit-count");

// Define a function for displaying a course list
const displayList = (courses) => {
    courses.forEach(function(course) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = `${course.subject} ${course.number}`;
    if (course.completed == true) {
        button.classList.add("completed");
    } else {
        button.classList.add("not-completed");
    }

    button.addEventListener("click", function() {
    displayCourseDetails(course);
    });

    li.appendChild(button);
    courseSection.appendChild(li);
    })
}

const displayCredits = (courses) => {
    creditCount.innerHTML = ``;
    const totalCompletedCredits = courses.reduce((total, course) => {
    return course.completed ? total + course.credits : total;
    }, 0);
    creditCount.textContent = totalCompletedCredits;
}

// Run default display upon loading wedpage
displayList(courses);
displayCredits(courses);

// Switch display to all classes when clicked
const allClassesSelector = document.getElementById("all-classes");
allClassesSelector.addEventListener("click", function() {
    courseSection.innerHTML = ``;
    displayList(courses);
})

// Switch display to all CSE classes when clicked
const cseClassesSelector = document.getElementById("cse-classes");
cseClassesSelector.addEventListener("click", function() {
    courseSection.innerHTML = ``;
    const cseCourses = courses.filter(course => course.subject == "CSE");
    displayList(cseCourses);
})

// Switch display to all WDD classes when clicked
const wddClassesSelector = document.getElementById("wdd-classes");
wddClassesSelector.addEventListener("click", function() {
    courseSection.innerHTML = ``;
    const wddCourses = courses.filter(course => course.subject == "WDD");
    displayList(wddCourses);
})


const navButton = document.getElementById("nav-button");
const navList = document.getElementById("nav-list");
navButton.addEventListener("click", function() {
    navList.classList.toggle("show");
})

const courseDetails = document.getElementById("course-details");
const displayCourseDetails = (course) => {
    courseDetails.innerHTML = ``; 
    courseDetails.innerHTML = `
    <button id="closeModal">X</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `;

    courseDetails.showModal();
    closeModal.addEventListener("click", function() {
        courseDetails.close();
    })
}

