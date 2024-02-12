import React from 'react'
import pic1 from '../Assets/Luminar.jpg';
import pic2 from '../Assets/headphones.jpg';
import pic3 from '../Assets/netflix.jpg';
import pic4 from '../Assets/quotegen.jpg'
import {
    MDBCard,
    MDBCardImage,
  } from 'mdb-react-ui-kit';
import './Projects.css'
function Projects() {
  return (
    <div>
            <div className="main2" id='works'>
      <div className='container w-75' style={{marginTop:'40px'}}>
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <div style={{textAlign:'start'}}>
          <h3 style={{fontWeight:'bolder', color:'rgba(241, 76, 76, 0.817)'}}>Featured Projects</h3>
        <p>Here's some of them</p>
          </div>
          <div >
          <a href="" style={{color:'rgba(241, 76, 76, 0.817)'}}> <button className='btn' style={{backgroundColor:'rgba(241, 76, 76, 0.817)', fontWeight:'bolder', color:'white'}}>Know more <i class="fa-solid fa-arrow-right-long"></i></button> </a>
          </div>
        
        </div>
        <div className="row" style={{display:'flex', justifyContent:'space-around'}}>
          
            <div className="col-md-6" style={{backgroundColor:'rgba(255, 255, 255, 0.043) ma', padding:'20px', width:'400px'}}>
              
             
              <MDBCard >
              <a href="https://luminarwebpagetask.netlify.app/"><MDBCardImage style={{border:'1px solid white'}} src={pic1} position='top' alt='...' /></a>
    
              </MDBCard>
              
              
             
              <div style={{textAlign:'start', marginTop:'10px'}}>
              <h5 style={{fontWeight:'bolder', color:'white'}}>Luminars's Webpage</h5>
              <a href="https://www.linkedin.com/in/arjun-v-m-39111a28b/" style={{color:'rgba(241, 76, 76, 0.817)'}}>Know more <i class="fa-solid fa-arrow-right-long"></i></a>
              </div>
             
            </div>
            <div className="col-md-6" style={{backgroundColor:'rgba(255, 255, 255, 0.043) ma', padding:'20px', width:'400px'}}>
              
              <MDBCard>
              <a href=" https://headphonesdemosite.netlify.app/"> <MDBCardImage  style={{border:'1px solid white'}} src={pic2} position='top' alt='...' /></a>
    
    </MDBCard>
             
            
            <div style={{textAlign:'start', marginTop:'10px'}}>
              <h5 style={{fontWeight:'bolder', color:'white'}}>HeadPhones site</h5>
              <a href="https://www.linkedin.com/in/arjun-v-m-39111a28b/ " style={{color:'rgba(241, 76, 76, 0.817)'}}>Know more <i class="fa-solid fa-arrow-right-long"></i></a>
              </div>

            </div>
            
        </div>
        

        <div className="row" style={{display:'flex', justifyContent:'space-around'}}>
        <div className="col-md-6" style={{backgroundColor:'rgba(255, 255, 255, 0.043) ma', padding:'20px', width:'400px'}}>
             
              <MDBCard>
              <a href="https://react-netflix-clonedemo.netlify.app/"><MDBCardImage  style={{border:'1px solid white'}} src={pic3} position='top' alt='...' /></a>
    
    </MDBCard>
              
              <div style={{textAlign:'start', marginTop:'10px'}}>
              <h5 style={{fontWeight:'bolder', color:'white'}}>Netflix</h5>
              <a href="https://www.linkedin.com/in/arjun-v-m-39111a28b/" style={{color:'rgba(241, 76, 76, 0.817)'}}>Know more <i class="fa-solid fa-arrow-right-long"></i></a>
              </div>
             
            </div>
            <div className="col-md-6" style={{backgroundColor:'rgba(255, 255, 255, 0.043) ma', padding:'20px', width:'400px'}}>
             
              <MDBCard>
              <a href="https://react-quote-generator-appdemo.netlify.app/"><MDBCardImage  style={{border:'1px solid white'}} src={pic4} position='top' alt='...'a /></a>
    
    </MDBCard>
            
            
            <div style={{textAlign:'start', marginTop:'10px'}}>
              <h5 style={{fontWeight:'bolder', color:'white'}}>MEDIA PLAYER</h5>
              <a href="https://www.linkedin.com/in/arjun-v-m-39111a28b/" style={{color:'rgba(241, 76, 76, 0.817)'}}>Know more <i class="fa-solid fa-arrow-right-long"></i></a>
              </div>

            </div>
            
        </div>
        
    </div>

    </div>
    </div>
  )
}

export default Projects