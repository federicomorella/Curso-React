import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import {DISHES} from '../shared/dishes'
import Menu from './MenuComponents';
import DishDetail from './DishDetailComponent';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish:null
    };
  }

  onDishSelect(dishID){
    this.setState({selectedDish:dishID})
    console.log('selected dish ' + dishID )
  }
  
  render(){
    return (
      <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>

          <Menu dishes={this.state.dishes} onClick={(d)=>this.onDishSelect(d)}/>
          <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}/>
      </div>
    );
  }
}
export default Main;