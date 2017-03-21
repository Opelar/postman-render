import React from 'react';
import ReactDOM from 'react-dom';

import {components, styles} from './template/default/index.js';


let {Footer, Header, LeftPanel, MainPanel} = components;

ReactDOM.render(<Header name = 'header'/>, document.getElementById('header'));
ReactDOM.render(<LeftPanel name = 'leftPanel'/>, document.getElementById('left'));
ReactDOM.render(<MainPanel name = 'mainPanel'/>, document.getElementById('main'));
ReactDOM.render(<Footer name = 'footer'/>, document.getElementById('footer'));
