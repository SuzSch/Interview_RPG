import './css/styles.css';

import { Barbarian, Wizard, Bard, Rogue, Monk, restUP, knowledgeUP, focusUP, intimidationUP, charismaUP, prepUP} from "./InteviewRPG";

// import { Barbarian, Wizard, Bard, Monk, Rogue, BossMonster, drinkCoffee, studyMaterial, meditate, pumpIron, takeShower, researchCompany, critHPloss, veryHPloss, normalHPloss, okHPloss} from "./InteviewRPG";

function handleCharacter(event){
    event.preventDefault();
    const chara = document.querySelector('input[name="character"]:checked').value;
    const name = document.getElementById("name");
    const profile = document.getElementById("profile");
    const hp = document.getElementById("HP");
    const charisma = document.getElementById("Charisma");
    const rest = document.getElementById("Rest");
    const know = document.getElementById("Knowledge");
    const prep = document.getElementById("Preparedness");
    const intimidation = document.getElementById("Intimidation");
    const focus = document.getElementById("Focus");
    name.innerText = chara;  
    const formDiv = document.getElementById("characterSelect");
    formDiv.setAttribute("class", "hidden");
    const charaStatDiv = document.getElementById("charaStats");
    charaStatDiv.removeAttribute("class", "hidden");
    const morningDiv = document.getElementById("morning");
    morningDiv.removeAttribute("class", "hidden");
    if (chara === "Barbarian") {
        const barb = Barbarian();
        profile.setAttribute("src", "./assets/images/barbarian.png");        
        hp.innerText = `HP:${barb.HP}`;
        charisma.innerText= `Charisma: ${barb.Charisma}`;
        rest.innerText = `Rest: ${barb.Rest}`;
        know.innerText = `Knowledge: ${barb.Knowledge}`;
        prep.innerText = `Preparedness: ${barb.Preparedness}`;
        intimidation.innerText = `Intimidation: ${barb.Intimidation}`;
        focus.innerText = `Focus: ${barb.Focus}`;
    } else if (chara === "Wizard") {
        const wizard = Wizard();         
        hp.innerText = `HP:${wizard.HP}`;
        charisma.innerText= `Charisma: ${wizard.Charisma}`;
        rest.innerText = `Rest: ${wizard.Rest}`;
        know.innerText = `Knowledge: ${wizard.Knowledge}`;
        prep.innerText = `Preparedness: ${wizard.Preparedness}`;
        intimidation.innerText = `Intimidation: ${wizard.Intimidation}`;
        focus.innerText = `Focus: ${wizard.Focus}`;
    } else if (chara === "Bard") {
        const bard = Bard();
        hp.innerText = `HP:${bard.HP}`;
        charisma.innerText= `Charisma: ${bard.Charisma}`;
        rest.innerText = `Rest: ${bard.Rest}`;
        know.innerText = `Knowledge: ${bard.Knowledge}`;
        prep.innerText = `Preparedness: ${bard.Preparedness}`;
        intimidation.innerText = `Intimidation: ${bard.Intimidation}`;
        focus.innerText = `Focus: ${bard.Focus}`;
    } else if (chara === "Rogue") {
        const rogue = Rogue();
        hp.innerText = `HP:${rogue.HP}`;
        charisma.innerText= `Charisma: ${rogue.Charisma}`;
        rest.innerText = `Rest: ${rogue.Rest}`;
        know.innerText = `Knowledge: ${rogue.Knowledge}`;
        prep.innerText = `Preparedness: ${rogue.Preparedness}`;
        intimidation.innerText = `Intimidation: ${rogue.Intimidation}`;
        focus.innerText = `Focus: ${rogue.Focus}`;
    } else {
        const monk = Monk();
        hp.innerText = `HP:${monk.HP}`;
        charisma.innerText= `Charisma: ${monk.Charisma}`;
        rest.innerText = `Rest: ${monk.Rest}`;
        know.innerText = `Knowledge: ${monk.Knowledge}`;
        prep.innerText = `Preparedness: ${monk.Preparedness}`;
        intimidation.innerText = `Intimidation: ${monk.Intimidation}`;
        focus.innerText = `Focus: ${monk.Focus}`;
    }
}

