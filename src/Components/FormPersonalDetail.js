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
                  <RaisedButton
                   label ="Continue"
                   primary = "true"
                   style={styles.button}
                   onClick = {this.continue}
                   
                  />
                  <RaisedButton
                   label ="Back"
                   primary = "false"
                   style={styles.button}
                   onClick = {this.back}
                   
                  />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button:{
        margin:"15px"
    }
}
const padding ={
    box:{
        margin:"15px"
    }
}
export default FormPersonalDetail
