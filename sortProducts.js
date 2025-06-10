
const sortProducts=(products)=> {
    let copyProducts=[...products]
   copyProducts.sort((a,b)=>{
        return a.price-b.price;
    })
    return copyProducts;
}
console.log(sortProducts([{name:"apple",price:5000},
                          {name:"orange",price:150},
                          {name:"potatoes",price:600},
                          {name:"barger",price:10000}
                        
]));