import React,{useState} from 'react'
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBNavbarBrand,
    MDBCollapse
  } from 'mdb-react-ui-kit';
  
function Header() {
    // const [showNavColor, setShowNavColor] = useState(false);
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    // const [showNavColorThird, setShowNavColorThird] = useState(false);
  return (
    <>
     <MDBNavbar expand='lg' style={{backgroundColor:'black'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'><h3 style={{color:'rgba(241, 76, 76, 0.817)'}}>MEARN STACK DEVELOPER</h3></MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorSecond(!showNavColorSecond)}
          >
            <MDBIcon icon='bars'  style={{color:'white'}} fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'  style={{justifyContent:'end'}}>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='#home' style={{color:'white'}}>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#about'  style={{color:'white', marginLeft:'35px'}} >About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#services'  style={{color:'white', marginLeft:'35px'}}>Services</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#works'  style={{color:'white', marginLeft:'35px'}}>works</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#contact' style={{color:'white', marginLeft:'35px'}}>Contact</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                <i class="fa-solid fa-circle-half-stroke" style={{color:" #ffffff"}}></i>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Light</MDBDropdownItem>
                  <MDBDropdownItem link>Dark Dark</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header