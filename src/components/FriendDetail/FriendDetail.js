import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // const params = useParams();
    //Same jinis using distacchuring
    const { FriendId } = useParams;
    return (
        <div>
            <h2>Hi bro!! How are you?? Plz describe your position.</h2>
            {/* <h3>This is Detail about bro : {params.FriendId}</h3> */}

            <h3>This is Detail about bro : {FriendId}</h3>


        </div>
    );
};

export default FriendDetail;