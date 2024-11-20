import React, { createContext, useContext, useState } from 'react';

// 1. Create the CharacterContext
const CharacterContext = createContext();

// 2. Define the initial state to prevent undefined errors
const initialCharacter = {
    playerName: '',
    creationDate: '',
    dungeonMaster: '',
    campaign: '',
    name: '',
    level: 1,
    experiencePoints: 0,
    class: '',
    specialization: '',
    race: '',
    alignment: '',
    religion: '',
    patronDeity: '',
    background: '',
    socialClass: '',
    siblings: [],
    maritalStatus: '',
    numberOfChildren: 0,
    characterSketch: '', // URL for image
    abilities: {
        STR: 10,
        DEX: 10,
        CON: 10,
        INT: 10,
        WIS: 10,
        CHA: 10,
    },
    proficiencyBonus: 2,
    savingThrows: {},
    hitPoints: {
        maximum: 10,
        massiveDamageThreshold: 20,
        current: 10,
    },
    hitDice: {
        total: '1d10',
        current: '1d10',
    },
    healingSurge: false,
    deathSaves: {
        successes: 0,
        failures: 0,
    },
    lingeringInjuries: [],
    skills: {},
    passivePerception: 10,
    passiveInsight: 10,
    toolProficiencies: [],
    languagesKnown: [],
    personalityTraits: '',
    ideals: '',
    bonds: '',
    flaws: '',
    combatStats: {
        weapons: [],
        armorClass: 10,
        armor: '',
        movement: 30,
        classPools: {},
        inspiration: false,
    },
    possessions: {
        mundaneItems: [],
        coins: {
            copper: 0,
            silver: 0,
            electrum: 0,
            gold: 0,
            platinum: 0,
        },
        gems: [],
        otherTreasures: [],
    },
    carryingCapacity: {
        encumbered: 0,
        heavilyEncumbered: 0,
        maxCapacity: 0,
    },
    magicItems: {
        attuned: [],
        descriptions: [],
    },
    lifestyleExpenses: 0,
    trinket: '',
    racialTraits: [],
    classFeatures: [],
    feats: [],
    spellcasting: {
        spellcastingAbility: '',
        spellAttackModifier: 0,
        spellSaveDC: 0,
        spellsPrepared: [],
        cantrips: [],
        firstLevelSpells: [],
        secondLevelSpells: [],
        thirdLevelSpells: [],
        fourthLevelSpells: [],
        fifthLevelSpells: [],
        sixthLevelSpells: [],
        seventhLevelSpells: [],
        eighthLevelSpells: [],
        ninthLevelSpells: [],
    },
    family: {
        surname: '',
        father: '',
        mother: '',
        clan: '',
        legitimacy: 'Legitimate',
        siblings: [],
        ancestralHome: '',
        landHoldings: '',
        allies: [],
        foes: [],
    },
    description: {
        distinguishingMarks: '',
        mannerisms: '',
        weaknesses: '',
        fears: '',
        desires: '',
        loves: '',
    },
    localesFrequented: [],
    backstory: '',
    business: {
        name: '',
        type: '',
        worth: 0,
        upkeep: 0,
        skilledHirelings: 0,
        unskilledHirelings: 0,
        debtUnpaid: 0,
        daysDelinquent: 0,
        modifiers: {},
        notes: '',
    },
    lastWillAndTestament: '',
};

// 3. Custom hook to use CharacterContext with error handling
export const useCharacter = () => {
    const context = useContext(CharacterContext);

    // 4. Check if the context is undefined and handle it
    if (!context) {
        console.error(
            'useCharacter must be used within a CharacterProvider. Returning default character state.'
        );
        return { character: initialCharacter, updateCharacter: () => { } };
    }

    return context;
};

// 5. Helper function to handle nested updates
const updateNestedField = (prev, field, value) => {
    const keys = field.split('.');
    let updated = { ...prev };

    keys.reduce((acc, key, index) => {
        if (index === keys.length - 1) {
            acc[key] = value;
        } else {
            acc[key] = acc[key] ? { ...acc[key] } : {};
        }
        return acc[key];
    }, updated);

    return updated;
};

// 6. CharacterProvider component to wrap the application
export function CharacterProvider({ children }) {
    const [character, setCharacter] = useState(initialCharacter);

    // 7. Function to update specific fields of the character object
    const updateCharacter = (field, value) => {
        setCharacter((prev) => updateNestedField(prev, field, value));
    };

    return (
        <CharacterContext.Provider value={{ character, updateCharacter }}>
            {children}
        </CharacterContext.Provider>
    );
}

export default CharacterContext;