import React, { useState } from 'react';
import ToDoItemList from './ToDoItemList'
import Header from './Header';

const ToDoList = () => {
    const [item, setItem] = useState('')
    const [itemList, setItemList] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [curretIndex, setCurretIndex] = useState(null)

    const inputHandler = (event) => {
        event.preventDefault();
        setItem(event.target.value)
    }

    const addHandler = (event) => {
        event.preventDefault()
        if (item === '') {
            alert("Please enter an item.")
            return false
        }
        if (isEdit === true) {
            itemList[curretIndex] = {value: item}
            setItemList([...itemList])
            setItem('')
            setIsEdit(false)
            setCurretIndex(null)
            return false
        }
        setItemList([...itemList, {value: item}])
        setItem('')

    }

    const editHandler = (event, indexId) => {
        event.preventDefault()
        setIsEdit(true)
        setItem(itemList[indexId].value)
        setCurretIndex(indexId)
    }
    const deleteHandler = (event, indexId) => {
        
        const remainingItemList = itemList.filter((_, i) => i !== indexId)
        setItemList([...remainingItemList])
    }
    console.log("itemList", itemList)
    return (
        <div>
           
            <div className="todo-container">
                <div className="todo-add-section">
                    <div className="todo-add-input">
                        <input type="text" value={item} onChange={(event) => { inputHandler(event)} }/>
                    </div>
                    <div className="todo-add-btn">
                        <button type="button" onClick={(event) => { addHandler(event) }}>{isEdit ? 'Update' : 'Add'}</button>
                    </div>
                </div>
            </div>
            <div className="todo-list">
                <div><b>S. No.</b></div>
                <div><b>Item</b></div>
                <div><b>Action</b></div>
            </div>

          <ToDoItemList itemList={itemList} editHandler={editHandler} deleteHandler={deleteHandler} />
        </div>
    )


}
export default ToDoList