import React, { Component } from 'react'
import './List.css'
//import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = ()=>({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.7)',
    minWidth: 275,
    marginBottom: 12,
    flexDirection:'row',
     flexWrap:'wrap' 
    
  },

  title: {
    fontSize: 14,
    flexDirection:'row',
     flexWrap:'wrap' 
  },
  pos: {
    marginBottom: 12,
  },
});

 class List extends Component {

    
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
        const {classes}= this.props 
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
              <Card className={classes.bullet}>
                <Box component="span" m={1}>
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  <br/>
                </Typography>
                
                <Typography align='center'  variant="h5" component="h2" key={id}>
                  {note}
                </Typography>
                
                <Typography className={classes.pos} color="textSecondary">
                  <br/>
                </Typography>
                <Typography variant="body2" component="p">
                 <br/>
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={this.toggleEdit} size="small"> edit </Button>
                <Button onClick={remove} size="small"> delete</Button>
              </CardActions>
              </Box>
            </Card>
                
             
          
            
            //     <div>
            // <li className='square' key={id}>
            //     {note}
                
            // </li>   
            // <button onClick={this.toggleEdit} > edit </button>
            // <button onClick={remove}> delete </button>         
            // </div>
            )
        }
        
       
        return result
    
    }
}
export default withStyles(useStyles)(List)
