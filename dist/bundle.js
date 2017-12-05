(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function blogFactory(filePath) {
    const domController = require("./dom");

    let blogs = [];
    
    // fetch blogs from blogs.json
    let blogRequest = new XMLHttpRequest();
    blogRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);
            blogs = response.blogs;
            // add each blog to #blog-holder
            blogs.forEach(function(element, index) {
                if (index%3 == 0) {
                    // add a new row for every third element
                    $('#blog-holder').append($('<div>',{class:'row'}));
                }
                // add each blog
                domController.addBlog(blogs[index], $('#blog-holder .row:last-child'));
            });
            // populate #blog-highlight
            domController.addBlog(blogs[0], $('#blog-highlight .row'));
            console.log("returning blogs from blogFactory()");
            return blogs;
        }
    };
    blogRequest.open("GET", filePath, true);
    blogRequest.send();
}

module.exports = {blogFactory};
},{"./dom":2}],2:[function(require,module,exports){
"use strict";

function addBlog(blog, loc) {
    $('<div>',{class:'col'})
        .append(
            $('<article>',{
                class: 'card',
                id: `post-${blog.id}`
            }).append(
                $('<div>',{
                    class: 'card-body'
                }).append(
                    $('<h4>',{
                        class: 'card-title'
                    }).html(blog.title)
                ).append(
                    $('<h6>', {
                        class: 'card-subtitle mb-2 text-muted'
                    }).html(blog.date)
                ).append(
                    $('<p>',{
                        class: 'card-text'
                    }).html(blog.content)
                )
            )
        )
    .appendTo(loc);
}

module.exports = {addBlog};
},{}],3:[function(require,module,exports){
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
},{"./dom":2}],4:[function(require,module,exports){
"use strict";

const factory = require("./blogFactory");
const events = require("./events");
const domController = require("./dom");

let blogs = factory.blogFactory("assets/js/blogs.json");
events.activateEvents(blogs);
},{"./blogFactory":1,"./dom":2,"./events":3}]},{},[4]);
