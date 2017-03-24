import React from 'react';
import ReactDOM from 'react-dom';
import Request from './request.component.jsx';

class MainPanel extends React.Component {
    // 主render函数, render collection
    render() {
        let items = this.props.data;

        const list = items.map(item => {
            this.renderItem(item);
        });

        return (<div className = 'main'>{list}</div>);
    }

    // item render 函数, render folder
    renderItem(item) {
        if (!item) {
            return <div>no item here.</div>;
        }

        let list = item.item || [];

        list.map(one => {
            return (
                <div>
                    <h5></h5>

                </div>
            );
        });

        return (
            <div>
                <h4></h4>
                <p></p>
            </div>
        );
    }

    // subItem render函数, render单个请求
    renderSubItem(one) {

    }
}

export default MainPanel;
