import axios from "axios";
import { useEffect, useState } from "react";

function Page() {

  const [list, setList] = useState([]);
  const [perPage,setPage]=useState(10)
  const numOfpage=Math.ceil(list.length/perPage)
  const pages=[...Array(numOfpage+1).keys()].slice(1)
  const [curentpage, setCurrentpage] = useState(1);
  const lastidx=curentpage*perPage
  const firstidx=lastidx-perPage
  var visibletodo=list.slice(firstidx,lastidx)

  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    var res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setList(res.data);
  };

  return (
    <div>
      {visibletodo.map((cur) => {
        return <p key={cur.id}>{cur.title}</p>;
      })}
      <p>prev</p>
      <div style={{display:'flex'}}>
      {
        pages.map((pag)=>{
            return(
                <p style={{display:'flex'}} key={pag} onClick={()=>setCurrentpage(pag)} style={{background:pag===curentpage?'red':null}}>{pag}  |</p>
            )
        })
      }
      </div>
      <p></p>
      <p>next</p>
    </div>
  );
}

export default Page;
