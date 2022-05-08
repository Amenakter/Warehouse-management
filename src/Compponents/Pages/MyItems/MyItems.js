import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyItems = () => {
    const [addItems, setAddItems] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        const url = `https://secret-bastion-00294.herokuapp.com/addedItems`
        fetch(url)
            .then(res => res.json())
            .then(data => {

                if (data.Email) {
                    const myitems = addItems.filter(myitem => myitem.Email === user.email)
                    setAddItems(myitems)
                };


            })
    }, [user])

    return (
        <div>
            <h3>My new added Items :{addItems.length}</h3>
        </div>
    );
};

export default MyItems;