
//business logic
function pizzaOrder(flavors,toppings,sizes,crusts,quantity) {
this.flavors= flavors;
this.toppings=toppings;
this.sizes=sizes;
this.crusts=crusts;
this.quantity=quantity
}
function priceCheck(toppingsPrice,sizesPrice,crustsPrice,quantity){
  // this.flavorsPrice= flavorsPrice;
  this.toppingsPrice=toppingsPrice;
  this.sizesPrice=sizesPrice;
  this.crustsPrice=crustsPrice;
  this.quantityPrice=quantityPrice
}
var flavors=["ChickenHawaiian","CheeseBurger","MeatDeluxe","ChickenBeefPepperoni","SpicyBoerewors"]
var toppings=["Sausage","Pepperoni","Mushroom","Extracheese","Onion"]
var toppingsPrice=[100,70,50,50,30]
var sizes=["large","medium","small"]
var sizesPrice=[1500,1000,700]
var crusts=["crispy","stuffed","glutenFree"]
var crustsPrice=[30,40,20]

priceCheck.prototype.totalAmount=function(){
  return(this.flavorsPrice + this.toppingsPrice + this.sizesPrice + this.crustsPrice) *this.quantity
}
// // user interface logic
// $("document").ready(function(){
// $("#remarks").click(function(event){
//   event.preventDefault();
//   total()
// })
// })


// pizza.prototype.pizzaOrder= function(){
//   this.flavor + this.toppings + this.sizes + this.crusts + this.total
// }
// console.log(pizzaOrder)
