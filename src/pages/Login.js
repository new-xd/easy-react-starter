import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Page from '../components/Page'
import AppBar from 'material-ui/AppBar'
import {MAIN} from '../router/Links'
import login from '../actions/logics/login'
import RaisedButton from 'material-ui/RaisedButton'

class Login extends Component {

    render() {
        return (
            <Page>
                <AppBar
                    title={'Login'}
                />
            <RaisedButton label="go to login" primary={true} onTouchTap={(e)=>{
                e.preventDefault()
                this.props.login('hello', ()=>{
                    this.props.router.replace(MAIN)
                })
            }}/>
            </Page>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    login : bindActionCreators(login, dispatch)
});

export default connect(null, mapDispatchToProps)(Login);