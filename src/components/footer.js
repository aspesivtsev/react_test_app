import React, {Component} from 'react';

//this is class based approach
class Footer extends React.Component{

    createAlert(){
        
            alert('You clicked me!');
            console.log('You clicked and it is not funny at all!!!');
            
    }

    render(){
        return (
            <React.Fragment>
                <h2 onClick={this.createAlert}>This is our FOOTER, click!</h2>
                <p onClick={this.props.myalert}>{this.props.trademark}</p>
            </React.Fragment>
        );
    }
}

export default Footer;