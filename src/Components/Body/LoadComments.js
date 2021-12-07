import React from 'react';
import dateFormat from 'dateformat';

const LoadComments = props => {
    const {comments} = props
    return (
        <div>
            {
                comments.map( comment => 
                    <div key={comment.id} className="text-start">
                        <h4>{comment.author}</h4>
                        <p>{comment.comment}</p>
                        <p>{dateFormat(comment.date, "ddd, mmmm DS, yyyy, h:MM:ss TT")}</p>
                    </div>
                )
            }
        </div>
    );
};

export default LoadComments;