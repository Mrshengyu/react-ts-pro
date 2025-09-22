import { useState,useRef ,useEffect } from 'react'

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


type Props ={
    className: string,
    title?: string,
    children?: React.ReactNode // 代表任意的react节点
  }

  // 子组件
function Button(props: Props) {
  const { className, title } = props
  return <button className={className}>{title}</button>  // 类型推断
} 



// 子组件
type SonProps = {
  onGetMsg?: (msg: string) => void
}
function Son(props: SonProps){

  const domRef = useRef<HTMLButtonElement>(null)
  // 当初始项目是定时器时候
  const timerId = useRef<number | undefined>(undefined)
  useEffect(() => {
    domRef.current?.click()
    timerId.current = window.setInterval(() => {
      console.log('son timer')
    }, 1000)

    return () => {
      timerId.current && clearInterval(timerId.current)
    }
  }, [])  

  
  const {onGetMsg} = props;
  const clickHandel = () => {
    onGetMsg && onGetMsg('son say hello')
  }
  return <button onClick={() => {clickHandel}} ref={domRef} >son</button>
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

//  const [user, setUser] = useState<User | null>(null)


  const handleClick = () => {
    setCount(count + 1)
  }



  return (
    <>
      this is react app{count}
      this is user name: {user.name} age: {user.age}
      {/* 为了类型安全，可以用user?.name代替user.name。可选链守卫 */}
      this is user name: {user?.name} age: {user?.age}

      <br/>
      <Button className="btn" title="click me" />

      <br />
      <Son onGetMsg={(msg) => {console.log(msg)}}></Son>
    </>
  )
}

export default App
