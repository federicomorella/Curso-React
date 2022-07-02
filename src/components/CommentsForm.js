import { Component } from "react";
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Row,Col,Label,Button} from 'reactstrap';


const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const required = (val) => val && val.length;

class CommentsForm extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        
    }


    render(){
        return(
            <div className="col-12">
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group"> 
                        <div className="col-12">
                            <Label htmlFor="rating" >Rating</Label> 
                        </div>                                                  
                        
                        <div className="col-12">
                            <Control.select className="custom-select" model=".rating" id="rating" >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Control.select>
                        </div>                            
                        
                    </Row>

                    <Row className="form-group">
                        <Label htmlFor="name" md={12}>Your Name</Label>
                        <Col md={12}>
                            <Control.text model=".name" id="name" name="name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                    />
                            <Errors
                                className="text-danger"
                                model=".name"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                                />
                        </Col>
                    </Row>
                    
                    <Row className="form-group">
                        <Label htmlFor="comment" md={12}>Your Feedback</Label>
                        <Col md={12}>
                            <Control.textarea model=".comment" id="comment" name="comment"
                                rows="12"
                                className="form-control" />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{size:12}}>
                            <Button type="submit" color="primary">
                            Send Feedback
                            </Button>
                        </Col>
                    </Row>
                </LocalForm>
            </div>
        );
    }
}

export default CommentsForm;