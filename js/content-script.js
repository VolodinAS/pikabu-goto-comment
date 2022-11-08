
let MAIN = chrome.i18n.getMessage("main");

let COMMENT_FIELD_TAG = "section"
let COMMENT_FIELD_CLASS = "section_padding_none"

let POST_BUTTON_TAG = "div"
let POST_BUTTON_CLASS = "story__footer"
/*
// let MAIN = '123';
let JQUERY_LOADED = false;
let MSG_JQUERY_NOT_LOADED = chrome.i18n.getMessage("noJquery")
// let MSG_JQUERY_NOT_LOADED = '123123';

window.onload = function() {
    if (window.jQuery) {
        // jQuery is loaded
        JQUERY_LOADED = true
    } else {
        // jQuery is not loaded
        myLog(MSG_JQUERY_NOT_LOADED)
    }
}

if (JQUERY_LOADED)
{
    $( document ).ready(function()
    {

    });
}
*/

function scrollToField()
{
    $([document.documentElement, document.body]).animate({
        scrollTop: $(COMMENT_FIELD_TAG + '.' + COMMENT_FIELD_CLASS).offset().top - 500
    }, 0);
}

function myLog(msg)
{
    console.log('<'+MAIN+'>')
    console.log(msg)
    console.log('</'+MAIN+'>')
}

$( document ).ready(function()
{
    myLog('IM INTEGRATED');

    initButton();
});

function initButton()
{
    let btn = $('#ps2c');
    if (btn.length === 0)
    {
        $(POST_BUTTON_TAG + '.' + POST_BUTTON_CLASS).append('<span class="button-group button-group_success"><button id="ps2c">Комментировать</button></span>');
        btn = $('#ps2c');
    }
    $('#ps2c').unbind('click');
    $('#ps2c').click(function(e)
    {
        e.preventDefault();
        let THIS = $(this);
        scrollToField();
        $('.input__box').click()
    });
}