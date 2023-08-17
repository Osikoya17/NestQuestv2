'use client'
import {  } from 'react'
import RmCard from './RmCard'
import ContactCArd from './ContactCArd'
import Image from 'next/legacy/image'
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
      label: 'Apartment',
      key: '1',
    },

    {
        type: 'divider',
    },

    {
        label: 'Room type',
        key: '2',
    },


    {
      label: 'Self Con',
      key: '3',
    },
    {
      label: 'Bedroom Flats',
      key: '4',
    },
  ];





  const level = [
    {
      label: 'Budget',
      key: '1',
    },

    {
        type: 'divider',
    },

    {
        label: '40k-70k',
        key: '2',
    },

    {
      label: '70k-120',
      key: '3',
    },

    {
      label: '120k above',
      key: '4',
    },


  ];

  const area = [
    {
      label: 'Religion',
      key: '1',
    },

    {
        type: 'divider',
    },

    {
        label: 'Chritain',
        key: '2',
    },

    {
      label: 'Muslim',
      key: '3',
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
        label: 'Apartment',
        key: '2',
    },

    {
      label: 'Budget',
      key: '3',
    },

    {
      label: 'Location',
      key: '4',
    },
  ];




























// Roomates list data

const data =[

    {   img: '/lady.svg',
        Sname:'precious'
    },
    
    {   img: '/lady.svg',
        Sname:'precious'
    },
    
    {   img: '/lady.svg',
        Sname:'precious'
    },
    
    {   img: '/lady.svg',
        Sname:'precious'
    },
    
    {   img: '/lady.svg',
        Sname:'precious'
    },
    
    {   img: '/lady.svg',
        Sname:'precious'
    },
    
    {   img: '/lady.svg',
        Sname:'precious'
    },
    

]

















// contact card info (might not need this if better solution is found)


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












export default function Rmlist({searchParams,}) {


  





    return (

     
        <div className='px-4 py-4'>
            <div className='hidden sm:flex justify-between'>
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
                                    <ChevronDown width={15} />
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
                                    <button className='flex border-[2px] w-[90px]  justify-between py-[1px]  gap-[10px] px-[5px] rounded-lg text-[13px] h-[35px] items-center font-medium hover:bg-slate-400'   >Filter 2 
                                        <div>
                                            <ChevronDown width={15} />
                                        </div>
                                    </button>
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                    
                    
                    <button className='flex border-[2px] w-[90px] justify-between  py-[1px] gap-[10px] px-[5px] rounded-lg text-[13px] h-[35px] items-center font-medium'>Filter 3 
                        <div>
                            <ChevronDown width={15} />
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


{/* Roomates lists */}





            <div className=''>
                {data.map((el, index)=>
                    <RmCard key={index} img={el.img}/>
                )}
            </div>
            
        
            
        </div>
        
    )
  }