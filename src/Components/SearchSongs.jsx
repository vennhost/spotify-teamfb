import React, {Component} from 'react';
import {InputGroup, FormControl} from "react-bootstrap";
import {fromEvent} from "rxjs";
import {debounceTime, map} from "rxjs/operators";

class SearchSongs extends Component {
    constructor(props) {
        super(props);
        this.inputSearch = React.createRef();
    }
    componentDidMount() {
        fromEvent(document.getElementById("searchText"), "keyup")
            .pipe(
                debounceTime(1000),
            ).subscribe((input) => {
            this.props.searchFn(document.getElementById("searchText").value);
            console.log(input);
        })
    }

    render() {
        return (
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">🎧</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="🔍 Eg: Madonna"
                    aria-label="Search"
                    aria-describedby="basic-addon1" id="searchText"
                />
            </InputGroup>
        );
    }
}

export default SearchSongs;