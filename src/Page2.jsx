import axios from "axios";
import { useEffect, useState } from "react";

function Page2() {
  //https://jsonplaceholder.typicode.com/todos
  const [list,setlist]=useState([])
  const perPage=10
  const numOfPage=Math.ceil(list.length/perPage)
  const pages=[...Array(numOfPage+1).keys()].slice(1)
  const [currentpage,setcurrentpage]=useState(1)
  const lastidx=currentpage*perPage
  const firidx=lastidx-perPage
  const visible=list.slice(firidx,lastidx)
  console.log(pages);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    var res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setlist(res.data)
  };

  const prevHandle=()=>
  {
if(currentpage !==1) setcurrentpage(currentpage-1)
  }

  const nextHandle=()=>
    {
      if(currentpage !==numOfPage.length) setcurrentpage(currentpage+1)
    }
  

  return <div>
    <div>
        {visible.map((cur)=>{
            return(
                <p key={cur.id}>{cur.title}</p>
            )
        })}
    </div>
    <div>
        <p onClick={prevHandle}>prev</p>
        <div style={{display:'flex'}}>
            {
                pages.map((pag)=>  <p style={{background:pag==currentpage? 'red':null}} key={pag} onClick={()=>setcurrentpage(pag)}>{pag}   |</p>
                )
            }
        </div>
        
        <p onClick={nextHandle}>next</p>
    </div>
  </div>;
}

export default Page2;
