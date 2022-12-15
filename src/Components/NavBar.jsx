import React, { Component } from 'react';


class NavBar extends Component {
    state = {  } 

    
    render() { 
        let classList = "w-full h-20 p-5 flex flex-row-reverse"
         classList += " "+this.props.bgColor;
        return (<nav className={classList} >
            {this.props.children}
        </nav>);
    }
}
 
export default NavBar;