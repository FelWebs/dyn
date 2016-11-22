var buildPage = function (page) {
    "use strict";
    document.title = page.title + " - " + document.title;
    $("main section h2").html(page.title);
    $("main section").append(page.content);
};