import React from 'react';
import ReactDOM from 'react-dom';

class LeftPanel extends React.Component {
    render() {
        return <div>Hello, {this.props.name}</div>;
    }
}

export default LeftPanel;
