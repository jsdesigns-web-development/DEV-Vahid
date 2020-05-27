function checkWidth() {
    if($(window).width() < 992){
        $('#line1').show();
        $('#line2').show();
    } else {
        $('#line1').hide();
        $('#line2').hide();
    }
}