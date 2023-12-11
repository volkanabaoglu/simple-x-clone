import React from 'react'
import Container from './layout/Container';
import Sidebar from './layout/Sidebar';
import Widget from './layout/Widget';
import Content from './layout/Content';

export const App = () => {
  return (
    <Container >
      <Sidebar />
      <Content />
      <Widget />
    </Container>
  )
}

export default App;