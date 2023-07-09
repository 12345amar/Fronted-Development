import React from 'react'

function ToDoItemList({itemList, editHandler, deleteHandler}) {

  
  return (
     itemList && itemList.length > 0 && itemList.map((x, i) => {
        return  <><div className="todo-list" key={i}>
          <div>{i + 1}</div>
          <div>{x.value}</div>
          <div>
            <button type="button" onClick={(event) => { editHandler(event, i) } }>Edit</button>
            <button type="button" onClick={(event) => { deleteHandler(event, i) } }>Delete</button>
          </div>
        </div></>
    })

    
  )
}

export default ToDoItemList