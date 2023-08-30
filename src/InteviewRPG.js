
const characterCreator = (intialState) => {
    let currentState = intialState;
    return (stateChangeFunction = state => state) => {
      const newState = stateChangeFunction(currentState);
      currentState = {...newState};
      return newState;
    }
  };

const Barbarian = characterCreator({HP: 100, Charisma: 3, Rest: 9, Knowledge: 3, Preparedness: 6, Intimidation: 9, Focus: 6});

const Wizard = characterCreator({HP: 100, Charisma: 6, Rest: 3, Knowledge: 9, Preparedness: 6, Intimidation: 6, Focus: 9});

const Bard = characterCreator({HP: 100, Charisma: 9, Rest: 6, Knowledge: 3, Preparedness: 9, Intimdation: 3, Focus: 6});

const Monk = characterCreator({HP: 100, Charisma: 3, Rest: 6, Knowledge: 6, Preparedness: 9, Intimdation: 3, Focus: 9});

const Rogue = characterCreator({HP: 100, Charisma: 9, Rest: 3, Knowledge: 3, Preparedness: 6, Intimdation: 6, Focus: 9 }); 