import React from 'react'

class Nav extends React.Component {
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
      <nav className="nav">
        <ul className="menu">
          <li className="menu__item">
          <a className="menu__link">
            Home
          </a>
          </li>
          <li className="menu__item">
          <a className="menu__link">
            Projects
          </a>
          </li>
          <li className="menu__item">
          <a className="menu__link">
            About
          </a>
          </li>
          <li className="menu__item">
          <a className="menu__link">
            Contatct
          </a>
          </li>
          <li className="menu__item">
          <a className="menu__link">
            Resume
          </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav