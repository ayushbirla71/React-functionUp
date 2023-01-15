import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const BookCreate = () => {
   let [token, setToken] = useState("");

   useEffect(
  ()=>{ setToken(localStorage.getItem("Token"))},[])

  console.log(token)
  


  let [title, setTitle] = useState("");
  let [excerpt, setExcerpt] = useState("");
  let [userId, setUsetId] = useState("");
  let [ISBN, setISBN] = useState("");
  let [category, setCategory] = useState("");
  let [subcategory, setSubcategory] = useState("");
  let [releasedAt, setReleasedAt] = useState("");

  const bookdetailsSubmit = (event) => {
    let body = {
      title,
      excerpt,
      userId,
      ISBN,
      category,
      subcategory,
      releasedAt,
    };
    const api = `http://localhost:3001/books`;
    axios({method:'post',
  url:api,headers:{'x-api-key':token},data:body})
      .then((res)=>{ alert(res.data.message)})
      .catch((err)=> alert(err.response.data.message))

  };

  return (
    <div>
      <h1>Create Book</h1>
      <form>
        <label>
          title
          <input
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          excerpt
          <input
            required
            onChange={(e) => {
              setExcerpt(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          userId
          <input
            required
            onChange={(e) => {
              setUsetId(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          ISBN
          <input
            required
            type="number"
            onChange={(e) => {
              setISBN(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          category
          <input
            required
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          subcategory
          <input
            required
            onChange={(e) => {
              setSubcategory(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          releasedAt
          <input
            required
            onChange={(e) => {
              setReleasedAt(e.target.value);
            }}
          ></input>
        </label>
        <br />
      </form>
      <button
        type="submit"
        onClick={() => {
          bookdetailsSubmit();
        }}
      >
        {" "}
        submit
      </button>
    </div>
  );
};

export default BookCreate;
