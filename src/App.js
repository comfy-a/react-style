import React, { Component } from 'react';
import './App.css';
import styled, { createGlobalStyle, css, keyframes, ThemeProvider } from 'styled-components';
import theme from './theme';

const Header = styled.div`
  padding: 10px;
  background-color: ${props => props.topTheme};
`;

const ThemeButton = styled.button`
  border-radius: 40px;
  padding: 30px 16px;
  background-color: #fff;  
  font-weight: bold;
`;

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

const Space = styled.div`
  margin-top: 70px;
`;

const Button = styled.button`
  min-width: 160px;
  padding: 10px;
  margin-right: 30px;
  font-weight: bold;
  color: #fff;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${props => props.danger ? "red" : "skyblue"};
  ${props => {
    if (props.rotation) {
      return css`animation: ${rotate} ${props.rotationTime}s linear infinite`;
    }
  }}
`;

const Anchor = styled(Button.withComponent("a"))`
  color: purple;
  background: none;
  font-size: 24px;
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Input = styled.input.attrs({
  required: true
})`
  border-radius: 5px;
  font-size: 20px;
  margin-right: 30px;
`;

const awesmoeCard = css`
  box-shadow: 0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08);
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
`;

const Input2 = styled.input`
  border: none;
  margin-right: 30px;
  font-size: 20px;
  ${awesmoeCard};
`;

class App extends Component {

  state = {
    theme: theme.top[0]
  }

  updateTheme = () => {
    this.setState({
      theme: this.state.theme.id === 1 ? theme.top[1] : theme.top[0]
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>

        <Container>

          <GlobalStyle />

          <Header topTheme={this.state.theme.color}>
            <ThemeButton onClick={this.updateTheme}>Theme</ThemeButton>
          </Header>

          <Space />

          <button className="old-button old-button-success">Success</button>
          <button className="old-button old-button-danger">Danger</button>

          <Space />

          <Button>Success Lotation</Button>
          <Button danger>Danger</Button>
          <Button rotation rotationTime={3}>Success Lotation</Button>
          <Button danger rotation rotationTime={3}>Danger Lotation</Button>

          <Space />

          <Anchor href="http://google.com">Go to google</Anchor>

          <Input placeholder="required" />

          <Space />

          <Input2 placeholder="Card 1" />
          <Input2 placeholder="Card 2" />
          <Input2 placeholder="Card 3" />
          <Input2 placeholder="Card 4" />

        </Container>

      </ThemeProvider>
    );
  }
}

export default App;
