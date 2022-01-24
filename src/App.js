import './App.css';
import {Container, Row} from "reactstrap";
import Exercise from "./Components/Exercise";
import NavBar from "./Components/NavBar";
import {Route, Routes} from "react-router-dom";
import React from "react";
import Settings from "./Components/Settings";

const App = () => {

    return (
        <Container className="bg-light border App" fluid="xl">
            <Row>
                <NavBar/>
                <Routes>
                    <Route path="/" exact element={<Exercise type="squats"/>}/>
                    <Route path="/squats" exact element={<Exercise type="squats"/>}/>
                    <Route path="/bench-press" exact element={<Exercise type="benchPress"/>}/>
                    <Route path="/dead-lift" exact element={<Exercise type="deadLift"/>}/>
                    <Route path="/overhead-press" exact element={<Exercise type="overheadPress"/>}/>
                    <Route path="/settings" exact element={<Settings/>}/>
                </Routes>
            </Row>
        </Container>
    );
}

export default App;
