import logo from './logo.svg';
import './App.css';
import ClockHeading from './components/ClockHeading';
import ClockSlogan from './components/ClockSlogan';
import CurrentTime from './components/CurrentTime';

function App() {
  return (
    <div className="App">
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </div>
  );
}

export default App;
