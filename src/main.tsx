import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//导入provider组件
import { RouterProvider } from 'react-router-dom'
import router from '@/router/index'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}>
  </RouterProvider>

)
