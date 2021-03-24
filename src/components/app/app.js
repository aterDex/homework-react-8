import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './app.css';
import './animate.min.css'
import * as sec from '../sections';
import * as pop from '../modals';

function App() {
    return (
        <>
            <sec.Header/>
            <sec.Main/>
            <sec.Glazing/>
            <sec.Decoration/>
            <div className="overlay"></div>
            <sec.Works/>
            <sec.Guarantees/>
            <sec.Payment/>
            <sec.Sale/>
            <sec.Contacts/>
            <sec.Feedback/>
            <sec.Footer/>
            <pop.RequestEngineer/>
        </>
    );
}

export default App;
