// $(document).ready(function() {
//     $(".home").click(function() {
//       $("#home1").toggle();
//       $(".home").toggle();
//     });
//     // $("#home1").click(function(){
//     //     $(".home").toggle();
//     //     $("#home1").toggle();

//     // });
//     $(".home").click(function() {
//       $("body").css("background-color","red")

//     })
// });
//message alert
var selectedValues = {};

function radioClicked(rb) {
  if (selectedValues[rb.name] === undefined) {
    selectedValues[rb.name] = rb.value;
    doTableProcessing();
  }
  else {
    alert("You can't change the selected values");
    document.getElementById(rb.name + selectedValues[rb.name]).checked = true;
  }
}
