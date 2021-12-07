import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetails = (props) => {
    const {name, image, price, description, comments} = props.item;
    return (
        <div>
            <Card className="mb-5">
                <CardImg
                    alt={name}
                    src={image}
                    top
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">{name}</CardTitle>
                    <CardSubtitle tag="h2">{price} /= only </CardSubtitle>
                    <CardText>{description}</CardText>
                    <hr/>
                    <LoadComments comments={comments} />
                </CardBody>
            </Card>
        </div>
    );
};

export default DishDetails;