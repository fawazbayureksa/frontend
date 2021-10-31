import React from "react";
import { useState } from "react";
function ManajemenBuku({ bookList, store,update,remove }) {
  const [inputBook, setInputBook] = useState();
  const [form, setForm] = useState();
  function handleJudul(event) {
    setInputBook({ ...inputBook, judul: event.target.value });
  }
  function handlePengarang(event) {
    setInputBook({ ...inputBook, pengarang: event.target.value });
  }
  function handleHarga(event) {
    setInputBook({ ...inputBook, harga: event.target.value });
  }
  function handleStok(event) {
    setInputBook({ ...inputBook, stok: event.target.value });
  }
  function submitAdd(event) {
    event.preventDefault();
    store(inputBook);
  }
  function showCreate() {
    setForm("create");
  }
  function showEdit(book) {
    setInputBook(book);
    setForm("edit");
  }
  function submitChange(event){
      event.preventDefault();
      update(inputBook);
      setForm("");
  }
  function deleteBook(book) {
      remove(book);
  }

  
  return (
    <div className="container mt-3">
      <h1 className="text-center">Manajemen Buku</h1>
      {form === "create" && (
        <div id="formTambah">
          <h2>Tambah Buku</h2>
          <hr />
          <form className="form-row" action="" onSubmit={submitAdd}>
            <div className="col-3">
              <input type="text" name="judul" className="form-control my-2" placeholder="Judul" onChange={handleJudul} />
            </div>
            <div className="col-3">
              <input type="text" name="pengarang" className="form-control my-2" placeholder="pengarang" onChange={handlePengarang} />
            </div>
            <div className="col-2">
              <input type="text" name="Harga" className="form-control my-2" placeholder="Harga" onChange={handleHarga} />
            </div>
            <div className="col-2">
              <input type="text" name="stok" className="form-control my-2" placeholder="stok" onChange={handleStok} />
            </div>
            <div className="col-2">
              <input type="submit" value="Simpan" name="simpan" className="btn btn-primary btn-md" />
            </div>
          </form>
        </div>
      )}
      {form === "edit" && (
        <div id="formUbah">
          <h2>Ubah Buku</h2>
          <form className="form-row" action="" onSubmit={submitChange}>
            <div className="col-3">
              <input type="text" name="judul" className="form-control my-2" placeholder="Judul" value={inputBook.judul} onChange={handleJudul} />
            </div>
            <div className="col-3">
              <input type="text" name="pengarang" className="form-control my-2" value={inputBook.pengarang} placeholder="pengarang" onChange={handlePengarang} />
            </div>
            <div className="col-2">
              <input type="text" name="Harga" className="form-control my-2" value={inputBook.harga} placeholder="Harga" onChange={handleHarga} />
            </div>
            <div className="col-2">
              <input type="text" name="stok" className="form-control my-2" value={inputBook.stok} placeholder="stok" onChange={handleStok} />
            </div>
            <div className="col-2">
              <input type="submit" value="Edit" name="simpan" className="btn btn-primary btn-md" />
            </div>
          </form>
        </div>
      )}
      <div id="daftarBuku">
        <h2 className="mt-3">Daftar Buku</h2>
        <hr />
        <button className="btn btn-primary m-2" onClick={showCreate}>
          Tambah Buku
        </button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>No.</th>
              <th>Judul</th>
              <th>Pengarang</th>
              <th>Harga</th>
              <th>Stok</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {bookList.map((book, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{book.judul}</td>
                <td>{book.pengarang}</td>
                <td>{book.harga}</td>
                <td>{book.stok}</td>
                <td>
                  <button className="btn btn-warning m-2" onClick={() => showEdit(book)}>
                    Edit
                  </button>
                  <button className="btn btn-danger" onClick={() => deleteBook(book)}>Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManajemenBuku;
