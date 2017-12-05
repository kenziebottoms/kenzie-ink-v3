(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./dom":2,"./events":3}],2:[function(require,module,exports){
"use strict";

function getCard(blog) {
    let card = `<article class="card" id="post-${blog.id}">
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
    </article>`;
    return card;
}

function populatePage(blogs) {
    // populate small blog posts
    blogs.forEach(function(element, index) {
        // add each blog
        $('#blog-holder').append(getCard(blogs[index]));
    });
    // populate #blog-highlight
    $('#blog-highlight').append(getCard(blogs[0]));
}

module.exports = {populatePage, getCard};
},{}],3:[function(require,module,exports){
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
        let re = new RegExp(term, "i");
        $.each(blogs, function(index) {
            let blog = blogs[index];
            if (blog.title.search(re) == -1 && blog.content.search(term) == -1) {
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
        $('#blog-highlight').empty();
        $('#blog-highlight').append(domController.getCard(newBlog));
    });
}

module.exports = {activateEvents};
},{"./dom":2}],4:[function(require,module,exports){
"use strict";

const factory = require("./blogFactory");

factory.fetchBlogs("assets/js/blogs.json");
},{"./blogFactory":1}]},{},[4]);
