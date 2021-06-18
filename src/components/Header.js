import { Navbar, Nav } from "react-bootstrap";

const Header = ({
  handleToggleDarkMode,
  handleNewestFirst,
  handleOldestFirst,
}) => {
  return (
    <Navbar expand='lg'>
      <Navbar.Brand className='title'>Note Making App</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link className='nav-link' onClick={() => handleNewestFirst()}>
            Newest First
          </Nav.Link>
          <Nav.Link className='nav-link' onClick={() => handleOldestFirst()}>
            Oldest First
          </Nav.Link>
          <Nav.Link
            className='nav-link'
            onClick={() =>
              handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
            }>
            Toggle Mode
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
