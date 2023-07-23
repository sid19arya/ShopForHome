import Papa from 'papaparse'
import { useState } from 'react';

import './Bulk_Upload.css'
import { uploadProducts, getProducts } from '../api';


function Bulk_Upload(){

  const [file, setFile] = useState();
  const [results, setResults] = useState();

  const upload = async event => {
    event.preventDefault();
    console.log(event.target['admin_key'].value);
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE5NTg4Mjk4NjU3Y2IwN2IyOWFmMTMiLCJ1c2VybmFtZSI6ImV2ZSIsInBhc3N3b3JkIjoiaSBsaWtlIGFwcGxlcyIsImNyZWF0ZWQiOiIyMDIzLTA3LTA4VDEyOjM3OjIyLjY1OFoiLCJjYXJ0IjpbXSwid2lzaGxpc3QiOltdLCJjb3Vwb25zIjpbXSwiX192IjowLCJpYXQiOjE2ODg4NDcxNTJ9.Jk_IbibRhryNukjGxx-qEV6GRHvMzjheB3lJdGQK4S0
    // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGE5NjQ1Mjg3MWYxZjZkMzA2NTVhMmYiLCJ1c2VybmFtZSI6IlNJRCIsInBhc3N3b3JkIjoidGhlX2ZpcnN0IiwiX192IjowLCJpYXQiOjE2ODg4MjMxMTN9.NlAI774Wbx1Hyw8G3H3Qg_5fCBAXa3PxPRnHXEz2h_Y
    Papa.parse(file, {
      header: true,
      complete: (result) => {
          console.log(result);
          // MAKE 2D ARRAY, OR IF YOU HAVE A HEADER THEN IT MODIFIES A BIT
          // MAKE IT PRETTY EASY TO UPLOAD, JUST UPLOAD ONE AT A TIME FROM HERE
          // BEFORE YOU CAN HOOK THIS UP TO FRONT, 
          setResults(result.data);
      }
    });
    await uploadProducts(results, event.target['admin_key'].value);
    alert('Your product has been uploaded')
  }

  const handle_import = event => {
    setFile(event.target.files[0])
  }

  const grabProducts = async event => {
    const prods = await getProducts();
    console.log(prods.posts);
  }

  return (
    <div>
      Upload your CSV FIle Here!
      <form onSubmit={upload}>
        <label>Product File</label>
        <input type="file" name='file' accept=".csv" onChange={handle_import}></input>
        {/* Users File
        <input type="file" name='file' accept=".csv" onChange={handle_import}></input> */}
        <input type='text' placeholder='ADMIN KEY' name='admin_key'></input>
        <input type='submit'></input>
      </form>
      <button className="temp" onClick={grabProducts}>Get Products</button>
    </div>
  );
}

export default Bulk_Upload;