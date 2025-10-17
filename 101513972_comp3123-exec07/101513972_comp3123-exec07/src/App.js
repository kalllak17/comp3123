import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import StudentInfo from "./components/StudentInfo";
import Footer from "./components/Footer";

function App() {


    const studentId = '101513972'
    const studentName = 'Arkadii Akopian'
    const footer_name = 'George Brown College, Toronto'

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Welcome />
                <StudentInfo studentId={studentId} studentName={studentName}/>
                <Footer name={footer_name}/>
            </header>
        </div>
    );
}

export default App;
