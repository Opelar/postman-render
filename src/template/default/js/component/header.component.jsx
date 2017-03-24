import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <div className = 'header'>
                <h3 data-id = {this.props.data._postman_id}>{this.props.data.name}</h3>
                <p data-schema = {this.props.data.schema}>
                    {this.props.data.description}
                </p>
            </div>
        );
    }
}

export default Header;
