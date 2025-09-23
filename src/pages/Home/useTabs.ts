import { useState, useEffect } from 'react'
import { ChannelItem, fetchChannelAPI } from '@/apis/list'
function useTabs() {
    const [channels, setChannels] = useState<ChannelItem[]>([]);
    interface interTag {
    id: number;
    name: string;

  }
  const tagList: interTag[] = [{ id: 0, name: '水果' },
  { id: 1, name: '蔬菜' },
  { id: 2, name: '动物' },
  { id: 3, name: '其他' }]

  useEffect(() => {
    const getChannels = async () => {
      try {
        const res = await fetchChannelAPI();
        // setChannels(res.data.channels);
      } catch (error) {
        throw new Error('fetch channel error');
      }
    }
    // getChannels();
  }, [])
    return {
        tagList
    };
}
export {useTabs};