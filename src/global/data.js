export const filterData = [
  {
    name: "Fast Food",
    image: require("../../assets/images/fastFood.png"),
    id: "0"
  },
  {
    name: "Burgers",
    image: require("../../assets/images/burger.png"),
    id: "1"
  },
  { name: "Salads", image: require("../../assets/images/salads.png"), id: "2" },
  { name: "Hotdog", image: require("../../assets/images/hotdog.png"), id: "3" },
  {
    name: "Chinese",
    image: require("../../assets/images/chinese.png"),
    id: "4"
  },
  {
    name: "Mexican",
    image: require("../../assets/images/mexican.png"),
    id: "5"
  },
  {
    name: "Sea food",
    image: require("../../assets/images/seafood.png"),
    id: "6"
  }
];

export const searchData = [
  {
    name: "Fast food",
    image: require("../../assets/images/search-data-fast-food.jpg"),
    id: "0"
  },
  {
    name: "Burgers",
    image: require("../../assets/images/search-data-burgers.jpg"),
    id: "1"
  },
  {
    name: "Salads",
    image: require("../../assets/images/search-data-fast-food.jpg"),
    id: "2"
  },
  {
    name: "Hotdog",
    image: require("../../assets/images/search-data-hotdog.jpg"),
    id: "3"
  },
  {
    name: "Chinese",
    image: require("../../assets/images/search-data-chinese.png"),
    id: "4"
  },
  {
    name: "Mexican",
    image: require("../../assets/images/search-data-mexican.jpg"),
    id: "5"
  },
  {
    name: "Sea food",
    image: require("../../assets/images/search-data-sea-food.jpg"),
    id: "6"
  },
  {
    name: "Chinese Food",
    image: require("../../assets/images/search-data-chinese-food.jpg"),
    id: "7"
  },
  {
    name: "Mexican pie",
    image: require("../../assets/images/search-data-mexican-pie.jpg"),
    id: "8"
  },
  {
    name: "Ocean dish",
    image: require("../../assets/images/search-data-ocean-dish.jpg"),
    id: "9"
  }
];

