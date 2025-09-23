import { ChangeEvent } from './../../node_modules/rollup/dist/rollup.d';
import { http } from "@/utils"
import type { ResType } from "@/apis/shared"



// 定义具体接口
export type ChannelItem = {
    id: number,
    name: string
}

type ChannelsRes = {
    channels: ChannelItem[]
}


// 定义请求函数
function fetchChannelAPI(){
    return http.request<ResType<ChannelsRes>>({
        url: '/channels',
    })
}

// 请求文章列表
type ListItem ={
    art_id: number,
    title: string,
    aut_id:string,
    comm_count:number,
    pubdate:string,
    aut_name:string,
    is_top:number,
    cover:{
        type:number,
        images:string[]
    }
}

type ListRes = {
    list: ListItem[],
    pre_timestamp:number
}
type reqParams={
    channel_id:number,
    timestamp?:number | string
}
function fetchListAPI(params:reqParams) {
    return http.request<ResType<ListRes>>({
        url: '/channels',
        data: params
    })
}
    

export {
    fetchChannelAPI,
    fetchListAPI
}


