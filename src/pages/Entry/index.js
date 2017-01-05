import React, {Component} from 'react';
import {connect} from 'react-redux'
import Page from '../../components/Page'
import {MAIN, LOGIN} from '../../router/Links'


import logo from './logo.svg'

class Entry extends Component {
    componentDidMount() {
        if(this.props.username){
            this.props.router.push(MAIN)
        }else {
            this.props.router.push(LOGIN)
        }
    }
    
    render() {
        return (
            <Page>
                <img src={logo} style={{width:'100%'}}/>
            </Page>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.auth.username
    }
}

export default connect(mapStateToProps)(Entry);