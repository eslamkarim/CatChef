import '../libs/select2/select2.min.js';                       // globally assign select2 
function loadNav() {
    $("#nav-placeholder").load("../html/nav.html");
}

function includes() {
    $('head').append('<link rel="stylesheet" type="text/css" href="../libs/select2/select2.min.css">');
}

function loadSearch() {
    $('#search-input-nav').select2({
        placeholder: 'Select an option'
    });
}

var dfd = $.Deferred();

dfd.done(includes, loadNav).done(loadSearch);

dfd.resolve();



