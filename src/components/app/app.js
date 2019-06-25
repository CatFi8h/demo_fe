import React, {Component} from 'react';

import './app.css';
import Api from "../../service/api";
import TitleDone from "../title/title-done";
import Data from "../data";
import Title from "../title/title";

const api = new Api();

export default class App extends Component {

    state = {
        data: {
            id: null,
            time: null
        },
        clicked: false
    };

    render() {
        const data = this.state.data.id === null ? null : <Data data={this.state.data}/>;
        const title = this.state.clicked ? <TitleDone/> : <Title/>;

        return (
            <div>
                {title}
                <div className="main">
                    <button
                        className="btn btn-outlime-secondary"
                        onClick={async ()=>{
                            this.setState({
                                data: await api.getResource(),
                                clicked: true
                            });
                        }}>
                        Push

                    </button>
                </div>
                <div className="main">
                    {data}
                </div>
            </div>
        );
    }
};