import React  from 'react';
import axios from 'axios';
import './App.css';
class App extends React.Component{
  state = { advice :''};
  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = async () => {
    const response = await axios.get('https://api.adviceslip.com/advice');
    const {advice} = response.data.slip;
    this.setState({advice:advice});
  }
  render(){
    const {advice} = this.state;
    return (
      <h1>{advice}</h1>
    );
  }
}

export default App;
