import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import s  from  './images/im1.jpg'
import cr from './images/im2.jpg';
import bg1 from './images/im3.jpg';
import bg2 from './images/im4.jpg';
import bg3 from './images/im5.jpg';
import bg4 from './images/im6.jpg';





import { useContext} from 'react';


// import svp from './images/s_vallay_park.jpg'
import { Container, Row,Col } from 'react-bootstrap';
import '../App.css'
import { useState } from 'react';
function Cardssports(){
    const [title,setTitle]=useState("")
    
    const record=[
        {idno:1,title:'Shooe',
            price:"Rs.1500",imageUrl:s},
        {idno:2,title:'Cricket Bat',
                price:"Rs.1000",imageUrl:cr},
        {idno:3,title:'Bag',
                price:"Rs.990",imageUrl:bg1},
        {idno:4,title:'Tennis Raquet',
                price:"Rs.1499",imageUrl:bg2},
        {idno:5,title:'Jersey',
                price:"Rs.499",imageUrl:bg3},   
        {idno:6,title:'Whisle',
                    price:"Rs.109",imageUrl:bg4},      
    ]
    return(
        <>
         <h3 style={{textAlign:"center"}}>New Arrivals</h3>
         <p style={{textAlign:"center"}}>Our new arrivals are build to withstand your activities while keeping you looking your best!</p>
         <br/>
         <br/>
       <Container className="margint">
        <Row className='mb-3'> 
            <Col>
             <input type="text" name="sch" onChange={(e)=>{
                   setTitle(e.target.value)
             }} className='form-control' placeholder='search here!'/>
             
            </Col>
        </Row>
        {/* <Row className='mb-3' >
            <Col style={{alignItems:"center"}}>
            <Button  variant='success' onClick={()=>{
                setTitle("")
            }}>
               Show All
            </Button>
            </Col> */}
            {/* {
                record.length>0&& 
                record.map((item)=>{
                    return(
                        <Col key={item.idno}>
                        <Button variant='info' onClick={(e)=>{
                            setTitle(item.title)
                        }}>
                            {item.title}
                        </Button> 
                      
                        </Col>
                    )
                })
            } */}
        {/* </Row> */}
        <Row>
            {    
                 record.length>0?  
                
                 record.filter((rec)=>{
                    return(rec.title.toLocaleLowerCase().match(title.toLocaleLowerCase()))
                 })

             
                 .map((list)=>{
                   return(
                    <Col lg={4} className='mb-2' key={list.idno}>
                    <Card>
                        <Card.Img variant="top" src={list.imageUrl}  style={{height:'120px'}}/>
                        <Card.Body>
                        <Card.Title>{list.title}</Card.Title>
                                <Card.Text>
                                price: {list.price}
                                <br/>
                                <br/>
                                <div style={{display:'flex' , gap:'10px'}}>
                                <Button variant='danger' style={{borderRadius:'20px' , gap:'10px'}}>Buy Now</Button>
                                
                                <Button  variant='danger' style={{borderRadius:"20px" }}>Add to Cart</Button>
                                </div>
                                </Card.Text>
                       
                        </Card.Body>
                    </Card>
                    
                </Col>
                   )
                 })
                 
                 
                 :"No Data Found"

            }
      

       
        </Row>
       
       </Container>
     
        </>
    )
}

export default Cardssports;