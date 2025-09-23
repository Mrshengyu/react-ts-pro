import React from 'react'
import { Tabs } from 'antd-mobile'
import "./style.css"
import {useTabs} from './useTabs'
export default function Home() {
  const { tagList } = useTabs();

  


  return (
    <div>
      <div className="tabContainer">
        {/* tab 区域*/}
        <Tabs>
          {
            tagList.map(item => {
              return <Tabs.Tab title={item.name} key={item.id}>{item.name}</Tabs.Tab>
            })
          }

          {/* <Tabs.Tab title="蔬菜" key="vegetables">西红柿</Tabs.Tab>
            <Tabs.Tab title="动物" key="animals">蚂蚁</Tabs.Tab> */}
        </Tabs>
      </div>
    </div>
  )
}



