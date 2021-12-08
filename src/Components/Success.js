import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'

export class Success extends Component {
    continue = e => {
        e.preventDefault()
        // Process Form //
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }
    render() {
       
        return (
            <MuiThemeProvider>
                <React.Fragment>
                  <AppBar title='Success' style={{background:"#FFA500"}} />
                  <div>
                    <h1>Thank you for your Submission</h1>
                    <p>A link will be sent to your Email</p>
                  </div>
                  
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Success
