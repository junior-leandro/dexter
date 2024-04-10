
import './App.css';
import Header from './components/Header/Header';
import Season from './components/Season/Season';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <Season season="1"/>
    </div>
    </>
  );
}

export default App;
