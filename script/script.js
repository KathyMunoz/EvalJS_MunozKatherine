const usersHuman = [{
        type: "humain",
        name: "John Doe",
        email: "j.smith@gmail.com",
        age: 25,
        avatar : './img/john.png',
        icon : './img/john_icon.png',
        latitude : 43.604429,
        longitude : 1.443812
    },
    {
        type: "humain",
        name: "Jane Smith",
        email: "ja.doe@sfr.fr",
        age: 5,
        avatar : './img/jane.png',
        icon : './img/jane_icon.png',
        latitude : 43.60792, 
        longitude : 1.44133
    },
    {
        type: "humain",
        name: "Le Vénérable",
        email: "levy@gmail.com",
        age: 500,
        avatar : './img/venerable.png',
        icon : './img/venerable_icon.png',
        latitude : 43.60053,
        longitude : 1.44590
    }
];

const usersPet = [{
        type: "animal de compagnie",
        espece: "chien",
        name: "Rox",
        age: 7,
        propriétaire: "John Doe",
        avatar : './img/chien.png',
        icon : './img/chien_icon.png',
        latitude : 43.60377,
        longitude : 1.43583
    },
    {
        type: "animal de compagnie",
        espece: "renard",
        name: "Roukie",
        age: 300,
        propriétaire: "Le Vénérable",
        avatar : './img/renard.jpg',
        icon : './img/renard_icon.png',
        latitude : 43.59602,
        longitude : 1.43692
    }
];

const usersXeno = [{
        type: "Xeno",
        espece: "Krogan",
        name: "Wrex",
        menace: "Rouge",
        age: 45,
        avatar : './img/wrex.png',
        icon : './img/wrex_icon.png',
        latitude : 43.59555,
        longitude : 1.45257
    },
    {
        type: "Xeno",
        espece: "Turien",
        name: "Garrus",
        menace: "Vert",
        age: 35,
        avatar : './img/garrus.png',
        icon : './img/garrus_icon.png',
        latitude : 43.61108,
        longitude : 1.45539
    },
    {
        type: "Xeno",
        espece: "Asari",
        name: "Liara",
        menace: "ULTRA Rouge",
        age: 25,
        avatar : './img/liara.png',
        icon : './img/liara_icon.png',
        latitude : 43.61183,
        longitude :  1.43222
    }
];


const tabData = [];
tabData.push(usersHuman, usersPet, usersXeno);
console.log(tabData);

function cardHuman () {
    const article = document.createElement("article");   
    const titre = document.createElement("h2");
        titre.textContent = "name objet";
    const img = document.createElement("img");
        img.src = `${avatar}`;
    const paragraphe = document.createElement("p");
        paragraphe.textContent = `${age} + "email"`;
    article.push = (titre,image,paragraphe);
    article.classList.add("card");
        return article;
}

function cardPet() {
    const article = document.createElement("article");
    const titre = document.createElement("h2");
        titre.textContent = "name de l'objet";
    const img = document.createElement("img");
        img.src = `${avatar}`;
    const paragraphe = document.createElement("p");
        paragraphe.textContent = `${age} + ${espece} + ${proriétaire}`;
    article.push = (titre, img, paragraphe);
    article.classList.add("card");
    return article;
}

function cardXeno() {
    const article = document.createElement("article");
    const titre = document.createElement("h2");
        titre.textContent = "name de l'objet";
    const img = document.createElement("img");
        img.src = `${avatar}`;
    const paragraphe = document.createElement("p");
        paragraphe.textContent = `${age} + ${espece} + ${menace}`;
    article.push = (titre, img, paragraphe);
    article.classList.add("card");
    return article;
}

//INSTALLATION DE la librairie Leaflet

var map = L.map('map').setView([43.604429, 1.443812], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function markerProfil() {
    const ICON = document.createElement("icon");
}