"use strict";

const getCard = (blog, excerpt) => {
    if (!blog.excerpt) {
        let space = blog.content.indexOf(" ", 70);
        blog.excerpt = blog.content.substring(0, space) + "...";
    }
    const blogTemplate = require("../templates/blog.hbs");
    let card = blogTemplate({blog, excerpt});
    return card;
};

const populatePage = blogs => {
    // populate small blog posts
    blogs.forEach((element, index) => {
        // add each blog
        $('#blog-holder').append(getCard(blogs[index], true));
    });
    // populate #blog-highlight
    $('#blog-highlight').append(getCard(blogs[0], false));
};

module.exports = {populatePage, getCard};