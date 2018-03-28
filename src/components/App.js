import React, { Component } from 'react'
import Logo from './logo.svg'
import './App.css'
import DribbbleLogin from './DribbbleLogin'

class App extends Component {
  onSuccess (response) {
    console.log(response)
  }

  onFailure (err) {
    console.log(err.toString())
  }

  render () {
    return (
      <div>
        <div styleName='logo'>
          <Logo />
        </div>
        <DribbbleLogin requestUrl='/api/v1/auth/dribbble' onFailure={ this.onFailure } onSuccess={ this.onSuccess } clientId='0045e41e8e419f5937685d2857e108b488bac6033f5b1abbde2b5280aa686aa4' state='STRING'>
          Sign in with Dribbble
        </DribbbleLogin>

        <h1 styleName='heading'>Sexy Dribbble</h1>
      </div>
    )
  }
}

export default App
