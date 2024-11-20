import React, { useState } from 'react';
import { useCharacter } from '../contexts/CharacterContext';
import './CharacterSheet.css';

function CharacterSheet() {
    const context = useCharacter();
    if (!context) {
        console.error("Character context is undefined. Ensure that the CharacterProvider wraps the component.");
        return <div>Error: Character context not found.</div>;
    }

    const { character, updateCharacter } = context;
    const [activeTab, setActiveTab] = useState('basicInfo');

    const handleInputChange = (field, value) => {
        updateCharacter(field, value);
    };

    const getAbilityModifier = (score) => Math.floor((score - 10) / 2);

    return (
        <div className="character-sheet">
            <h2>D&D 5E Complete Character Sheet</h2>

            {/* Tab Navigation */}
            <nav className="tabs">
                {['basicInfo', 'abilities', 'combat', 'spellcasting', 'equipment', 'backstory', 'business', 'will'].map((tab) => (
                    <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>
                        {tab.replace(/([A-Z])/g, ' $1')}
                    </button>
                ))}
            </nav>

            {/* Tab Content */}
            {activeTab === 'basicInfo' && (
                <section className="basic-info">
                    <div className="three-column-layout">
                        {/* Column 1: Player & Campaign Details */}
                        <div className="column">
                            <h3>Player & Campaign Info</h3>
                            {['playerName', 'creationDate', 'dungeonMaster', 'campaign'].map((field) => (
                                <div key={field} className="info-field">
                                    <label>{field.replace(/([A-Z])/g, ' $1')}:</label>
                                    <input
                                        type={field === 'creationDate' ? 'date' : 'text'}
                                        value={character[field] || ''}
                                        onChange={(e) => handleInputChange(field, e.target.value)}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Column 2: Character Sketch Image (Centered) */}
                        <div className="column centered-image">
                            <h3>Character Sketch</h3>
                            <img
                                src={character.image || 'placeholder-image.png'}
                                alt="Character Sketch"
                                className="character-image"
                            />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleInputChange('image', URL.createObjectURL(e.target.files[0]))}
                            />
                        </div>

                        {/* Column 3: Core Character Details */}
                        <div className="column">
                            <h3>Core Details</h3>
                            {[
                                'characterName',
                                'level',
                                'experiencePoints',
                                'class',
                                'specialization',
                                'race',
                                'alignment',
                                'background',
                                'inspiration'
                            ].map((field) => (
                                <div key={field} className="info-field">
                                    <label>{field.replace(/([A-Z])/g, ' $1')}:</label>
                                    <input
                                        type={field === 'level' || field === 'experiencePoints' ? 'number' : 'text'}
                                        value={character[field] || ''}
                                        onChange={(e) => handleInputChange(field, e.target.value)}
                                    />
                                </div>
                            ))}

                            {/* Hit Dice and Inspiration */}
                            <div className="info-field">
                                <label>Hit Dice (Current/Total):</label>
                                <input
                                    type="text"
                                    value={character.hitDice || '0/0'}
                                    onChange={(e) => handleInputChange('hitDice', e.target.value)}
                                />
                            </div>
                            <div className="info-field">
                                <label>Inspiration:</label>
                                <input
                                    type="number"
                                    min="0"
                                    value={character.inspiration || 0}
                                    onChange={(e) => handleInputChange('inspiration', parseInt(e.target.value, 10))}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {activeTab === 'abilities' && (
                <section className="abilities-tab">
                    <h3>Ability Scores and Skills</h3>

                    {/* Proficiency Bonus */}
                    <div className="proficiency-bonus centered">
                        <label>Proficiency Bonus:</label>
                        <input
                            type="number"
                            min="0"
                            value={character.proficiencyBonus || 2}
                            onChange={(e) => handleInputChange('proficiencyBonus', parseInt(e.target.value, 10))}
                        />
                    </div>

                    {/* Ability Scores Section */}
                    <div className="ability-scores three-column-layout">

                        {['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'].map((ability) => (
                            <div key={ability} className="ability-field">
                                <label>{ability.toUpperCase()}:</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="30"
                                    value={character.abilities?.[ability] || 10}
                                    onChange={(e) => handleInputChange(`abilities.${ability}`, parseInt(e.target.value, 10))}
                                />
                                <span>Modifier: {getAbilityModifier(character.abilities?.[ability] || 10)}</span>
                            </div>
                        ))}
                    </div>

                    {/* Skills Section */}
                    <div className="skills-section">
                        <h4>Skills</h4>
                        {[
                            { name: 'Acrobatics', relatedAbility: 'dexterity' },
                            { name: 'Animal Handling', relatedAbility: 'wisdom' },
                            { name: 'Arcana', relatedAbility: 'intelligence' },
                            { name: 'Athletics', relatedAbility: 'strength' },
                            { name: 'Deception', relatedAbility: 'charisma' },
                            { name: 'History', relatedAbility: 'intelligence' },
                            { name: 'Insight', relatedAbility: 'wisdom' },
                            { name: 'Intimidation', relatedAbility: 'charisma' },
                            { name: 'Investigation', relatedAbility: 'intelligence' },
                            { name: 'Medicine', relatedAbility: 'wisdom' },
                            { name: 'Nature', relatedAbility: 'intelligence' },
                            { name: 'Perception', relatedAbility: 'wisdom' },
                            { name: 'Performance', relatedAbility: 'charisma' },
                            { name: 'Persuasion', relatedAbility: 'charisma' },
                            { name: 'Religion', relatedAbility: 'intelligence' },
                            { name: 'Sleight of Hand', relatedAbility: 'dexterity' },
                            { name: 'Stealth', relatedAbility: 'dexterity' },
                            { name: 'Survival', relatedAbility: 'wisdom' },
                        ].map((skill) => (
                            <div key={skill.name} className="skill-field">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={character.skills?.[skill.name]?.proficient || false}
                                        onChange={(e) =>
                                            handleInputChange(`skills.${skill.name}.proficient`, e.target.checked)
                                        }
                                    />
                                    {skill.name} ({skill.relatedAbility.toUpperCase()})
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    value={character.skills?.[skill.name]?.score || 0}
                                    onChange={(e) =>
                                        handleInputChange(`skills.${skill.name}.score`, parseInt(e.target.value, 10))
                                    }
                                />
                            </div>
                        ))}
                    </div>

                    {/* Tool Proficiencies and Known Languages */}
                    <div className="tool-proficiencies">
                        <h4>Tool Proficiencies</h4>
                        <textarea
                            placeholder="List of tool proficiencies"
                            value={character.toolProficiencies || ''}
                            onChange={(e) => handleInputChange('toolProficiencies', e.target.value)}
                        />
                    </div>

                    <div className="known-languages">
                        <h4>Known Languages</h4>
                        <textarea
                            placeholder="List of known languages"
                            value={character.knownLanguages || ''}
                            onChange={(e) => handleInputChange('knownLanguages', e.target.value)}
                        />
                    </div>
                </section>
            )}

            {activeTab === 'combat' && (
                <section className="combat">
                    <h3>Combat Statistics</h3>
                    {['hitPoints', 'maxHitPoints', 'armorClass', 'speed', 'numAttacks'].map((field) => (
                        <div key={field} className="info-field">
                            <label>{field.replace(/([A-Z])/g, ' $1')}:</label>
                            <input
                                type="number"
                                min="0"
                                value={character[field] || 0}
                                onChange={(e) => handleInputChange(field, parseInt(e.target.value, 10))}
                            />
                        </div>
                    ))}
                    <div className="death-saves">
                        <h4>Death Saves</h4>
                        <div>
                            <label>Successes:</label>
                            <input
                                type="number"
                                min="0"
                                max="3"
                                value={character.deathSavesSuccess || 0}
                                onChange={(e) => handleInputChange('deathSavesSuccess', parseInt(e.target.value, 10))}
                            />
                        </div>
                        <div>
                            <label>Failures:</label>
                            <input
                                type="number"
                                min="0"
                                max="3"
                                value={character.deathSavesFail || 0}
                                onChange={(e) => handleInputChange('deathSavesFail', parseInt(e.target.value, 10))}
                            />
                        </div>
                    </div>
                </section>
            )}

            {activeTab === 'spellcasting' && (
                <section className="spellcasting">
                    <h3>Spellcasting</h3>
                    {['spellcastingClass', 'spellcastingAbility', 'spellAttackModifier', 'spellSaveDC'].map((field) => (
                        <div key={field} className="info-field">
                            <label>{field.replace(/([A-Z])/g, ' $1')}:</label>
                            <input
                                type="text"
                                value={character[field] || ''}
                                onChange={(e) => handleInputChange(field, e.target.value)}
                            />
                        </div>
                    ))}
                </section>
            )}

            {activeTab === 'equipment' && (
                <section className="equipment">
                    <h3>Possessions and Equipment</h3>
                    {['mundaneItems', 'magicItems', 'coins'].map((category) => (
                        <div key={category} className="info-field">
                            <label>{category.replace(/([A-Z])/g, ' $1')}:</label>
                            <textarea
                                value={character[category] || ''}
                                onChange={(e) => handleInputChange(category, e.target.value)}
                            />
                        </div>
                    ))}
                </section>
            )}

            {activeTab === 'backstory' && (
                <section className="backstory">
                    <h3>Character Backstory</h3>
                    <textarea
                        placeholder="Enter your character's backstory."
                        value={character.backstory || ''}
                        onChange={(e) => handleInputChange('backstory', e.target.value)}
                    />
                </section>
            )}

            {activeTab === 'business' && (
                <section className="business">
                    <h3>Business and Assets</h3>
                    {['businessName', 'businessType', 'worth', 'upkeepCost', 'debt'].map((field) => (
                        <div key={field} className="info-field">
                            <label>{field.replace(/([A-Z])/g, ' $1')}:</label>
                            <input
                                type="text"
                                value={character[field] || ''}
                                onChange={(e) => handleInputChange(field, e.target.value)}
                            />
                        </div>
                    ))}
                </section>
            )}

            {activeTab === 'will' && (
                <section className="last-will">
                    <h3>Last Will & Testament</h3>
                    <textarea
                        placeholder="Enter details of the character's Last Will & Testament."
                        value={character.lastWill || ''}
                        onChange={(e) => handleInputChange('lastWill', e.target.value)}
                    />
                </section>
            )}
        </div>
    );
}

export default CharacterSheet;
