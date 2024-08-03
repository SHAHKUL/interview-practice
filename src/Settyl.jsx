import { useEffect, useState } from "react";
import axios from "axios";

function Settyl() {
  // https://jsonplaceholder.typicode.com/users
  const [list, setList] = useState([]);
  const [filter, setfilter] = useState("");
  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    // var res = await axios("https://jsonplaceholder.typicode.com/users");

    // setList(res.data);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((dat) => dat.json())
      .then((dat) => console.log(dat))
      .catch((err) => console.log(err));
  };
  console.log(filter);
  return (
    <div>
      <select onChange={(e) => setfilter(e.target.value)}>
        {list.map((cur) => {
          return (
            <option key={cur.id} value={cur.name}>
              {cur.name}
            </option>
          );
        })}
      </select>

      {list.map((cur) => {
        if (cur.name.indexOf(filter) === -1) {
          return;
        }
        return (
          <div key={cur.id}>
            <p>{cur.name}</p>
            <p>{cur.email}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Settyl;
