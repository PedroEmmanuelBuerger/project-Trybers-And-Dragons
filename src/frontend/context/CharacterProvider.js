import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import CharacterContext from './CharacterContext'

function CharacterProvider({ children }) {
    const [name, setName] = useState('');
    const [race, setRace] = useState('Dwarf');
    const [archtype, setArchtype] = useState('Mage');
    const [arrCharacters, setArrChar] = useState([]);

    const values = useMemo(() => ({
        name,
        setName,
        race,
        setRace,
        archtype,
        setArchtype,
        arrCharacters,
        setArrChar
    }), [name, race, archtype, arrCharacters]);
    return (
        <CharacterContext.Provider value={values}>
            {children}
        </CharacterContext.Provider>
    );
}

CharacterProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default CharacterProvider;