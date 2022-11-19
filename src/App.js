import {useState}from 'react'
import './App.css';
import Modal from './Components/Modal'

function App() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="App">
      <h1> Modal Practice </h1>
      <button 
      className='openModBtn' 
      onClick={() =>{
      setOpenModal(true);
      }}
      >
      Open
      </button>
      {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  );
}

export default App;
