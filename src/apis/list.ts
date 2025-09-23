import { ChangeEvent } from './../../node_modules/rollup/dist/rollup.d';
import { http } from "@/utils"
import type { ResType } from "@/apis/shared"



// 定义具体接口
type ChannelItem = {
    id: number,
    name: string
}

type ChannelsRes = {
    channels: ChannelItem[]
}


// 定义请求函数
function fetchChannels(){
    return http.request<ResType<ChannelsRes>>({
        url: '/channels',
    })
}

export {
    fetchChannels
}