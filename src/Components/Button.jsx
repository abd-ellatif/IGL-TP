import React, { Component } from 'react';

class Button  extends Component {
    state = {  }
    
    render() { 
        let classes = " rounded px-8 py-1 text-white  mx-5  ";
        classes += " "+  this.props.bgColor + " "+ this.props.txtColor;
        return (
            <button className={classes} onClick={this.props.handleClick}>
                {this.props.children}
            </button>);
    }
}
 
export default Button ;