'use strict'

const PRODUCT_TYPE = {
    MILK_FOOD: 1,
    FRUIT: 2,
    VEGETABLE: 3,
    CLOTHES: 4,
    BAKERY: 5,
}

const data = [
    {
        name: 'Milk',
        price: 20,
        quantity: 1,
        type: PRODUCT_TYPE.MILK_FOOD,
    },
    {
        name: 'Apple',
        price: 10,
        quantity: 3,
        type: PRODUCT_TYPE.FRUIT,
    },
    {
        name: 'Butter',
        price: 12,
        quantity: 1,
        type: PRODUCT_TYPE.MILK_FOOD,
    },
    {
        name: 'Bread',
        price: 23,
        quantity: 1,
        type: PRODUCT_TYPE.BAKERY,
    },
    {
        name: 'Orange',
        price: 12,
        quantity: 3,
        type: PRODUCT_TYPE.FRUIT,
    },
    {
        name: 'T-Shirt',
        price: 200,
        quantity: 1,
        type: PRODUCT_TYPE.CLOTHES,
    },
    {
        name: 'Jacket',
        price: 400,
        quantity: 1,
        type: PRODUCT_TYPE.CLOTHES,
    },
    {
        name: 'Tomato',
        price: 15,
        quantity: 5,
        type: PRODUCT_TYPE.VEGETABLE,
    },
    {
        name: 'Onion',
        price: 10,
        quantity: 4,
        type: PRODUCT_TYPE.VEGETABLE,
    },
]

const korona = [
    {
        name: 'Yogurt',
        price: 20,
        quantity: 1,
        type: PRODUCT_TYPE.MILK_FOOD,
    },
    {
        name: 'Pineapple',
        price: 10,
        quantity: 3,
        type: PRODUCT_TYPE.FRUIT,
    },
    {
        name: 'Cheese',
        price: 12,
        quantity: 1,
        type: PRODUCT_TYPE.MILK_FOOD,
    },
    {
        name: 'Cake',
        price: 23,
        quantity: 1,
        type: PRODUCT_TYPE.BAKERY,
    },
    {
        name: 'Strawberry',
        price: 12,
        quantity: 3,
        type: PRODUCT_TYPE.FRUIT,
    },
    {
        name: 'Pants',
        price: 200,
        quantity: 1,
        type: PRODUCT_TYPE.CLOTHES,
    },
    {
        name: 'Dress',
        price: 400,
        quantity: 1,
        type: PRODUCT_TYPE.CLOTHES,
    },
    {
        name: 'Mushrooms',
        price: 15,
        quantity: 5,
        type: PRODUCT_TYPE.VEGETABLE,
    },
    {
        name: 'Potato',
        price: 10,
        quantity: 4,
        type: PRODUCT_TYPE.VEGETABLE,
    },
]


let newList;
let productType;
let i;

function getProductType() {
    productType = prompt('По какому типу продуктов Вы хотите отфильтровать все продукты? (Выберите числа от 1 до 5)');
}

function displayAll() {
    console.log(newList);
}

function filterOfType(inputArray) {
    newList = [];
    for (i = 0; i < inputArray.length; i++) {
        let {name, price, quantity, type} = inputArray[i];
        if (type === Number(productType)) (newList.push(inputArray[i]));
    }
}

getProductType()
filterOfType(korona)
displayAll()
getProductType()
filterOfType(korona)
displayAll()

