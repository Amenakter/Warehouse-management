import React, { useEffect, useState } from 'react';

const MyItems = () => {
    const [addItems, setAddItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/addedItems')
            .then(res => res.json())
            .then(data => setAddItems(data))
    }, [])

    const itemDelete = (id) => {
        console.log(id);
        const userConfirmation = window.confirm("Are you sure? Do you want delete this book?")
        if (userConfirmation) {
            const url = `http://localhost:5000/addedItems/${id}`
            fetch(url, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);


                })
        }

    }
    return (
        <div>
            <h3>My new added Items :{addItems.length}</h3>
            {
                addItems.map(addItem => <li key={addItem._id}>
                    {addItem.name}
                    <button onClick={() => itemDelete(addItems._id)}>X</button>
                </li>)
            }

        </div>
    );
};

export default MyItems;