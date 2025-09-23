import { react } from '@vitejs/plugin-react';
import {type ResType} from "./shared"
import { http } from '@/utils'


export type DetailDataType={
    art_id:number, //文章id
    art_title:string, //文章标题
    art_content:string, //文章内容
    art_author:string, //文章作者
    art_date:string, //文章日期
    art_type:string, //文章类型
    art_tag:string, //文章标签
    art_img:string, //文章图片
    art_like:number, //文章点赞数
    art_comment:number, //文章评论数
    art_read:number, //文章阅读数
}

export function fetchDatailAPI(id:number | string){
    return http.request<ResType<DetailDataType>>({
        url: `/api/detail/${id}`,
        // method: 'GET'
    })
}