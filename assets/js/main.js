$(document).ready(function() {
    var blogs = [
        {
            title: "Personal site progress",
            date: "November 21, 2017",
            content: "I'm enjoying experimenting with Bootstrap here, but I am really ready to move to single-page applications, if, as it's been implied, that means we can refactor our structural HTML (separate out headers and footers)."
        },
        {
            title: "Company site redo",
            date: "November 21, 2017",
            content: "I'm looking forward to redoing this projects, especially if we can do it as a SPA. Not that I'm 100% sure what that means at this point."
        },
        {
            title: "Git shaming",
            date: "November 21, 2017",
            content: "I was thoroughly and rightly shamed yesterday for reviewing and merging my own pull requests."
        },
        {
            title: "Lorem ipsum",
            date: "November 21, 2017",
            content: "Dignissim vel platea ultrices integer mattis duis montes mauris et dis nisi? Ac pid nec. Aliquam. Porttitor? Pulvinar etiam risus, dictumst. Mattis dignissim, in mid mus, vel nascetur pulvinar dolor."
        },
        {
            title: "Lorem ipsum",
            date: "November 21, 2017",
            content: "Dignissim vel platea ultrices integer mattis duis montes mauris et dis nisi? Ac pid nec. Aliquam. Porttitor? Pulvinar etiam risus, dictumst. Mattis dignissim, in mid mus, vel nascetur pulvinar dolor."
        },
        {
            title: "Lorem ipsum",
            date: "November 21, 2017",
            content: "Dignissim vel platea ultrices integer mattis duis montes mauris et dis nisi? Ac pid nec. Aliquam. Porttitor? Pulvinar etiam risus, dictumst. Mattis dignissim, in mid mus, vel nascetur pulvinar dolor."
        }
    ]
    for (var i=0;i<blogs.length;i++) {
        if (i%3 == 0) {
            $('#blog-holder').append($('<div>',{class:'row'}));
        }
        addBlog(blogs[i]);
    }
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