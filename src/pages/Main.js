import React, {Component} from 'react';
import Page from '../components/Page'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux'
import {SECOND} from '../router/Links'

class Main extends Component {
    render() {
        return (
            <Page>
                <AppBar 
                    title={'hello '+this.props.username}
                    iconElementRight={<FlatButton label="Next" onTouchTap={(e)=>{
                        e.preventDefault()
                        this.props.router.push(SECOND)
                    }} />}
                />
            </Page>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.auth.username
    }
}

export default connect(mapStateToProps)(Main);