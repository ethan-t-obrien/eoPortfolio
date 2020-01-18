import React from 'react'
import { Link } from 'react-router-dom'

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
        <h2 className='initials'>EO</h2>
          <ul className="menu">
            <li className="menu__item">
            <Link to='/' className="menu__link">
              Home
            </Link>
            </li>
            <li className="menu__item">
            <Link to='projects' className="menu__link">
              Projects
            </Link>
            </li>
            <li className="menu__item">
            <Link to='/about' className="menu__link">
              About
            </Link>
            </li>
            <li className="menu__item">
            <Link to='/contact' className="menu__link">
              Contatct
            </Link>
            </li>
            <li className="menu__item">
            <Link to='/resume' className="menu__link">
              Resume
            </Link>
            </li>
          </ul>
      </nav>
    )
  }
}

export default Nav