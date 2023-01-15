import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

const BookList = () => {
  let [title, setTitle] = useState();
  let [excerpt, setExcerpt] = useState();
  let [userId, setUsetId] = useState();
  let [ISBN, setISBN] = useState();
  let [category, setCategory] = useState();
  let [subcategory, setSubcategory] = useState();
  let [releasedAt, setReleasedAt] = useState();
  let [bookdetails, setbookDetails] = useState([]);

  // let aa=bookdetails.map((title)=>{title})

  let [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("Token"));
  }, []);

  console.log(token);

  const bookdetailsSubmit = (event) => {
    let body = {};
    if (title) {
      body.title = title;
    }
    if (excerpt) {
      body.excerpt = excerpt;
    }

    const api = `http://localhost:3001/books`;
    axios({
      method: "get",
      url: api,
      headers: { "x-api-key": token },
      params: body,
    })
      // .then(response => { bookdetails=response.data
      // })
      .then((response) => setbookDetails(response.data.data))
      .then((response) => alert("Books list"))
      .catch((err) => alert(err.response.data.message));
    // .catch((err) => {console.log(err.response.data.message)});
    //alert("Registeration Successful");

    console.log(body);
    //{bookdetails.map((title)=>(<p>Hello</p>))}
  };

  const renderList = bookdetails.map((title, index) => (
    <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Firstname</th>
      </tr>
    </thead>
    <tbody>
      <tr class="active">
        <td>1</td>
        <td>{title.name}</td>
      </tr>

    </tbody>
  </table>
  ));

  return (
    <div>
      <h1>Get books </h1>
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
      <form re>
        <button
          type="submit"
          onClick={() => {
            bookdetailsSubmit();
          }}
        >
          {" "}
          Get BookList
        </button>
        <p>{renderList}</p>
      </form>
    </div>
  );
};

export default BookList;
