import React, { useState } from "react";

export default function Userinput() {
  const [name, setname] = useState("");
  const [user, setuser] = useState("");
  // const [style, setstyle] = useState("");
  const [edited, setedit] = useState(false);
  const [id, setid] = useState(0);
  const [datas, setdatas] = useState([
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
    },
  ]);

  const submit = () => {
    if (name && user) {
      const newpost = { id: datas.length + 1, name: name, username: user };

      setdatas((datas) => [...datas, newpost]);

      setname(" ");
      setuser(" ");
    } else {
      alert("please enter the datas ");
    }
  };
  const deleted = (e) => {
    const d = datas.filter((del) => del.id !== e);
    setdatas(d);
  };
  function edit(e) {
    const a = datas.filter((edit) => edit.id === e);
    setname(a[0].name);
    setuser(a[0].username);
    setedit(true);
    setid(e);
  }
  const update = () => {
    const c = document.querySelector("#input").value;
    const c1 = document.querySelector("#input1").value;
    setedit(false);
    const new1 = { id: id, name: c, user: c1 };

    const k = datas.map((t) =>
      t.id === new1.id
        ? (t = { id: new1.id, name: new1.name, username: new1.user })
        : { id: t.id, name: t.name, username: t.username }
    );

    setdatas(k);
    setname(" ");
    setuser(" ");
    setid(0);
  };
  return (
    <>
      <label>
        <input
          type="text"
          placeholder="search"
          id="input"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="search"
          id="input1"
          value={user}
          onChange={(e) => {
            setuser(e.target.value);
          }}
        />
      </label>

      <button onClick={submit}>add</button>
      <button
        className={edited === false ? "unclick" : "click"}
        onClick={update}
      >
        update
      </button>
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>username</td>
          </tr>
        </thead>
        <tbody>
          {datas.map((d) => (
            <tr key={d.id}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.username}</td>
              <button
                onClick={() => {
                  deleted(d.id);
                }}
              >
                delete
              </button>
              <button
                onClick={() => {
                  edit(d.id);
                }}
              >
                edit
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
