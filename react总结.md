## React总结
### 1. React是什么
React是一个用于构建用户界面的JavaScript库，由Facebook开发和维护。
### 2. React类组件中有哪些方法?
      - constructor
      - render
      - componentDidMount //组件挂在完毕
      - componentDidUpdate //组件更新完毕
      - componentWillUnmount // 组件卸载完毕
      - shouldComponentUpdate // 组件是否需要更新
      - componentDidCatch。 /// 组件渲染出错
      - getDerivedStateFromProps // 组件获取props后更新state
      - static getDerivedStateFromError // 组件渲染出错后更新
      - forceUpdate // 强制更新组件
### 3. React类组件中有哪些属性?
      - props
      - state     修改属性方法 this.setState();
      - context
      - refs
      - this.props
      - this.state
      - this.context
      - this.refs
     - 注意：React类组件中的this指向的是实例对象，而React函数组件中的this指向的是window对象。
      
### 2. React函数组件中有哪些方法?
      - 函数声明
      - 函数表达式
### 3. 为什么要使用React?
### 4. 安装React
### 5. 虚拟DOM
### 6. JSX语法
### 7. 生命周期
### 8. 事件处理
### 9. 状态管理
### 10. 路由管理
### 11. 异步请求


### 常用的Hook
- useState
  - useState可以让我们在函数组件中维护状态，useState会返回一个数组，数组的第一个元素是当前状态，第二个元素是更新状态的函数。
  const [count, setCount] = useState(0);
  setCount(count + 1);
  如果是对象的话，需要自己合并； 
  setCount({...count, num: count.num + 1 });

- useEffect
  - useEffect可以让我们在函数组件中执行副作用操作，useEffect的第一个参数是一个函数，第二个参数是一个数组，数组中包含了useEffect需要监听的变量，如果数组为空，则useEffect只会在组件挂载和卸载时执行一次。
  useEffect(() => {
    console.log('useEffect');
  }, []);

  useEffect(() => {
    // 组件挂载和卸载时执行
    window.addEventListener('resize', handleResize);
    return () => {
        console.log('组件卸载');
        window.removeEventListener('resize', handleResize);
        };
    }, []);

- useRef
  - useRef可以让我们在函数组件中保存一个可变的变量， useRef返回一个对象，对象中包含了current属性，current属性保存了这个变量的最新值。
  const inputRef = useRef(null);    // 创建一个ref对象

  inputRef.current.value = 'hello';  // 直接操作input的值
  console.log(inputRef.current.value); // 打印input的值 可以保存上一个值；

- useContext    