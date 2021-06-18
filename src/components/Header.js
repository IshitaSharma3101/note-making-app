import { Navbar, Nav } from "react-bootstrap";

const Header = ({
  handleToggleDarkMode,
  handleNewestFirst,
  handleOldestFirst,
}) => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand>Note Making App</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link onClick={() => handleNewestFirst()}>Newest First</Nav.Link>
          <Nav.Link onClick={() => handleOldestFirst()}>Oldest First</Nav.Link>
          <Nav.Link onClick={() =>
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
          }>Toggle Mode</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
