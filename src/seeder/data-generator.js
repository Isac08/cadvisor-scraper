const fs = require("fs/promises");
const {categories, products, saved_transactions, saved_transaction_details} = require("./data");

const dataset = '../dataset/extra-small'

const randomSelectProducts = (qty) => {
    const selectedProducts = []
    const selectedProductIDs = []

    for (let i = 0; i < qty; i++) {
        let product = null

        do {
            product = products[randomNumber(29)]
        } while (selectedProductIDs.includes(product.id))

        selectedProducts.push(product)
        selectedProductIDs.push(product.id)
    }

    return selectedProducts;
}

const calculateTotalPrice = (orderedProducts) => {
    return orderedProducts.reduce((total, product) => total + product.original_price, 0)
}

const randomNumber = (x) => Math.floor(Math.random() * x) + 1;

const generateTransaction = (counter) => {
    const date = new Date().toISOString().split('T')[0];

    const transaction_details = []

    const totalQty = randomNumber(6)
    const orderedProducts = randomSelectProducts(totalQty)

    const id = `#INV/${date.split('-').join("")}/${counter}`
    const totalPrice = calculateTotalPrice(orderedProducts)
    const paymentMethod = ["QRIS", 'Cash', 'DEBIT'][randomNumber(2)]
    const infoDebitCard = ''
    const orderType = ['In-Store Order', 'Pickup/Delivery'][randomNumber(1)]
    const userId = 8
    const cashierName = 'isac'
    const customerName = 'adriani'
    const totalPayment = totalPrice
    const changes = 0
    const transactionDate = new Date().getTime()
    const createdAt = new Date().toISOString();
    const updatedAt = new Date().toISOString();

    for (const orderedProduct of orderedProducts) {
        transaction_details.push([id, orderedProduct.id, 1, orderedProduct.product_name, orderedProduct.original_price, orderedProduct.original_price, new Date().toISOString(), new Date().toISOString(), new Date().toISOString(), new Date().toISOString()].join(',') + "\r\n")
    }


    return {
        transaction: [id, totalQty, totalPrice, paymentMethod, infoDebitCard, orderType, userId, cashierName, totalPayment, changes, transactionDate, createdAt, updatedAt, customerName].join(',') + "\r\n",
        transaction_details
    }
}

const initHeader = async () => {

    const categoriesString = ['id,categoryName,categoryDesc,showOnApp,createdAt,updatedAt\r\n', ...categories.map((cat) => Object.entries(cat).map(([key, value]) => value).join(",") + "\r\n")]
    const productsString = ['id,productName,price,productDescription,localImage,createdAt,updatedAt,categoryId,categoryName,productStock\r\n', ...products.map((prod) => Object.entries(prod).map(([key, value]) => value).join(",") + "\r\n")]


    await fs.writeFile(`${dataset}/category.csv`, categoriesString, {encoding: 'utf8'})
    await fs.writeFile(`${dataset}/product.csv`, productsString, {encoding: 'utf8'})
    await fs.writeFile(`${dataset}/transaction.csv`, 'id,totalqty,totalPrice,paymentMethod,infoDebitCard,orderType,userId,cashierName,totalPayment,changes,transactionDate,createdAt,updatedAt,customerName\r\n', {encoding: 'utf8'})
    await fs.writeFile(`${dataset}/transaction_detail.csv`, 'id,TrxId,ProductId,qty,name,price,subtotal,createdAt,updatedAt\r\n', {encoding: 'utf8'})
    await fs.writeFile(`${dataset}/saved_transaction.csv`, saved_transactions, {encoding: 'utf8'})
    await fs.writeFile(`${dataset}/saved_transaction_detail.csv`, saved_transaction_details, {encoding: 'utf8'})
}

(async () => {
    try {
        const start = new Date().getTime()

        await initHeader()

        let TDId = 1

        // s: 2250 | m: 11200 | l: 33500 | xl: 66900
        for (let i = 1; i <= 5; i++) {
            const {transaction, transaction_details} = generateTransaction(i)

            await fs.appendFile(`${dataset}/transaction.csv`, transaction, {encoding: 'utf8'})

            for (const transactionDetail of transaction_details) {
                await fs.appendFile(`${dataset}/transaction_detail.csv`, `${TDId},${transactionDetail}`, {encoding: 'utf8'})

                TDId++
            }

            if (i % 1000 === 0) {
                console.log('total data', i)
            }
        }


        const end = new Date().getTime()

        const durationInSecond = Math.floor((end - start) / 1000)

        console.log("FINISHED : ", `${durationInSecond >= 60 ? `${Math.floor(durationInSecond / 60)} minutes ${durationInSecond % 60} seconds` : `${durationInSecond} seconds`}`)


    } catch (err) {
        console.log('ERROR CAUGHT HERE =>', err)
    }
})()

