import './Video.css';

// function Video(props){ we use object destructuring to recive props so that the components can be known effectively
function Video({ title, channel, views, time }) {
    // console.log(props)
    return (
        <>
            <div className="container">
                <div className="pic">
                    <img src="http://placeimg.com/300/300/any" alt="Katherine johnson" />
                </div>
                <div className="title">{title}</div>
                <div className="channel">{channel}</div>
                <div className="views">
                    {views} views <span>.</span> {time}
                </div>
            </div>  
        </>
    )
}

export default Video; 