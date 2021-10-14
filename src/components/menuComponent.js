import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDishe: null
        };
    }

    onDisheSelect(dish) {
        this.setState({ selectedDishe: dish })
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="row" style={{ boxSizing: "border-box", padding: 0, margin: 0 }}>
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle style={{ fontWeight: 'bold', fontSize: 20 }}>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <DishDetail dish={dish.comments}></DishDetail>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDisheSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle style={{ fontWeight: 'bold', fontSize: 20 }}>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDishe)}
                </div>
            </div>
        );
    }
}

export default Menu;