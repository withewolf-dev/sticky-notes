import React, { Component } from "react";
import Form from "./Form";
import List from "./List";


export default class StickyNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sticky: [],
    };
  }
  addNotes = (note) => {
    this.setState({
      sticky: [...this.state.sticky, note],
    });
    console.log(this.state.sticky);
  };


  remove = (id) => {
    this.setState({
      sticky: this.state.sticky.filter((t) => t.id !== id),
    });
  };


  updateEdit = (id, updatedNote) => {
    const updatesticky = this.state.sticky.map((note) => {
      if (note.id === id) {
        return { sticky:this.state.sticky, notes: updatedNote };
      }
      return note;
    });
    this.setState({
      sticky: updatesticky,
    });
  };
  render() {
    const notes = this.state.sticky.map((note) => {
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
