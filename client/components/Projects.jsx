import React from 'react'

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
   <body>
   <div className="home">
     <div className="projects">
       <div className="projects__bio-img">
         <h1 className="text-secondary">My Projects</h1>
       </div>

       <div className="projects__items">
         <div className="projects__item">
           <img src="./img/quizzical-2.png" alt="Quizzle Project"/>
           <h3>Quizzical</h3>
           <div className="projects__btns">
             <a href="http://get-quizzical.herokuapp.com/" className="projects__btn">
               <i className='fas fa-eye'></i> Live
             </a>
             <a href="https://github.com/ethan-t-obrien/quizzle" className="projects__btn">
               <i className='fas fa-github'></i> Code
             </a>
           </div>
         </div>
         <div className="projects__item">
           <img src="./img/codeImage.jpg" alt="db-deals"/>
           <h3>DB-deals</h3>
           <div className="projects__btns">
             <a href="" className="projects__btn">
               <i className='fas fa-eye'></i> Live
             </a>
             <a href="https://github.com/ethan-t-obrien/db-deals" className="projects__btn">
               <i className='fas fa-github'></i> Code
             </a>
           </div>
         </div>
         <div className="projects__item">
           <img src="./img/codeImage.jpg" alt="RECCaban Project"/>
           <h3>RECCaban</h3>
           <div className="projects__btns">
             <a href="" className="projects__btn">
               <i className='fas fa-eye'></i> Live
             </a>
             <a href="" className="projects__btn">
               <i className='fas fa-github'></i> Code
             </a>
           </div>
         </div>
       </div>
     </div>
   </div>
   </body>
    )
  }
}

export default Projects