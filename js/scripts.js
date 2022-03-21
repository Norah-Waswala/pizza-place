
//business logic
function pizza(flavors,toppings,sizes,crusts,total) {
this.flavors= flavors;
this.toppings=toppings;
this.sizes=sizes;
this.crusts=crusts;
this.total=total;
}
pizza.prototype.pizzaOrder= function(){
  this.flavor + this.toppings + this.sizes + this.crusts + this.total
}
console.log(pizzaOrder)
// $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
// //user interface logic
// $(document).ready(function() {
//   $("form#new-contact").submit(function(event) {
//     event.preventDefault();

//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();