let blogs = [];

// fetch blogs from blogs.json
let blogRequest = new XMLHttpRequest();
blogRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        blogs = response["blogs"];
        console.log(blogs);
        // add each blog to #blog-holder
        blogs.forEach(function(element, index) {
            if (index%3 == 0) {
                // add a new row for every third element
                $('#blog-holder').append($('<div>',{class:'row'}));
            }
            // add each blog
            addBlog(blogs[index], $('#blog-holder .row:last-child'));
        });
        // populate #blog-highlight
        addBlog(blogs[0], $('#blog-highlight .row'));

        // add click listeners to each blog
        $('#blog-holder .card').click(function() {
            let targetPostId = parseInt($(this).attr('id').substr(5));
            let newBlog = blogs.filter(blog=>blog.id == targetPostId)[0];
            $('#blog-highlight .row').empty();
            addBlog(newBlog, $('#blog-highlight .row'));
        });
    }
};
blogRequest.open("GET", "assets/js/blogs.json", true);
blogRequest.send();

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