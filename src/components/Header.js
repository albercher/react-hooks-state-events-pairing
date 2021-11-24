import React from "react";
import Likes from "./Likes";


function Header( {video} ){


    return (
        <div>
            <iframe title={video.title} width="600" height="400" src={video.embedUrl}></iframe>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <Likes likes={video.upvotes} dislikes={video.downvotes} />
        </div>
    )
}

export default Header