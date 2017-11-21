$(document).ready(function() {
    $('#blog-holder').append($('<div>',{class:'row'}));
    addBlog("Personal site progress","November 21, 2017","I'm enjoying experimenting with Bootstrap here, but I am really ready to move to single-page applications, if, as it's been implied, that means we can refactor our structural HTML (separate out headers and footers).", $('#blog-holder .row:last-child'));
    addBlog("Company site redo","November 21, 2017","I'm looking forward to redoing this projects, especially if we can do it as a SPA. Not that I'm 100% sure what that means at this point.", $('#blog-holder .row:last-child'));
    addBlog("Git shaming","November 21, 2017","I was thoroughly and rightly shamed yesterday for reviewing and merging my own pull requests.", $('#blog-holder .row:last-child'));
    $('#blog-holder').append($('<div>',{class:'row'}));
    addBlog("Lorem ipsum","November 21, 2017","Dignissim vel platea ultrices integer mattis duis montes mauris et dis nisi? Ac pid nec. Aliquam. Porttitor? Pulvinar etiam risus, dictumst. Mattis dignissim, in mid mus, vel nascetur pulvinar dolor.", $('#blog-holder .row:last-child'));
    addBlog("Lorem ipsum","November 21, 2017","Dignissim vel platea ultrices integer mattis duis montes mauris et dis nisi? Ac pid nec. Aliquam. Porttitor? Pulvinar etiam risus, dictumst. Mattis dignissim, in mid mus, vel nascetur pulvinar dolor.", $('#blog-holder .row:last-child'));
    addBlog("Lorem ipsum","November 21, 2017","Dignissim vel platea ultrices integer mattis duis montes mauris et dis nisi? Ac pid nec. Aliquam. Porttitor? Pulvinar etiam risus, dictumst. Mattis dignissim, in mid mus, vel nascetur pulvinar dolor.", $('#blog-holder .row:last-child'));
});

function addBlog(title, date, content, location) {
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
                    }).html(title)
                ).append(
                    $('<h6>', {
                        class: 'card-subtitle mb-2 text-muted'
                    }).html(date)
                ).append(
                    $('<p>',{
                        class: 'card-text'
                    }).html(content)
                )
            )
        )
    .appendTo(location);
}