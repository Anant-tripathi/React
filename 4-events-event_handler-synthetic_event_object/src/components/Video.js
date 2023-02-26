import './Video.css';

// function Video(props){ we use object destructuring to recive props so that the components can be known effectively
function Video({ title, channel, views, time, verified ,id, children}) {
    // let channelJSX;
    // if (verified){
    //     channelJSX= <div className="channel">{channel}✅</div>;
    // }                                                                    {/*method1*/}
    // else
    // channelJSX = <div className="channel">{channel}</div>
    return (
        <>
            <div className="container">
                <div className="pic">
                    <img src={`http://picsum.photos/id/${id}/160/90`} alt="Katherine johnson" />
                </div>
                <div className="title">{title}</div>

                {/* {verified ?
                    <div className="channel">{channel}✅</div> :
                    <div className="channel">{channel}</div>                    method2
                } */}
                {/* <div className="channel">{channel}{verified ? "✅": null}</div>method3 */}
                <div className="channel">{channel}{verified && "✅"}</div>      {/*method4: short circuiting*/}
                
                <div className="views">
                    {views} views <span>.</span> {time}
                </div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Video; 