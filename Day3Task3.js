document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "Chair", image: "Chair.jpg", price: "Rs.500" },
        { name: "Product 2", image: "product2.jpg", price: "$24.99" },
        { name: "Product 3", image: "product3.jpg", price: "$29.99" }
        // Add more products as needed
    ];

    const productContainer = document.getElementById("product-container");

    // Dynamically create product cards
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement("h2");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.classList.add("price");
        productPrice.textContent = product.price;

        const buyNowButton = document.createElement("button");
        buyNowButton.classList.add("buy-now");
        buyNowButton.textContent = "Buy Now";

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(buyNowButton);

        productContainer.appendChild(productCard);
    });
});
