import React, { Component } from 'react';

class Chlid extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {text:'默认数据，2秒后取回数据'},
        {text:'222222222222222222222'}
      ]
    }
  }
  componentDidMount(){
    console.log('componentDidMount');
    //模拟后台取数据
    setTimeout(() => {
      this.setState({
        data: [
          {text:'后台取回数据重新渲染页面333333'},
          {text:'444444444444'},
          {text:'555555555555555'},
          {text:'666666'},
          {text:'7777777777'}
        ]
      });
    }, 2000);
  }
  render() {
    console.log('render');
    return (
      <div className="child-box">
      <p>子组件:</p>
        <div>{this.props.name}</div>
        <ul>
          {
            this.state.data.map(function(item, i) {
              return <li key={i}>{item.text}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Chlid;
