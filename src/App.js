import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import TopNav from './layout/top-nav';
import SideNav from './layout/side-nav';
import Footer from './layout/footer';
import DefectStatus from './components/defect/defect-status';
import Test from './components/defect/test';

function App() {
  return (
    <Provider store={store}>
 <div className="App">
      <TopNav/>
      <div className="d-flex align-items-stretch">
        <SideNav />
        <div className="page-holder w-100 d-flex flex-wrap">
          <div className="container-fluid px-xl-5">
            <Switch>
              <Route exact path="/defectStatus" component={DefectStatus} />
              <Route exact path="/test" component={Test} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </div>
    </Provider>
   );
}

export default App;
