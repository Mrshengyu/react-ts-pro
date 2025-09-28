import React, { useState } from 'react'

interface Todo {
    id: number | string
    text: string
    completed: boolean
}
export default function header(props: any) {
    const [todo, setTodo] = useState("")
    let { handleAdd,changeAllCompleted } = props
    return (

        <header>
            <h1>todos</h1>
            <input className="new-todo"
                placeholder="请输入输入值"
                autoFocus
                value={todo}
                onChange={(e) => { setTodo(e.target.value) }}
                onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        if (!todo.trim()) {
                            alert('请输入内容'); return
                        } else {
                            handleAdd(todo);
                            setTodo("")
                        }
                    }
                }}
            />

        </header>

    )
}
