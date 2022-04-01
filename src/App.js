import React from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
import ErrorBoundary from "./ErrorBoundary";

class App extends React.Component{
    constructor(){
    super()
    this.state={
        robots:[],
        searchfield:'',
    }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}))
    }
    
    onsetchange=(event)=>{
        this.setState({searchfield:event.target.value})
        }

        render(){
        const filterRobo=(this.state.robots.filter(robots=>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
     }))
     if(this.state.robots.length===0){
        return <h1>Loading....</h1>;
    } else{
       return(
        <>
        <div className='tc'>
        <h1>Robo Friends</h1>
        <SearchBox setchange={this.onsetchange}/>
         <Scroll>
             <ErrorBoundary>
         <CardList robots={filterRobo}/>
              </ErrorBoundary>
         </Scroll>
         </div>
        </>
    )
}
        }
}
export default App;
