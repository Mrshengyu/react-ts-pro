import React from 'react'
interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
  }

  interface FooterProps {
    todo: TodoItem[];
  }
export default function footer(props: { todo: any }) {
  const {todo} = props
  

  let unCompleted: number = todo.filter((item: TodoItem) => !item.completed).length;
  let completed: number = todo.filter((item: TodoItem) => item.completed).length;
  return (  
    <footer className="footer" style={{display:todo.length > 0 ? 'block' : 'none'}}>
        <a href="#" className="clear-completed">未完成{unCompleted} completed items</a>
        <div className="todo-count">已完成{completed} items left</div>
    </footer>
  )
}
