import { Image, List } from 'antd-mobile';
// mock数据
import { users } from './user'
import React, { useState, useEffect } from 'react';
// import { ListRes } from '@/apis/list'

type Props={
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
                const res = await ListRes({
                    channel_id: '0',
                    timestamp: "" + new Date().getTime()
                })

                setListRes({
                    results: res.data.dta.results,
                    pre_timetamp: res.data.data.pre_timestamp
                })

            } catch (err) { }
            throw new Error('获取列表数据失败')
        }
        // getList()
        setListRes(users)
    }, [channelId])
    return (
        <>
            <List>
                {users.map((item) => (
                    <List.Item key={item.id}
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
        </>
    )
}

export default HomeList;