//create products and store it on the local storage

let products = JSON.parse(localStorage.getItem("products")) ||
  // ? JSON.parse(localStorage.getItem("products"))
  
    [
        {
          id: 1,
          productName: "Kids Set",
          category: "Sublimation",
          description:
            "Polymer cup , bowl , plate and cutlery set. Perfect for kids learning how to eat on their own",
          amount: 350.0,
          img_url: "https://nickisamantha.github.io/allImages/images/logo.png",
        },
        {
          id: 2,
          productName: "Mug",
          category: "Sublimation",
          description: "Ceremic glass mugs. Standard mug size that includes a custom print of your choice. ",
          amount: 150.0,
          img_url:
            "https://nickisamantha.github.io/allImages/images/nickical.png",
        },
        {
          id: 3,
          productName: "Kids Tshirt",
          category: "Vinyl Print",
          description:
            "Choose your favorite design, color and placement to have a custom designed T-shirt for kids. We have sizes available for all kids aged 12 months - 13 years old. All Tshirts are 100% Cotton. Tshirt color ranges are Red, Black, White , Grey, Blue and Yellow.",
          amount: 250.0,
          img_url: "https://nickisamantha.github.io/allImages/images/rin.png",
        },
        {
          id: 4,
          productName: "Adult Tshirt",
          category: "Vinyl Print",
          description:
            "Choose your favorite design, color and placement to have a custom designed T-shirt for Adults. We have sizes available from SS - XXXL. All Tshirts are 100% Cotton. Tshirt color ranges are Red, Black, White , Grey, Blue and Yellow.",
          amount: 350.0,
          img_url:
            "https://nickisamantha.github.io/allImages/images/nickikey.png",
        },
        {
          id: 5,
          productName: "Keyrings",
          category: "Vinyl Print",
          description: "",
          amount: 350.0,
          img_url:
            "https://nickisamantha.github.io/allImages/images/nickiflex.png",
        },
      ]

      localStorage.setItem("product", JSON.stringify(products))

      //Current Year 
      document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()

      function recentProducts() {
        try {
          let arrSize = products.length
        let latestProducts = products.reverse().slice(0, arrSize >> 1)
        let wrapper = document.querySelector('[recentProducts]');
        
        latestProducts.forEach(product => {
          wrapper.innerHTML += `
        <div class="card"> 
        <img src="${product.img_url}"
        class="card-img-top" alt="${product.productName}" 
        loading='lazy'>
        <div class="card-body">
        <h5 class="card-title">${product.productName}</h5>
        <p class="card-text">${product.description}</p>
  </div>
</div>
        `;
        });
        } catch (e) {
          wrapper.textContent = "Please contact our administrator."
          setTimeout(()=> {
            location.reload()
          },
        2000
      )
        }
        
      }
      recentProducts()

      //current year 
      
      // function recentProducts() {
      //   try {
      //     let arrSize = product.length
      //     let latestProducts = products.reverse().slice(0, arrSize >> 1)
      //     latestProducts.forEach(prosuct => {
      //       wrapper.innerHTML +=`
      //       <div class="card">
      //
      //       </div>`
      //     })
      //   }
      // }
    