function morningTask(event) {
    event.preventDefault();
    const task1 = document.getElementById("task1").value;
    const task2 = document.getElementById("task2").value;
    const chara = document.getElementById("name").innerText;
    console.log(chara);
    const charisma = document.getElementById("Charisma");
    const rest = document.getElementById("Rest");
    const know = document.getElementById("Knowledge");
    const prep = document.getElementById("Preparedness");
    const intimidation = document.getElementById("Intimidation");
    const focus = document.getElementById("Focus");
    const formDiv = document.getElementById("morning");
    const statUpDiv = document.getElementById("statUp"); 
    statUpDiv.removeAttribute("class", "hidden");
    formDiv.setAttribute("class", "hidden");

    if (chara === "Barbarian") {
        if(task1 === "coffee") {
            Barbarian(restUP);
        } else if(task1 === "study") {
            Barbarian(knowledgeUP);
        } else if(task1 === "meditate") {
            Barbarian(focusUP);
        } else if(task1 === "pump") {
            Barbarian(intimidationUP);
        } else if(task1 === "shower") {
            Barbarian(charismaUP);
        } else {
            Barbarian(prepUP);
        }
        if(task2 === "moreCoffee") {
            Barbarian(restUP);
        } else if(task2 === "notes") {
            Barbarian(knowledgeUP);
        } else if(task2 === "pool") {
            Barbarian(focusUP);
        } else if(task2 === "pose") {
            Barbarian(intimidationUP);
        } else if(task2 === "garments") {
            Barbarian(charismaUP);
        } else {
            Barbarian(prepUP);
        }
        const barb = Barbarian();        
        charisma.innerText= `Charisma: ${barb.Charisma}`;
        rest.innerText = `Rest: ${barb.Rest}`;
        know.innerText = `Knowledge: ${barb.Knowledge}`;
        prep.innerText = `Preparedness: ${barb.Preparedness}`;
        intimidation.innerText = `Intimidation: ${barb.Intimidation}`;
        focus.innerText = `Focus: ${barb.Focus}`;
    } else if  (chara === "Wizard") {
        if(task1 === "coffee") {
            Wizard(restUP);
        } else if(task1 === "study") {
            Wizard(knowledgeUP);
        } else if(task1 === "meditate") {
            Wizard(focusUP);
        } else if(task1 === "pump") {
            Wizard(intimidationUP);
        } else if(task1 === "shower") {
            Wizard(charismaUP);
        } else {
            Wizard(prepUP);
        }
        if(task2 === "moreCoffee") {
            Wizard(restUP);
        } else if(task2 === "notes") {
            Wizard(knowledgeUP);
        } else if(task2 === "pool") {
            Wizard(focusUP);
        } else if(task2 === "pose") {
            Wizard(intimidationUP);
        } else if(task2 === "garments") {
            Wizard(charismaUP);
        } else {
            Wizard(prepUP);
        }
        const wizard = Wizard();        
        charisma.innerText= `Charisma: ${wizard.Charisma}`;
        rest.innerText = `Rest: ${wizard.Rest}`;
        know.innerText = `Knowledge: ${wizard.Knowledge}`;
        prep.innerText = `Preparedness: ${wizard.Preparedness}`;
        intimidation.innerText = `Intimidation: ${wizard.Intimidation}`;
        focus.innerText = `Focus: ${wizard.Focus}`;
    } else if (chara === "Bard") {
        if(task1 === "coffee") {
            Bard(restUP);
        } else if(task1 === "study") {
            Bard(knowledgeUP);
        } else if(task1 === "meditate") {
            Bard(focusUP);
        } else if(task1 === "pump") {
            Bard(intimidationUP);
        } else if(task1 === "shower") {
            Bard(charismaUP);
        } else {
            Bard(prepUP);
        }
        if(task2 === "moreCoffee") {
            Bard(restUP);
        } else if(task2 === "notes") {
            Bard(knowledgeUP);
        } else if(task2 === "pool") {
            Bard(focusUP);
        } else if(task2 === "pose") {
            Bard(intimidationUP);
        } else if(task2 === "garments") {
            Bard(charismaUP);
        } else {
            Bard(prepUP);
        }
        const bard = Bard();        
        charisma.innerText= `Charisma: ${bard.Charisma}`;
        rest.innerText = `Rest: ${bard.Rest}`;
        know.innerText = `Knowledge: ${bard.Knowledge}`;
        prep.innerText = `Preparedness: ${bard.Preparedness}`;
        intimidation.innerText = `Intimidation: ${bard.Intimidation}`;
        focus.innerText = `Focus: ${bard.Focus}`;
    } else if (chara === "Rogue") {
        if(task1 === "coffee") {
            Rogue(restUP);
        } else if(task1 === "study") {
            Rogue(knowledgeUP);
        } else if(task1 === "meditate") {
            Rogue(focusUP);
        } else if(task1 === "pump") {
            Rogue(intimidationUP);
        } else if(task1 === "shower") {
            Rogue(charismaUP);
        } else {
            Rogue(prepUP);
        }
        if(task2 === "moreCoffee") {
            Rogue(restUP);
        } else if(task2 === "notes") {
            Rogue(knowledgeUP);
        } else if(task2 === "pool") {
            Rogue(focusUP);
        } else if(task2 === "pose") {
            Rogue(intimidationUP);
        } else if(task2 === "garments") {
            Rogue(charismaUP);
        } else {
            Rogue(prepUP);
        }
        const rogue = Rogue();        
        charisma.innerText= `Charisma: ${rogue.Charisma}`;
        rest.innerText = `Rest: ${rogue.Rest}`;
        know.innerText = `Knowledge: ${rogue.Knowledge}`;
        prep.innerText = `Preparedness: ${rogue.Preparedness}`;
        intimidation.innerText = `Intimidation: ${rogue.Intimidation}`;
        focus.innerText = `Focus: ${rogue.Focus}`;
    } else if (chara === "Monk") {
        if(task1 === "coffee") {
            Monk(restUP);
        } else if(task1 === "study") {
            Monk(knowledgeUP);
        } else if(task1 === "meditate") {
            Monk(focusUP);
        } else if(task1 === "pump") {
            Monk(intimidationUP);
        } else if(task1 === "shower") {
            Monk(charismaUP);
        } else {
            Monk(prepUP);
        }
        if(task2 === "moreCoffee") {
            Monk(restUP);
        } else if(task2 === "notes") {
            Monk(knowledgeUP);
        } else if(task2 === "pool") {
            Monk(focusUP);
        } else if(task2 === "pose") {
            Monk(intimidationUP);
        } else if(task2 === "garments") {
            Monk(charismaUP);
        } else {
            Monk(prepUP);
        }
        const monk = Monk();        
        charisma.innerText= `Charisma: ${monk.Charisma}`;
        rest.innerText = `Rest: ${monk.Rest}`;
        know.innerText = `Knowledge: ${monk.Knowledge}`;
        prep.innerText = `Preparedness: ${monk.Preparedness}`;
        intimidation.innerText = `Intimidation: ${monk.Intimidation}`;
        focus.innerText = `Focus: ${monk.Focus}`;
    }
}
const form1 = document.getElementById("characterform");
const form2 = document.getElementById("morningForm");
form1.addEventListener("submit", handleCharacter);
form2.addEventListener("submit", morningTask);

