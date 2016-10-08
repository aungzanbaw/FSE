function Cart(){
 this.items = []  // can't access by global

 Cart.prototype.addItem = (name,price) => {
    items.push({
      name:name,
      price: price
    })
  }

  Cart.prototype.total = () => {
    return items.reduce((a,b) => {
      return a + b.price
    },0)
  }
}

module.exports = Cart;

/*
* let module = {
*   exports: {}
* }
*/
