import React, { useEffect, useState } from 'react'
import Header from './header'
import Section from './section'
import Footer from './footer'

interface Todo {
    id: number | string
    text: string
    completed: boolean
}

export default function Todo() {

    const list = [
        { id: Date.now().toString(18)+1, text: '111', completed: false },
        { id: Date.now().toString(36)+2, text: '222', completed: true },
        { id: Date.now().toString(18)+3, text: '研发工程师121', completed: false },
    ]
    const [todo, setTodo] = useState<Todo[]>(list)


    // const [filter, setFilter] = useState('all')
    // const [editId, setEditId] = useState(null)

    const handleChange=(id: number)=>{
        todo.forEach(item=>{
            if(item.id === id){
                item.completed = !item.completed
            }
        })
        setTodo([...todo])
    }

    const handleDelete=(id: number)=> {
        setTodo(prev => prev.filter(item => item.id !== id))
    }

    const handleAdd=(text:string)=> {
        setTodo(prev => [...prev, { id: Date.now().toString(18), text, completed: false }])
    }

    const handleEdit=(id: number, text: string)=> {
        setTodo(prev => prev.map(item =>
            item.id === id ? { ...item, text } : item
        ))
    }   

    const changeAllCompleted=(completed:boolean)=> {
        setTodo(prev => prev.map(item => 
            ({ ...item, completed })
        ))  
    }


    return (

        <div>
            <Header handleAdd={handleAdd}  />
            <Section todo={todo} handleChange={handleChange} handleDelete={handleDelete} handleEdit={handleEdit} changeAllCompleted={changeAllCompleted}/>
            <Footer todo={todo}/>
        </div>



    )
}
