const products = [
    // Beverages (category_id: 1)
    {
        id: 1,
        product_name: "Espresso",
        original_price: 25000,
        productDescriptionBeverages: "",
        localImage: "image/espresso.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 1,
        categoryName: "Beverages",
        productStock: 0
    },
    {
        id: 2,
        product_name: "Green Tea Latte",
        original_price: 28000,
        productDescription: "",
        localImage: "image/green-latte.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 1,
        categoryName: "Beverages",
        productStock: 0
    },
    {
        id: 3,
        product_name: "Orange Juice",
        original_price: 22000,
        productDescription: "",
        localImage: "image/orange-juice.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 1,
        categoryName: "Beverages",
        productStock: 0
    },
    {
        id: 4,
        product_name: "Sparkling Water",
        original_price: 18000,
        productDescription: "",
        localImage: "image/water.jpeg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 1,
        categoryName: "Beverages",
        productStock: 0
    },
    {
        id: 5,
        product_name: "Iced Chocolate",
        original_price: 30000,
        productDescription: "",
        localImage: "image/chocolate.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 1,
        categoryName: "Beverages",
        productStock: 0
    },
    {
        id: 6,
        product_name: "Cold Brew Coffee",
        original_price: 32000,
        productDescription: "",
        localImage: "image/cold-brew.jpeg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 1,
        categoryName: "Beverages",
        productStock: 0
    },

    // Bakery (category_id: 2)
    {
        id: 7,
        product_name: "Chocolate Croissant",
        original_price: 15000,
        productDescription: "",
        localImage: "image/crossiant.jpeg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 2,
        categoryName: "Bakery",
        productStock: 0
    },
    {
        id: 8,
        product_name: "Blueberry Muffin",
        original_price: 14000,
        productDescription: "",
        localImage: "image/muffin.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 2,
        categoryName: "Bakery",
        productStock: 0
    },
    {
        id: 9,
        product_name: "Sourdough Bread",
        original_price: 35000,
        productDescription: "",
        localImage: "image/sourdough.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 2,
        categoryName: "Bakery",
        productStock: 0
    },
    {
        id: 10,
        product_name: "Bagel Plain",
        original_price: 12000,
        productDescription: "",
        localImage: "image/bagel.jpeg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 2,
        categoryName: "Bakery",
        productStock: 0
    },
    {
        id: 11,
        product_name: "Cheese Danish",
        original_price: 16000,
        productDescription: "",
        localImage: "image/cheese-danish.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 2,
        categoryName: "Bakery",
        productStock: 0
    },

    // Snacks (category_id: 3)
    {
        id: 12,
        product_name: "Potato Chips",
        original_price: 8000,
        productDescription: "",
        localImage: "image/potato.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 3,
        categoryName: "Snacks",
        productStock: 0
    },
    {
        id: 13,
        product_name: "Mixed Nuts",
        original_price: 20000,
        productDescription: "",
        localImage: "image/nuts.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 3,
        categoryName: "Snacks",
        productStock: 0
    },
    {
        id: 14,
        product_name: "Beef Jerky",
        original_price: 25000,
        productDescription: "",
        localImage: "image/beef-jerky.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 3,
        categoryName: "Snacks",
        productStock: 0
    },
    {
        id: 15,
        product_name: "Popcorn Caramel",
        original_price: 15000,
        productDescription: "",
        localImage: "image/popcorn.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 3,
        categoryName: "Snacks",
        productStock: 0
    },
    {
        id: 16,
        product_name: "Seaweed Snack",
        original_price: 10000,
        productDescription: "",
        localImage: "image/seaweed.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 3,
        categoryName: "Snacks",
        productStock: 0
    },
    {
        id: 17,
        product_name: "Cheese Crackers",
        original_price: 12000,
        productDescription: "",
        localImage: "image/crackers-cheese.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 3,
        categoryName: "Snacks",
        productStock: 0
    },

    // Dairy Products (category_id: 4)
    {
        id: 18,
        product_name: "Fresh Milk",
        original_price: 12000,
        productDescription: "",
        localImage: "image/milk.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 4,
        categoryName: "Dairy Products",
        productStock: 0
    },
    {
        id: 19,
        product_name: "Cheddar Cheese",
        original_price: 35000,
        productDescription: "",
        localImage: "image/cheddar.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 4,
        categoryName: "Dairy Products",
        productStock: 0
    },
    {
        id: 20,
        product_name: "Greek Yogurt",
        original_price: 18000,
        productDescription: "",
        localImage: "image/yogurt.jpeg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 4,
        categoryName: "Dairy Products",
        productStock: 0
    },
    {
        id: 21,
        product_name: "Butter Unsalted",
        original_price: 28000,
        productDescription: "",
        localImage: "image/butter.jpeg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 4,
        categoryName: "Dairy Products",
        productStock: 0
    },
    {
        id: 22,
        product_name: "Cream Cheese",
        original_price: 26000,
        productDescription: "",
        localImage: "image/cream.jpeg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 4,
        categoryName: "Dairy Products",
        productStock: 0
    },
    {
        id: 23,
        product_name: "Mozzarella Block",
        original_price: 40000,
        productDescription: "",
        localImage: "image/mozzarella.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 4,
        categoryName: "Dairy Products",
        productStock: 0
    },

    // Meat & Seafood (category_id: 5)
    {
        id: 24,
        product_name: "Salmon Fillet",
        original_price: 75000,
        productDescription: "",
        localImage: "image/salmon-fillet.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 5,
        categoryName: "Meat & Seafood",
        productStock: 0
    },
    {
        id: 25,
        product_name: "Chicken Breast",
        original_price: 30000,
        productDescription: "",
        localImage: "image/chicken.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 5,
        categoryName: "Meat & Seafood",
        productStock: 0
    },
    {
        id: 26,
        product_name: "Beef Ribeye",
        original_price: 95000,
        productDescription: "",
        localImage: "image/ribeye.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 5,
        categoryName: "Meat & Seafood",
        productStock: 0
    },
    {
        id: 27,
        product_name: "Prawns Large",
        original_price: 65000,
        productDescription: "",
        localImage: "image/prawn.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 5,
        categoryName: "Meat & Seafood",
        productStock: 0
    },
    {
        id: 28,
        product_name: "Tuna Steak",
        original_price: 58000,
        productDescription: "",
        localImage: "image/steak-tuna.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 5,
        categoryName: "Meat & Seafood",
        productStock: 0
    },
    {
        id: 29,
        product_name: "Squid Rings",
        original_price: 40000,
        productDescription: "",
        localImage: "image/squid.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 5,
        categoryName: "Meat & Seafood",
        productStock: 0
    },
    {
        id: 30,
        product_name: "Lamb Chops",
        original_price: 98000,
        productDescription: "",
        localImage: "image/lamb.jpg",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        categoryId: 5,
        categoryName: "Meat & Seafood",
        productStock: 0
    }
];

const categories = [
    {
        id: 1,
        category_name: "Beverages",
        description: "",
        showOnApp: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 2,
        category_name: "Bakery",
        description: "",
        showOnApp: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 3,
        category_name: "Snacks",
        description: "",
        showOnApp: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 4,
        category_name: "Dairy Products",
        description: "",
        showOnApp: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: 5,
        category_name: "Meat & Seafood",
        description: "",
        showOnApp: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
];

const saved_transactions = [
    'id,totalqty,totalPrice,paymentMethod,infoDebitCard,orderType,savedTrxDate,createdAt,updatedAt,customerName\r\n',
    `1,4,20000,CASH,,In-Store Order,1751891606379,${new Date().toISOString()},${new Date().toISOString()},null\r\n`,
]

const saved_transaction_details = [
    'id,TrxId,ProductId,qty,name,price,subtotal,createdAt,updatedAt\r\n',
    `1,1,1,1,Espresso,25000,25000,${new Date().toISOString()},${new Date().toISOString()}\r\n`,
    `2,1,2,1,Green Tea Latte,28000,28000,${new Date().toISOString()},${new Date().toISOString()}\r\n`,
]

module.exports = {
    products,
    categories,
    saved_transactions,
    saved_transaction_details
}