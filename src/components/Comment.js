import React, {useState} from "react"; 

function Comment( {user, comment} ){
const [commentLikes, setLikes] = useState(0);
const [commentDislikes, setDislikes] = useState(0);
const [commentVisible, setVisibilty] = useState(true);

function handleUpvote(){
    setLikes(commentLikes + 1);
}

function handleDownvote(){
    setDislikes(commentDislikes + 1);
}

function handleRemove(){
    setVisibilty(false);
}


if (commentVisible){ return (
    <div>
        <h2>{user}</h2>
        <p>{comment}</p>
        <button onClick={handleUpvote} >{commentLikes} 👍</button>
        <button onClick={handleDownvote} >{commentDislikes} 👎</button>
        <button onClick={handleRemove} >X</button>
    </div>
    ) } else { return null}



};

export default Comment