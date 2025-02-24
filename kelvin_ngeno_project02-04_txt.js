/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: kelvin ngeno
      Date:   

      Filename: project02-04.js
 */
 




// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
   return "$" + value.toFixed(2);
}

CHICKEN_PRICE = 10.95;
HALIBUT_PRICE = 13.95;
BURGER_PRICE = 9.95;
SALMON_PRICE = 18.95;
SALAD_PRICE = 7.95;
SALES_TAX = 0.07;;
 
document.getElementById("halibut").onclick = calcTotal;
document.getElementById("chicken").onclick = calcTotal;
document.getElementById("burger").onclick = calcTotal;
document.getElementById("salmon").onclick = calcTotal;
document.getElementById("salad").onclick = calcTotal;

function calcTotal() {
   var cost =0
   var buyChicken=document.getElementById("chicken").checked;
   var buyHalibut=document.getElementById("halibut").checked;
   var buyBurger=document.getElementById("burger").checked;
   var buySalmon=document.getElementById("salmon").checked;
   var buySalad=document.getElementById("salad").checked;

   cost += buyChicken?CHICKEN_PRICE:0;
   cost += buyHalibut?HALIBUT_PRICE:0;
   cost += buyBurger?BURGER_PRICE:0;
   cost += buySalmon?SALMON_PRICE:0;
   cost += buySalad?SALAD_PRICE:0;

   document.getElementById("foodTotal").innerHTML=formatCurrency(cost);
   var tax = cost * SALES_TAX;
   document.getElementById("foodTax").innerHTML=formatCurrency(tax);
   var totalCost = cost + tax;
   document.getElementById("totalBill").innerHTML=formatCurrency(totalCost);
}

