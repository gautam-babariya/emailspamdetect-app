import { useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [childDivs, setChildDivs] = useState(['']);

  const addChildDiv = (give) => {
    // Create a new array with the existing child divs and add a new div
    setChildDivs([<div className='newchild' key={childDivs.length}>{give}</div>]);
  };
  const [data, setData] = useState({
    title: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const uplode = (e) => {
    e.preventDefault();
    const productData = {
      title: data.title,
    };
    axios.post('http://localhost:3000/predict', productData.title)
      .then((Response) => {
        addChildDiv(Response.data)
      })
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <h1>
            Email Spam Detector
          </h1>
        </div>
      </nav>
      <div className='moto-div'>
        <div className='uper-niche'>
          <label className='label_class' htmlFor="title">Type your Email</label>
          <input className='input_class' type="text" name="title" value={DataTransferItem.title} onChange={handleChange} />
          <button className='botton_class' type='submit' onClick={uplode} >Try</button>
          {/* <button className='botton_class' type='submit' onClick={addChildDiv} >Try</button> */}
          {childDivs}
        </div>
      </div>
    </>
  )
}

export default App
