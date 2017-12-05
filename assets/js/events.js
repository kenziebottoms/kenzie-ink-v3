"use strict";

function activateEvents(blogs) {
    activateSearch(blogs);
    activateBlogCards(blogs);
}

// add keyup listener to search field
function activateSearch(blogs) {
    $('#search-blogs').keyup(function() {
        $('#blog-holder .card').removeClass("failed-search");
        let term = $(this).val();
        $.each(blogs, function(index) {
            let blog = blogs[index];
            if (blog.title.search(term) == -1 && blog.content.search(term) == -1) {
                $(".card#post-"+blog.id).addClass("failed-search");
            }
        });
    });
}

// add click listeners to each blog
function activateBlogCards(blogs) {
    const domController = require("./dom");
    $('#blog-holder .card').click(function() {
        let targetPostId = parseInt($(this).attr('id').substr(5));
        let newBlog = blogs.filter(blog => blog.id == targetPostId)[0];
        $('#blog-highlight .row').empty();
        $('#blog-highlight .row').append(domController.getCard(newBlog));
    });
}

module.exports = {activateEvents};