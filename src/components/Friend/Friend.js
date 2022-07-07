import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, username, id } = props.friend;
    const navigate = useNavigate(); //Hook
    const showFriendDetail = () => {
        const path = `/Friend/${id}`;
        navigate(path);
    }
    return (
        <div>

            <h2>Name: {name}</h2>

            <button onClick={showFriendDetail}>Username: {username}-{id}</button>
        </div>
    );
};

export default Friend;