var data = {
  egg_dishes: [
    { name: "Mushroom & Onion Omelette", price: 11.25 },
    { name: "Spinach & Cheese Omelette", price: 11.25 },
    {
      name: "Mexican Omelette",
      price: 11.25,
      desc: "With Onions, tomatoes and jalapeño",
    },
    {
      name: "The KOVA Breakfast",
      price: 11,
      desc: "2 eggs, canadian bacon, salad, grilled tomatoes, house dressing, and toast",
    },
    {
      name: "Egg Benedict",
      price: 12.75,
      desc: "With canadian bacon",
    },
    {
      name: "Egg Florentine",
      price: 12.75,
      desc: "With spinach",
    },
    {
      name: "Egg Royale",
      price: 14.25,
      desc: "With smoked salmon",
    },
    {
      name: "Egg Paragus",
      price: 13.75,
      desc: "With grilled asparagus & tomato",
    },
    {
      name: "Add-ons",
      extras: [
        { name: "Smoked Salmon", price: 3.25 },
        { name: "Turkey Bacon", price: 2.25 },
        { name: "Arugula", price: 1.25 },
        { name: "Red Onion", price: 1.0 },
        { name: "Egg", price: 2.0 },
        { name: "Bacon", price: 2.0 },
        { name: "Caramelized Onion", price: 1.5 },
        { name: "Cheddar", price: 1.75 },
        { name: "Avocado", price: 2.0 },
        { name: "Lettuce", price: 1.0 },
        { name: "Spinach", price: 1.0 },
        { name: "Tomato", price: 1.0 },
        { name: "Grilled Mushroom", price: 1.25 },
        { name: "Canadian Bacon", price: 2.25 },
        { name: "American Cheese", price: 1.75 },
        { name: "Mozzarella", price: 2.0 },
      ],
    },
  ],
  pancake_toast_salad: [
    {
      name: "Pancake",
      desc: "*With fresh fruits*",
      flavors: ["Banana, Blueberry, OR Chocolate Chip"],
      price: 11.75,
    },
    {
      name: "French Toast",
      desc: "*With fresh fruits*",
      price: 11.75,
    },
    {
      name: "Belgian Waffles with Nutella",
      desc: "*With fresh fruits*",
      price: 11.75,
    },
    { name: "Fruit Salad", price: 7.0 },
    {
      name: "Green Salad",
      price: 7.0,
      desc: "With lettuces, arugula, spinach, tomatoes, red onions, and fresh house dressing",
    },
    {
      name: "Sauce",
      price: 0.75,
      flavors: ["Sriracha Jam, Sriracha Mayo, Wasabi Aioli, The KOVA Sauce"],
    },
    {
      name: "Sides",
      extras: [
        { name: "Bacon", price: 4.0 },
        { name: "Avocado", price: 4.0 },
        { name: "Canadian Bacon", price: 5.0 },
        { name: "Toast (Rye, White, Multigrain)", price: 2.0 },
        { name: "Turkey Bacon", price: 5.0 },
        { name: "Egg", price: 2 },
        { name: "Home Fries", price: 5.0 },
        { name: "Smoked Salmon", price: 7.0 },
      ],
    },
  ],
  savory: [
    {
      name: "Bacon, Egg & Cheese",
      price: 8.0,
      desc: "With runny yolk & arugula on a roll",
    },
    {
      name: "Grilled Cheese",
      price: 6.0,
      desc: "Cheddar & Mozzarella on sourdough toast",
    },
    {
      name: "Sriracha Jam Grilled Cheese",
      price: 6.75,
    },
    {
      name: "Cheeseburger",
      price: 13.75,
      desc: "Homemade burger with burger sauce, caramelized red onions on brioche bun & hand cut fries",
    },
    {
      name: "Fried Chicken Sandwich",
      price: 12.75,
      desc: "With wasabi aioli, lettuce, tomato & hand cut fries",
    },
    {
      name: "Pulled Chicken Sandwich",
      price: 13.75,
      desc: "With mushrooms, greens with house dressing, served on a bun with a side of coleslaw",
    },

    {
      name: "Beef Roti",
      price: 13.0,
      desc: "With beef, onion and mozzarella on roti breads",
    },
    {
      name: "Chicken Roti",
      price: 13.0,
      desc: "With pulled chicken and mushrooms on roti bread",
    },
    {
      name: "Sweet Potato Fries",
      price: 6.75,
      desc: "With sriracha mayo",
    },
    {
      name: "Spicy Hand Cut Fries",
      price: 6.5,
    },
    {
      name: "Hand Cut Fries",
      price: 6.0,
    },
  ],

  coffee: [
    { name: "Drip Coffee", price: "2.25(M) $3.00(L)" },
    { name: "Espresso", price: 3.25 },
    { name: "Americano", price: 4.0 },
    { name: "Macchiato", price: 4.0 },
    { name: "Cortado", price: 4.0 },
    { name: "Cappucino", price: 4.25 },
    { name: "Mocha", price: 4.75 },
    { name: "Latte", price: 4.25 },
    { name: "Chai Latte", price: 5.5 },
    { name: "Matcha Latte", price: 5.5 },
    { name: "Hot Chocolate", price: 3.5 },
    { name: "White Mocha", price: 6.0 },
    { name: "Lavender Latte", price: 6.0 },
    { name: "The Kova Latte", price: 6.0 },
    { name: "Crème Brulee Latte", price: 6.0 },
    { name: "Orange Oolong Latte", price: 5.0 },

    {
      name: "Add-ons",
      extras: [
        { name: "Add caramel / vanilla", price: 0.6 },
        { name: "Soy / almond / iced", price: 0.6 },
        { name: "Iced", price: 0.5 },
        { name: "Extra Shot", price: 1.5 },
      ],
    },
  ],
  other_drinks: [
    {
      name: "Tea",
      price: "2.75 (Hot) $3.25 (Cold)",
      flavors: ["Green, Earl Grey, English Breakfast, Peppermint, Chamomile"],
    },
    { name: "Iced Tea", price: 3.25 },
    { name: "Orange Juice", price: 3.0 },
    { name: "Coke", price: 2.75 },
    { name: "Bottled Sparkling Water", price: 2.75 },
    { name: "Homemade Hibiscus Lemonade", price: 4.5 },
    { name: "Homemade Lavender Lemonade", price: 4.5 },
    {
      name: "Black Milk Tea",
      price: 4.5,
    },
  ],
};
