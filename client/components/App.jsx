import React from 'react'
import Home from './Home'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    console.log('did mount')
  }


  render() {
    return (
      <>
      <h1>React development has begun!</h1>
      <Home />
      </>
    )
  }
}

export default App
