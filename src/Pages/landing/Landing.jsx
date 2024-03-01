import React from 'react'
import './landing.css'
import { Row, Col } from 'react-bootstrap'
import bus from '../assets/50906.jpg'
import Header from '../../Components/Header/Header'
import owner from '../assets/5638969.jpg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import lgvideo from '../assets/videos/video.mp4'
import img from '../assets/7iaL9jAaT-modified.png'
import banner from '../assets/removed bg.png'
import banner_2 from '../assets/BOOK (1).png'

function Landing() {
    return (
        <div>
            <Header />

            <section>
                <Row>
                    <Col lg={6} sm={12} className='d-flex justify-content-center  flex-column '  >

                        <div className='ms-5'>
                            <h1>
                                <span className="text-info" style={{ fontSize: '3rem' }}>Looking </span>
                                for a
                                <span className="fw-bold text-danger"> Bus?</span>
                                <br /> or
                                <span className="text-info" style={{ fontSize: '3rem' }}>Looking </span>
                                for a
                                <span className="fw-bold text-danger"> Seat?</span>
                            </h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quas voluptate sunt laborum ut repellat quia tempore esse voluptas? Officiis autem commodi vitae enim dolore id alias amet illo possimus!</p>


                            <div className='d-flex  '> <button className='btn btn-info mt-3'>Get Now</button></div>
                        </div>

                    </Col>
                    <Col lg={6} sm={12} className='d-flex justify-content-center align-items-center' >
                        <img className='img-fluid' src={bus} alt="" />
                    </Col>
                </Row>
            </section>
            <section >

                <div className=' abt  d-flex justify-content-center align-items-center  '>
                    {/* <img className='img-fluid' height={'300px'} width={'800px'} src={busstop} alt="" /> */}
                    <h2 style={{ fontSize: '3rem' }} className='fw-bold'>About Us</h2>
                </div>

                <div className='d-flex justify-content-center align-items-center  '  >

                    <p className='text-dark text-center' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quasi consectetur tempora veritatis iste exercitationem ad delectus nam minima, quidem, modi maiores non deleniti velit placeat eligendi eaque, quae ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eos magni omnis rem illo quasi harum dolores error tenetur, culpa quas quibusdam assumenda provident itaque officiis facere repellat, deleniti a. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, ipsam quam. Autem porro ullam nobis perspiciatis laboriosam voluptas velit hic aliquam necessitatibus non inventore, quibusdam enim. Architecto laboriosam delectus consequatur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores corrupti voluptas, debitis ea tenetur a cumque. Officia voluptatem vero nostrum, molestiae, eius, consequatur minima ipsam ea commodi accusamus deleniti eaque?</p>


                </div>

            </section>
            <section className='mt-5'>

                <Row>
                    <Col lg={8} sm={12} >
                        <video src={lgvideo} autoPlay loop muted width={'100%'}  ></video>
                    </Col>
                    <Col lg={4} sm={12} >
                        <div className='d-flex justify-content-center align-items-center flex-column py-3'>
                            <div >
                                <Card style={{ width: '18rem' }} className='shadow'>
                                    <div className='d-flex justify-content-center mt-3' ><Card.Img variant="top" width={'150px'} height={'150px'} src="https://www.svgrepo.com/show/192244/man-user.svg" /></div>
                                    <Card.Body>
                                        <Card.Title className='text-center'>USERS</Card.Title>

                                        <div className='d-flex justify-content-center'> <Button variant="success">Login</Button></div>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card style={{ width: '18rem' }} className='mt-3 shadow'>
                                    <div className='d-flex justify-content-center mt-3' ><Card.Img variant="top" width={'150px'} height={'150px'} src="https://www.svgrepo.com/show/192244/man-user.svg" /></div>
                                    <Card.Body>
                                        <Card.Title className='text-center'>BUS OPERATORS</Card.Title>

                                        <div className='d-flex justify-content-center'> <Button variant="success">Login</Button></div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Col>
                </Row>

            </section>

            <div className='container rounded banner d-flex mt-5'>
               
                        <div className='d-flex '>
                            <img className='img-fluid' src={banner} style={{ height: '350px', width: '350px' }} alt="" />
                           <div className='d-flex align-items-center' > <h1 className='text-light' style={{fontSize:'50px'}} >ON YOUR <span className='text-danger fw-bold'>FIRST BOOKING</span></h1></div>
                           <div>
                            <img className='img-fluid' style={{ height: '450px', width: '450px' }}  src={banner_2} alt="" />
                           </div>
                        </div>

                   


            </div>

        </div>
    )
}

export default Landing