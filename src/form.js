import { useState } from "react";

const Fill = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setgender] = useState("");
  const [country, setcountry] = useState("");
  const [emailID, setemailID]=useState("");

  const handleSubmit = (event) => {
    alert("successfull")
    console.log("handleSubmit ran");
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ access input values here
    console.log("firstName 👉️", firstName);
    console.log("lastName 👉️", lastName);
    console.log("gender 👉️", gender);
    console.log("country 👉️", country);
    console.log("emailID",emailID)

    // 👇️ clear all input values in the form
    setFirstName("");
    setLastName("");
    setgender("")
    setcountry("")
    setemailID("")

    return (
        <div>
            <p>first_name:{firstName}</p>
        </div>
    )
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          first_name{" => "}
          <input
            id="first_name"
            name="first_name"
            type="text"
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
          />
        </p>
        <p>last_name{" => "}
          <input
            id="last_name"
            name="last_name"
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </p>
        <p>gender {" => "}
          <input
            id="gender"
            name="gender"
            type="text"
            value={gender}
            onChange={(event) => setgender(event.target.value)}
          />
        </p>
        <p>country {" => "}
          <input
            id="country"
            name="country"
            type="text"
            value={country}
            onChange={(event) => setcountry(event.target.value)}
          />
        </p>
        <p>emailID {" => "}
          <input
            id="emailID"
            name="emailID"
            type="text"
            value={emailID}
            onChange={(event) => setemailID(event.target.value)}
          />
        </p>
        <p>
            {firstName}
        </p>

        <button type="submit">Submit form</button>
      </form>
    </div>
  );
};

export default Fill;
