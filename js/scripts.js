

let size_price, crust_price, topping_price;
let total = 0;
function pizzaOrder(name, size, crust, topping, total) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;

}

$(document).ready(function (event) {
    $("#total").click(function (event) {
    
        $("#pizzaOrder").show;
        event.preventDefault()
    });    
    $("#total").click(function (event){
        let pName = $("#flavors option:selected").val();
        let pTopping = $("#toppings option:selected").val();
        let pSize = $("#sizes option:selected").val();
        let pCrust = $("#crusts option:selected").val();
        
            
            
        switch (pSize) {
            case "0":
                price = 0;
                break;
            case "large":
                price = 1500;
                console.log(price)
                break
            case "medium":
                price = 1000;
                console.log("The price is " + price)
                break
            case "small":
                price = 700;
                console.log(price)
                break
            default:
                console.log("error")
        }

        
        switch (pCrust) {
            case "0":
                crust_price = 0;
                break;
            case "Crispy":
                crust_price = 30;
                console.log(crust_price)
                break;
            case "Stuffed":
                crust_price = 40;
                break;
            case "Gluten-free":
                crust_price = 20;
                break;
            default:
                console.log("No price");
        }
            
        switch (pTopping) {
            case "0":
                topping_price = 0;
                break;
            case "Sausage":
                topping_price = 100;
                console.log(topping_price)
                break;
            case "Pepperoni":
                topping_price = 70;
                break;
            case "Mushroom":
                topping_price = 50;
                break;
            case "Cheese":
                topping_price = 50;
                break;
            case "Onion":
                topping_price = 30;
                break; 
            default:
                console.log("No price");
        }
        
         
    
        if ((pSize === "0") && (pCrust == "0") && (pTopping== "0")) {
            alert("please select pizza size and crust")
        } else {
            $(".list").show();{
              
            }
   
            // $("#pizzaOrder").show();{
                // return pizzaOrder()
            //     console.log(pizzaOrder());
            // };
    event.preventDefault();
    };
    
    total = price + crust_price + topping_price;
    console.log(total)
    let checkoutTotal = 0;
    checkoutTotal += total
    
    $("#pizzaName").text(pName);
    $("#pizzaTopping").text(pTopping);
    $("#pizzaSize").text(pSize);
    $("#pizzaCrusts").text(pCrust);
    $("#totals").text(total);

    $(".list").append(
    
        '<li><li + id="pizzaOrder">' 
        +
        '</li><li id="pizzaName">' 
        +
        '</li><li id="pizzaSize">' +
       
        '</li><li id="pizzaCrust">' +
       
        '</li><li id="pizzaTopping">' +
        
        '</li><li id="totals">' +
        
        "</li></ul>"
    );
    // console.log(#listings);
    event.preventDefault();
});

            $("#checkout").click(function (event) {
                console.log("Your total bills is sh. " + checkoutTotal);
                $("#pizzatotal").append("Your bills is sh." + checkoutTotal);
                event.preventDefault();
            });
        });
// event.preventDefault();

   





function sumTable() {
    var all = 0;
    $(".checkoutTotal").each(function () {
      all += parseFloat($(this).text());
    });
    $('#pizzatotal').text(all);
}
  function deliver() {
    var fName = $("#firstNames").val();
    var lName = $("#lastName").val();
    var address = $("#homeAddress").val() 
        
      
    }
    alert(` Thank you ${fName + lName}for choosin hot pizza. Your order will be delivered at ${address}')
 





//