import React, { Component } from "react";
import Form from "./Form";
import List from "./List";


export default class StickyNotes extends Component {
  constructor(props) {
    super(props);


    this.state = {
      sticky: []
    };


  }

  componentDidMount() {
    const json = localStorage.getItem('sticky') || "[]"
     const sticky = JSON.parse(json)
     this.setState(() => ({ sticky }))
    
}

  // componentDidUpdate(prevProps, prevStates){
  //   const json = JSON.stringify(this.state.sticky)
  //   localStorage.setItem('sticky', json)
  // }

  addNotes = (note) => {

   

      this.setState(st=>({
        sticky: [...this.state.sticky, note],
      }),
      ()=>window.localStorage.setItem('sticky',JSON.stringify(this.state.sticky)
      )
      );

  }

  remove = (id) => {
    this.setState(st=>({
      sticky: this.state.sticky.filter((t) => t.id !== id)
    }),
    ()=>window.localStorage.setItem('sticky',JSON.stringify(this.state.sticky))
    )
    
  };


  updateEdit = (id, updatedNote) => {
    const updatesticky = this.state.sticky.map((note) => {
      if (note.id === id) {
       
        return { ...this.state.sticky, notes: updatedNote };
      }
      return note;
    });
    this.setState(st=>({
      sticky: updatesticky
    }),
     ()=>window.localStorage.setItem(
       'sticky',JSON.stringify(this.state.sticky)
    )
    );
  };


  render() {

    const notes = this.state.sticky.map((note) => {
      console.log(note.notes)
      return (
        <List
          note={note.notes}
          key={note.id}
          id={note.id}
          remove={() => this.remove(note.id)}
          updateEdit={this.updateEdit}
        />
      );
    });
    return (
      <div>
        <Form addNotes={this.addNotes} />
        <div>{notes}</div>
      </div>
    );
  }
}
