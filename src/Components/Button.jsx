import React, { Component } from 'react';

class Button  extends Component {
    state = {  }
    
    render() { 
        let classes = "pt-3 pb-3 pl-10 pr-10 rounded-md text-white  mx-5  ";
        classes += " "+  this.props.bgColor + " "+ this.props.txtColor;
        return (
            <button className={classes} onClick={this.props.handleClick}>
                {this.props.children}
            </button>);
    }
}
 
export default Button ;