import React from "react"
import { Card,CardBody,CardImg,CardTitle,CardText } from "reactstrap";

function RenderDish({dish}){
  if(dish!=null){
    return(
      <Card>
        <CardImg src={dish.image} alt={dish.name}/>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>       
        </Card>
    );
  }
  else{
    return (<div></div>);
  }
}

function RenderComments({dish}){
  if(dish!=null && dish.comments!=null){
    const comments=dish.comments.map((comment)=>{
      let d=new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)));
      
      return(
        <li>
          {comment.comment}<br/>
          --{comment.author}, {d}
          <br/><br/>
        </li>
      );
    })

    return(
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">              
          {comments}             
        </ul>             
      </div>
    );

  }
  else{
    return(<div></div>)
  }

}

const DishDetail=(props)=>{
  return(
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish}/>
        </div>
        <div className="col-12 col-md-5 mt-3 ml-1">
          <RenderComments dish={props.dish}/>
        </div>            
      </div>     
    </div>
  );      

}

export default DishDetail;