import { useState } from "react";

const data = [
  { id: 1, name: "sha", comple: false },
  { id: 2, name: "sha", comple: true },
  { id: 3, name: "sha", comple: false },
];
var nextid = 4;

function Todo() {
  const [list, setList] = useState(data);
  const [task, settask] = useState("");
  const addTask = (va) => {
    setList([...list, { id: nextid++, name: va, comple: false }]);
    settask("");
  };
  const handleDelete = (ide) => {
    setList(list.filter((cur) => cur.id !== ide));
  };

  const handleedit = (obj) => {
    setList(
      list.map((cur) => {
        if (cur.id == obj.id) {
          return obj;
        } else {
          return cur;
        }
      })
    );
  };
  return (
    <div>
      <input onChange={(e) => settask(e.target.value)} value={task} />
      <button onClick={() => addTask(task)}>create</button>
      {list.map((cur) => {
        return (
          <div key={cur.id} style={{ display: "flex" }}>
            <Func
              cur={cur}
              handleDelete={handleDelete}
              handleedit={handleedit}
            />
          </div>
        );
      })}
    </div>
  );
}

const Func = (prop) => {
  const [show, setShow] = useState(true);
  const [val,setval]=useState("")
  const { cur, handleDelete, handleedit } = prop;

  const handlfunc=()=>{
    setShow(true)
    handleedit({...cur,name:val})
  }
  return (
    <div>
      {show ? (
        <div>
          <input type="checkbox" checked={cur.comple} />
          <h4>{cur.name}</h4>
          <button onClick={()=>setShow(false)}>edit</button>
          <button onClick={() => handleDelete(cur.id)}>delete</button>
        </div>
      ) : (
        <div>
          <input type="checkbox" checked={cur.comple} />
         
          <input value={val} onChange={(e)=>setval(e.target.value)}/>
          <button onClick={handlfunc}>save</button>
          
        </div>
      )}
    </div>
  );
};

export default Todo;
