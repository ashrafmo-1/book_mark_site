import './App.css';
import Controller from './controller/Controller';
import Links from './linkes/Links';

function App() {
  return (
    <div className="App" style={{backgroundColor: "var(--main_bg)", height: "100vh"}}>
      <Controller />
      <Links />
    
    </div>
  );
}

export default App;