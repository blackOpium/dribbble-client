import React, { Component } from 'react'
import DribbbleLogin from '../DribbbleLogin'
import './style.css'

class Header extends Component {
  onSuccess (response) {
    console.log(response)
  }

  onFailure (err) {
    console.log(err.toString())
  }

  render () {
    return (
      <div>
        <DribbbleLogin
          requestUrl='/api/v1/auth/dribbble'
          onFailure={ this.onFailure } onSuccess={ this.onSuccess }clientId='0045e41e8e419f5937685d2857e108b488bac6033f5b1abbde2b5280aa686aa4'
          state='STRING'>
          Sign in with Dribbble
        </DribbbleLogin>
      </div>
    )
  }
}

export default Header
