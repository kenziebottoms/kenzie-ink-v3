"use strict";

// fetch and return blogs from filePath, or false
const fetchBlogs = filePath => {
    const domController = require("./dom");
    const events = require("./events");
    let blogRequest = new XMLHttpRequest();
    blogRequest.onreadystatechange = () => {
        if (blogRequest.readyState == 4 && blogRequest.status == 200) {
            let response = JSON.parse(blogRequest.responseText);
            let blogs = response.blogs;
            domController.populatePage(blogs);
            events.activateEvents(blogs);
        }
    };
    blogRequest.open("GET", filePath, true);
    blogRequest.send();
};

module.exports = {fetchBlogs};