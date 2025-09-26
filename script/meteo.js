//Le fichier JS pour la partie Météo

const carteMeteo = document.getElementsByClassName("cardMeteo");
const btnCharger = document.body.getElementsByTagName("button");


const info = document.createElement("div");
    info.style.height = "300px";
    info.style.width = "200px";
    info.style.marginTop = "16px";
    info.style.marginBottom = "16px";
    info.style.border = "3px solid grey";
    info.style.padding = "16px 16px 24px 12px";
    carteMeteo.insertBefore(info, btnCharger);//Ici dans la div carteMeteo j'insére la nouvelle div info avant le btnCharger

function addInfo() {
    info.innerText = "Insert texte";
}

function bouton() {
    btnCharger.classList.add("button__cardMeteo");
}


btnCharger.addEventListenner("mouseDown",()=> {
    btnCharger.getElementsByTagName("button").style.backgroundColor = "orange";
},);

btnCharger.addEventListenner("mouseUp",()=> {
    btnCharger.getElementsByTagName("button").style.backgroundColor = "cornflowerblue";
},);

const getMeteoJson = async () =>{
    return await fetch("https://prevision-meteo.ch/services/json/toulouse")
        .then(response => {
            return response.json();
        });
}

info.addEventListenner("click", () => {
    getMeteoJson(btnCharger).then(data => {
        document.getElementsByTagName("button").textContent = `La condition actuelle : ${data.current_condition}`;
        document.getElementsByTagName("button").textContent = `La température actuelle : ${data.current_condition.tmp}`;
        document.getElementsByTagName("button").textContent = `La température maximum du jour 0 : ${data.fcst_day_0.tmax}`;
        document.getElementsByTagName("button").textContent = `La température minimum du jour 0 : ${data.fcst_day_0.tmin}`;
    });
})



    

    
