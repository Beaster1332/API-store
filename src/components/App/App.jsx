import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FormContainer from '../Form/FormContainer';
import classes from './App.module.css';

const App = () => {
    return <div className={classes.appContainer}>
        <Routes>
            <Route path='/' element={<FormContainer />} />
        </Routes>
    </div>
}

export default App;
