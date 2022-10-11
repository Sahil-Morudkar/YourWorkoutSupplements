let btn = document.querySelector('.btn')
let links = document.querySelector('.links')


const items = [
    {
        id: 1,
        img: "./Images/items/OptimumNutritionP.png",
        title: "Optimum Nutrition Whey Protein",
        category: "Protein",
        price: "Rs. 2900",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        nisi.`,
    }, {
        id: 2,
        img: "./Images/items/MuscleBlazeB.png",
        title: "MuscleBlaze BCAA",
        category: "BCAA",
        price: "Rs. 999",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        nisi.`,
    }, {
        id: 3,
        img: "./Images/items/NitroTechP.png",
        title: "NitroTech Whey Protein",
        category: "Protein",
        price: "Rs. 4299",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        nisi.`,
    }, {
        id: 4,
        img: "./Images/items/OptimumNutritionC.png",
        title: "Optimum Nutrition Creatine",
        category: "Creatine",
        price: "Rs. 1199",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        nisi.`,
    }, {
        id: 5,
        img: "./Images/items/GncC.png",
        title: "GNC Creatine",
        category: "Creatine",
        price: "Rs. 4299",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        nisi.`,
    }, {
        id: 6,
        img: "./Images/items/XtendB.png",
        title: "Xtend BCAA",
        category: "BCAA",
        price: "Rs. 2455",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        nisi.`,
    }, {
        id: 7,
        img: "./Images/items/BigMusclesP.png",
        title: "BigMuscles Protein",
        category: "Protein",
        price: "Rs. 2799",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        nisi.`,
    }, {
        id: 8,
        img: "./Images/items/MuscleBlazeC.png",
        title: "MuscleBlaze Creatine",
        category: "Creatine",
        price: "Rs. 799",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        nisi.`,
    }, {
        id: 9,
        img: "./Images/items/MusclePharmB.png",
        title: "MusclePharm BCAA",
        category: "BCAA",
        price: "Rs. 1999",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        nisi.`,
    }, {
        id: 10,
        img: "./Images/items/MuscleBlazeP.jpg",
        title: "MuscleBlaze Protein",
        category: "Protein",
        price: "Rs. 2450",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        nisi.`,
    }]

let filterbutton = document.querySelectorAll(".filter-btn")
let itembtn = document.querySelectorAll(".item-btn")


btn.addEventListener('click', function () {
    links.classList.toggle('show-links')
})


const itemsSection = document.querySelector('.items-section')

window.addEventListener("DOMContentLoaded", function () {
    displayItems(items)
});


filterbutton.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id
        const selectedItem = items.filter(function (a) {
            if (a.category === category) {
                return a
            }
        })
        if (category === "All") {
            displayItems(items)
        }
        else {
            displayItems(selectedItem)
        }
    })
})



function displayItems(allItems) {
    let displayItems = allItems.map(function (item) {
        return `<div class="items">
        <img src=${item.img} class="item-img" alt="">
        <div class="item-info">
            <h1 class="item-title">${item.title}</h1 >
            <p class="item-description">${item.desc}
            </p>
            <h2 class="price"> ${item.price} </h2>
        </div >
    </div > `
    })
    displayItems = displayItems.join("")
    itemsSection.innerHTML = displayItems
}