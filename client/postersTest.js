//poster vars
const poster_1 = {
    id: 1,
    price: 25,
    quantity: 0,
}

const poster_2 = {
    id: 2,
    price: 30,
    quantity: 0,
}

const poster_3 = {
    id: 3,
    price: 50,
    quantity: 0,
}

let removeItem1 = document.createElement("button");
removeItem1.textContent = "remove";
removeItem1.classList.add("removeButton1");

let removeItem2 = document.createElement("button");
removeItem2.textContent = "remove";
removeItem2.classList.add("removeButton1");

let removeItemBtn = document.createElement("button");
removeItemBtn.textContent = "remove";
removeItemBtn.classList.add("remove-button");

// removeItemBtn.addEventListener('click', removeItem);
console.log("remove button: " + JSON.stringify(removeItemBtn));
removeItemBtn.addEventListener('click', (e) => {
    removeItem(e.target);
    console.log("buttonE: " + JSON.stringify(e.target));
});

function removeItem(button) {
    console.log("remove item function clicked!");
    console.log("cart before: " + JSON.stringify(theCart));

    theCart.forEach((item) => {
        console.log("button in foreach: " + (button[0]));
        console.log("items in loop : " + JSON.stringify(item));
        if (button.id.slice(1) === item.id) {
            item.quantity--;
        }
    })
   
    console.log("cart after: " + JSON.stringify(theCart));

}

removeItem1.addEventListener('click', () => {
    console.log("remove button 1 was clicked");
    let resultRm1 = theCart.filter((result) => {
        return result.id !== 1;
    })

    console.log("removed item: " + JSON.stringify(resultRm1));
    theCart = resultRm1;
    console.log("array after: " + JSON.stringify(theCart));
    newItem1.remove();
})

//loop through array and splice using foreach loop

let theCart = [];
let cartTotal = 0;
// Query all elements with class "buy"
let addButtons = document.querySelectorAll('.add');
let cartSp = document.getElementById("cartSpace");
console.log("cart space selected: " + cartSp);

let newItem1 = document.createElement("p");
addButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("add was clicked!");

        if (button.id === "b1") {
            console.log("add for item 1 was clicked!");
            theCart.push(poster_1);
            poster_1.quantity++;
            console.log("item quantity: " + JSON.stringify(poster_1.quantity));
            console.log("CART: " + JSON.stringify(theCart));

            newItem1.textContent = ` | poster: ${poster_1.id} price: ${poster_1.price} | `;
            newItem1.classList.add("newItem1");
            cartSp.appendChild(newItem1);
            console.log("appending item 1: " + cartSp);
            // cartSp.appendChild(removeItemBtn(button));
            cartSp.appendChild(removeItemBtn);
        }

        if (button.id === "b2") {
            console.log("add for item 2 was clicked");
            theCart.push(poster_2);
            // cartSp.textContent += ` | poster: ${poster_2.id} price: ${poster_2.price} | `;
            console.log("CART: " + JSON.stringify(theCart));

            let newItem2 = document.createElement("p");
            newItem2.textContent = ` | poster: ${poster_2.id} price: ${poster_2.price} | `;
            newItem2.classList.add("newItem2");
            cartSp.appendChild(newItem2);
            console.log("appending item 2: " + cartSp);

            cartSp.appendChild(removeItem2);
        }

        //sum up the cart
        // for (let i = 0;  i < theCart.length; i++) {
        //     console.log("testing loop");
        //     cartTotal = cartTotal + theCart[i];
        //     console.log("cart total: " + cartTotal);
        // }
    });
});



function updatePosterPrice() {
    const priceElement1 = document.querySelector('.poster-price-1');
    priceElement1.textContent = `Poster #${poster_1.id} ($${poster_1.price})`;

    const priceElement2 = document.querySelector('.poster-price-2');
    priceElement2.textContent = `Poster #2 ($${poster_2.price})`;
}

updatePosterPrice();

document.addEventListener('DOMContentLoaded', function() {
    updatePosterPrice();
});

//remove >> hover >> on click >> look for item with that id in array >> remove that id
