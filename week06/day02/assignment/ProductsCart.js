
var product = {

    NameQtyPrice: [],
    addNQP: function (name, quantity, price) {
        this.NameQtyPrice.push({ Nmae: name, Quantity: quantity, Price: price });
    },

    total: function () {
        var sumQuantity = this.NameQtyPrice.map(function (ac) {
            return ac.Quantity * ac.Price
        })
        var sumPrice = sumQuantity.reduce(function (ac, el) {
            return ac + el
        }, 0)
        return sumPrice;
    }

}

product.addNQP("Rice", 2, 60);
product.addNQP("Dal", 3, 50);
product.addNQP("Salt", 1, 20);
product.addNQP("juse", 2, 30);

console.log(product.NameQtyPrice);

console.log(product.total());



