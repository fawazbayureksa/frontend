// import logo from "./logo.svg";
import "./App.css";
import Beranda from "./component/Beranda";
import Navbar from "./component/Navbar";
import ManajemenBuku from "./component/ManajemenBuku";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [books,setBooks,] = useState([]);
  useEffect(()=>{
    retrieveData();
  }, []);

  function retrieveData(){
    axios 
    .get("http://localhost:4000/book")
    .then((response) =>{
        setBooks(response.data);
    })
    .catch(function(error){
      console.log(error);
    });
  }
  
  function storeData(inputBook){
    // console.log(inputBook);
    // alert("Data Berhasil Ditambahkan");

    axios
    .post("http://localhost:4000/book/add", inputBook)
    .then((res) => {
      setBooks((prevBooks) => [...prevBooks,inputBook]);
      alert("Data Berhasil Ditambahkan");
    })
    .catch((error) => {
      console.log(error.response.data);
    });
  }
  function updateData(inputBook){
    // console.log(inputBook);
    // alert("Data Berhasil di Ubah")
    axios
    .put("http://localhost:4000/book/update/"+ inputBook._id,inputBook)
    .then((res) => {
      retrieveData();
      alert("Data Berhasil DiUbah");
    })
    .catch((error) => {
      console.log(error.response.data);
    });

  }
  function deleteData(book){
    // console.log(book);
    // alert("Data Berhasil Di Hapus");

    axios
    .delete("http://localhost:4000/book/delete/"+ book._id)
    .then((res) => {
      retrieveData();
      alert("Data Berhasil Dihapus");
    })
    .catch((error) => {
      console.log(error.response.data);
    });

  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Beranda bookList={books}/>
          </Route>

          <Route path="/manajemen-buku">
            <ManajemenBuku bookList={books} store={storeData} update={updateData} remove={deleteData} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
