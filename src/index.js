import React, { Component } from 'react';
import ReactDom from 'react-dom';
import AdminPortal from './Component/AdminPortal';
import {BrowserRouter} from 'react-router-dom';


class Index extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <AdminPortal/>
        </BrowserRouter>
        
      </div>
    );
  }
}

ReactDom.render(<Index/>,document.getElementById('root'))