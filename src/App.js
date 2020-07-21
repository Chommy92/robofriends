import React from 'react';
import CardList from './CardList';
import Scroll from './Scroll';



class App extends React.Component{
 constructor(){
 	super();
 	this.state = {
 		robots: [],
    searchField: ''
 	};
 }

  componentDidMount(){
  	fetch('https://jsonplaceholder.typicode.com/users')
  	.then(response => response.json())
  	.then(users => {this.setState({robots: users})});
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

    render(){
      const { robots, searchField } = this.state;
      const filterRobots =this.state.robots.filter(robots=> {
    		return (robots.email.toLowerCase().includes(searchField.toLowerCase()));
    		});

    	if(robots.length === 0){
          return <h1>loading</h1>
    	} 
    	else{

			return (
				<div className='tc'>
				   <h1>RoboFriends</h1>
			       <input
              className ='pa3 ma3 br3 bg-lightest-blue'
              type ='search'
              placeholder = 'search robots'
              
              onChange = {this.onSearchChange}
              />
    				   <Scroll>
    				     <CardList robots = {filterRobots}/>
    				   </Scroll>
				</div>
				);
           }
    }
}
export default App;