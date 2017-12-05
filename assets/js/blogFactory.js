"use strict";

// fetch and return blogs from filePath, or false
function fetchBlogs(filePath) {
    const domController = require("./dom");
    const events = require("./events");
    let blogRequest = new XMLHttpRequest();
    blogRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);
            let blogs = response.blogs;
            domController.populatePage(blogs);
            events.activateEvents(blogs);
        } else {
            console.log(`blogRequest ready state: ${this.readyState}`);
        }
    };
    blogRequest.open("GET", filePath, true);
    blogRequest.send();
}

module.exports = {fetchBlogs};