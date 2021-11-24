import React, {useState} from "react";

function Likes( {likes, dislikes} ){

    const [updatedLikes, setLikes] = useState(likes);
    const [updatedDislikes, setDislikes] = useState(dislikes);

    function handleUpvote(){
        setLikes(updatedLikes + 1)
    };

    function handleDownvote(){
        setDislikes(updatedDislikes + 1)
    };

    return(
        <div>
            <button onClick={handleUpvote}>
                {updatedLikes} 👍
            </button>
            <button onClick={handleDownvote}>
                {updatedDislikes} 👎
            </button>
        </div>
    )
}

export default Likes