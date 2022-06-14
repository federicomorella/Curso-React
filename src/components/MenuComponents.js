import React from 'react';
import { Card,CardImg,CardImgOverlay,CardTitle } from 'reactstrap';

function RenderMenuItem({dish,onClick}){
  return(         
    <Card key={dish.id} >
      <CardImg top src={dish.image} alt={dish.name} width="100%"/>
      <CardImgOverlay>
        <CardTitle className="text-center">
          {dish.name}
        </CardTitle>
      </CardImgOverlay>
    </Card>                 
  );
}

const Menu = (props)=>{
  const menu=props.dishes.map((dish)=>{
    return(
      <div className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={props.onClick}/>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>  
    </div>
  );
}

export default Menu;