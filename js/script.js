// returns a random number between min and max
function getRandomNumberBetween(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// return random dark-violate colors. val and alpha controls brightness
function getRandomColorWithAlpha(alpha = 0.4, add = 70) {
  let r = getRandomNumberBetween(30, 50) + add;
  let g = getRandomNumberBetween(50, 60) + add;
  let b = getRandomNumberBetween(65, 85) + add;
  let rgb = `rgb(${r}, ${g}, ${b}, ${alpha})`;
  console.log(rgb);
  return rgb;
}

//adds product to product list with a random bgcolor
function addProduct(title, des, price) {
  let productList = document.getElementById("product-list");
  let randColor = getRandomColorWithAlpha(0.5);
  productList.appendChild(getProductElement(title, des, price, randColor));
}

addProduct(
  "Pen", 
  "Matador High School ball pen.", 
  "10"
);
addProduct(
  "Sharpener",
  "A premium quality sharpener with screw-on lid, prevents accidental openings",
  "20"
);
addProduct(
  "Rubber", 
  "A clean soft rubber with a pleasant fragnance", 
  "5"
);
addProduct(
  "A4 papers (500 Sheets)",
  "Offset Paper, A4, 80 GSM (Pack of 500 Sheets)",
  "500"
);
addProduct(
  "Pencil 2B",
  "A break-resistant lead made pencil for elegant writing",
  "20"
);


// make a product element to be shown in product list with DOM
function getProductElement(title, description, price, bgcolor) {
  // <li class="list-group-item">
  //   <div class="card" style = "background-color: ${bgcolor}">
  //     <div class="card-body">
  //       <h5 class="card-title">${title}</h5>
  //       <p class="card-text">
  //         ${description}
  //       </p>
  //       <a class="price">Price: $${price}</a>
  //       <a href="#" class="btn float-right add-to-cart">Add To Cart</a>
  //     </div>
  //   </div>
  // </li>

  let productElement = document.createElement("li");
  productElement.className = "list-group-item borderless";

  let card = document.createElement("div");
  card.className = "card";
  card.style = `background-color: ${bgcolor}`;

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.innerText = `${title}`;

  let cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.innerText = `${description}`;

  let productPrice = document.createElement("a");
  productPrice.className = "price";
  productPrice.innerText = `Price: ৳${price}`;

  let btnAdd = document.createElement("a");
  btnAdd.href = "#";
  btnAdd.className = "btn btn-dark float-right add-to-cart";
  btnAdd.innerText = `Add to Cart`;
  btnAdd.addEventListener("click", (e) => {
    document
      .querySelector("#cart-list")
      .appendChild(getCartElement(title, description, price, bgcolor));
  });

  productElement.appendChild(card);
  card.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(productPrice);
  cardBody.appendChild(btnAdd);

  return productElement;
}

// same as product element but button is different
function getCartElement(title, description, price, bgcolor) {
  let cartElement = document.createElement("li");
  cartElement.className = "list-group-item borderless";

  let card = document.createElement("div");
  card.className = "card";
  card.style = `background-color: ${bgcolor}`;

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";

  let cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.innerText = `${title}`;

  let cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.innerText = `${description}`;

  let productPrice = document.createElement("a");
  productPrice.className = "price";
  productPrice.innerText = `Price: ৳${price}`;

  let btnRmv = document.createElement("a");
  btnRmv.href = "#";
  btnRmv.className = "btn btn-danger float-right rmv-from-cart";
  btnRmv.innerText = `Remove`;
  btnRmv.addEventListener("click", (e) => {
    cartElement.remove();
  });

  cartElement.appendChild(card);
  card.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(productPrice);
  cardBody.appendChild(btnRmv);

  return cartElement;
}
