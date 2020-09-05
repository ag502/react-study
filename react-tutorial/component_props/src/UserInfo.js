import React from 'react';
import Avatar from "./Avartar";

const UserInfo = (props) => {
    return (
        <div>
            <Avatar user={props.user}/>
            <div>
                {props.user.name}
            </div>
        </div>
    )
}

export default UserInfo;