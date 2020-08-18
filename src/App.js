import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
import './App.css'
 


class App extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            searchfield: ''
        }
    }


    componentDidMount() {
        fetch('https://coronavirus-19-api.herokuapp.com/countries')
        .then(response => response.json()) 
        .then(countries => this.setState({ data: countries}));    
    } 

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }) 
    }


    render() {
        const filterdata = this.state.data.filter(data =>{
            return data.country.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.data.length === 0) {
            return <h1>loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>Track Covid-19 </h1>
                    <SearchBox searchChange={this.onSearchChange}/> 
                    <Scroll>
                        <CardList data={ filterdata  } />
                    </Scroll>
                    <p className='white f3'>Stop Coronavirus, STAY at home</p>
                    <p>Copyright2020 Marvel Technology--https://github.com/LordRanchoatos +2348142798542</p>
                </div>
            );
        }
    }
    
}
export default App;