import React from 'react'

import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ book }) => {
    const { _id, name, img, descriptio, quantity, Price } = book;
    // const [updateAndResetBook, setUpdateAndResetBook] = useState([])
    const navigate = useNavigate();

    const updateAndReset = (id) => {
        navigate(`/inventories/${id}`)
    }

    return (
        <div className='d-flex col-lg-4 col-12 align-items-sm-center  gy-4' >
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" className='w-100' height='200px' style={{ marginTop: "20px" }} src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {descriptio}
                    </Card.Text>
                    <Card.Text>
                        Price:${Price}
                    </Card.Text>
                    <Card.Text>
                        Quantity:{quantity}
                    </Card.Text>

                    <Button variant="primary" onClick={() => updateAndReset(_id)} >update</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Inventory;