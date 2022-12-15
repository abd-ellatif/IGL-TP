import React, { Component } from 'react';


class NavBar extends Component {
    state = {  } 

    
    render() { 
        let classList = "w-full h-20 p-5 flex flex-row-reverse sticky top-0"
         classList += " "+this.props.bgColor+"/80";
        return (<nav className={classList} >
            {this.props.children}
        </nav>);
    }
}
 
export default NavBar;