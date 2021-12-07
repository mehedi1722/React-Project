import React, { Component } from 'react';
import { Button, ModalBody, ModalFooter } from 'reactstrap';
import Modal from 'reactstrap/lib/Modal';
import Dishes from "../../Data/Dishes";
import DishDetails from './DishDetails';
import MenuItems from './MenuItems';

export default class Menu extends Component {
    state = {
        dishes: Dishes,
        selectedDish: null,
        modalOpen: false
    }

    ShowDishDetails = item => {
        this.setState({
            selectedDish: item,
            modalOpen: !this.state.modalOpen
        })
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        const Details = this.state.selectedDish == null ? <></> : <DishDetails item={this.state.selectedDish} />
        return (
            <div className="container">
                <div className="row mt-5">
                    { 
                        this.state.dishes.map( item => <MenuItems MenuItem={item} ShowDishDetails={() => this.ShowDishDetails(item)} key={item.id} /> )
                    }
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                        <ModalBody>
                            {Details}
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.toggleModal}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}
