import React, {Component} from 'react';
import {ajax} from "rxjs/internal-compatibility";
import {Card, ListGroup, ListGroupItem, Container, Col, Row} from "react-bootstrap";
import Comments from "./Comments";
import AudioPlayer from "react-h5-audio-player";
import Track from "./Track";

class AlbumsPage extends Component {
    state = {album: null};

    componentDidMount() {
        ajax({
            url: "https://deezerdevs-deezer.p.rapidapi.com/album/" + this.props.match.params.albumId,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "cb753e0d56mshbfbe5c88f5791aap1c862fjsn7d6969ec9764"
            }
        })
            .toPromise()
            .then(songs => {
                this.setState({
                    album: songs.response
                });
            });
    }
    render() {
        return (
            this.state.album &&
            <Container>
                <Row>
                    <Col classname={'col-6'}>
                        <Card>
                            <Card.Img variant="top" src={this.state.album.cover_big}/>
                            <Card.Body>
                                <Card.Title>{this.state.album.title}</Card.Title>
                                <table className="song">
                                    {this.state.album.tracks.data.map(track =>
                                        <Track playSong={this.props.playSong} track={track}/>
                                    )}
                                </table>
                            </Card.Body>


                            <Card.Body>
                                <Card.Link href="/">Back to home page</Card.Link>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col classname={'col-6'}>
                        <Comments album={this.state.album.id}/>
                    </Col>
                </Row>
            </Container>
        ) || null;
    }
}

export default AlbumsPage;