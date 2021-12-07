import React from 'react';
import {Card, CardImg, CardBody, CardTitle, Button, CardColumns} from 'reactstrap';

const MenuItems = (props) => {
    const {name, image} = props.MenuItem;
    const {ShowDishDetails} = props;
    return (
        <div className="col-4">
            <CardColumns>
                <Card className="mb-5">
                    <CardImg
                        alt={name}
                        src={image}
                        top
                        width="100%"
                        height="60%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">{name}</CardTitle>
                        <Button onClick={ShowDishDetails}>Read more </Button>
                    </CardBody>
                </Card>
            </CardColumns>
        </div>
    );
};

export default MenuItems;