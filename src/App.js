import { useState, useEffect } from "react";
import { Row, Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import TableView from "../src/Table/index";
import logo from "../src/assets/codeus-logo.png";

import "./App.css";

function App() {
  const [state, setState] = useState({
    from: 1,
    to: 20,
  });
  const [items, setItems] = useState();
  const [token, setToken] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getTokenUrl = "https://f-test-02.glitch.me/data";
    axios.get(getTokenUrl).then((res) => {
      setToken(res.data.token);
    })
    .catch(error => {
      setError(true)
      setErrorMessage('There were an error with fetching data')
    })
  }, []);

  function handleChange(evt) {
    const value = evt.target.value;
    const name = evt.target.name;
    
    setState({
      ...state,
      [name]: value,
    });
  }

  function handleClick(e) {
    e.preventDefault();
    let rangeTo = parseInt(state.to);
    let rangeFrom = parseInt(state.from);

    let url =
      "https://f-test-02.glitch.me/data?from=" +
      rangeFrom +
      "&to=" +
      rangeTo +
      "&token=" +
      token;

    axios.get(url).then((res) => {
      setToken(res.data.token);
      setItems(res.data.data);
    })
    .catch(error => {
      setError(true)
      setErrorMessage('There were an error with fetching data')
    })
  }

  return (
    <div className="App">
      <Row>
        <Container>
          <h1>Codeus App</h1>
          <Form>
            <Form.Group controlId="fromInput">
              <Form.Label>From: </Form.Label>
              <Form.Control
                type="number"
                name="from"
                value={state.from}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="toInput">
              <Form.Label>To: </Form.Label>
              <Form.Control
                type="number"
                name="to"
                value={state.to}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleClick}>
              Load
            </Button>
          </Form>
          {items ? <TableView items={items} /> : null}
          {error ? <p>{errorMessage}</p> : null}
        </Container>
      </Row>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default App;
