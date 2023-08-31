 const characterCreator = (intialState) => {
    let currentState = intialState;
    return (stateChangeFunction = state => state) => {
      const newState = stateChangeFunction(currentState);
      currentState = {...newState};
      return newState;
    }
  };

export const Barbarian = characterCreator({HP: 100, Charisma: 3, Rest: 9, Knowledge: 3, Preparedness: 6, Intimidation: 9, Focus: 6});

export const Wizard = characterCreator({HP: 100, Charisma: 6, Rest: 3, Knowledge: 9, Preparedness: 6, Intimidation: 6, Focus: 9});

export const Bard = characterCreator({HP: 100, Charisma: 9, Rest: 6, Knowledge: 3, Preparedness: 9, Intimidation: 3, Focus: 6});

export const Monk = characterCreator({HP: 100, Charisma: 3, Rest: 6, Knowledge: 6, Preparedness: 9, Intimidation: 3, Focus: 9});

export const Rogue = characterCreator({HP: 100, Charisma: 9, Rest: 3, Knowledge: 3, Preparedness: 6, Intimidation: 6, Focus: 9 }); 

export const BossMonster = characterCreator({HP:100});

const changeStats = (prop) => {
    return (value) => {
        return (state) => ({
            ...state,
            [prop] : (state[prop]) + value
        })
    }
}
// Change skill stats
export const restUP = changeStats("Rest")(2);
export const knowledgeUP = changeStats("Knowledge")(2);
export const focusUP= changeStats("Focus")(2);
export const intimidationUP= changeStats("Intimidation")(2);
export const charismaUP = changeStats("Charisma")(2);
export const prepUP = changeStats("Preparedness")(2);

//Change HP

export const critHPloss = changeStats("HP")(-20);
export const veryHPloss = changeStats("HP")(-15);
export const normalHPloss = changeStats("HP")(-10);
export const okHPloss = changeStats("HP")(-5);

