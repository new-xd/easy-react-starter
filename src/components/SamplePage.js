import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import FlatButton from 'material-ui/FlatButton';
import Page from './Page'

class SamplePage extends Component {
    render() {
        return (
            <Page>
                <AppBar
                    title={this.props.route.title}
                    iconElementLeft={<IconButton onTouchTap={(e)=>{
                        e.preventDefault()
                        this.props.router.goBack()
                    }}><NavigationBack /></IconButton>}
                    iconElementRight={this.props.route.next ? <FlatButton label="Next" onTouchTap={(e)=>{
                        e.preventDefault()
                        this.props.router.push(this.props.route.next)
                    }} /> : null}
                    />
            </Page>
        );
    }
}

export default SamplePage;