import React, { Component } from "react";
import SearchSongs from "./SearchSongs";
import { Card, Col, Row } from "react-bootstrap";
import { ajax } from "rxjs/internal-compatibility";
import { Spinner } from "reactstrap";
import AlbumComponent from "./AlbumComponent";
import { connect } from "react-redux";

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  playSong_redux: album =>
    dispatch({
      type: "PLAY_SONG",
      payload: album
    })
});

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: null,
      search: "Pop"
    };
  }

  updateData() {
    this.setState({ albums: null });
    ajax({
      url:
        "https://deezerdevs-deezer.p.rapidapi.com/search?limit=24&q=" +
        this.state.search,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "cb753e0d56mshbfbe5c88f5791aap1c862fjsn7d6969ec9764"
      }
    })
      .toPromise()
      .then(songs => {
        this.setState({
          albums: songs.response.data
        });
      });
  }

  componentDidMount = async () => {
    this.updateData();
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.search !== this.state.search) {
      this.updateData();
    }
  }

  searchFn(input) {
    this.setState({ search: input });
  }

  render() {
    let albums = this.state.albums;
    return (
      <>
        <Row className="mt-2">
          <Col>
            <SearchSongs searchFn={this.searchFn.bind(this)} />
          </Col>
        </Row>

        <Row>
          {!albums && (
            <Col className="mt-7">
              <Spinner color="success" />
            </Col>
          )}
          {albums &&
            albums.map(album => (
              <Col
                className="col-3 align-content-center justify-content-center"
                key={albums.id}
              >
                <AlbumComponent
                  playSong={this.props.playSong_redux}
                  details={true}
                  album={album}
                />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Body);
