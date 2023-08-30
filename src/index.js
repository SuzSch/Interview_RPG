import './css/styles.css';

import { Barbarian} from "./InteviewRPG";

// import { Barbarian, Wizard, Bard, Monk, Rogue, BossMonster, drinkCoffee, studyMaterial, meditate, pumpIron, takeShower, researchCompany, critHPloss, veryHPloss, normalHPloss, okHPloss} from "./InteviewRPG";

function handleCharacter(event){
    event.preventDefault();
    const chara = document.querySelector('input[name="character"]:checked').value;
    console.log(chara);
    const name = document.getElementById("name");
    const hp = document.getElementById("HP");
    console.log(hp);
    const charisma = document.getElementById("Charisma");
    console.log(charisma);
    const rest = document.getElementById("Rest");
    console.log(rest);
    if (chara === "Barbarian") {
        const barb = Barbarian(); 
        console.log(barb);   
        console.log(barb.HP);    
        name.innerText = chara;        
        hp.innerText = `${barb.HP}`;
        charisma.innerText= `${barb.Charisma}`;
        rest.innerText = barb.Rest;
    }
    else {
        name.innerText = "Bozo";
        hp.innerText = "Turkey";
        charisma.innerText = "Ding Dong";
        rest.innerText = "Poopey";
    }
}

const form = document.getElementById("characterform");
form.addEventListener("submit", handleCharacter);

