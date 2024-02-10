import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ProductList } from './ProductList';
import { Contacts } from './Contacts';
import Homepage from './Homepage';
import { Button } from 'react-bootstrap';
import { AuthenticationSwitcher } from './AuthenticationContext';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home" element={<Homepage />}>InDress</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Pagrindinis</Nav.Link>
            <NavDropdown title="Drabužiai" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Suknelės</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Marškiniai
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sijonai</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/products" element={<ProductList />}>
                Visi drabužiai
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/kontaktai" element={<Contacts />}>Kontaktai</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              {' '}
              Krepšelis
            </Nav.Link>
          <AuthenticationSwitcher />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;