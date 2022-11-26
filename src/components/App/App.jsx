import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FormContainer from '../Form/FormContainer';
import ContentContainer from '../Content/ContentContainer';
import classes from './App.module.css';

const App = () => {
    return <div className={classes.appContainer}>
        <Routes>
            <Route path='/' element={<FormContainer />} />
            <Route path='/content' element={<ContentContainer />} />
        </Routes>
    </div>
}

export default App;
