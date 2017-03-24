import React from 'react';
import ReactDOM from 'react-dom';

import {components, styles} from './template/default/index.js';


let {Footer, Header, MainPanel} = components;

import sourceData from '../examples/data/postman_echo.postman_collection.json';

let App = (props) => {
    return (
        <div>
            <Header data = {props.data.header}/>
            <MainPanel data = {props.data.main}/>
            <Footer data = {props.data.footer}/>
        </div>
    );
};

let data = {
    header: sourceData.info,

    main: sourceData.item,

    footer: {}
};

ReactDOM.render(<App data={data}/>, document.getElementById('app'));
