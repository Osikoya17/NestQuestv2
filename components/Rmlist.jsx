'use client'
import {  } from 'react'
import RmCard from './RmCard'
import ContactCArd from './ContactCArd'

import {LayoutDashboard, 
    ListMinus, 
    MessageSquare,
    Star, 
    Users2, 
    Headphones,
    Settings,ArrowRightCircle,
    ArrowLeftCircle,Phone,
    ChevronDown,ChevronUp,
    slidershorizontal,
    SlidersHorizontal,
    
    
  } from 'lucide-react'


  import { DownOutlined } from '@ant-design/icons';
  import { Dropdown, message, Space } from 'antd';



  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };


  const items = [
    {
      label: 'School',
      key: '1',
    },

    {
        type: 'divider',
    },

    {
        label: 'OAU',
        key: '2',
    },


    {
      label: 'OUI',
      key: '3',
    },
    {
      label: 'UNILAG',
      key: '4',
    },
  ];





  const level = [
    {
      label: 'level',
      key: '1',
    },

    {
        type: 'divider',
    },

    {
        label: '100 Level',
        key: '2',
    },

    {
      label: '200 Level',
      key: '3',
    },

    {
      label: '300 Level',
      key: '4',
    },

    {
        label: '400 Level',
        key: '5',
    },

    {
        label: 'Final Year',
        key: '6',
    },
  ];

  const area = [
    {
      label: 'Location',
      key: '1',
    },

    {
        type: 'divider',
    },

    {
        label: 'ife',
        key: '2',
    },

    {
      label: 'osogbo',
      key: '3',
    },

    {
      label: 'lagos',
      key: '4',
    },

    {
        label: 'ilesha',
        key: '5',
    },

    {
        label: 'ibadan',
        key: '6',
    },
  ];

  const Filter= [
    {
      label: 'Filter',
      key: '1',
    },

    {
        type: 'divider',
    },

    {
        label: 'School',
        key: '2',
    },

    {
      label: 'Level',
      key: '3',
    },

    {
      label: 'Location',
      key: '4',
    },
  ];












const data =[
    {img: '/tt.png'},
    {img: '/n.webp'},
    {img: '/m.webp'},
    {img: '/d.webp'},
    {img: '/v.jpg'},
    
]


const Contact1 = () => {

    <ContactCArd img='tt.png' />

}


const Contact2 =() =>{

    <ContactCArd img='n.webp' />
}


const Contact3 =() =>{
    <ContactCArd img='d.webp' />
}

const Contact4 =() =>{
    <ContactCArd img='v.jpg' />
}

export default function Myslider() {
    return (

        
        <div className='px-4 py-4'>
            <div className='flex justify-between'>
                <div className=' flex gap-3'>
                    <div>
                    <Dropdown
                        menu={{
                            items,onClick}} trigger={['click']}
                        
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <button className='flex border-[2px] w-[80px]  justify-between py-[1px]  gap-[10px] px-[5px] rounded-lg text-[13px] h-[35px] items-center font-medium hover:bg-slate-400'>Filter 1 
                                    <div>
                                    <ChevronDown width={15  } />
                                    </div>
                                </button>
                            </Space>
                        </a>
                    </Dropdown>  
                    </div>
                    <div>
                        <Dropdown 
                            menu={{items: level,onClick}} trigger={['click']} 
                            >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <button className='flex border-[2px] w-[80px] justify-between py-[1px]  gap-[10px] px-[5px] rounded-lg text-[13px] h-[35px] items-center font-medium hover:bg-slate-400'>Filter 2 
                                        <div>
                                            <ChevronDown width={15} />
                                        </div>
                                    </button>
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                    
                    
                    <button className='flex border-[2px] w-[80px] justify-between  py-[1px] gap-[10px] px-[5px] rounded-lg text-[13px] h-[35px] items-center font-medium'>Filter 3 
                        <div>
                            <ChevronDown width={15  } />
                        </div>
                    </button>
                </div>
                <div className='hidden sm:flex'>
                    <Dropdown
                    menu={{items: Filter,onClick}} trigger={['click']}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <button className='flex border-[2px] w-[80px] justify-between py-[1px]  gap-[10px] px-[5px] rounded-lg text-[13px] h-[35px] items-center font-medium hover:bg-slate-400'>Filters 
                                    <div>
                                        <SlidersHorizontal width={15} />
                                    </div>
                                </button>
                             </Space>

                        </a>

                    </Dropdown>
                  
                </div>
            </div>

          
            
        </div>
        
    )
  }