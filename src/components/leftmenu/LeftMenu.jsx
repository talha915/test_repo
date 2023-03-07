// Imports
import { Container, Row, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';

// Styles
import '../../styles/left-menu.scss';

// Data
import leftMenuData from '../../data/leftmenu.json';


function LeftMenu() {
  let history = useHistory();

  const routeTo = (route) => {
    history.push(route);
  }


  const leftMenuLinks = () => {
    const links = leftMenuData.leftmenuList;
    let res = links.map((item) => {
      console.log(item);
      return (
        <li className="nav-item" key={item.id}>
          <a className="nav-link active" onClick={() => routeTo(item.routeTo)} key={item.id}>
            {item.name}
          </a>
        </li>
      );
    });
    return res;
  }

  return (
    <Container >
      <Row>
        <Col md={12} sm={12} xs={12}>
          <nav className="left-menu">
            <h6 className='heading' onClick={()=>{history.push("/")}}>
              Data Whisperer
            </h6>
            <ul className="nav flex-column">
              {leftMenuLinks()}
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
  );
};

export default LeftMenu;
