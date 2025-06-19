const userCart = [
    {product_Id : 1,product_Name : "mobile", price : 12000},
    {product_Id : 2,product_Name : "TV", price : 22000},
    {product_Id : 3,product_Name : "Laptop", price : 35000},
    {product_Id : 4,product_Name : "charger", price : 1000},

]
// we can also pass initial value in reduce
const cartTotal = userCart.reduce((totalPrice,currentProduct)=>{
     return totalPrice + currentProduct.price ;
},0);