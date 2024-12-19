import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import baby1 from "./assets/chair.jpg"
import baby2 from "./assets/bed.jpg"
import baby3 from "./assets/warmer.webp"
import baby4 from "./assets/shelf.jfif"

const App = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar bg="light" expand="lg" sticky="top" className="border-bottom shadow my-2">
                <Container>
                    <Navbar.Brand href="#" className='fw-bold'>Cyndie Baby & Mama Hub</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Hero Section */}
            <header className="bg-xl text-center py-5">
            <div className="bg-overlay"></div>
            <div className="container" style={{ zIndex: 10, position: "relative" }}>
                <h1 className="display-4 fw-bold text-primary">Welcome to Cindy's Baby Shop</h1>
                <p className="lead mb-4 text-light">Your one-stop destination for everything your baby needs!</p>
                <a href="#about" className="btn btn-primary btn-lg me-3">Learn More</a>
                <a href="#contact" className="btn btn-outline-primary btn-lg">Get in Touch</a>
            </div>
            </header>

            {/* Features Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Why Choose Us?</h2>
                    <div className="row">
                        <p className='text-center mb-4'>We provide a trusted and comfortable shopping experience for mothers and families in Nyahururu, offering quality baby products and essentials with care, convenience and customer-first service.</p>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-4 text-center mb-4">
                            <img src={baby1} alt="Quality Products" className="mb-3 item-img rounded-circle" />
                            <h5>Top Quality</h5>
                            <p>We ensure all our products meet the highest safety and quality standards for your peace of mind.</p>
                        </div>
                        <div className="col-md-4 text-center mb-4">
                            <img src={baby2} alt="Affordable Prices" className="mb-3 item-img rounded-circle" />
                            <h5>Affordable Prices</h5>
                            <p>Get the best value for your money without compromising on quality or style.</p>
                        </div>
                        <div className="col-md-4 text-center mb-4">
                            <img src={baby3} alt="Wide Range" className="mb-3 item-img rounded-circle" />
                            <h5>Wide Range</h5>
                            <p>Explore a vast selection of baby products tailored to your child’s needs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" style={{backgroundColor:"#f1f1f1"}} className="py-5">
                <div className="container">
                    <h2 className="text-center mb-4">About Us</h2>
                    <p>BabyShop was founded with the mission to bring smiles to parents and babies worldwide. With a passion for quality and affordability, we curate the best baby products from trusted brands. Whether you’re shopping for essentials or adorable gifts, we’re here to help make parenthood a joy.</p>
                    <div className="text-center mt-4">
                        <img src={baby4} alt="About BabyShop" className="img-fluid rounded" />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Contact Us</h2>
                    <p className="text-center">We’d love to hear from you! Contact us using the details below or follow us on social media for the latest updates.</p>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <ul className="list-unstyled text-center">
                                <li className="mb-3"><strong>Email:</strong> support@cyndiebabymamahub.com</li>
                                <li className="mb-3"><strong>Phone:</strong>+254 723 930499</li>
                                <li><strong>Address:</strong>Hospital Road, Nyahururu_Kenya.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3">
                <p className="mb-0">
                    &copy; 2024 Cyndie Baby & Mama Hub. All rights reserved. | Follow us: 
                    <a href="#" className="text-white text-decoration-underline mx-1">Facebook</a>
                    | 
                    <a href="#" className="text-white text-decoration-underline mx-1">Instagram</a>
                    | 
                    <a href="#" className="text-white text-decoration-underline mx-1">Twitter</a>
                </p>
            </footer>
        </div>
    );
};

export default App;
