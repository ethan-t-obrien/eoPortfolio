import React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    console.log('did mount');
    
  }


  render() {
    return (
      <>
      <div className="home">
        <h1 className="home__name">Ethan O'Brien</h1>
        <h1 className="home__dev">Web Developer</h1>
      </div>

      <div className="stack">
        <p>HTML/CSS | Javascript | Node.js | React | Redux | Express | Knex | SQL | Sass | Rest-ful APIs</p>
      </div>
      </>
    )
  }
}

export default Home 
