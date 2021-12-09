import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class FormPersonalDetail extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }
    render() {
        const {values, handleChange} = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                  <AppBar title='Swedbank' style={{background:"#FFA500"}} />
                  <TextField
                  hintText = "Occupation"
                  floatingLabelText = "Occupation"
                  onChange ={handleChange('occupation')}
                  defaultValue = {values.occupation}
                  style = {padding.box} 

                  />
                  <br/>
                  <TextField
                  hintText = "city"
                  floatingLabelText = "city"
                  onChange ={handleChange('city')}
                  defaultValue = {values.city}
                  style = {padding.box} 

                  />
                  <br/>
                  <TextField
                  hintText = "Bio"
                  floatingLabelText = "Bio"
                  onChange ={handleChange('bio')}
                  defaultValue = {values.bio}
                  style = {padding.box} 
                  />
                  <br/>
                  <button 
                   style={styles.button}
                   onClick = {this.continue}>Continue
                   
                   </button>
                   <button 
                   style={styles.button}
                   onClick = {this.continue}>Back
                   
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
export default FormPersonalDetail
