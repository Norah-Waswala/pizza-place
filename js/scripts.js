$(document).ready(function() {
    $(".home").click(function() {
      $("#home1").toggle();
      $(".home").toggle();
    });
    // $("#home1").click(function(){
    //     $(".home").toggle();
    //     $("#home1").toggle();

    // });
    $(".home").click(function() {
      $("body").css("background-color","red")

    })
});