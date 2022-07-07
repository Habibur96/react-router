import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
            {/*Commant:- We can use it using click handaler and also <Link><Link/>. If we use button we have to use navigate. */}

            <Link to={'/Friend/' + id}>Show Detail</Link>

            <button onClick={showFriendDetail}>Username: {username}-{id}</button>
        </div>
    );
};

export default Friend;