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
                <input onChange={e => this.onInputChange(e.target.value)} /> 
            </div>    
        );
    }
    
    onInputChange(term){   
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;