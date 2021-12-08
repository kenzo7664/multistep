import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormDetail extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() {
        const {values, handleChange} = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                  <AppBar title='Swedbank' style={{background:"#FFA500"}} />
                  <TextField
                  hintText = "Enter Your first name"
                  floatingLabelText = "First Name"
                  onChange ={handleChange('firstName')}
                  defaultValue = {values.firstName}
                  style = {padding.box} 

                  />
                  <br/>
                  <TextField
                  hintText = "Enter Your Last name"
                  floatingLabelText = "Last Name"
                  onChange ={handleChange('lastName')}
                  defaultValue = {values.lastName}
                  style = {padding.box} 

                  />
                  <br/>
                  <TextField
                  hintText = "Enter Your Email"
                  floatingLabelText = "Email"
                  onChange ={handleChange('email')}
                  defaultValue = {values.email}
                  style = {padding.box} 

                  />
                  <br/>
                  <RaisedButton
                   label ="Continue"
                   primary ="true"
                   style={styles.button}
                   onClick = {this.continue}
                   
                   
                  />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button:{
        margin:"15px",
        background: "#fff"
    }
} 

const padding ={
    box:{
        margin:"15px"
    }
}
export default FormDetail
