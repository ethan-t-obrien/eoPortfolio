import React from 'react'
import Home from './Home'
import Nav from './Nav'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'

import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'

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
      <Router>
        <Route path='/' component={Nav} />
        <Route path='/' exact component={Home} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
      </Router>
    )
  }
}

export default App
