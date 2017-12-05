"use strict";

require("./blogFactory.js");
require("./events.js");

console.log("activating blogFactory() from main.js");
let blogs = blogFactory();
activateEvents(blogs);

const addBlog = (blog, loc) => {
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
};