export const restaurantsData = [
  {
    restaurantName: "McDonald's",
    farAway: "21.2",
    businessAddress: "22 Bessie street, Cape Town",
    images:
      "https://wallpapers.com/images/hd/mcdonald-s-food-pictures-1200-x-879-vyui5fydlg669w0w.jpg",
    averageReview: 4.9,
    numberOfReview: 272,
    coordinates: { lat: -26.1888612, lng: 28.246325 },
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    foodType: "Burgers, Wraps,Milkshakes...",
    productData: [
      {
        name: "Hand cut chips",
        price: 30,
        image: "https://i.ytimg.com/vi/wdvIcau0TxM/maxresdefault.jpg",
        details:
          "Thick, crispy, golden potato fries, hand-cut for ultimate deliciousness.",
        id: 0
      },
      {
        name: "Big Mac",
        price: 150,
        image:
          "https://www.rescuedogkitchen.com/wp-content/uploads/2021/11/IMG_3192.jpg",
        details:
          "Iconic McDonald's burger with two beef patties, special sauce, lettuce.",
        id: 1
      },
      {
        name: "Chicken Burger",
        price: 130,
        image:
          "https://www.cookerru.com/wp-content/uploads/2021/03/sbf-chicken-sandwich-preview-scaled.jpg",
        details:
          "Chicken patty in bun with toppings, a classic fast-food sandwich.",
        id: 2
      },

      {
        name: "Margarita Pizza",
        price: 110,
        image:
          "https://www.jessicagavin.com/wp-content/uploads/2019/08/skillet-margherita-pizza-12-1200.jpg",
        details: "Simple pizza with tomato, basil, and mozzarella cheese.",
        id: 3
      },
      {
        name: "Spaghetti Bolognese",
        price: 80,
        image:
          "https://bakeitwithlove.com/wp-content/uploads/2022/01/Spaghetti-Bolognese-h.jpg",
        details: " Pasta with meaty tomato sauce and Parmesan cheese.",
        id: 4
      },
      {
        name: "Grilled Cheese",
        price: 50,
        image:
          "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipes%2F2023-03-cinnamon-grilled-cheese%2FCinnamon-Toast-Crunch-Grilled-Cheese_035",
        details: "Melted cheese between toasted bread slices.",
        id: 5
      }
    ],
    id: 0
  },

  {
    restaurantName: "KFC",
    farAway: "12.7",
    businessAddress: "22 Bessie street, Cape Town",
    images:
      "https://www.mashed.com/img/gallery/genius-kfc-hacks-you-wish-youd-known-sooner/intro-1655231695.jpg",
    averageReview: 4.3,
    numberOfReview: 306,
    coordinates: { lat: -26.1891648, lng: 28.2441808 },
    discount: 20,
    deliveryTime: 30,
    collectTime: 10,
    foodType: "Chicken,Chicken wings... ",
    productData: [
      {
        name: "Hand cut chips",
        price: 30,
        image: "https://i.ytimg.com/vi/wdvIcau0TxM/maxresdefault.jpg",
        details:
          "Thick, crispy, golden potato fries, hand-cut for ultimate deliciousness.",
        id: 0
      },
      {
        name: "Big Mac",
        price: 150,
        image:
          "https://www.rescuedogkitchen.com/wp-content/uploads/2021/11/IMG_3192.jpg",
        details:
          "Iconic McDonald's burger with two beef patties, special sauce, lettuce.",
        id: 1
      },
      {
        name: "Chicken Burger",
        price: 130,
        image:
          "https://www.cookerru.com/wp-content/uploads/2021/03/sbf-chicken-sandwich-preview-scaled.jpg",
        details:
          "Chicken patty in bun with toppings, a classic fast-food sandwich.",
        id: 2
      },

      {
        name: "Margarita Pizza",
        price: 110,
        image:
          "https://www.jessicagavin.com/wp-content/uploads/2019/08/skillet-margherita-pizza-12-1200.jpg",
        details: "Simple pizza with tomato, basil, and mozzarella cheese.",
        id: 3
      },
      {
        name: "Spaghetti Bolognese",
        price: 80,
        image:
          "https://bakeitwithlove.com/wp-content/uploads/2022/01/Spaghetti-Bolognese-h.jpg",
        details: " Pasta with meaty tomato sauce and Parmesan cheese.",
        id: 4
      },
      {
        name: "Grilled Cheese",
        price: 50,
        image:
          "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipes%2F2023-03-cinnamon-grilled-cheese%2FCinnamon-Toast-Crunch-Grilled-Cheese_035",
        details: "Melted cheese between toasted bread slices.",
        id: 5
      }
    ],
    id: 1
  },

  {
    restaurantName: "Steers",
    farAway: "5",
    businessAddress: " 17 Olivia Rd, Johannesburg",
    images:
      "https://zambia.steers.africa/images/static/general/environmental-policy-final.jpg",
    coordinates: { lat: -26.1886781, lng: 28.244879 },
    averageReview: 4.9,
    numberOfReview: 1272,
    discount: 12,
    deliveryTime: 25,
    collectTime: 15,
    foodType: "Flame grilled beef Burgers",
    productData: [
      {
        name: "Hand cut chips",
        price: 30,
        image: "https://i.ytimg.com/vi/wdvIcau0TxM/maxresdefault.jpg",
        details:
          "Thick, crispy, golden potato fries, hand-cut for ultimate deliciousness.",
        id: 0
      },
      {
        name: "Big Mac",
        price: 150,
        image:
          "https://www.rescuedogkitchen.com/wp-content/uploads/2021/11/IMG_3192.jpg",
        details:
          "Iconic McDonald's burger with two beef patties, special sauce, lettuce.",
        id: 1
      },
      {
        name: "Chicken Burger",
        price: 130,
        image:
          "https://www.cookerru.com/wp-content/uploads/2021/03/sbf-chicken-sandwich-preview-scaled.jpg",
        details:
          "Chicken patty in bun with toppings, a classic fast-food sandwich.",
        id: 2
      },

      {
        name: "Margarita Pizza",
        price: 110,
        image:
          "https://www.jessicagavin.com/wp-content/uploads/2019/08/skillet-margherita-pizza-12-1200.jpg",
        details: "Simple pizza with tomato, basil, and mozzarella cheese.",
        id: 3
      },
      {
        name: "Spaghetti Bolognese",
        price: 80,
        image:
          "https://bakeitwithlove.com/wp-content/uploads/2022/01/Spaghetti-Bolognese-h.jpg",
        details: " Pasta with meaty tomato sauce and Parmesan cheese.",
        id: 4
      },
      {
        name: "Grilled Cheese",
        price: 50,
        image:
          "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipes%2F2023-03-cinnamon-grilled-cheese%2FCinnamon-Toast-Crunch-Grilled-Cheese_035",
        details: "Melted cheese between toasted bread slices.",
        id: 5
      }
    ],
    id: 2
  },

  {
    restaurantName: "Roman Pizza",
    farAway: "7",
    businessAddress: " 15 Atlas Rd, Kempton Park",
    images: "https://cdn.getyourguide.com/img/tour/56571a4247c72.jpeg/146.jpg",
    averageReview: 4.3,
    numberOfReview: 700,
    coordinates: { lat: -26.1845336, lng: 28.2481691 },
    discount: null,
    deliveryTime: 20,
    collectTime: 10,
    foodType: "Chicken pizza, Vegetarian pizza...",
    productData: [
      {
        name: "Hand cut chips",
        price: 30,
        image: "https://i.ytimg.com/vi/wdvIcau0TxM/maxresdefault.jpg",
        details:
          "Thick, crispy, golden potato fries, hand-cut for ultimate deliciousness.",
        id: 0
      },
      {
        name: "Big Mac",
        price: 150,
        image:
          "https://www.rescuedogkitchen.com/wp-content/uploads/2021/11/IMG_3192.jpg",
        details:
          "Iconic McDonald's burger with two beef patties, special sauce, lettuce.",
        id: 1
      },
      {
        name: "Chicken Burger",
        price: 130,
        image:
          "https://www.cookerru.com/wp-content/uploads/2021/03/sbf-chicken-sandwich-preview-scaled.jpg",
        details:
          "Chicken patty in bun with toppings, a classic fast-food sandwich.",
        id: 2
      },

      {
        name: "Margarita Pizza",
        price: 110,
        image:
          "https://www.jessicagavin.com/wp-content/uploads/2019/08/skillet-margherita-pizza-12-1200.jpg",
        details: "Simple pizza with tomato, basil, and mozzarella cheese.",
        id: 3
      },
      {
        name: "Spaghetti Bolognese",
        price: 80,
        image:
          "https://bakeitwithlove.com/wp-content/uploads/2022/01/Spaghetti-Bolognese-h.jpg",
        details: " Pasta with meaty tomato sauce and Parmesan cheese.",
        id: 4
      },
      {
        name: "Grilled Cheese",
        price: 50,
        image:
          "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipes%2F2023-03-cinnamon-grilled-cheese%2FCinnamon-Toast-Crunch-Grilled-Cheese_035",
        details: "Melted cheese between toasted bread slices.",
        id: 5
      }
    ],
    id: 3
  }
];

