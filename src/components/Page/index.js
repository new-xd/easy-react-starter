import React, { Component } from 'react';
import './page.css'

class Page extends Component {
    render() {
        return (
            <div className='page' style={{width:window.screen.width, height:window.screen.height}}>
                {this.props.children}
            </div>
        );
    }
}

export default Page;