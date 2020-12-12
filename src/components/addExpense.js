import React from 'react';
import Navbar from './Navbar';
import { CssBaseline } from '@material-ui/core';

class Home extends React.Component{
    render(){
        return(
            <div>
            <CssBaseline/>
            <Navbar/>
            </div>
            
        )
    }
}

export default Home;