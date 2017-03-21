import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return <div>Hello, {this.props.name}</div>;
    }
}

export default Header;
