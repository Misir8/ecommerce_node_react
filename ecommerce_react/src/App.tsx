import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "react-bootstrap";
import HomePage from "./components/pages/HomePage";
import ProductPage from "./components/pages/ProductPage";


const App = () => {
    return (
        <Router>
            <Header/>
            <main className="py-3">
                <Container>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/product/:id" component={ProductPage} />
                </Container>
            </main>
            <Footer/>
        </Router>
    );
}

export default App;
