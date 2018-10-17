import React, { Component } from 'react';
import axios from 'axios';

class MainPageVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }
  async componentDidMount() {
    const { match: { params } } = this.props;
    const hover = (await axios.get(`http://localhost:8081/${params.questionId}`)).data;
    this.setState({
      hover,
    });
  }
  render() {
    const
  }
}

function MainPageVideo() {
  return (
    <div id="mainPageVideo" className='mainPage col-sm-4 col-xs-12'><a className="mainLink" href="/"><h1>VIDEO</h1></a></div>
  );
}

export default MainPageVideo;