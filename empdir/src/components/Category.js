import Dropdown from 'react-bootstrap/Dropdown';

export default function Category(props) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Employee by Category
        </Dropdown.Toggle>

        <Dropdown.Menu>
                <Dropdown.Item onClick={props.handleinput} value='name'>Name</Dropdown.Item>
                <Dropdown.Item onClick={props.handleinput} value='email'>Email</Dropdown.Item>
                <Dropdown.Item onClick={props.handleinput} value='age'>Age</Dropdown.Item>
                {/* <Dropdown.Item href="#/action-3">Nationality</Dropdown.Item> */}
            </Dropdown.Menu>
        </Dropdown>
    )
};