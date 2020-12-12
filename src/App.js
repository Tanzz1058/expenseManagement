import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/SignIn';
import Layout from './components/Layout';

class App extends React.Component{

    render(){
        const routes = (
            <Switch>
                <Route path = '/signup' component={Signup} exact/>
                <Route path = '/signin' component={Signin} exact/>
            </Switch>
            )
            return(
                <Layout>
                    {routes}
                </Layout>
            )
    }
   
}


export default App;
