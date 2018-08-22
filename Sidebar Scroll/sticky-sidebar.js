$( document ).ready(function() {
    var sidebar = new StickySidebar('.sidebar', {
        topSpacing: 10,
        bottomSpacing: 20,
        containerSelector: '.main-content',
        innerWrapperSelector: '.sidebar__inner'
    });
    $('#sidebar').stickySidebar({
        topSpacing: 60,
        bottomSpacing: 60
    });
});