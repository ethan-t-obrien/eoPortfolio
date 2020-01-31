import React from 'react'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
   <body>
    <div className="home">
      <div className="about">
        <h1>About Me</h1>
        <h3 className="about__heading">I am web devloper and artist, based in Otaki.</h3>
        <p className="about__graph">I'm a person who loves to tackle and overcome problems as well as build and create anything beautiful and intuitive. If i'm not at my computer coding, I'll be spending time with my whanau, fishing, drawing, or playing games.</p>
      </div>
    </div>
   </body>
    )
  }
}

export default About