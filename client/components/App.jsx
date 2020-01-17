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
      <Home />
      </>
    )
  }
}

export default App
