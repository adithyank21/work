
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
            color: 'skyblue',
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
        backgroundColor: 'black',
        color: 'white',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}
>
    <table style={{ borderCollapse: 'collapse', width: '100%', height: '100%' }}>
        <tbody>
            <tr style={{ height: '100%', textAlign: 'center' }}>
                <td style={{ verticalAlign: 'middle', padding: '20px' }}>
                    <h3 style={{ margin: 0 }}>Jolt</h3>
                    <h6 style={{ margin: 0 }}>
                        Experience the great Outdoors style with Joults.
                        <br />
                        Shop now and gear up for adventure in Jolts.
                    </h6>
                </td>
                <td style={{ verticalAlign: 'middle', padding: '20px' }}>
                    <h3 style={{ margin: 0 }}>Categories</h3>
                    <h6 style={{ margin: 0 }}>Jackets</h6>
                    <h6 style={{ margin: 0 }}>Shirts</h6>
                    <h6 style={{ margin: 0 }}>Shoes</h6>
                    <h6 style={{ margin: 0 }}>Bags</h6>
                </td>
                <td style={{ verticalAlign: 'middle', padding: '20px' }}>
                    <h3 style={{ margin: 0 }}>Customer Care</h3>
                    <h6 style={{ margin: 0 }}>FAQ</h6>
                    <h6 style={{ margin: 0 }}>Shipping</h6>
                    <h6 style={{ margin: 0 }}>Order Status</h6>
                    <h6 style={{ margin: 0 }}>Return & Exchange</h6>
                </td>
                <td style={{ verticalAlign: 'middle', padding: '20px' }}>
                    <h3 style={{ margin: 0 }}>Company</h3>
                    <h6 style={{ margin: 0 }}>Privacy</h6>
                    <h6 style={{ margin: 0 }}>Guides</h6>
                    <h6 style={{ margin: 0 }}>Terms And Conditions</h6>
                </td>
            </tr>
        </tbody>
    </table>
</div>

        </>
    );
}

export default Footer;
