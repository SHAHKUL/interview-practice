import { useState } from "react";

const data = [
  { id: 1, name: "sha", comple: false },
  { id: 2, name: "sha", comple: true },
  { id: 3, name: "sha", comple: false },
];
var nextid = 4;

function Todo2() {
  const [list, setList] = useState(data);
  const [val, setVal] = useState("");

  const handleAdd = (va) => {
    setList([...list, { id: nextid++, name: va }]);
    setVal("");
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
      <input type="text" onChange={(e) => setVal(e.target.value)} value={val} />
      <button onClick={() => handleAdd(val)}>create</button>
      {list.map((cur) => {
        return (
          <div key={cur.id}>
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
  const [val, setVal] = useState("");
  const { cur, handleDelete, handleedit } = prop;

  const handleSave = () => {
    handleedit({ ...cur, name: val });
    setShow(true);
  };
  return show ? (
    <div style={{ display: "flex" }}>
      <h4>{cur.name}</h4>
      <button onClick={() => setShow(false)}>Edit</button>
      <button onClick={() => handleDelete(cur.id)}>Delete</button>
    </div>
  ) : (
    <div style={{ display: "flex" }}>
      <input value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={() => handleDelete(cur.id)}>Delete</button>
    </div>
  );
};

export default Todo2;
