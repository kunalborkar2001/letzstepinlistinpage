import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ContactUsPopUp({ open, onClose }) {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleClose = () => {
        onClose();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can send the inquiry to the specified email address (LetzStepIn@gmail.com)
        // For demonstration purposes, we'll just set submitted to true
        
        // const subject = encodeURIComponent('Inquiry from ' + email);
        // const body = encodeURIComponent(message);
        // window.location.href = `mailto:LetzStepIn@Gmail.com?subject=${subject}&body=${body}`;

        setSubmitted(true);
    };

    const handleThankYouClose = () => {
        // Reset form fields and close the thank you modal
        setEmail('');
        setMessage('');
        setSubmitted(false);
        onClose();
    };

    return (
        <>
            <Modal show={open && !submitted} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Thank You Modal */}
            <Modal show={submitted} onHide={handleThankYouClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thank You</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Our Business Growth Team will get in touch shortly.</p>
                    <p>Thank you for your valuable inquiry.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleThankYouClose}>
                        Close
                    </Button>
                </Modal.Footer>
                
            </Modal>
        </>
    );
}

export default ContactUsPopUp;
