import React from 'react'
import { useState, useEffect } from 'react'
import { DetailDataType, fetchDatailAPI } from '@/apis/detali'
import { useSearchParams,useNavigate } from 'react-router-dom'
import { NavBar } from 'antd-mobile'



export default function Detail() {
  const [detail, setDetail] = useState<DetailDataType | null>(null)

  // 获取文章详情
  const [params] = useSearchParams()
  const id = params.get('id') || '';
  useEffect(() => {
    const getDetail = async () => {
      try {
        fetchDatailAPI(id)
      } catch (err) {
        throw new Error('获取文章详情失败')
      }
    }
    getDetail()
  }, [id])

  const navigate=useNavigate();
  const back=()=>{
    // window.history.back()
    navigate(-1)
  }

  if (!detail) {
    return <div>loading...</div>
  }
  return (
    <div>
      <NavBar onBack={() => window.history.back()}>{detail?.art_title}</NavBar>
      <div dangerouslySetInnerHTML={{ __html: detail?.art_content || '' }}></div>
    </div>
  )
}
