import React from 'react'

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { saveMessageToContact } from '../firebase/firebase.util';

class Contact extends React.Component {

    constructor(){
        super();

        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, message } = this.state;
    
        if (name.trim() == '' || email.trim() == '' || message.trim() == '') {
          alert("Please, fill fields to send us a message");
          return;
        }
    
        try {
    
          await saveMessageToContact(this.state);
    
          this.setState({
            name: "",
            email: "",
            message: ""
          });

          alert("Message sended");
        } catch (error) {
          console.error(error);
        }
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };

    render(){
        const { name, email, message } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <Grid item sm={12} className="top-space" style={{marginLeft: '10em', marginRight: '10em'}}>
                    <Paper elevation={3}>
                        <h2 className="paper">Contact Us</h2>
                        <Divider />
                        <Paper style={{padding: '2em'}}>
                            <div style={{padding: '1em'}}>
                                <TextField type="text" name="name" label="Name" defaultValue={ name } variant="filled" onChange={this.handleChange} required/>&nbsp;&nbsp;&nbsp;&nbsp;
                                <TextField type="email" name="email" label="Email" defaultValue={ email } variant="filled" onChange={this.handleChange} required/>
                            </div>
                            <div style={{padding: '1em'}}>
                                <TextField 
                                    type="text"
                                    label="Message" 
                                    name="message" 
                                    helperText="Write us a message!" 
                                    fullWidth 
                                    margin="normal" 
                                    variant="filled"
                                    defaultValue={ message }
                                    onChange={this.handleChange}
                                    required
                                    />
                            </div>
                            <div className='header-options'>
                                <Button type="submit" variant="contained" color="primary">Send Message</Button>
                            </div>
                        </Paper>
                    </Paper>
                </Grid>
            </form>
        )
    }
}

export default Contact;