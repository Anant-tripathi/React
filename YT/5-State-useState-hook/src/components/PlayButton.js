import './PlayButton.css'
import { useState } from 'react';

function PlayButton({ message, children, onPlay, onPause }) {
    console.log("render playbutton");
    // let playing = false;     //don't use this approach
    const [playing, setPlaying] = useState(false);
    function handleClick(e) {
        console.log(e)//printing the SyntheticBaseEvent object

        e.stopPropagation() //to prevent event bubbling
        if (playing) onPause()
        else onPlay()

        setPlaying(!playing);
    }

    return (
        <button onClick={handleClick}>{children}: {playing ? '⏸️' : '▶️'}</button> //this will not update as variables do not manipulate DOM directly, only states do
    )
}

export default PlayButton;