export const blinkit = {
  categories: [
    { id: 1, name: "Fruits & Vegetables" },
    { id: 2, name: "Dairy & Bakery" },
    { id: 3, name: "Beverages" },
    { id: 4, name: "Snacks & Branded Foods" },
    { id: 5, name: "Personal Care" },
    { id: 6, name: "Household Items" },
  ],

  offer: [
    { title: "10% off on Dairy Products", code: "DAIRY10" },
    { title: "20% off on Fruits & Vegetables", code: "FRUIT20" },
    { title: "Flat ₹50 off on Beverages", code: "DRINK50" },
    { title: "15% off on Household Items", code: "HOME15" },
  ],

  products: [
    // Fruits & Vegetables
    {
      id: 101,
      name: "Fresh Bananas",
      category: "Fruits & Vegetables",
      price: 60,
      weight: "1 Dozen",
      discount: 10,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/2b94191b-17b9-4acc-af15-baef8b40ce86.jpg?ts=1719834669",
    },
    {
      id: 102,
      name: "Apple Shimla",
      category: "Fruits & Vegetables",
      price: 150,
      weight: "1 Kg",
      discount: 5,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7d34583b-900c-45a4-bfb1-1f5a6cc963a2.jpg?ts=1711473224",
    },
    {
      id: 113,
      name: "Fresh Tomatoes",
      category: "Fruits & Vegetables",
      price: 40,
      weight: "1 Kg",
      discount: 8,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a2c8978b-bde0-4f93-95ca-1fc63b36b676.jpg?ts=1748186610",
    },
    {
      id: 114,
      name: "Potatoes",
      category: "Fruits & Vegetables",
      price: 30,
      weight: "1 Kg",
      discount: 5,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0074b9f6-c141-44b0-a00c-0278d5d315ca.jpg?ts=1711473366",
    },

    // Dairy & Bakery
    {
      id: 103,
      name: "Amul Butter",
      category: "Dairy & Bakery",
      price: 230,
      weight: "500g Pack",
      discount: 15,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",
    },
    {
      id: 104,
      name: "Mother Dairy Milk",
      category: "Dairy & Bakery",
      price: 70,
      weight: "1L Pack",
      discount: 8,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/cc1099ae-522d-47ab-b897-c10310511c9f.jpg?ts=1712325561",
    },
    {
      id: 115,
      name: "Brown Bread",
      category: "Dairy & Bakery",
      price: 40,
      weight: "400g",
      discount: 10,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/dcc6588c-ab4d-42b8-bc8b-bd9159b8d206.jpg?ts=1744630854",
    },

    // Beverages
    {
      id: 105,
      name: "Coca Cola",
      category: "Beverages",
      price: 40,
      weight: "750ml Bottle",
      discount: 5,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/10557a.jpg?ts=1690813220",
    },
    {
      id: 106,
      name: "Pepsi",
      category: "Beverages",
      price: 40,
      weight: "750ml Bottle",
      discount: 5,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/54fd697f-361e-4b65-abf3-a37f45471e04.jpg?ts=1748347576",
    },
    {
      id: 116,
      name: "Red Bull Energy Drink",
      category: "Beverages",
      price: 120,
      weight: "250ml",
      discount: 10,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8555d944-41ff-4e1e-95a3-343720e2c743.jpg?ts=1731649650",
    },

    // Snacks & Branded Foods
    {
      id: 107,
      name: "Lay's Classic Salted",
      category: "Snacks & Branded Foods",
      price: 20,
      weight: "52g Pack",
      discount: 0,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/223819a.jpg?ts=1690814716",
    },
    {
      id: 108,
      name: "Kurkure Masala Munch",
      category: "Snacks & Branded Foods",
      price: 20,
      weight: "55g Pack",
      discount: 0,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/a462e780-3f6f-47df-a451-1e63791d175b.jpg?ts=1740848082",
    },
    {
      id: 117,
      name: "Parle-G Biscuits",
      category: "Snacks & Branded Foods",
      price: 10,
      weight: "100g",
      discount: 0,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/cb4f9631-6fd0-4e6c-904a-128fa111e6c8.jpg?ts=1723800413",
    },

    // Personal Care
    {
      id: 109,
      name: "Colgate Toothpaste",
      category: "Personal Care",
      price: 99,
      weight: "200g",
      discount: 10,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/eba8f985-bddd-4639-98eb-2989ca494fe4.jpg?ts=1729507432",
    },
    {
      id: 110,
      name: "Dove Shampoo",
      category: "Personal Care",
      price: 240,
      weight: "340ml",
      discount: 12,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/59f65403-a192-41f5-82b5-f44f61c32755.jpg?ts=1720552042",
    },
    {
      id: 118,
      name: "Lifebuoy Handwash",
      category: "Personal Care",
      price: 85,
      weight: "750ml",
      discount: 10,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/584a8734-6018-45ff-8859-468ee07f3417.jpg?ts=1715838073",
    },

    // Household Items
    {
      id: 111,
      name: "Harpic Toilet Cleaner",
      category: "Household Items",
      price: 85,
      weight: "500ml",
      discount: 5,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/b6198376-3e45-408d-82f2-e1328427b653.jpg?ts=1747747090",
    },
    {
      id: 112,
      name: "Vim Dishwash Gel",
      category: "Household Items",
      price: 99,
      weight: "750ml",
      discount: 8,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/aa365737-083d-4212-bc63-c5a4a8f40859.jpg?ts=1732867034",
    },
    {
      id: 119,
      name: "Surf Excel Detergent",
      category: "Household Items",
      price: 210,
      weight: "1kg",
      discount: 15,
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/42ea51e6-8154-4bb0-9d29-18cc53896ecb.jpg?ts=1735215752",
    },
  ],
};
