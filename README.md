# Free_Code_Bootcamp_Assessment

- Stage 1: Setup the files:
1) Add Bootstrap to the website using Bootstrap CDN.
2) Add a link to the styles/styles.css
3) Add a link to the javascript/data.js
4) Download jQuery library to your local folder and add it to your website.
5) Open styles/style.css file and do the following:
    a). Change the title's class size to be 18px
    b). You need to import Google Font and use font Lobster for the title.
6) Remove homepage_hero image from html code.
7) Using Bootstrap do the following:
    a). Create a row with three columns, each one contain the these info about the course:
        - title
        - image
        - desc    
Note: inside index.html you have a demo data for the first course, you need to remove it and replace it with a real data from the data.js.  

-Stage 2: Working with the data:
8) Open javascript/data.js:
    a).  Write a function called getCourseData that accepts number as input and return an object with the follow data (title, image, desc) from the three arrays above.
    b).  Write a function called addDatatoArray that accept two parameters as argument arrayName and newData, will add the data to that arrays. If the data was entered correctly will return true, otherwise it will return false.
    c). Write a function called getAllData that will return an object will all the data of the three arrays with the following keys for each item: (image, title, desc)
    d). Using jQuery: Write a function called removeCourse will remove a course from the web page, this function will accept a number as input and will remove that course if it was shown in the webpage and return the course with index X was removed successfully, otherwise it will return sorry we didn't find that course.
    e). Using jQuery: Write a function called addCourse that accepts a object with keys (title, image, desc). This will  add a course to the web page.
Note: you can use the chrome console to test your functions.

- Stage 3: Adding Search Functionality:
9) Add textbox with a button to index.html.
10) inside data.js you need to define a new function called getCourseByName that accept a string as parameter and will return an object which represent the data for that course. If the course is not exist, print "Course is not found!" in the console".
- Note:
    - First print these data at the console.
    - Second: remove all courses except the one the user is looking for
    - If the course name is not exist, print "Course is not found!" in the console"
