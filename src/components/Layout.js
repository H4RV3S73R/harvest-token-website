import React from 'react';
//import { Container } from 'react-bulma-components';
//import { Container } from 'react-bootstrap';
import 'bulma/css/bulma.min.css';


export const Layout = (props) => (
    <>
    <div class="container is-fluid">
    <div class="row"></div>
        {props.children}
        
    </div>
</>
)

