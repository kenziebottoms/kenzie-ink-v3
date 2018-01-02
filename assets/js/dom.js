"use strict";

function getCard(blog, excerpt) {
    if (!blog.excerpt) {
        let space = blog.content.indexOf(" ", 70);
        blog.excerpt = blog.content.substring(0, space) + "...";
    }
    let card = `<article class="card" id="post-${blog.id}">
        <div class="card-body">
            <h4 class="card-title">
                ${blog.title}
            </h4>
            <h6 class="card-subtitle mt-1 mb-2 text-muted">
                ${blog.date}
            </h6>
            <p class="card-text">
                ${excerpt ? blog.excerpt : blog.content}
            </p>`;
            if (blog.tags.length != 0) {
                card += `<nav class="tags">
                    <ul class="pagination">`;
                        blog.tags.forEach(tag => {
                            card += `<li class="page-item"><span class="page-link">${tag}</span></li>`;
                        });
                    card += `</ul>
                </nav>`;
            }
        card += `</div>
    </article>`;
    return card;
}

function populatePage(blogs) {
    // populate small blog posts
    blogs.forEach(function(element, index) {
        // add each blog
        $('#blog-holder').append(getCard(blogs[index], true));
    });
    // populate #blog-highlight
    $('#blog-highlight').append(getCard(blogs[0], false));
}

module.exports = {populatePage, getCard};