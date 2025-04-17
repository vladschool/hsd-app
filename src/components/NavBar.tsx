import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">NextApp</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior><Nav.Link>Home</Nav.Link></Link>
            <Link href="/employees" passHref legacyBehavior><Nav.Link>Employee List</Nav.Link></Link>
            <Link href="/profile" passHref legacyBehavior><Nav.Link>Profile</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
