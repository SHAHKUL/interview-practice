import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [perPage, setperPage] = useState(10);
  const numOftotalPage = Math.ceil(list.length / perPage);
  const pages = [...Array(numOftotalPage + 1).keys()].slice(1);
  const [curentpage, setCurrentpage] = useState(1);
  const indexoflastTodo = curentpage * perPage;
  const indxofFirstTodo = indexoflastTodo - perPage;
  const visibletodo = list.slice(indxofFirstTodo, indexoflastTodo);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    var res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setList(res.data);
  };

  const prevhandle=()=>{
    if(curentpage !==1) setCurrentpage(curentpage-1)
  }
  const nexthandle=()=>{
    if(curentpage !==numOftotalPage) setCurrentpage(curentpage+1)
  }

  return (
    <div>
      {visibletodo.map((cur, idx) => {
        return <p key={idx}>{cur.title}</p>;
      })}
      <span onClick={prevhandle}>prev</span>
      <div style={{ display: "flex" }}>
        {pages.map((pag) => {
          return (
            <p
              style={{ background: curentpage === pag ? "red" : null }}
              key={pag}
              onClick={() => setCurrentpage(pag)}
            >
              {pag} |
            </p>
          );
        })}
      </div>
      <span onClick={nexthandle}>next</span>
    </div>
  );
}

export default App;
