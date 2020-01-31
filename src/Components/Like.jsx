import React, { Component } from 'react';
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import SimpleStorage from "react-simple-storage";

const LikeButton = () => {
    const [value, setValue] = React.useState('Like');
        const onClick = event => {
            localStorage.setItem('myValueInLocalStorage', 'Liked');
            setValue('Liked');
          };
    return (
        <div>
                
        <button onClick={onClick}>{value}</button>
        
    </div>
    );
  };
  export default LikeButton;













