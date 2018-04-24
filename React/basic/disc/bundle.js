"use strict";

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;

render(React.createElement(
    "h1",
    { id: "title",
        className: "react-element",
        style: {
            backgroundColor: 'purple',
            color: 'white',
            fontFamily: 'verdana'
        } },
    "Hello React"
), document.getElementById('container'));
