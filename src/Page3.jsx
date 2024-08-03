import axios from "axios";
import  { useEffect, useState } from "react";

function Page3() {
  //https://jsonplaceholder.typicode.com/todos
  const [list, setList] = useState([]);
  const perPage=10
  const numOfPages=Math.ceil(list.length/perPage)
  const pages=[...Array(numOfPages+1).keys()].slice(1)
  const [currentpage,setucurentpage]=useState(1)
  const lastidx=perPage*currentpage
  const firidx=lastidx-perPage
  const visible=list.slice(firidx,lastidx)

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    var res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setList(res.data);
  };
  const nextHandle=()=>{
    if(currentpage !==1) setucurentpage(currentpage+1)

  }
  const prevHandle=()=>{
    if(currentpage !==numOfPages) setucurentpage(currentpage-1)
    
  }
  return (
    <div>
      <div>
        {visible.map((cur) => (
          <p key={cur.id}>{cur.title}</p>
        ))}
      </div>
      <div>
        <p onClick={prevHandle}>prev</p>
        <div style={{ display: "flex" }}>
          {
            pages.map((pag)=><p style={{background:pag===currentpage?'red':null}} key={pag} onClick={()=>setucurentpage(pag)}>{pag}  |</p>)
          }
        </div>
        <p onClick={nextHandle}>next</p>
      </div>
    </div>
  );
}

export default Page3;
