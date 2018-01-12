import React from 'react';
import ReactDOM from 'react-dom';
import '@/styles/style';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, 陶.</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);