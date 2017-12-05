"use strict";

function blogFactory() {
    const domController = require("./dom");

    let blogs = [];
    
    // fetch blogs from blogs.json
    let blogRequest = new XMLHttpRequest();
    blogRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);
            blogs = response.blogs;
            // add each blog to #blog-holder
            blogs.forEach(function(element, index) {
                if (index%3 == 0) {
                    // add a new row for every third element
                    $('#blog-holder').append($('<div>',{class:'row'}));
                }
                // add each blog
                domController.addBlog(blogs[index], $('#blog-holder .row:last-child'));
            });
            // populate #blog-highlight
            domController.addBlog(blogs[0], $('#blog-highlight .row'));
            console.log("returning blogs from blogFactory()");
            return blogs;
        }
    };
    blogRequest.open("GET", "assets/js/blogs.json", true);
    blogRequest.send();
}