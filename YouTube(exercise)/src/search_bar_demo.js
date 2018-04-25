import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term: ''};
    }

    render(){
        return(
            <div>
                <input onChange={e => this.setState({ term: e.target.value })} />
                Value of the input: {this.state.term}
            </div>    
        );
    }

    // onInputChange(e){
    //     console.log(e.target.value)
    // }
}

export default SearchBar;