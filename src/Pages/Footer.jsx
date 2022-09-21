import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>

<footer >
        <div className='container'>
        <div className='social'>
                <div className='socBox'>
                  <i className='fab fa-facebook-f' style={{ color:'white'}}></i>
                  <span style={{marginLeft:'50px',color:'white'}}>SHARE</span>
                </div>
                <div className='socBox'>
                  <i className='fab fa-pinterest' style={{ color:'white'}}></i>
                  <span style={{marginLeft:'50px',color:'white'}}>PINTEREST</span>
                </div>
                <div className='socBox'>
                  <i className='fab fa-twitter'style={{ color:'white'}}></i>
                  <span style={{marginLeft:'50px',color:'white'}}>TWITTER</span>
                </div>
                <div className='socBox'>
                  <i className='fa fa-envelope' style={{ color:'white'}}></i>
                  <span style={{marginLeft:'50px', color:'white'}}>MAIL</span>
                </div><br /><br />
            
                
              </div>  
          <div className='box'>
            <h3>FITNESS</h3>
            <div className='item'>
              <img src='https://c4.wallpaperflare.com/wallpaper/679/865/217/machine-workout-fitness-gym-wallpaper-preview.jpg' alt='FITNESS' />
              <p>"The fitness enthusiast had previously revealed that he's a victim of laziness, too</p>
            </div>
                  <i className='fa fa-envelope'></i>
                  <span> 09patilparesh@gmail.com </span>
          </div>

          <div className='box'>
            <h3>BOLLYWOOD</h3>
            <div className='item'>
              <img src='https://th.bing.com/th/id/OIP.lQV9obJP9n7u0cvAv-YErgHaJ1?w=182&h=243&c=7&r=0&o=5&dpr=1.25&pid=1.7' alt='BOLLYWOOD' />
              <p>Aishwarya Rai Bachchan is all goofy in new pictures from England gorgeous</p>
            </div>
            <i className='fa fa-phone'></i>
                  <span> +91 8208327690</span>
          </div>
          <div className='box'>
            <h3>LABELS</h3>
            <ul>
              <li>
                <span>Hollywood</span> <label>(5)</label>
              </li>
              <li>
                <span>Technology</span> <label>(6)</label>
              </li>
              <li>
                <span>Sport</span> <label>(7)</label>
              </li>
              <li>
                <span>Food</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          <p>© all rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer