import React, { Component } from 'react'
import './List.css'
import Card from '@material-ui/core/Card';

export default class List extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isediting:false,
             editVal: this.props.note
        }
        // console.log(this.state.editVal)
    }

    toggleEdit=()=>{
        this.setState({
            isediting:true
        })
    }
    handleEdit=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitEdit=(e)=>{
        e.preventDefault()
       this.props.updateEdit(this.props.id,this.state.editVal)
      
    }

    render() {
        
        const {note,id,remove} = this.props 
        console.log(note)
        let result
        if(this.state.isediting){
            result=(
                <div>
                    <form onSubmit={this.submitEdit}>
                        <input
                            value={this.state.editVal}
                            name='editVal'
                            onChange={this.handleEdit}
                        /> 
                        <button> save </button>
                    </form>
                </div>
            )
        }else{
            result=(
                <div>
            <li className='square' key={id}>
                {note}
                
            </li>   
            <button onClick={this.toggleEdit} > edit </button>
            <button onClick={remove}> delete </button>         
            </div>
            )
        }
        
       
        return result
    
    }
}
