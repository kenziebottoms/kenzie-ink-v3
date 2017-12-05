"use strict";

function getCard(blog) {
    let card = `<div class="col">
        <article class="card" id="post-${blog.id}">
            <div class="card-body">
                <h4 class="card-title">
                    ${blog.title}
                </h4>
                <h6 class="card-subtitle mb-2 text-muted">
                    ${blog.date}
                </h6>
                <p class="card-text">
                    ${blog.content}
                </p>
            </div>
        </article>
    </div>`;
    return card;
}

function populatePage(blogs) {
    // populate small blog posts
    blogs.forEach(function(element, index) {
        // add a new row for every third element
        if (index%3 == 0) {
            $('#blog-holder').append($('<div>',{class:'row'}));
        }
        // add each blog
        $('#blog-holder .row:last-child').append(getCard(blogs[index]));
    });
    // populate #blog-highlight
    $('#blog-highlight .row').append(getCard(blogs[0]));
}

module.exports = {populatePage, getCard};