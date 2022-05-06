import { Tamagotchi } from "./modules/tamagotchi.js";


document.querySelector("#Submit").addEventListener("click", startMyTama);



function startMyTama(e) {
    e.preventDefault();

    let TamaName = document.querySelector("#TamaName").value;
    let YourName = document.querySelector("#YourName").value;
    let TamaType = document.querySelector("#Type").value;

    let myTamagotchi = new Tamagotchi(TamaName);

    document.querySelector("#pYourName").innerText = YourName;
    document.querySelector("#pTamaName").innerText = TamaName;
    document.querySelector("#pType").innerText = TamaType;
    document.querySelector("#pHunger").innerText = myTamagotchi.getHungerLevel();
    document.querySelector("#pHappy").innerText = myTamagotchi.getHappinessLevel();

    myTamagotchi.hungerDrain();
    myTamagotchi.happinessDrain()

    document.querySelector("#feed").addEventListener("click", feedTama);
    document.querySelector("#play").addEventListener("click", playTama);

    function feedTama() {
        myTamagotchi.feed();
        document.querySelector("#pHunger").innerText = myTamagotchi.getHungerLevel();
        
    }

   

    function playTama() {
        myTamagotchi.play();
        document.querySelector("#pHappy").innerText = myTamagotchi.getHappinessLevel();
    }

       
    myTamagotchi.isTamaDead();
    myTamagotchi.retartGame();    

    
    if (TamaType === "Dog") {
        const img = document.createElement('img');
        img.id = "bild";
        document.body.append(img);
        const imgUrl = new URL('./img/dog.png', import.meta.url);
        img.src = imgUrl.href;
        img.width = 300;
        img.style.marginLeft = '700px';
    }
    else if (TamaType === "Cow") {
        const img = document.createElement('img');
        img.id = "bild";
        document.body.append(img);
        const imgUrl = new URL('./img/cow.png', import.meta.url);
        img.src = imgUrl.href;
        img.width = 300;
        img.style.marginLeft = '700px';
    }
    else if(TamaType === "Horse"){
        const img = document.createElement('img');
        img.id = "bild";
        document.body.append(img);
        const imgUrl = new URL('./img/horse.png', import.meta.url);
        img.src = imgUrl.href;
        img.width = 300;
        img.style.marginLeft = '700px';
    
    }



}
