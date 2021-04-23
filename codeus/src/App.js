import "./App.css";
import { Row, Container, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function App() {
  const [ from, setFrom ] = useState(1);
  const [ to, setTo ] = useState(20);
 

  // const handleChange = event => {
  //   setFrom()
  // }

  return (
    <div className="App">
      <Row>
        <Container>
          <h1>Codeus App</h1>
          <Form>
            <Form.Group controlId="fromInput">
              <Form.Label>From: </Form.Label>
              <Form.Control type="number" name="from" value={from}  onChange={(event) => setFrom(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="toInput">
              <Form.Label>To: </Form.Label>
              <Form.Control type="number" name="to" value={to} onChange={(event) => setTo(event.target.to)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Load
            </Button>
          </Form>
        </Container>
      </Row>
    </div>
  );
}

export default App;
