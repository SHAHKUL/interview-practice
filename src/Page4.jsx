import { useEffect, useState } from "react";

function Page4() {
  // https://jsonplaceholder.typicode.com/todos
  const [list, setList] = useState([]);
  const perPage = 10;
  const [currentpage, setucurentpage] = useState(1);
  const numOfPages = Math.ceil(list.length / perPage);

  const page = [...Array(numOfPages + 1).keys()].slice(1);

  const lastidx = perPage * currentpage;
  const firidx = lastidx - perPage;
  const visible = list.slice(firidx, lastidx);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    var res = await fetch("https://jsonplaceholder.typicode.com/todos");
    var json = await res.json();
    setList(json);
  };

  return (
    <div>
      <div>
        {visible.map((cur) => {
          return <p key={cur.id}>{cur.title}</p>;
        })}
      </div>
      <div>
        {page.map((cur) => {
          return (
            <button
              key={cur}
              onClick={() => setucurentpage(cur)}
              style={{ background: cur === currentpage ? "red" : null }}
            >
              {cur}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Page4;
