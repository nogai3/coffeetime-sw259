const menu = [
    {
        "name": "Капучино",
        "description": "Классический эспрессо с пышной молочной пеной, бархатистой текстурой и мягким сливочным вкусом.",
        "price": "2100 ₸"
    },
    {
        "name": "Эспрессо",
        "description": "Концентрированный и плотный напиток с глубоким вкусом, плотной пенкой крема и приятной горчинкой.",
        "price": "1000 ₸"
    },
    {
        "name": "Американо",
        "description": "Эспрессо, разбавленный горячей водой, для любителей чистого кофейного вкуса в большем объеме.",
        "price": "1500 ₸"
    },
    {
        "name": "Латте",
        "description": "Нежный молочно-кофейный напиток с легкой пенкой, где преобладает вкус молока.",
        "price": "1900 ₸"
    },
    {
        "name": "Флет Уайт",
        "description": "Насыщенный напиток на двойном эспрессо с бархатистой микропеной и ярким вкусом кофе.",
        "price": "1500 ₸"
    },
    {
        "name": "Раф",
        "description": "Десертный напиток на взбитых с эспрессо сливках с ванильным вкусом и текстурой талого мороженого.",
        "price": "2000 ₸"
    },
    {
        "name": "Айс Американо",
        "description": "Освежающий микс эспрессо и ледяной воды, быстро тонизирующий в жару.",
        "price": "1800 ₸"
    },
    {
        "name": "Айс Латте",
        "description": "Охлажденный кофейно-молочный напиток со льдом и мягким сливочным вкусом.",
        "price": "2200 ₸"
    },
    {
        "name": "Айс Мокка",
        "description": "Холодный десертный коктейль, сочетающий терпкий эспрессо, шоколадный соус и молоко со льдом.",
        "price": "1000 ₸"
    }
];

const name = document.getElementById("coffee_name");
const desc = document.getElementById("coffee_description");
const price = document.getElementById("coffee_price");

function getBaristaChoice() {
    const randomIndex = Math.floor(Math.random() * menu.length);
    const selected = menu[randomIndex];

    name.textContent = selected.name;
    desc.textContent = selected.description;
    price.textContent = selected.price;
}

getBaristaChoice();