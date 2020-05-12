import React, { Component } from 'react'
import {v4 as uuid} from 'uuid'
import './List.css'
export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             notes:'',
             isWriting:false
        }
    }
    handlewrite=()=>{
        this.setState({
            isWriting:true
        })
    }
    handlechange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state.notes)
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.addNotes({notes:this.state.notes,id:uuid()})   
        this.setState({
            notes:'',
            isWriting:false
        })
    }

    render() {
        return (
            <div >
           
                {this.state.isWriting ? ( <form onSubmit={this.handleSubmit}>
                <input
                    name='notes'
                    placeholder='write'
                    value={this.state.notes}
                    onChange={this.handlechange}
                    type='text'
                />
                <button className='button2'>add</button>
            </form>):(
                    <button 
                    className='button'
                    onClick={this.handlewrite}> write</button>
                )}
            </div>
        )
    }
}
