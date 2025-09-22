import { useState } from 'react'

// react + ts
//根据初始值自动推断
// 场景 明确初始值


//泛型参数

// 1 限制useState参数初始值类型  User ｜ （）=》User
// 2 限制setUser参数类型  User ｜ （）=》User | undefined
// user状态数据具备User类型相关的提示
type User = {
  name: string,
  age: number
}

function App() {
  const [count, setCount] = useState(0)

  // 类型推断
  // const [user, setUser] = useState<User>({
  //   name: 'zhangsan',
  //   age: 20
  // })

  const [user, setUser] = useState<User>(()=>{
    return {
      name: 'zhangsan',
      age: 20
    }
  })


  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      this is react app{count}
      this is user name: {user.name} age: {user.age}
    </>
  )
}

export default App
