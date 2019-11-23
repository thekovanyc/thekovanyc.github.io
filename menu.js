var data = {
  "egg_dishes": [
      { "name": "Mushroom & Onion Omelette", "price": 9.25 },
      { "name": "Spinach & Cheese Omelette", "price": 9.25 }, 
      {
        "name": "Mexican Omelette", 
        "price": 9.25,
        "extras": [
          {
            "name": "Add side of toast (white, rye, or multigrain)",
            "price": 1.25
          },
          {
            "name": "Add cheese",
            "price": 1.50
          }, 
          {
            "name": "Add bacon",
            "price": 1.75
          },
          {
            "name": "Add canadian bacon", 
            "price": 2.00
          }
        ]
      }, 
      {
        "name": "The KOVA Breakfast",
        "price": 9.75,
        "desc": "2 eggs, canadian bacon, salad, grilled tomatoes, house dressing, and toast"
      },
      {
        "name": "Egg Benedict",
        "price": 10.75,
        "desc": "With canadian bacon"
      }, 
      {
        "name": "Egg Florentine",
        "price": 10.75,
        "desc": "With spinach"
      },
      {
        "name": "Egg Royale", 
        "price": 12.25,
        "desc": "With smoked salmon"
      }
    ],
  "pancake_toast_salad": [
    {
      "name": "Pancake", 
      "desc": "*With fresh fruits*", 
      "flavors": ["Banana, Blueberry, OR Chocolate Chip"],
      "price": 9.75
    }, 
    {
      "name": "French Toast", 
      "desc": "*With fresh fruits*",
      "price": 9.75
    }, 
    {
      "name": "Fruit Salad",
      "price": 6.00
    }, 
    {
      "name": "Green Salad",
      "price": 6.00
    },
    {
      "name": "Sides", 
      "extras": [
        {"name": "Bacon", "price": 3.00},
        {"name": "Avocado", "price": 3.00},
        {"name": "Canadian Bacon", "price": 4.00},
        {"name": "Home Fries", "price": 4.00}
      ]
    }
  ],
  "savory": [
    {
      "name": "Bacon, Egg & Cheese",
      "price": 6.00,
      "desc": "With runny yolk & arugula"
    }, 
    {
      "name": "Grilled Cheese",
      "price": 5.00,
      "desc": "Cheddar & Mozzarella on bread",
      "extras": [
        { "name": "Add tomato", "price": 0.75 }, 
        { "name": "Add avocado or bacon", "price": 1.75}
      ]
    }, 
    {
      "name": "Sriracha Jam Grilled Cheese",
      "price": 5.75
    }, 
    {
      "name": "Cheeseburger", 
      "price": 11.75,
      "desc": "Homemade burger with caramelized onions on brioche bun & hand cut fries"
    }, 
    {
      "name": "Fried Chicken Sandwich",
      "price": 10.75,
      "desc": "With wasabi aioli, lettuce, tomato & hand cut fries"
    }, 
    {
      "name": "Pull Chicken Sandwich",
      "price":  11.75,
      "desc": "With mushrooms, greens with house dressing, served on a bun with a side of coleslaw"
    },
    {
      "name": "Sweet Potato Fries", 
      "price": 5.75,
      "desc": "With sriracha mayo"
    }, 
    {
      "name": "Spicy Hand Cut Fries",
      "price": 5.50
    }, 
    {
      "name": "Hand Cut Fries",
      "price": 5.00
    }
  ],
  
  coffee: [
    { "name": "Drip Coffee", "price": "2.25(M) $2.75(L)" },
    { "name": "Espresso", "price": 3.00 },
    { "name": "Americano", "price": 3.75 },
    { "name": "Macchiato", "price": 3.75 },
    { "name": "Cortado", "price": 3.75 },
    { "name": "Cappucino", "price": 4.00 },
    { "name": "Latte", "price": 4.00 },
    { "name": "Mocha", "price": 4.50 },
    { "name": "Chai Latte", "price": 4.75 },
    { "name": "Matcha Latte", "price": 4.75 },
    { "name": "Lavender Latte", "price": 5.00 },
    { "name": "The Kova Latte", "price": 5.25 }
  ],
  hot_tea: [
    { 
      "name": "Hot Chocolate", 
      "price": 3.25,
      "extras": [
        { "name": "Add caramel / vanilla", "price": 0.50 },
        { "name": "Soy / almond / iced", "price": 0.50 },        
        { "name": "Extra Shot", "price": 1.50 },
      ]
    }, 
    { 
      "name": "Tea", price: "2.50 (Hot) $3 (Cold)", 
      "flavors": ["Earl Gray, English Breakfast, Green, Peppermint, Chamomile"]
    }
  ],
  other_drinks: [
    {"name": "Iced Tea", "price": 3.00},
    {"name": "Orange Juice", "price": "2.25(M) $2.75 (L)"},
    {"name": "Bottled Sparkling Water", "price": "2.50"}
  ],
  seasonal_drinks: [
    {"name": "Pumpkin Spice Latte", "price": 4.75 },
    {"name": "Fresh Young Coconut Juice", "price": 5.00}
  ], 
  pastries: [
    {
      "name": "Muffins", "price": "2.75/ea", 
      "flavors": ["Chocolate Chip, Carrot Cheese"]
    }, 
    {
      "name": "Cookies", "price": "2.75/ea",
      "flavors": ["Chocolate Chip"]
    },
    { "name": "Cranberry Scone", "price": "3.00" }
  ]
}
