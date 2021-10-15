import './App.css';
import Container from './components/Container';
import { OpenWeatherProvider } from './context';

function App() {
  return (
    <OpenWeatherProvider>
      <Container />
    </OpenWeatherProvider>
  );
}

export default App;
