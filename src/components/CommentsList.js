import React from "react";
import Comment from './Comment'

function CommentsList( {comments} ){


    


    const commentArray = comments.map((comment) => {
        return (
            <Comment key={comment.id} user={comment.user} comment={comment.comment}
            />
            )
    })

    return (
        <div>
            <h1>{comments.length} Comments</h1>
            {commentArray}
        </div>
    )
};

export default CommentsList