/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarComponent() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbcgkdTelJltCNwRGDKPiEZYmMsPxe5Y9qUw&usqp=CAU' style={{width:"80px"}} />
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color:"red"}}>Home</Nav.Link>
            <Nav.Link href="/about" style={{ color:"red"}}>About</Nav.Link>
            <Nav.Link href="/movie" style={{ color:"red"}}>Movies</Nav.Link>
          </Nav>
          <Nav.Link href="/product" style={{ color:"red"}}>Add</Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}