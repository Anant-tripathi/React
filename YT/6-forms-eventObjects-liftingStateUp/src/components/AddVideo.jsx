import "./AddVideo.css"
import { useState } from 'react';
// import e from "cors";

const initialVideoState = {
        time: "2 years ago",
        channel: "coder dost",
        verified: true,
        title: '', //adding to prevent error for form type conversion
        views: ''  //from uncontrolled to controlled form
}

function AddVideo({ addVideos }) {
    console.log("rendered addvideo")

    const [video, setVideo] = useState(initialVideoState); // initializing a blank video state
    function handleSubmit(e) {
        e.preventDefault();
        addVideos(video);
        setVideo(initialVideoState); //clearing the form
        // console.log(video)
    }

    function handleChange(e) {
        // console.log(e.target.name, e.target.value);
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
        // console.log(video);
    }
    return (
        <form>
            <input
                type="text"
                name="title"
                onChange={handleChange}
                placeholder="title"
                value={video.title} //making a controlled form
            />
            <input
                type="text"
                name="views"
                onChange={handleChange}
                placeholder="views"
                value={video.views}
            />
            <button
                onClick={handleSubmit}
            // onClick={() => {

            >Add Video</button>
        </form>
    )
}
export default AddVideo;