import React, { useState } from 'react';
import './App.css';
import DataForm from './components/dataForm';
import DataFormResult from './components/dataFormResult';

function App() {
    const [submittedData, setSubmittedData] = useState(null);

    // Callback to receive data from the form
    function handleFormSubmit(data) {
        setSubmittedData(data);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Data Entry Form</h1>
            </header>
            <div className="card shadow p-4 mx-auto">
                <DataForm onSubmit={handleFormSubmit} />


                {submittedData && <DataFormResult {...submittedData} />}
            </div>
        </div>
    );
}

export default App;
