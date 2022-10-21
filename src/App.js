import { useState } from 'react';
import './App.css'
function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  let date = new Date()
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let fullDate = `|   ${day}.${month}.${year}  |`;

  return (
    <div>
      <div className='actionn'>
        <h1>DONE</h1>
        {toDos.map((obj) => {
          if (obj.status) {
            return (<h1>{obj.text}</h1>)
          }
          return null
        })}
      </div>
      <div className="app">
        

        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's <span style={{ color: "green" }}>{fullDate}</span>🌝 ☕ </h2>
        </div>
        <div className="input">
          <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />

          {toDo ? <i onClick={() => {
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
            setToDo('')
          }}
            className="fas fa-plus"></i> : ''}

        </div>
        <div className="todos">
          {toDos.map((obj) => {
            if (!obj.status && !obj.cancd) {
              return (
                <div className="todo">
                  <div className="left">
                    <input onChange={(event) => {
                      console.log(event.target.checked);
                      console.log(obj);
                      setToDos(toDos.filter(obj2 => {
                        if (obj2.id === obj.id) {
                          obj2.status = event.target.checked
                        }
                        return obj2
                      }))
                    }} value={obj.status} type="checkbox" name="" id="" />
                    <p>{obj.text}</p>
                  </div>
                  <div className="right">
                    <i
                      onClick={(event) => {

                        setToDos(toDos.filter(obj2 => {
                          if (obj2.id === obj.id) {
                            obj2.cancd = true
                          }
                          return obj2
                        }))
                      }}
                      className="fas fa-times"></i>
                  </div>
                </div>)

            }
            return null
          })}
        </div>

      </div>
      <div className='action'>
        <h1>DELETED</h1>
        {toDos.map((obj) => {
          if (obj.cancd) {
            return (  <h1>{obj.text}</h1>)
          }
          return null
        })}
      </div>
    </div>

  );
}

export default App;
