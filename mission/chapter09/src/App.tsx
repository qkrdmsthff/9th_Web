import './App.css';
import { Provider } from 'react-redux';
import StorePage from './pages/StorePage';
import { store } from './app/store';

function App() {
  return (
      <Provider store={store}>
        <StorePage />
      </Provider> 
    )
}

export default App