export const menuData = [
  { title: "BEEF", special: false, key: 0 },
  { title: "CHICKEN", special: false, key: 1 },
  { title: "VEGGIE BURGER", special: false, key: 2 },
  { title: "FRIES& CORN", special: false, key: 3 },
  { title: "SALADS", special: false, key: 4 },
  { title: "HAPPY MEALS", special: false, key: 5 },
  { title: "SAHRE BOX", special: false, key: 6 },
  { title: "MILKSHAKES", special: false, key: 7 },
  { title: "COLD DRINKS", special: false, key: 8 },
  { title: "DESSERTS", special: false, key: 9 },
  { title: "HOT DRINKS", special: false, key: 10 }
];

export const specialData = [
  { title: "LIMITED OFFER", key: 0 },
  { title: "GO CHILLI", key: 1 },
  { title: "GO CHEESE", key: 2 },
  { title: "MCCHICKEN DELUXE PROMO", key: 3 }
];

export const restaurantTabs = [
  {
    key: "first",
    title: "MENU"
  },
  {
    key: "second",
    title: "INFO"
  },
  {
    key: "third",
    title: "REVIEWS"
  },
  {
    key: "fourth",
    title: "GALLERY"
  }
];
export const menuTabs = [
  { key: 1, title: "BEEF" },
  { key: 2, title: "CHICKEN" },
  { key: 3, title: "VEGGIE BURGER" },
  { key: 4, title: "SHARE BOX" },
  { key: 5, title: "HAPPY MEALS" },
  { key: 6, title: "FRIES" },
  { key: 7, title: "SIDES" },
  { key: 8, title: "MILKSHAKES" }
];
export const ProductsData = [
  {
    name: "Hand cut chips",
    price: 30,
    image: "https://i.ytimg.com/vi/wdvIcau0TxM/maxresdefault.jpg",
    details:
      "Thick, crispy, golden potato fries, hand-cut for ultimate deliciousness.",
    id: 0
  },
  {
    name: "Big Mac",
    price: 150,
    image:
      "https://www.rescuedogkitchen.com/wp-content/uploads/2021/11/IMG_3192.jpg",
    details:
      "Iconic McDonald's burger with two beef patties, special sauce, lettuce.",
    id: 1
  },
  {
    name: "Chicken Burger",
    price: 130,
    image:
      "https://www.cookerru.com/wp-content/uploads/2021/03/sbf-chicken-sandwich-preview-scaled.jpg",
    details:
      "Chicken patty in bun with toppings, a classic fast-food sandwich.",
    id: 2
  },

  {
    name: "Margarita Pizza",
    price: 110,
    image:
      "https://www.jessicagavin.com/wp-content/uploads/2019/08/skillet-margherita-pizza-12-1200.jpg",
    details: "Simple pizza with tomato, basil, and mozzarella cheese.",
    id: 3
  },
  {
    name: "Spaghetti Bolognese",
    price: 80,
    image:
      "https://bakeitwithlove.com/wp-content/uploads/2022/01/Spaghetti-Bolognese-h.jpg",
    details: " Pasta with meaty tomato sauce and Parmesan cheese.",
    id: 4
  },
  {
    name: "Grilled Cheese",
    price: 50,
    image:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipes%2F2023-03-cinnamon-grilled-cheese%2FCinnamon-Toast-Crunch-Grilled-Cheese_035",
    details: "Melted cheese between toasted bread slices.",
    id: 5
  }
];
export const menuDetailedData = [
  {
    meal: "Big Mac",
    price: 70.2,
    image:
      "https://www.rescuedogkitchen.com/wp-content/uploads/2021/11/IMG_3192.jpg",
    details: "McFeast features two 100% fresh beef burger patties that are hot",
    preferenceTitle: [
      "Choose your 2 dips",
      "Choose your 1st drink flavour",
      "Choose your 2nd drink flavour",
      "Would you like to add a side?",
      "Would you Like any extra sauce?"
    ],
    preferenceData: [
      [
        { name: "Jalapeno Dip", price: 8.91, checked: false, id: 10 },
        { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 11 },
        { name: "BBQ Dip", price: 11.99, checked: false, id: 12 }
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 13 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 14 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 15 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 16 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 17 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 18 },
        {
          name: "Small Strawberry Shake",
          price: 16.95,
          checked: false,
          id: 19
        },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 20 }
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 21 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 22 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 23 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 24 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 25 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 26 },
        {
          name: "Small Strawberry Shake",
          price: 16.95,
          checked: false,
          id: 27
        },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 28 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 29 }
      ],

      [
        { name: "debonairs sauce", price: 8.9, checked: false, id: 30 },
        { name: "BBQ Sauce", price: 8.9, checked: false, id: 31 },
        { name: "Tikka Sauce", price: 11.9, checked: false, id: 32 }
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 33 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 34 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 35 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 36 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 37 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 38 },
        {
          name: "Small Strawberry Shake",
          price: 16.95,
          checked: false,
          id: 39
        },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 40 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 41 }
      ]
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 0
  },

  {
    meal: "Hand cut chips",
    price: 29.3,
    image: "https://i.ytimg.com/vi/wdvIcau0TxM/maxresdefault.jpg",
    details: "Two 100% fresh beef burger patties that are hot,deliciously",
    preferenceTitle: [
      "Choose your 2 dips",
      "Choose your 1st drink flavour",
      "Choose your 2nd drink flavour",
      "Would you like to add a side?",
      "Would you Like any extra sauce?"
    ],
    preferenceData: [
      [
        { name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 },
        { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 },
        { name: "BBQ Dip", price: 11.99, checked: false, id: 2 }
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 }
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 8 }
      ],

      [
        { name: "debonairs sauce", price: 8.9, checked: false, id: 0 },
        { name: "BBQ Sauce", price: 8.9, checked: false, id: 1 },
        { name: "Tikka Sauce", price: 11.9, checked: false, id: 2 }
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 8 }
      ]
    ],
    minimum_quatity: [2, 1, 2, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 1
  },

  {
    meal: "Chicken Burger",
    price: 45.7,
    image:
      "https://www.cookerru.com/wp-content/uploads/2021/03/sbf-chicken-sandwich-preview-scaled.jpg",
    details:
      "Chicken patty in bun with toppings, a classic fast-food sandwich.",
    preferenceTitle: [
      "Choose your 2 dips",
      "Choose your 1st drink flavour",
      "Choose your 2nd drink flavour",
      "Would you like to add a side?",
      "Would you Like any extra sauce?"
    ],
    preferenceData: [
      [
        { name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 },
        { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 },
        { name: "BBQ Dip", price: 11.99, checked: false, id: 2 }
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 }
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 8 }
      ],

      [
        { name: "debonairs sauce", price: 8.9, checked: false, id: 0 },
        { name: "BBQ Sauce", price: 8.9, checked: false, id: 1 },
        { name: "Tikka Sauce", price: 11.9, checked: false, id: 2 }
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 8 }
      ]
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 2
  },

  {
    meal: "Margarita Pizza",
    price: 110,
    image:
      "https://www.jessicagavin.com/wp-content/uploads/2019/08/skillet-margherita-pizza-12-1200.jpg",
    details: "Simple pizza with tomato, basil, and mozzarella cheese.",
    preferenceTitle: [
      "Choose your 2 dips",
      "Choose your 1st drink flavour",
      "Choose your 2nd drink flavour",
      "Would you like to add a side?",
      "Would you Like any extra sauce?"
    ],
    preferenceData: [
      [
        { name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 },
        { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 },
        { name: "BBQ Dip", price: 11.99, checked: false, id: 2 }
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 }
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 8 }
      ],

      [
        { name: "debonairs sauce", price: 8.9, checked: false, id: 0 },
        { name: "BBQ Sauce", price: 8.9, checked: false, id: 1 },
        { name: "Tikka Sauce", price: 11.9, checked: false, id: 2 }
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 8 }
      ]
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 3
  },

  {
    meal: "Spaghetti Bolognese",
    price: 80,
    image:
      "https://bakeitwithlove.com/wp-content/uploads/2022/01/Spaghetti-Bolognese-h.jpg",
    details: " Pasta with meaty tomato sauce and Parmesan cheese.",

    preferenceTitle: [
      "Choose your 2 dips",
      "Choose your 1st drink flavour",
      "Choose your 2nd drink flavour",
      "Would you like to add a side?",
      "Would you Like any extra sauce?"
    ],

    preferenceData: [
      [
        { name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 },
        { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 },
        { name: "BBQ Dip", price: 11.99, checked: false, id: 2 }
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 }
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 8 }
      ],

      [
        { name: "debonairs sauce", price: 8.9, checked: false, id: 0 },
        { name: "BBQ Sauce", price: 8.9, checked: false, id: 1 },
        { name: "Tikka Sauce", price: 11.9, checked: false, id: 2 }
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 0 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 1 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 2 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 3 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 4 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 5 },
        { name: "Small Strawberry Shake", price: 16.95, checked: false, id: 6 },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 7 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 8 }
      ]
    ],

    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 4
  },

  {
    meal: "Grilled Cheese",
    price: 50,
    image:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipes%2F2023-03-cinnamon-grilled-cheese%2FCinnamon-Toast-Crunch-Grilled-Cheese_035",
    details: "Melted cheese between toasted bread slices.",
    preferenceTitle: [
      "Choose your 2 dips",
      "Choose your 1st drink flavour",
      "Choose your 2nd drink flavour",
      "Would you like to add a side?",
      "Would you Like any extra sauce?"
    ],
    preferenceData: [
      [
        { name: "Jalapeno Dip", price: 8.91, checked: false, id: 10 },
        { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 11 },
        { name: "BBQ Dip", price: 11.99, checked: false, id: 12 }
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 13 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 14 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 15 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 16 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 17 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 18 },
        {
          name: "Small Strawberry Shake",
          price: 16.95,
          checked: false,
          id: 19
        },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 20 }
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 21 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 22 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 23 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 24 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 25 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 26 },
        {
          name: "Small Strawberry Shake",
          price: 16.95,
          checked: false,
          id: 27
        },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 28 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 29 }
      ],

      [
        { name: "debonairs sauce", price: 8.9, checked: false, id: 30 },
        { name: "BBQ Sauce", price: 8.9, checked: false, id: 31 },
        { name: "Tikka Sauce", price: 11.9, checked: false, id: 32 }
      ],

      [
        { name: "Small Coke", price: 8.9, checked: false, id: 33 },
        { name: "Small Fanta Orange", price: 8.9, checked: false, id: 34 },
        { name: "Small Sprite", price: 11.9, checked: false, id: 35 },
        { name: "Small Coke Zero", price: 3.95, checked: false, id: 36 },
        { name: "Small Syoney Zero", price: 3.95, checked: false, id: 37 },
        { name: "Small Apple Juice", price: 10.95, checked: false, id: 38 },
        {
          name: "Small Strawberry Shake",
          price: 16.95,
          checked: false,
          id: 39
        },
        { name: "Small Chocolate Shake", price: 16.95, checked: false, id: 40 },
        { name: "Small Vanilla Shake", price: 17.95, checked: false, id: 41 }
      ]
    ],
    minimum_quatity: [2, 1, 1, null, null],
    counter: [0, 0, 0, 0, 0],
    required: [true, true, true, false, false],
    id: 5
  }
];
