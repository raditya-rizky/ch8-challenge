import { useState } from 'react';
import {Container, Form, Button, ListGroup} from "react-bootstrap"

function EditPlayer() {
    const [edit, setEdit] = useState(false)
    const [email, setEmail] = useState("apalah@email.com")
    const [uname, setUname] = useState("PlayerOne")
    const [password, setPassword] = useState("123456")
    const [exp, setExp] = useState(500)
    const [lvl, setLvl] = useState(5)

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
    function handleLvl(event) {
        const value = event.target.value
        setLvl(value)
    }

    if (edit) {
        return (
            <Container className="pt-5">
                <h1 className='text-center'>Player Edited</h1>
                <div className="row justify-content-center text-center fw-800 fs-4">
                    <div className="col-8">
                        <ListGroup>
                        <ListGroup.Item><b>Email:</b> {email}</ListGroup.Item>
                        <ListGroup.Item><b>Username:</b> {uname}</ListGroup.Item>
                        <ListGroup.Item><b>Password:</b> {password}</ListGroup.Item>
                        <ListGroup.Item><b>Experience:</b> {exp}</ListGroup.Item>
                        <ListGroup.Item><b>Level:</b> {lvl}</ListGroup.Item>
                        </ListGroup>
                        <Button variant="primary" onClick={() => setEdit(false)}>
                            Edit Again 
                        </Button>
                    </div>
                </div>
            </Container>
   
        )
    }

    return (
        <Container className="pt-4">
            <h1 className='text-center'>Edit Player</h1>
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

                        <Form.Group className="mb-3">
                            <Form.Label>Level</Form.Label>
                            <Form.Control value={lvl} type="number" placeholder="Level" min="0" onChange={(event) => handleLvl(event)} required/>
                        </Form.Group>

                        <Button variant="primary" onClick={() => setEdit(true)}>
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

export default EditPlayer;