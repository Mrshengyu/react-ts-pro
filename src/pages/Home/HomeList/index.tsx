import { Image, List, InfiniteScroll } from 'antd-mobile';
// mock数据
import { users } from './user'
import React, { useState, useEffect } from 'react';
import { fetchListAPI } from '@/apis/list';
import { useNavigate } from'react-router-dom'
// import { ListRes } from '@/apis/list'

type Props = {
    channelId: string,
}

const HomeList = (props: Props) => {
    const { channelId } = props
    // 获取列表数据
    const [listRes, setListRes] = useState({
        results: [],
        pre_timetamp: '' + new Date().getTime(),
    })

    useEffect(() => {
        const getList = async () => {
            try {
                const res = await fetchListAPI({
                    channel_id: '0',
                    timestamp: "" + new Date().getTime()
                })

                setListRes({
                    results: res.data.dta.results,
                    pre_timetamp: res.data.data.pre_timestamp
                })

            } catch (err) {
                throw new Error('获取列表数据失败')
            }
        }
        // getList()
        setListRes(users)
    }, [channelId])

    // 开关 标记当前是否有新数据
    // 触发条件 1 hasMore 2 loadMore
    // true 代表有新数据 可以继续触发 loadMore
    // false 代表没有新数据 不能继续触发 loadMore   
    const [hasMore, setHasMore] = useState(true)

    // 加载更多
    const loadMore = async () => {
        // 这里模拟接口请求
        console.log('上拉加载触发')
        try {
            const res = await fetchListAPI({
                channel_id: channelId,
                timestamp: listRes.pre_timetamp
            })
            // 合并数据
            setListRes({
                results: [...listRes.results, ...res.data.results],
                pre_timetamp: res.data.data.pre_timestamp
            })

        } catch (err) {
            throw new Error('获取列表数据失败')
        }

        // 这里模拟判断是否还有更多数据
        if (res.data.data.results.length === 0) {
            setHasMore(false)

        }

    }

const navigator = useNavigate()    
const goTODetail = (id:string|undefined) => () => {
    // 跳转到详情页
    if(id){
        navigator(`/detail?id=${id}`)
    }
}

    return (
        <>
            <List>
                {users.map((item) => (
                    <List.Item key={item.id}
                    onClick={goTODetail(item.id)}
                        prefix={
                            <Image
                                fit="cover"
                                src={item.avatar}
                                style={{ width: 50, height: 50, borderRadius: 25 }}
                            />
                        }
                        description={item.description}
                    >
                        {item.name}
                    </List.Item>
                ))}
            </List>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={100} />
        </>
    )
}

export default HomeList;