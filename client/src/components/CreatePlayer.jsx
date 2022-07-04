import { useState } from 'react';
import {Container, Form, Button, ListGroup} from "react-bootstrap"

function CreatePlayer() {
    const [create, setCreate] = useState(false)
    const [email, setEmail] = useState("")
    const [uname, setUname] = useState("")
    const [password, setPassword] = useState("")
    const [exp, setExp] = useState("")

    function handleEmail(event) {
        const value = event.target.value
        setEmail(value)
    }
    function handleUname(event) {
        const value = event.target.value
        setUname(value)
    }
    function handlePassword(event) {
        const value = event.target.value
        setPassword(value)
    }
    function handleExp(event) {
        const value = event.target.value
        setExp(value)
    }

    if (create) {
        return (
            <Container className="pt-5">
                <h2 className="text-center">Player Created</h2>
                <div className="row justify-content-center text-center fw-800 fs-4">
                    <div className="col-8">
                        <ListGroup>
                        <ListGroup.Item><b>Email:</b> {email}</ListGroup.Item>
                        <ListGroup.Item><b>Username:</b> {uname}</ListGroup.Item>
                        <ListGroup.Item><b>Password:</b> {password}</ListGroup.Item>
                        <ListGroup.Item><b>Experience:</b> {exp}</ListGroup.Item>
                        </ListGroup>
        
                        <Button variant="primary" onClick={() => setCreate(false)}>
                            Create Again 
                        </Button>
                    </div>
                </div>
            </Container>
   
        )
    }

    return (
        <Container className="pt-4">
            <h1 className="text-center">Create Player</h1>
            <div className="row justify-content-center">
                <div className="col-8">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={email} type="email" placeholder="Enter email" onChange={(event) => handleEmail(event)} required/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control value={uname} type="text" placeholder="Username" onChange={(event) => handleUname(event)} required/>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={password} type="password" placeholder="Password" onChange={(event) => handlePassword(event)} required/>
                        </Form.Group>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control value={exp} type="number" placeholder="Experience" min="0" onChange={(event) => handleExp(event)} required/>
                        </Form.Group>

                        <Button variant="primary" onClick={() => setCreate(true)}>
                            Submit
                        </Button>
                    </Form>
                </div>
                <div className="col-6 text-center align-self-center">
                 
                </div>
            </div>
        
        
        </Container>

    )
}

export default CreatePlayer;