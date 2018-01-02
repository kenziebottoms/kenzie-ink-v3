"use strict";

const activateEvents = blogs => {
    activateSearch(blogs);
    activateBlogCards(blogs);
};

// add keyup listener to search field
const activateSearch = blogs => {
    $('#search-blogs').keyup(function() {
        $('#blog-holder .card').removeClass("failed-search");
        let term = $(this).val();
        let re = new RegExp(term, "i");
        $.each(blogs, function(index) {
            let blog = blogs[index];
            if (blog.tags.join(",").search(re) == -1) {
                $(".card#post-"+blog.id).addClass("failed-search");
            }
        });
    });
};

// add click listeners to each blog
const activateBlogCards = blogs => {
    const domController = require("./dom");
    $('#blog-holder .card').click(function() {
        let targetPostId = parseInt($(this).attr('id').substr(5));
        let newBlog = blogs.filter(blog => blog.id == targetPostId)[0];
        $('#blog-highlight').empty();
        $('#blog-highlight').append(domController.getCard(newBlog, false));
    });
};

module.exports = {activateEvents};