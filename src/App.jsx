import HomePage from './pages/HomePage';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';

function App() {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <div className="App">
      <HomePage />
      </div>
    </FluentProvider>
  );
}

export default App;
