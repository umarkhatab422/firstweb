// import logo from './logo.svg';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import './App.css';
import Footer from './Footer';
import  Header  from './Header';
import { blog } from './Data/blog';

function App() {
  let headerinfo={
    email: 'test1@gmail',
    Phone: '01234567 '

  }
  return (
    <div className="App">
      <Header headerinfo={headerinfo} cname="Tech123">
        <h1>Welcone</h1>
        </Header>
      {/* <Container fluid>
        <Row>
          <Col>test</Col>
          <Col>test</Col>
          <Col>test</Col>
        </Row>
      </Container> */}
      <Container>
        <Row>
          { blog.map((v,i)=>{
            return(
              <ProductItems pitems={v}/>
            )
          }) }
          
        </Row>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
function ProductItems({pitems}){
  return(
    <div className="col-lg-3 mb-4">
      <Card>
      <Card.Body>
          <Card.Title>
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