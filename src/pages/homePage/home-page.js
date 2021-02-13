import React, { Component } from 'react';
import PageWrapper from '../../components/page-wrapper/index';
import Title from '../../components/title/index';
import RenderOrigamis from '../../utils/render-origamis';
import UserContext from '../../context';

class Main extends Component {
  static contextType = UserContext;
  
  render() {
    console.log(this.context)
    return (
      <PageWrapper>
        <Title title='Publications' />
        <RenderOrigamis />
      </PageWrapper>
    )
  }
}

export default Main;
