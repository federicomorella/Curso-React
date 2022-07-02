import React, {Component}from "react"
import { Card,CardBody,CardImg,CardTitle,CardText, Breadcrumb, BreadcrumbItem,Modal,ModalBody,ModalHeader,Button } from "reactstrap";
import { Link } from 'react-router-dom';
import { render } from "@testing-library/react";
import CommentsForm from "./CommentsForm"; 


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

function RenderComments({comments}){
  if( comments!=null){
    const commentsList=comments.map((comment)=>{
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
          {commentsList}             
        </ul>           
      </div>
    );

  }
  else{
    return(<div></div>)
  }

}

class DishDetail extends Component{
  constructor(props){
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isModalOpen: false
  };
  }

  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  render(){
    return(
    <div className="container">

      <Modal className="" isOpen={this.state.isModalOpen}  toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>Submit Comments</ModalHeader>
        <ModalBody>
          <CommentsForm addComment={this.props.addComment} dishId={this.props.dish.id}/>
        </ModalBody>
      </Modal>

      <div className="row">
          <Breadcrumb>

              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
              <h3>{this.props.dish.name}</h3>
              <hr />
          </div>                
      </div>
      <div className="row">
          <div className="col-12 col-md-5 m-1">
              <RenderDish dish={this.props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
              <RenderComments comments={this.props.comments} />
              <Button outline onClick={this.toggleModal}><span className="fa fa-solid fa-pencil fa-lg"></span> Submit Comment</Button>
          </div>
      </div>
    </div>
   );
  }   

}

export default DishDetail;