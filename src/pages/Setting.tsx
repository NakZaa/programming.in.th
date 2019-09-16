import React from 'react'
import { connect } from 'react-redux'
import { NotFound } from './404'

import firebase from 'firebase/app'

interface ISettingProps {
  user: firebase.User
}

class Setting extends React.Component<ISettingProps> {
  render() {
    if (this.props.user === null) {
      return <NotFound />
    }
    return <React.Fragment></React.Fragment>
  }
}

const mapStateToProps: (state: any) => any = state => {
  return {
    user: state.user.user
  }
}

export const SettingPage = connect(mapStateToProps)(Setting) as any
