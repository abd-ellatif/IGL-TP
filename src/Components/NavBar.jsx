import React, { Component } from 'react';


class NavBar extends Component {
    state = {  } 

    
    render() { 
        let classList = "w-full h-20 p-5 flex sticky top-0 justify-between"
         classList += " "+this.props.bgColor;
        return (<nav className={classList} >
            <div className="mt-1">
            {this.props.logo}
            </div>
            <div className="flex flex-row-reverse">
            {this.props.children}
            </div>
            
        </nav>);
    }
}
 
export default NavBar;