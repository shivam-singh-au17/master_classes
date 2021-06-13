

var products = {
    categoriesItems: [],
    addProducts: function (name, category, price) {
        var items = { Name: name, Category: category, Price: price };
        this.categoriesItems.push(items);
    },

    leastPriced: function () {
        for (var i = 0; i < this.categoriesItems.length; i++) {
           
            var commanEle = []
            for (key1 in this.categoriesItems[i]) {
                for (key2 in this.categoriesItems[i]) {
                    if (this.categoriesItems[i][key1] == this.categoriesItems[i][key2]) {
                        commanEle.push(this.categoriesItems[i][key1]);
                    }
                }
            }
            console.log(commanEle);
        }
      
    }

}

products.addProducts("OnePlus", "Electronics", 29000)
products.addProducts("Coffee", "Grocery", 400)
products.addProducts("Pen", "Office", 30)
products.addProducts("Book", "Office", 60)
products.addProducts("Rice", "Grocery", 100)
products.addProducts("Earphones", "Electronics", 1000)

products.leastPriced()

// console.log(products);

