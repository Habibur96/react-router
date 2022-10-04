import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const params = useParams();

    //Same jinis using distacchuring
    //  const { FriendId } = useParams;
    // console.log(FriendId);
    const [Friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${params.FriendId}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))

    }, [])
    return (
        <div>
            <h2>Hi bro!! How are you?? Plz describe your position.</h2>
            <h3>This is Detail about bro : {params.FriendId}</h3>

            {/* <h3>This is Detail about bro : {FriendId}</h3> */}

            <h3>Name: {Friend.name}</h3>
            <h3>Email: {Friend.email}</h3>
            <h3>Website: {Friend.website}</h3>
            <p><small>City; {Friend.address?.city}</small></p>


        </div>
    );
};

export default FriendDetail;