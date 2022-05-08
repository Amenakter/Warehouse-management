import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItems = () => {
    const [addItems, setAddItems] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        const url = `http://localhost:5000/addedItems`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAddItems(data)
            })
    }, [user])

    return (
        <div>
            <h3>My new added Items :{addItems.length}</h3>
        </div>
    );
};

export default MyItems;