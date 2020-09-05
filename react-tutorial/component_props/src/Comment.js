import React from 'react'
import UserInfo from "./UserInfo";

const formatDate = (date) => {
    return date.toLocaleString()
}

const Comment = (props) => {
    return (
        <div>
            <div>
                <UserInfo user={props.author}/>
            </div>
            <div>{props.text}</div>
            <div>{formatDate(props.date)}</div>
        </div>
    )
}

export default Comment