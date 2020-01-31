import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  addSongToLike: id =>
    dispatch({
      type: "ADD_SONG_TO_LIKE",
      payload: id
    }),
  removeSongFromLike: id =>
    dispatch({
      type: "REMOVE_SONG_FROM_LIKE",
      payload: id
    })
});

class Like extends Component {
  state = { like: false };
  render() {
    // console.log(
    //   this.props.song.like.find(this.props.songID) ? "Liked" : "Like"
    // );
    return (
      <div>
        {/* <button onClick={onClick}>{value}</button> */}
        <button
          onClick={() => {
            if (!this.state.like) {
              this.props.addSongToLike(this.props.songID);
              this.setState({ like: true });
            } else {
              this.props.removeSongFromLike(this.props.songID);
              this.setState({ like: false });
            }
          }}
        >
          {this.state.like ? "Liked" : "Like"}
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Like);
// const LikeButton = props => {
//   // const [value, setValue] = React.useState("Like");
//   // const onClick = () => {
//   //   localStorage.setItem("myValueInLocalStorage", "Liked");
//   //   setValue("Liked");
//   //   localStorage.getItem("Liked");
//   // };

//   return (

//   );
// };
