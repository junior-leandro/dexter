
import './App.css';
import Header from './components/Header/Header';
import Season from './components/Season/Season';

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <Season season="1"/>
      <Season season="2"/>
      <Season season="3"/>
      <Season season="4"/>
      <Season season="5"/>
      <Season season="6"/>
      <Season season="7"/>
      <Season season="8"/>
    </div>
    </>
  );
}

export default App;
