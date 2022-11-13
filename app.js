const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Dress",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 180,
      cat: "Dress",
    },
    {
      id: 2,
      name: "Timex Men's Expedition Scout ",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 40,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 16,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 99,
      cat: "Casual",
    },
  ];

  const productsContainer=document.querySelector(".products")
  const categoriesContainer= document.querySelector(".cats");
  const searchInput= document.querySelector(".searchInput");
  const priceInput= document.querySelector(".priceRange");
  const priceValue= document.querySelector(".priceValue");

  


  const displayProducts=(filteredProducts)=>{
    const allCategories= data.map((item)=>item.cat);
        productsContainer.innerHTML=
        filteredProducts.map((product,index)=>
        `
        <div class="product">
            <img src="${product.img}" alt="">
            <span class="name">${product.name}</span>
            <span class="price">₹${product.price}</span>
        </div>
        `
    ).join("")
  }

  const displayCategories=()=>{

    const allCategories= data.map((item)=>item.cat);
    const categories=["All",...allCategories.filter((item,index)=>allCategories.indexOf(item)===index)]
    
    categoriesContainer.innerHTML=
    categories.map((cat,index)=>
        `
        <div class="cat">${cat}</div>
        `
    ).join("")

  }
  const setPrices=()=>{
    const allPrices= data.map((item)=>item.price);

    const minPrice= Math.min(...allPrices)
    const maxPrice= Math.max(...allPrices)

    priceInput.min=minPrice;
    priceInput.max=maxPrice;
    priceInput.value=maxPrice
    priceValue.textContent= "₹"+maxPrice

  }


//Search
searchInput.addEventListener("keyup",(e)=>{
    
    let value=e.target.value.toLowerCase();
    let filteredProducts=[];

    if(value){
        filteredProducts= data.filter((product)=>
            product.name.toLowerCase().includes(value)
        )
    }
    else{
        filteredProducts=data;
    }
    displayProducts(filteredProducts);
})

categoriesContainer.addEventListener("click",(e)=>{
    const selectedCategory= e.target.textContent;

    selectedCategory==="All"?  displayProducts(data): displayProducts(data.filter(item=>item.cat===selectedCategory));
})

priceInput.addEventListener("input",(e)=>{
    let selectedPrice= e.target.value;
    priceValue.textContent= "₹"+selectedPrice

    const filteredProducts= data.filter((item,index)=>{
        return item.price<=selectedPrice
    })
    displayProducts(filteredProducts);

})


displayProducts(data);
displayCategories();
setPrices();