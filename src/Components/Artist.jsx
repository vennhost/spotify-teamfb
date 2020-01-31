import React, {Component} from 'react';
import {ajax} from "rxjs/internal-compatibility";
import Track from "./Track";

class Artist extends Component {
    state = {artist: {}, tracks: []};
    getTracks() {
        ajax({
            url: "https://deezerdevs-deezer.p.rapidapi.com/artist/" + this.props.match.params.artistId + '/top',
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
                    tracks: songs.response
                });
            });
    }
    getArtist() {
        ajax({
            url: "https://deezerdevs-deezer.p.rapidapi.com/artist/" + this.props.match.params.artistId,
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
                    artist: songs.response
                });
            });
    }

    componentDidMount() {
        this.getArtist();
        this.getTracks();
    }

    render() {
        const artist = this.state.artist;
        const tracks = this.state.tracks;
        if (!tracks.data) return null;
        return (
            <div>
                <div className="artist-box">
                    <img className="artist-picture-large" src={artist.picture_big} alt={'#'}/>
                    <div>
                        <div>{artist.name}</div>
                    </div>
                </div>
                <div>
                    <table className="table">
                        {tracks.data.map(track => <Track playSong={this.props.playSong} track={track} />)}
                    </table>
                </div>
            </div>
        );
    }
}

export default Artist;