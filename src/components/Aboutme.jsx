import React from 'react'
import "./Aboutme.css"
import pic from "../Assets/arjunpfpmodified.webp"


function Aboutme() {
  return (
    <div id='about'>
        
          <div className="main" >
          <div className="container2 ">
              <div className="row">
                  <div className="col-md-4 ">
                     <div className='col1'> 
                      {/* skills */}
                     
                    <div className='skills'>
                    <h1>About </h1>
                      <h1>Me</h1>
                    
                      <h4>HTML</h4>
                      <h4>CSS</h4>
                      <h4>BOOTSTRAP</h4>
                      <h4>JAVASCRIPT</h4>
                      <h4>REACT</h4>
                    </div>
  
                     </div>
                  </div>
                  <div className="cool col-md-4" >
                      <div className='container fluid'>
                         <img src={pic} className='me' style={{width:'100%', height:'100%',marginBottom:'20px',borderRadius:'50%'}} alt="pic" />
                    
                     
  
  
                      </div>
                      
                  </div>
                  <div className="col-md-4">
                      
                      <div className='col3'>
                      <h6 style={{color:'rgba(241, 76, 76, 0.817)', fontWeight:'bolder'}}>WHO AM I</h6>
                      <h2>Arjun  V M</h2>
                      <h5>Professional MEARN Developer</h5>
                      <p>🌱 Enthusiastic Full Stack Development Student | 💡 Future Tech Trailblazer
  📚 Currently diving deep into the world of full stack development, I'm on a mission to transform ideas into impactful digital solutions.
  🖥️ Exploring front-end magic with: HTML, CSS, JavaScript, React
  💻 Delving into the server realm with: Node.js, Express
  🛢️ Unraveling the database puzzle with: MongoDB
  📝 Continuously documenting my learning through coding projects
  🚀 Join me as I tinker, code, and conquer the realm of web development. Let's learn and grow together!
  </p>
                      <h6 style={{color:'red'}}>Follow me-</h6>
                      <a href="https://web.whatsapp.com/" style={{color:'rgba(241, 76, 76, 0.817)'}}> <i class="fa-brands fa-whatsapp fa-2x"></i></a>
                       <a href="https://www.instagram.com/arjunvm_/"> <i class="fa-brands fa-instagram fa-2x" ></i></a>
                      <a href="https://www.linkedin.com/in/arjun-v-m-39111a28b/" style={{color:'rgba(241, 76, 76, 0.817)'}}>   <i class="fa-brands fa-linkedin fa-2x"></i></a>
                       <a href="https://github.com/arjunvm1"> <i class="fa-brands fa-github fa-2x"></i></a>
                      </div>
                  </div>
              </div>
          </div>
  
  
          </div> 
        
    </div>
  )
}

export default Aboutme