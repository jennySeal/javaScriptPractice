// <li>
//           <div class="plate">
//             <img src0="images/plate__fish-sticks-fries.png" alt="Fish Sticks and Fries" class="plate" />
//             <div class="quantity">1</div>
//           </div>
//           <div class="content">
//             <p class="menu-item">Fish Sticks and Fries</p>
//             <p class="price">$6.34</p>
//           </div>
//           <div class="quantity__wrapper">
//             <button class="decrease">
//               <img src="images/chevron.svg" />
//             </button>
//             <div class="quantity">1</div>
//             <button class="increase">
//               <img src="images/chevron.svg" />
//             </button>
//           </div>
//           <div class="subtotal">
//             $6.34
//           </div>
//         </li>

//         <!-- item 2 -->
//         <li>
//           <div class="plate">
//             <img src="images/plate__french-fries.png" alt="French Fries" class="plate" />
//             <div class="quantity">2</div>
//           </div>
//           <div class="content">
//             <p class="menu-item">French Fries with Ketchup</p>
//             <p class="price">$2.23</p>
//           </div>
//           <div class="quantity__wrapper">
//             <button class="decrease">
//               <img src="images/chevron.svg" />
//             </button>
//             <div class="quantity">2</div>
//             <button class="increase">
//               <img src="images/chevron.svg" />
//             </button>
//           </div>
//           <div class="subtotal">
//             $4.46
//           </div>
//         </li>
//       </ul>

let subtotal = 0;
let tax = 0;
let total = 0;

const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 0
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0
    },
    {
        name: 'Spaghetti Meat Sauce',
        price: 782,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0
    }
]

let chosenItems = [];

const addToMenu = (dish) => {
    document.querySelector('empty').style["display"] = "none";
    let checkIfAlreadyAdded = document.getElementById(dish).textContent;
    if (checkIfAlreadyAdded !== "In Cart") {
    chosenItems.push(menuItems[dish]);
    console.log(chosenItems);
    document.getElementById(dish).textContent = "In Cart";
    document.getElementById(dish).classList = "in-cart";
    addPriceToTotal(menuItems[dish].price)
    }
} 

const addPriceToTotal = (price) => {
    subtotal = Number.parseFloat(subtotal += (price / 100)); 
    document.getElementById('subTotal').textContent = `$${subtotal}`;
    tax = Number.parseFloat(subtotal * 0.0975).toFixed(2);
    document.getElementById('tax').textContent = `$${tax}`;
    total = (Number.parseFloat(subtotal) + Number.parseFloat(tax)).toFixed(2)
    document.getElementById('total').textContent = `$${total}`;
}