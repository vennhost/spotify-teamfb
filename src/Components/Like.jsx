import React, { Component } from 'react';
import { Row, Col, Card, Container, Button } from "react-bootstrap";

class LikeButton extends React.Component {
    state = {
        likes: "Unliked",
        updated: false
    }
    render() {
        return (
            <div>
                <button onClick={this.updateLikes}>Like</button>
                <p>{this.state.likes}</p>
            </div>

        );
    }

    updateLikes = () => {

        if (!this.state.updated) {
            this.setState((prevState, props) => {
                return {
                    likes: "Liked",
                    updated: true
                };
            });

        } else {

            this.setState((prevState, props) => {
                return {
                    likes: "Unliked",
                    updated: false
                };
            });

        }
    }

}

export default LikeButton;