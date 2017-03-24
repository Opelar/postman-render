import React from 'react';
import ReactDOM from 'react-dom';
import Request from './request.component.jsx';
import Response from './response.component.jsx';
import Event from './event.component.jsx';


class MainPanel extends React.Component {
    // 主render函数, render collection
    render() {
        let cols = this.props.data;

        const collectionList = cols.map(col => {
            return this.renderFolder(col);
        });

        return (<div className = 'main'>{collectionList}</div>);
    }

    // item render 函数, render folder
    renderFolder(folder) {
        if (!folder) {
            return <div>no folder here.</div>;
        }

        // build folder list
        let folderList = folder.item.map(one => {
            // TODO: 这里暂时忽略数据中的event, 后期处理

            // build api
            let api = (
                <div>
                    <Event data = {one.event} />
                    <Request data = {one.request} />
                    <Response data = {one.response} />
                </div>
            );

            return (
                <div key = {one.name}>
                    <h5>{one.name}</h5>
                    <p>{one.description}</p>
                    {api}
                </div>
            );
        });

        return (
            <div key = {folder.name}>
                <h4>{folder.name}</h4>
                <p>{folder.description}</p>
                {folderList}
            </div>
        );
    }
}

export default MainPanel;
