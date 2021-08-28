import React, {Component} from 'react'
import '../App.css';
import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


export default class Todoform extends Component{
    
    constructor(props){
        super(props);
        this.state={
            task:'',
            list:[]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            task: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.state.list.push(this.state.task)
        this.setState({
            task:''
        })
        
        console.log("list------", this.state.list)

    }

    render(){
        return( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="center-div">
                        <input className="input-css" name="text" value={this.state.task} placeholder="todo..." onChange={this.handleChange}></input>
                            <Button Style="border-radius:180px; font-size:18px" variant="success">
                                <FontAwesome className="fa-plus"/>
                            </Button>
                    </div>
                </form>
                <div>
                    {this.state.list.map((items)=>{
                        return <h1 key={items}>{items}</h1>
                    })}
                </div>
            </div>
        );
    }
}