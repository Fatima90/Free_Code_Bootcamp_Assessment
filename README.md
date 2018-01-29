# Free_Code_Bootcamp_Assessment

1) Add Bootstrap to the website using Bootstrap CDN.
2) Add a link to the styles/styles.courses
3) Add a link to the javascript/data.js
4) Download jQuery library to your local folder and add it to your website.
5) Open styles/style.css file and do the following:
    a). Change the title's class size to be 18px
    b). You need to import Google Font and use font Lobster for the title.
6) Remove homepage_hero image from html code.
7) Add new div with class image_hero, you may need to define a new class called image_hero in style.css file. Add that image as background.
8) Using Bootstrap do the following:
    a). Create a row with three columns, each one contain the these info about the course:
        - title
        - image
        - desc    

5) Open javascript/data.js:
    a).  Write a function called getCourseData that accepts number as input and return an object with the follow data (title, image, desc) from the three arrays above.
    b).  Write a function called addDatatoArray that accept two parameters as argument arrayName and newData, will add the data to that arrays. If the data was entered correctly will return true, otherwise it will return false.
    c). Write a function called getAllData that will return an object will all the data of the three arrays with the following keys for each item: (image, title, desc)
    d). Using jQuery: Write a function called removeCourse will remove a course from the web page, this function will accept a number as input and will remove that course if it was shown in the webpage and return the course with index X was removed successfully, otherwise it will return sorry we didn't find that course.
