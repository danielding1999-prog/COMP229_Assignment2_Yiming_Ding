import { useReducer, useState } from 'react';
import { WiAlien } from "react-icons/wi";

function AlienRate({totalAliens = 5}){
    const [selectedAliens, setSelectedAliens] = useState(0)
    const createArray = (length) => Array.from({length}, (x, i) => i)

    return(
        <div>
            {createArray(totalAliens).map((x, index) =>
            (<Alien
                key = {index}
                selected = {index < selectedAliens}
                onSelect={() => setSelectedAliens(index + 1)}
                />
            ))}
        <p>You have selected {selectedAliens} aliens</p>
        </div>
    )
}

const Alien = ({selected = false, onSelect}) => (
    <WiAlien color = {selected ? "black": "gray"} onClick = {onSelect}/>
)

export default AlienRate;