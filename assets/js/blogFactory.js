"use strict";

// fetch and return blogs from filePath, or false
const fetchBlogs = filePath => {
    return new Promise((resolve, reject) => {
        $.ajax({url: filePath})
        .done(result => resolve(result))
        .fail(error => reject(error));
    });
};

const refreshPage = filePath => {
    const domController = require("./dom");
    const events = require("./events");
    fetchBlogs(filePath).then(response => {
        domController.populatePage(response.blogs);
        events.activateEvents(response.blogs);
    });
};

module.exports = {refreshPage};