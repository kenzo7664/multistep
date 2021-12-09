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

    hide = ()=>{
        const tex = document.getElementById("email")
        if(tex !== ""){
        tex.style.display = "inline-grid"
        }
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
                  onKeyPress = {this.hide}

                  />
                  <br/>
                  <input 
                   placeholder= " Email Address"
                   id="email"
                   style={{display:"none", padding:"10px", margin:"15px",borderColor:"rgb(0, 188, 212)"}}
                   onChange={handleChange("email")}
                  />
                  <br/>
                  <button 
                   style={styles.button}
                   onClick = {this.continue}>Continue
                   
                   </button>
                   
                   
                  
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button:{
        margin:"15px",
        background: "#FFA500",
        color:"#fff",
        border:"none",
        borderRadius:"5px",
        cursor:"pointer",
        padding: "10px",
        
    }
} 

const padding ={
    box:{
        margin:"15px"
    }
}
export default FormDetail
