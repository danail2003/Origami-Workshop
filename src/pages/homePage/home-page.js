import React from 'react';
import PageWrapper from '../../components/page-wrapper/index';
import Title from '../../components/title/index';
import RenderOrigamis from '../../utils/render-origamis';

const Main = () => {
  return (
    <PageWrapper>
      <Title title='Publications' />
      <RenderOrigamis />
    </PageWrapper>
  )
}

export default Main;
