import React from 'react';
import ReactDOM from 'react-dom';

class Request extends React.Component {
    render() {
        let data = this.props.data;

        return (
            <div>
                <div>{data.url}</div>
                <div>{data.method}</div>
            </div>
        );
    }
}

export default Request;
