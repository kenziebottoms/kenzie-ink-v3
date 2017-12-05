"use strict";

function activateEvents(blogs) {
    const domController = require("./dom");

    // add click listeners to each blog
    $('#blog-holder .card').click(function() {
        let targetPostId = parseInt($(this).attr('id').substr(5));
        let newBlog = blogs.filter(blog => blog.id == targetPostId)[0];
        $('#blog-highlight .row').empty();
        domController.addBlog(newBlog, $('#blog-highlight .row'));
    });

    // add keyup listener to search field
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

module.exports = {activateEvents};