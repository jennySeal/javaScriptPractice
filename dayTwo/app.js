const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 0,
        id: 0
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0,
        id: 1
    },
    {
        name: 'Spaghetti Meat Sauce',
        price: 782,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0,
        id: 2
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0,
        id: 3
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0,
        id: 4
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0,
        id: 5
    }
]

let subtotal = 0;
let tax = 0;
let total = 0;


const addToMenu = (dish) => {
    document.getElementById('emptyCart').style["display"] = "none";
    let checkIfAlreadyAdded = document.getElementById(dish).textContent;

    if (checkIfAlreadyAdded !== "In Cart") {
        let addedDish = menuItems[dish];
    document.getElementById(dish).textContent = "In Cart";
    document.getElementById(dish).classList = "in-cart";
    addedDish.count = 1;
    addPriceToTotal(addedDish.price)
    displayItemInCart(addedDish);
    }
} 

const addPriceToTotal = (price) => {
    subtotal =  (Number.parseFloat(subtotal) + Number.parseFloat(price / 100)).toFixed(2);
    document.getElementById('subTotal').textContent = `$${subtotal}`;
    tax = Number.parseFloat(subtotal * 0.0975).toFixed(2);
    document.getElementById('tax').textContent = `$${tax}`;
    total = (Number.parseFloat(subtotal) + Number.parseFloat(tax)).toFixed(2)
    document.getElementById('total').textContent = `$${total}`;
    if (total == 0) {
    document.getElementById('emptyCart').style["display"] = "block";
    }
}

const displayItemInCart = (item) => {
        let itemPrice = item.price / 100;
        let priceXcount = itemPrice;

        let node = document.createElement("LI")
        node.setAttribute("id", `list${item.id}`);

        let itemSummary = (
           `<div class="plate">
             <img src="images/${item.image}" alt="${item.alt}" class="plate" />
             <div class="quantity quantity${item.id}">${item.count}</div>
             </div>
           <div class="content">
             <p class="menu-item">${item.name}</p>
             <p class="price">$${itemPrice}</p>
           </div>
           <div class="quantity__wrapper">
             <button class="decrease" id="decrease" onclick="decrease(${item.id})">
               <img src="images/chevron.svg" />
             </button>
             <div class="quantity otherQuantity${item.id}">${item.count}</div>
             <button class="increase" id="increase" onclick="increase(${item.id})">
               <img src="images/chevron.svg" />
             </button>
           </div>
           <div class="subtotal" id="priceXcount${item.id}">
             $${priceXcount}
           </div>
           `
        )
         node.innerHTML = itemSummary;
         document.getElementById('chosenDishes').appendChild(node)
         
}
    
const increase = (id) => {
    let addedItem = menuItems[id];
    addedItem.count++
    addPriceToTotal(addedItem.price)
    displayCount(id)
}

const decrease = (id) => {
    let deletedItem = menuItems[id];
    deletedItem.count--
    if (deletedItem.count === 0) {
        let parentList = document.getElementById(`chosenDishes`);
        let listItem = document.getElementById(`list${id}`);
        parentList.removeChild(listItem);
        addPriceToTotal(-deletedItem.price);
        document.getElementById(id).textContent = "Add to Cart";
        document.getElementById(id).classList = "add";

    } else {
    addPriceToTotal(-deletedItem.price)
    displayCount(id)   
}}

const displayCount = (id) => {
 let itemToDisplay = menuItems[id];   
document.querySelector(`div.quantity${id}`).textContent = itemToDisplay.count
    document.querySelector(`div.otherQuantity${id}`).textContent = itemToDisplay.count

    let priceXcount = Number.parseFloat(itemToDisplay.count * itemToDisplay.price/100).toFixed(2);
document.getElementById(`priceXcount${id}`).textContent = `$${priceXcount}`;
}