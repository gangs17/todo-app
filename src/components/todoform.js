import React, {Component} from 'react'

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
                    <input name="text" value={this.state.task} placeholder="todo..." onChange={this.handleChange}></input>
                    <button>Add</button>
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