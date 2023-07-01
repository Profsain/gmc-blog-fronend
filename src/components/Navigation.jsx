import { Navbar, Container, Nav } from "react-bootstrap";


const Navigation = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">GMC-Blog</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/add-post">Add Post</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
