import './PlayButton.css'
function PlayButton({message, children, onPlay, onPause}){
    let playing = false;     //don't use this approach
    function handleClick(e){
        console.log(e)//printing the SyntheticBaseEvent object

        e.stopPropagation() //to prevent event bubbling
        if(playing) onPause()
        else onPlay()

        playing = !playing;
    }

    return (
        <button onClick={handleClick}>{children}: {playing?'>':'||'}</button> //this will not update as variables do not manipulate DOM directly, only states do
    )
}

export default PlayButton;