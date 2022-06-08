import React,{useState,useEffect} from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
import ErrorBoundary from "./ErrorBoundary";

function App(){
   /* constructor(){
    super()
    this.state={
        robots:[],
        searchfield:'',
    }
    }*/
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}))
    },[])
    
    const [robots,setRobots]=useState([])
    const [searchfield,setSearchField]=useState('')

    const onsetchange=(event)=>{
     setSearchField(event.target.value)
        }

      
        const filterRobo=(robots.filter(robots=>{
        return robots.name.toLowerCase().includes(searchfield.toLowerCase());
     }))
     if(robots.length===0){
        return <h1>Loading....</h1>;
    } else{
       return(
        <>
        <div className='tc'>
        <h1>Robo Friends</h1>
        <SearchBox setchange={onsetchange}/>
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
export default App;
