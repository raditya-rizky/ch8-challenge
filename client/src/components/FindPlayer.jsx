import { useState } from 'react';
import {Container, Tabs, Tab, Form, Button, ListGroup} from "react-bootstrap"


function FindPlayer() {
    const [findEmail, setFindEmail] = useState(false)
    const [findUname, setFindUname] = useState(false)
    const [findExp, setFindExp] = useState(false)
    const [findLvl, setFindLvl] = useState(false)
    const [email, setEmail] = useState("")
    const [uname, setUname] = useState("")
    const [exp, setExp] = useState("")
    const [lvl, setLvl] = useState("")

    function handleEmail(event) {
        const value = event.target.value
        setEmail(value)
    }
    function handleUname(event) {
        const value = event.target.value
        setUname(value)
    }
    function handleExp(event) {
        const value = event.target.value
        setExp(value)
    }
    function handleLvl(event) {
        const value = event.target.value
        setLvl(value)
    }

    if(findEmail) {
        return (
            <Container className="pt-5">
                <h1 className='text-center'>Player found:</h1>
                <div className="row justify-content-center text-center fw-800 fs-4">
                    <div className="col-8">
                        <ListGroup>
                        <ListGroup.Item><b>Email: {email}</b></ListGroup.Item>
                        <ListGroup.Item>Username: PlayerOne</ListGroup.Item>
                        <ListGroup.Item>Experience: 500</ListGroup.Item>
                        <ListGroup.Item>Level: 5</ListGroup.Item>
                        </ListGroup>
                        <Button variant="primary" onClick={() => setFindEmail(false)}>
                            Find Again 
                        </Button>
                    </div>
                </div>
            </Container>
        )
    }

    if(findUname) {
        return (
            <Container className="pt-5">
                <h1 className='text-center'>Player found:</h1>
                <div className="row justify-content-center text-center fw-800 fs-4">
                    <div className="col-8">
                        <ListGroup>
                        <ListGroup.Item>Email: apalah@email.com</ListGroup.Item>
                        <ListGroup.Item><b>Username: {uname}</b></ListGroup.Item>
                        <ListGroup.Item>Experience: 500</ListGroup.Item>
                        <ListGroup.Item>Level: 5</ListGroup.Item>
                        </ListGroup>
                        <Button variant="primary" onClick={() => setFindUname(false)}>
                            Find Again 
                        </Button>
                    </div>
                </div>
            </Container>
        )
    }

    if(findExp) {
        return (
            <Container className="pt-5">
                <h1 className='text-center'>Player found:</h1>
                <div className="row justify-content-center text-center fw-800 fs-4">
                    <div className="col-8">
                        <ListGroup>
                        <ListGroup.Item>Email: apalah@email.com</ListGroup.Item>
                        <ListGroup.Item>Username: PlayerOne</ListGroup.Item>
                        <ListGroup.Item><b>Experience: {exp}</b></ListGroup.Item>
                        <ListGroup.Item>Level: 5</ListGroup.Item>
                        </ListGroup>
                        <Button variant="primary" onClick={() => setFindExp(false)}>
                            Find Again 
                        </Button>
                    </div>
                </div>
            </Container>
        )
    }

    if(findLvl) {
        return (
            <Container className="pt-5">
                <h1 className='text-center'>Player found:</h1>
                <div className="row justify-content-center text-center fw-800 fs-4">
                    <div className="col-8">
                        <ListGroup>
                        <ListGroup.Item>Email: apalah@email.com</ListGroup.Item>
                        <ListGroup.Item>Username: PlayerOne</ListGroup.Item>
                        <ListGroup.Item>Experience: 500</ListGroup.Item>
                        <ListGroup.Item><b>Level: {lvl}</b></ListGroup.Item>
                        </ListGroup>
                        <Button variant="primary" onClick={() => setFindLvl(false)}>
                            Find Again 
                        </Button>
                    </div>
                </div>
            </Container>
        )
    }

    return (
        <Container className="pt-5 pb-5">

        <div className="row justify-content-center text-center fw-800 fs-5">
            <div className="col-7">
            <h1 className="text-center">Find Player by:</h1>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" >
                    <Tab eventKey="email" title="Email">
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={email} type="text" placeholder="Find by email" onChange={(event) => handleEmail(event)} required/>
                        </Form.Group>

                        <Button variant="primary" onClick={() => setFindEmail(true)}>
                            Submit
                        </Button>
                    </Tab>
                    <Tab eventKey="uname" title="Username">
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control value={uname} type="text" placeholder="Find by username" onChange={(event) => handleUname(event)} required/>
                        </Form.Group>

                        <Button variant="primary" onClick={() => setFindUname(true)}>
                            Submit
                        </Button>
                    </Tab>
                    <Tab eventKey="exp" title="Experience">
                        <Form.Group className="mb-3">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control value={exp} type="number" placeholder="Find by experience" min="0" onChange={(event) => handleExp(event)} required/>
                        </Form.Group>

                        <Button variant="primary" onClick={() => setFindExp(true)}>
                            Submit
                        </Button>
                    </Tab>
                    <Tab eventKey="lvl" title="Level">
                        <Form.Group className="mb-3">
                            <Form.Label>Level</Form.Label>
                            <Form.Control value={lvl} type="number" placeholder="Find by level" min="0" onChange={(event) => handleLvl(event)} required/>
                        </Form.Group>

                        <Button variant="primary" onClick={() => setFindLvl(true)}>
                            Submit
                        </Button>
                    </Tab>
                </Tabs>
            </div>
        </div>
        </Container>
    )
    
}


export default FindPlayer;
