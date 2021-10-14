import React, { Component } from 'react';
import { CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    render() {
        const comment = this.props.dish.map((comment) => {
            return (
                <div key={comment.id}>
                    <CardText>{comment.comment}</CardText>
                    <CardText>-- {comment.author}, {comment.date}</CardText>
                    <CardText>{comment.comment}</CardText>
                </div>
            );
        })

        return (
            <div>
                <CardTitle style={{ fontWeight: 'bold', fontSize: 30 }}>Comments</CardTitle>
                {comment}
            </div>
        )
    }
}

export default DishDetail;