// import logo from './logo.svg';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './App.css';
import Header from './/components/header/header'
import Footer from './/components/footer/footer'
import { blog } from '..//src/data/blog';
import { useState } from 'react';


function App() {
  let headerinfo = {
    email: 'test1@gmail',
    Phone: '012345678 '
  }
  let [count, setCount] = useState(1)
  let displayData = () => {
    setCount(count + 1)


  }

  return (
    <div className="App">
      <Header headerinfo={headerinfo} cname="Tech123"/>

      {/* <Container fluid>
        <Row>
          <Col>test</Col>
          <Col>test</Col>
          <Col>test</Col>
        </Row>
      </Container> */}
      <Container className='MainBody'>
        <Row>
          <div className="col-lg-3 mb-4">
            <button type="button" class="btn btn-primary" onClick={displayData}>Save</button>
          </div>
          <div className="col-lg-3 mb-4">
            {count}
          </div>
        </Row>
        <Row>
          {blog.map((v, i) => {
            return (
              <ProductItems pitems={v} />
            )
          })}

        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
function ProductItems({ pitems }) {
  return (
    <div className="col-lg-3 mb-4">

      <Card>
        <Card.Body>
          <Card.Title className='CardTitle'>
            {pitems.title}
          </Card.Title>
          <Card.Text>
            {pitems.body}
          </Card.Text>
          <Button variant="primary">Go SomeWhere</Button>
        </Card.Body>

      </Card>

    </div>
  )
}