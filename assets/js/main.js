$(document).ready(function() {
    let blogs = [];

    let blogRequest = new XMLHttpRequest();
    blogRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(this.responseText);
            blogs = response["blogs"];
            console.log(blogs);
            blogs.forEach(function(element, index) {
                if (index%3 == 0) {
                    $('#blog-holder').append($('<div>',{class:'row'}));
                }
                addBlog(blogs[index]);
            });
        }
    };
    blogRequest.open("GET", "assets/js/blogs.json", true);
    blogRequest.send();
});

function addBlog(blog) {
    $('<div>',{class:'col'})
        .append(
            $('<article>',{
                class: 'card'
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
    .appendTo($('#blog-holder .row:last-child'));
}