import ReactDOM from 'react-dom';
import BootstrapButton from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Alert';
import './components/Main.scss'
import styled from 'styled-components';
import image from './components/placeholder.jpeg'
import image2 from './components/home.jpg'
import { Card } from 'react-bootstrap';



// begin inline styling
function RegularCss() {
    const regularStyle = {
        width: 200,
        height: 200,
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 10,
        border: "8px double gold",
        borderRadius: "50px 50px",
        backgroundImage: "linear-gradient(to right,green, red, yellow, orange)"
    }
    return <div style={regularStyle} > < h3 > I am just a regular guy called inline css </h3><hr /> </div>
}

//Begin Scss styling
function SassComp(prop) {

    return <div className="sassClasses">
        <img src={image} alt="image" />
        <hr className="line" />
        <p> I am styled by scss </p> </div >
}

//Begin styled components
const imgSize = {
    height: "150px",
    width: "100%",
}
const StyledComp = styled.div`
                        border: 3px double cyan;
                        color: green;
                        background:gold;
                        width:300px;
                        height:300px;
                        `;

function StyledCompRender() {
    return <div>
        <StyledComp>
            <img style={imgSize} src={image2} />
            <hr />
            <h5> Here Come Styled components </h5> <
                hr />
            <br />
            <hr />
        </StyledComp>

    </div>
}
//Begin bootstrap card

function BootstrapCard() {
    return (<>
        <Card style={{ width: '19rem' }} className="bg-danger text-white" border="success" >
            <Card.Img src="https://images.unsplash.com/photo-1620827252031-146d52644aac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" />
            <Card.Body >
                <Card.Header as="h4" > The Bootstrap Vibe! </Card.Header>

                <Button variant="info" > Let a Hundred Flowers Blossom! </Button>
            </Card.Body >
        </Card> </>
    )
}



ReactDOM.render(<div className="domRender" >
    <div className="flex-gap" > < RegularCss /> </div>,
    <div className="flex-gap" > < SassComp /> </div>
    <div className="flex-gap" > < StyledCompRender /> </div>
    <div className="flex-gap" > < BootstrapCard /> </div>

</div>,
    document.querySelector("#root"))