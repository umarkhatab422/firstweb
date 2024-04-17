import React from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import './Header.css'
import weblogo from './img/logo 1.png'
export default function Header({headerinfo,cname,children}) {
    // let {headerinfo,cname}=props;
    // console.log(headerinfo,cname)
    // console.log(props.headerinfo.email)
    // console.log(props.headerinfo.Phone)
  return (
    <div className='header'>
      <Container>
        <Row>
            <div className="col-lg-2 mb-4">
              <img width={120} src={weblogo}/>
            </div>
            <div className="col-lg-8 mb-4">
              <h3>Menu</h3>
            </div>
            <div className="col-lg-2 mb-4">
              <h3>Header</h3>
            </div>
        </Row>
      </Container>
    </div>
        
   

  )
}

// export dafault Header;
// export {Header}