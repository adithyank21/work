
import React from 'react';
import { Button } from 'bootstrap';
import backgroundImage from './images/foot.jpg'; // Adjust the path as needed
function Footer() {
    return (<>
        <div style={{ 
            backgroundImage: `url(${backgroundImage})`, // Use the imported image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '300px',
            display: 'flex',
            gap:'10px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
        }}>
            {/* <h1 style={{ textAlign: "center" }}>Welcome</h1> */}
            <h3 style={{ textAlign: "center" }}>Sign Up to Our Newsletter</h3>
            <p style={{ textAlign: "center" }}>Get the latest Beuty Secrets and treds , Sign Up for our  Newsletter and stay informed Abbout all things beauty </p>
            <br/>
            <input type='email' name='email' placeholder='Enter Email Id' style={{width:'300px' , borderRadius:'25px' , textAlign:'center' }}></input>
            <button  style={{backgroundColor:'lightpink',borderRadius:'20px' , width:'150px', color:'black'}}>Submit</button>
        </div>
        <div
        style={{
            backgroundColor:'black',
            height:'300px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            color:'white',
            gap:'30px'
        }}
        >
        <h3>Jolt
            <br/>
            <h6>Experience the great Outdoors style with Joults.
                <br/>
                 Shop now and gear up for adventure in Jolts.  </h6>
        </h3>
        <h3>Categories 
            <br/>
            <h6>Jackets</h6>
            <h6>shirts</h6>
            <h6>Shoes</h6>
            <h6>Bags</h6>
      </h3>
        <h3>Customer Care 
            <br/>
            <h6>FAQ</h6>
            <h6>shipping</h6>
            <h6>Order status</h6>
            <h6>Return & Exchange</h6>
      </h3>
        <h3>Company 
            <br/>
            <h6>Privacy</h6>
            <h6>Guides</h6>
            <h6>Terms And Conditions</h6>


        </h3>
        </div>
        </>
    );
}

export default Footer;
