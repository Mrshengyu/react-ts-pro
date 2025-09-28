import React, { useEffect, useState, useRef } from 'react'

function Li(props: any) {
    const { item, handleChange, handleDelete,handleEdit } = props
    const [edit, setEdit] = useState(false)
    const elEdit = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (edit) {
            elEdit.current?.focus()
        }else{
            if(item.text.trim() === ''){
                setEdit(true)
            }
        }
    }, [edit])

    return (
        <li className='completed'>
            <div className="view" style={{ display: edit ? 'none' : 'block' }}>
                <input className="toggle" type="checkbox" checked={item.completed}
                    onChange={() => handleChange(item.id)
                    }
                />
                <label key={item.id} className="label" onDoubleClick={() => setEdit(true)}    >{item.text}</label>
                <a className="destroy" onClick={() => handleDelete(item.id)}>删除</a>
            </div>
            <input type="text" className="edit" value={item?.text}
                style={{ display: edit ? 'block' : 'none' }}
                ref={elEdit}
                onChange={(e) => { handleEdit(item.id, e.target.value) }}
                onBlur={() => setEdit(false)
                }
            />
        </li>
    )
}


export default function section(props: any) {
    const { todo, handleChange, handleDelete,changeAllCompleted } = props
    const completed = todo.filter((item: any) => item.completed)
    return (
        <section id="section" style={{ display: todo.length > 0 ? 'block' : 'none' }}>
            <input id="toggle-all" className="toggle-all" type="checkbox" 
            checked={completed.length === todo.length}
            onChange={(e)=>changeAllCompleted(e.target.checked)}/>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {/* 这里是任务列表 */}
                {todo.map((item: any) => (
                    <Li key={item.id} item={item} {...props}
                    />
                ))}
            </ul>

        </section>
    )
}  
