import React, {Component} from 'react';
import moment from "moment";
import AudioHelper from "../AudioHelper";

class Track extends Component {
    state = {paused: true};
    audio = new AudioHelper();

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    togglePlay  = () => {
        this.props.playSong(this.props.track);
    };

    leadingZero(value) {
        return value < 10 ? "0" + value : value
    }

    render() {
        const track = this.props.track;
        const minutes = this.leadingZero(Math.floor(track.duration / 60));
        const seconds = this.leadingZero(track.duration - (minutes * 60));
        return (
            <tr>
                <td className="track-title">{track.title}</td>
                <td>{track.artist.name}</td>
                <td>{minutes}:{seconds}</td>
                <td className="player-icon">
                    <div onClick={this.togglePlay}><i
                        className="material-icons float-right">play_arrow</i></div>
                </td>
            </tr>
        );
    }
}
export default Track;