import React, {Component} from 'react';
import {Card, Col, Row } from "react-bootstrap";
import AudioHelper from "../AudioHelper";
import AudioPlayer from 'react-h5-audio-player';
import Comments from "./Comments";
import LikeButton from './Like';

class AlbumComponent extends Component {
    state = {paused: true};
    audio = new AudioHelper();
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    togglePlay  = () => {
        this.props.playSong(this.props.album);
    };
    render() {
        const album = this.props.album;
        return (
            <Row>
                <Col className={'col'}>
                    <Card style={{ 'margin': '10px'}}>
                        <a href={'/album/'+ album.album.id}><Card.Img variant="top" src={album.album.cover_big} /></a>
                        <Card.Body>
                            <Card.Title>{album.title}</Card.Title>
                            {this.props.details && <Card.Text>
                                <div className="artist-box">
                                    <a href={'/artist/'+ album.artist.id}><img className="artist-picture" src={album.artist.picture} alt={'#'}/></a>
                                    <div className="artist-name">{album.artist.name}</div>
                                    <div onClick={this.togglePlay}><i
                                        className="material-icons float-right">play_arrow</i></div>
                                        
                                </div>
                                <LikeButton/>

                            </Card.Text>}
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        );
    }
}

export default AlbumComponent;