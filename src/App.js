import React, { Component } from 'react';
import Header from '../src/components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';
import headerData from './mockData/HeaderData.json';

class App extends Component {

  render() {
    console.log(headerData.headerData);
    return (
      <div>
        {headerData.headerData.map((headerData, index) => {
          return <Header data={headerData} key={index}/>;
        })}
        <SideBar />
        <Content />
      </div>
    );
  }
}

export default App;
