const { render } = ReactDOM  
render( 
    <h1 id="title"
        className="react-element"
        style={{
        backgroundColor: 'purple',
        color: 'white',
        fontFamily: 'verdana'
}}>
    Hello React
</h1>, document.getElementById('container'))