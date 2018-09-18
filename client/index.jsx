import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
    state = {
        //some state
    }


    render() {
        return (
            <div>
                we're on the page!
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('app'));