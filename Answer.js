
function managesCart(){
let Cart =["Apples","Bananas","Bread","Milk"];
 let removedItem =Cart.pop()

return {
    totalItems: Cart.length,
    items : Cart,
    removedItem: removedItem,
}
}
console.log(managesCart())

