var courses = {};

var images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg',
];

var titles = [
    'Cloud GURU',
    'Adobe Photoshop',
    '3D Max',
    'Unity 3D Game Engine',
    'Mobile App Development',
    'Adobe Illustrator',
    'Angular',
    'UX/UI Design',
    'Complete Python Course',
    'Complete Web Developer Course',
];

var descs = [
    'Become Cloud GURU',
    'Master Graphic Design',
    'Learn How to Create 3D Objects',
    'Learn How to Build Your Own Game with Unity 3D ',
    'Build Your Next Mobile App',
    'Learn How to Draw Vectors with Adobe Illustrator',
    'Learn Front End Development with Angular ',
    'Learn The Basics of UX/UI Design',
    'Master Python Language',
    'Become Web Developer This Month',
];

// 1). Write a function called getCourseData that accepts number as input and return an object with the follow data (title, image, desc) from the three arrays above.
function getCourseData(index) {

}
// For Examlpe:
getCourseData(0); // ==>
// obj = {
//     title: 'Cloud GURU',
//     image: 'image1.jpg',
//     desc: 'Become Cloud GURU',
//   };


// 2). Write a function called addDatatoArray that accept two parameters as argument arrayName and newData, will add the data to that arrays. If the data was entered correctly will return true, otherwise it will return false.
function addDatatoArray(array, data) {

}
// For Examlpe:
addDatatoArray('images', 'images11.jpg'); // true



// 3). Write a function called getAllData that will return an object will all the data of the three arrays with the following keys for each item: (image, title, desc)

function getAllData() {
  ob = {};
  return ob;
}


//-------------------------------//
//          Using jQuery
//-------------------------------//
// 4. Write a function called removeCourse will remove a course from the web page, this function will accept a number as input and will remove that course if it was shown in the webpage and return the course with index X was removed successfully, otherwise it will return sorry we didn't find that course.

function removeCourse(index) {

}

removeCourse(5); // "Course with index 5 was removed successfully "
removeCourse(100); // "Sorry! We didn't find that course."

// 5. Write a function called addCourse that accepts a object with keys (title, image, desc). This will  add a course to the web page.
function addCourse(obj) {

}

addCourse({ name: 'React Native', image: 'image12.jpg', desc: 'Learn How to Develop a Native apps' });

//-------------------------------//
//     Searching Functionality
//-------------------------------//

// 6. Write a function called getCourseByName that accept a string as parameter and will return an object which represent the data for that course. If the course is not exist, print "Course is not found!" in the console.

function getCourseByName() {

}

getCourseByName('BackBone');    // Course is not found!
getCourseByName('Cloud GURU');  // {
//     title: 'Cloud GURU',
//     image: 'image1.jpg',
//     desc: 'Become Cloud GURU',
//   };
