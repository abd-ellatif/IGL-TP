import React, { Component } from 'react'
import HeroSection from './HeroSection';
import LogInNavBar from './logInNavBar';


class HeroPage extends Component {
    state = {  } 
    render() { 
        return (<div>
            <LogInNavBar></LogInNavBar>
            <HeroSection></HeroSection>
        </div>);
    }
}
 
export default HeroPage;
