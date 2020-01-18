import React from 'react'
import Home from './Home'
import Nav from './Nav'

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
      <Nav />
      <Home />
      </>
    )
  }
}

export default App
