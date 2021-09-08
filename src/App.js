import './App.css';
import '@material-tailwind/react/tailwind.css';
import Main from './components/Main/Main';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className='App m-auto w-10/12 md:w-5/6 lg:w-3/4'>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
