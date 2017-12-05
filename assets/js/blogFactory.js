"use strict";

let blogs = [];

// fetch blogs from blogs.json
let blogRequest = new XMLHttpRequest();
blogRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        blogs = response.blogs;
        console.log(blogs);
        // add each blog to #blog-holder
        blogs.forEach(function(element, index) {
            if (index%3 == 0) {
                // add a new row for every third element
                $('#blog-holder').append($('<div>',{class:'row'}));
            }
            // add each blog
            addBlog(blogs[index], $('#blog-holder .row:last-child'));
        });
        // populate #blog-highlight
        addBlog(blogs[0], $('#blog-highlight .row'));

        activateEvents(blogs);
    }
};
blogRequest.open("GET", "assets/js/blogs.json", true);
blogRequest.send();