import Todo from './pages/Todo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="app bg-black text-white h-screen	w-full flex items-center justify-center font-mono overflow-hidden"> 
      <Todo />
      <ToastContainer />
    </div>
  )
}

export default App;