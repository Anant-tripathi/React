function AddVideo() {
    return (
        <form>
            <input type="text" />
            <input type="text" />
            <button
                onClick={() => {
                    setVideos([
                        ...videos,
                        {
                            id: videos.length + 1,
                            title: "DEMO JS tutorials",
                            views: "400K",
                            time: "2 years ago",
                            channel: "coder dost",
                            verified: false
                        }
                    ]);
                }}>Add Video</button>
        </form>
    )
}
export default AddVideo;