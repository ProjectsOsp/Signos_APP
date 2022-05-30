import React from "react";
import CardMain from "../CardMain";
import'./syle.css'
import { Container, Row, Col } from "react-bootstrap";

const Main = (props) => {
    return(
        <>
        <div className="all">
        <Container>
          <Row>
    <Col><CardMain signo='Aquário' img='../../../assets/aquario.jpg' dataInicio='21/01' dataFim='19/02' /></Col>
    <Col><CardMain signo='Aquário' img='../../../assets/aquario.jpg' dataInicio='21/01' dataFim='19/02' /></Col>
    <Col><CardMain signo='Peixes' img='../../../assets/peixes.jpg' dataInicio='20/02' dataFim='20/03' /></Col>
    <Col><CardMain signo='Áries' img='../../../assets/aries.jpg' dataInicio='21/03' dataFim='20/04' /></Col>
  </Row>
  <Row>
    <Col><CardMain signo='Touro' img='../../../assets/touro.jpg' dataInicio='21/04' dataFim='21/05' /></Col>
    <Col><CardMain signo='Gêmeos' img='../../../assets/gemeos.jpg' dataInicio='22/05' dataFim='21/06' /></Col>
    <Col><CardMain signo='Câncer' img='../../../assets/cancer.jpg' dataInicio='21/06' dataFim='23/07' /></Col>
    <Col><CardMain signo='Leão' img='../../../assets/leao.jpg' dataInicio='24/07' dataFim='23/08' /></Col>
  </Row>
  <Row>
    <Col><CardMain signo='Virgem' img='../../../assets/virgem.jpg' dataInicio='24/08' dataFim='23/09' /></Col>
    <Col><CardMain signo='Libra' img='../../../assets/libra.jpg' dataInicio='24/09' dataFim='23/10' /></Col>
    <Col><CardMain signo='Escorpião' img='../../../assets/escorpiao.jpg' dataInicio='24/10' dataFim='22/11' /></Col>
    <Col><CardMain signo='Capricórnio' img='../../../assets/capricornio.jpg' dataInicio='22/12' dataFim='20/01' /></Col>
  </Row>
  
</Container>
</div>
        
        </>
    )
}

export default Main;