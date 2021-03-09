import React, { Component } from 'react';
import ReactDom from 'react-dom';
import AdminPortal from './Component/AdminPortal';

class Index extends Component {
  render() {
    return (
      <div>
        <AdminPortal/>
      </div>
    );
  }
}

ReactDom.render(<Index/>,document.getElementById('root'))