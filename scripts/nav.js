import '../libs/select2/select2.min.js';                       // globally assign select2 
function loadNav() {
    $("#nav-placeholder").load("../html/nav.html");
}

function includes() {
    $('head').append('<link rel="stylesheet" type="text/css" href="../styles/nav.css">');
}

function loadSearch() {
    $('#search-input-nav').select2({
        placeholder: 'Select an option'
    });
}

$('.select2-selection__rendered').css('color', 'red')
var dfd = $.Deferred();

dfd.done(includes, loadNav).done(loadSearch);

dfd.resolve();



