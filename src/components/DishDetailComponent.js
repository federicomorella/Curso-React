import { render } from "@testing-library/react"
import React, {Component} from "react"
import { Card,CardBody,CardImg,CardTitle,CardText } from "reactstrap";

class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    renderDish(){
      if(this.props.dish!=null){
        return(
              <Card>
                <CardImg src={this.props.dish.image} alt={this.props.dish.name}/>
                  <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                  </CardBody>       
                </Card>
        );
      }
      else{
        return (<div></div>);
      }
      
    }

    renderComments(){

      if(this.props.dish!=null && this.props.dish.comments!=null){
        const comments=this.props.dish.comments.map((comment)=>{
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

    render(){

      return(
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish()}
            </div>
            <div className="col-12 col-md-5 mt-3 ml-1">
              {this.renderComments()}
            </div>            
          </div>     
        </div>
      );      

    }
}

export default DishDetail;