import './App.css';
import Auth from './modules/auth';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <Auth></Auth>
    </Provider>
  );
}

export default App;
