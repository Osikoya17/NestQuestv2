'use client'

import React from "react";
import { Sidebar } from "@/components/Sidebar";
import {Lato, Raleway} from 'next/font/google'
import Image from "next/legacy/image"
import Link from 'next/link'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef , useState } from 'react'
import { Divider, Dropdown } from 'antd';
import { Button,Checkbox, } from 'antd';
import { ChevronDown, ChevronRight } from "lucide-react";

import axios from "axios";
import { InboxOutlined } from "@mui/icons-material";
import { message, Upload } from 'antd';
import { Input } from 'antd';

import { Radio } from 'antd';
import { Select,Space } from "antd";


const { TextArea } = Input;

const lato = Lato({subsets:['latin'],weight:["400","700"]})
export default function Page() {
    const like = useRef();
    const ChangeColor = () => {
        if (like.current.style.color = "#909090"){
          like.current.style.color = "red"
        }else if(like.current.style.color = "red"){
          like.current.style.color = "gray"
        }
      };
        // for select buttons
        const handleChange = (value) => {
          console.log(`selected ${value}`)};
  

// for upload 1


const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

// radio buttons constants

const [value,setvalue] = useState(null);

const onChange = (e)=>{
  console.log('radio checked',e.target.value);
  setvalue(e.target.value)    
}


// for backend data

const url="https://nest-quest.onrender.com/api/docs/#/listings/listings_new_create"

const [data,setdata]=useState({
      rating:'0',
      name:'',
      description:'',
      rent:0,
      address:'',
      type: value,
      sum_ratings: 0,
      total_ratings:0,
})


function handle(e){
    
    const newdata={...data}
    newdata[e.target.id]= e.target.value
    setdata(newdata)
    console.log(newdata)
    
}

function Submit(e) {
  e.preventDefault();
  axios.post(url,{
    name: data.name,
    rating: data.rating,
    description:data.description,
    address:data.address,
    type:value,
    rent:data.rent,
    sum_ratings:data.sum_ratings,
    total_ratings:data.total_ratings
  })
  .then(res=>{
    console.log(res.data)
  })
}











// for dropdowns
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};


const items = [
  {
    label: 'links',
    key: '1',
  },

  {
      type: 'divider',
  },

  {
      label: 'Link 1',
      key: '2',
  },


  {
    label: 'Link 2',
    key: '3',
  },
  {
    label: 'Link 3',
    key: '4',
  },
];





    return (
        <main className="flex" style={lato.style}>
            <Sidebar/>
            <section className="basis-1/2">
                <div className="flex bg-[#E8EEFF] w-full rounded-lg h-[50px] items-center px-[20px]">
                  <h3 className="font-semibold">New listing</h3>
                </div>
                
                <div className="flex basis-2/3 mx-[5px] px-[10px] py-[10px] my-[50px] flex-col border-[2px] border-[#C8C8C8]">
                  <div className="flex px-[5px]">
                    <h3 className="font-semibold">The Basics</h3>
                  </div>
                  <Divider />
                  <div className="flex flex-col gap-[30px]">

                    {/* first div container in the form with property information and google api */}
                    <div className="flex py-[10px] gap-[20px] ">

                      {/* Propert Details and buttons */}
                      <div className="flex flex-col gap-[30px]">
                        
                        {/* First two Buttons */}
                        <div>
                          <Radio.Group defaultValue='a'style={{display:"flex",gap:80,}} >
                            <Radio.Button value="a" style={{borderRadius:5,width:150,paddingLeft:35}}>Single Units</Radio.Button>
                            <Radio.Button value="b" style={{borderRadius:3,width:150,paddingLeft:35}}>Mutiple Units</Radio.Button>
                          </Radio.Group>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                          <h3 className="text-[14px] font-light">Property Type</h3>
                         <Select placeholder='Select' value={value} style={{width:400,}}  onChange={handleChange}
                            options={[
                            {
                              value: 'SINGLE_ROOM',
                              label: 'SINGLE_ROOM',
                            },
                            {
                              value: 'SELF_CON',
                              label: 'SELF_CON',
                            },
                            {
                              value: 'ONE_BEDROOM_FLAT',
                              label: 'ONE_BEDROOM_FLAT',
                            },
                            {
                              value: 'TWO_BEDROOMS_FLAT',
                              label: 'TWO_BEDROOMS_FLAT',
                            },
                            {
                              value: 'THREE_BEDROOMS_FLAT',
                              label: 'THREE_BEDROOMS_FLAT',
                            },
                            {
                              value: 'FOUR_BEDROOMS_FLAT',
                              label: 'FOUR_BEDROOMS_FLAT',
                            },
                           ]}
                          />
                        </div>
                        <div>
                          <h3 className="text-[14px] font-light">Address</h3>
                          <Input placeholder="Basic usage" id="address" value={data.address} onChange={(e) =>handle(e)} />
                        </div>

                        <div className="flex gap-[20px] items-center">
                           <div>
                              <h3 className="text-[14px] font-light">Units#</h3>
                              <Select  placeholder='Select' style={{width:120,}}onChange={handleChange}
                              options={[
                              {
                                value: '1 units',
                                label: '1 units',
                              },
                              {
                                value: '2 units',
                                label: '2 units',
                              },
                              {
                                value: '3 Units',
                                label: '3 Units',
                               },
                            
                              ]}
                              />
                            </div>

                           <div>
                           <h3 className="text-[14px] font-light"># of Bedrooms</h3>
                              <Select  placeholder='Select' style={{width:120,}}onChange={handleChange}
                              options={[
                              {
                                value: '1 room',
                                label: '1 room',
                              },
                              {
                                value: '2 rooms',
                                label: '2 rooms',
                              },
                              {
                                value: '3 rooms ',
                                label: '3 rooms',
                               },
                            
                              ]}
                              />
                           </div>
                           
                           <div>
                              <h3 className="text-[14px] font-light"># of baths</h3>
                              <Select  placeholder='Select' style={{width:120,}}onChange={handleChange}
                              options={[
                              {
                                value: '1 bathroom',
                                label: '1 bathroom',
                              },
                              {
                                value: '2 bathrooms',
                                label: '2 bathrooms',
                              },
                              {
                                value: '3 bathrooms',
                                label: '3 bathrooms',
                               },
                            
                              ]}
                              />
                           </div>

                        </div>

                      </div>

                        {/* Google Api container */}
                      <div className="flex">
                        <Image src={'/map.jpg'} width={600} height={250} className=" object-cover" />

                      </div>

                    </div>


                      {/* 2nd Container with rent, deposit, saure footage */}
                    <div className="flex gap-[30px] items-center">
                      <div>
                          <h3 className=" flex items-center gap-[5px] text-[14px] font-light">Rents <p className="text-[13px] text-red-600">Numbers only</p></h3>
                          <Input placeholder="Basic usage" style={{width:300}} id="rent" value={data.rent} onChange={(e) =>handle(e)}/>
                      </div>
                      <div>
                      <h3 className="text-[14px] font-light">Deposits</h3>
                              <Select  placeholder='Select' style={{width:300,}}onChange={handleChange}
                              options={[
                              {
                                value: '50k-70k',
                                label: '50k-70k',
                              },
                              {
                                value: '70k-120k',
                                label: '70k-120k',
                              },
                              {
                                value: '120k above',
                                label: '120k above',
                               },
                            
                              ]}
                              />
                      </div>
                      <div>
                      <h3 className="text-[14px] font-light">Square Footage</h3>
                              <Select  placeholder='Select' style={{width:300,}}onChange={handleChange}
                              options={[
                              {
                                value: '50k-70k',
                                label: '50k-70k',
                              },
                              {
                                value: '70k-120k',
                                label: '70k-120k',
                              },
                              {
                                value: '120k above',
                                label: '120k above',
                               },
                            
                              ]}
                              />
                      </div>
                    </div>
                      
                      {/* 3rd Container */}
                    <div>
                      <h3 className="text-[14px] font-light py-[5px]">Description</h3>
                      <TextArea rows={4} onChange={(e) =>handle(e)} id="description" value={data.description} placeholder="Describe your property. Explain what makes it such a great place to live!" maxLength={500} />
                    </div>

                      {/* 4th container in the first major cont */}
                    <div className="flex gap-[20px] justify-between items-center">
                      <div>
                          <h3 className="text-[14px] font-light">Phone Number</h3>
                          <Input placeholder="Basic usage" style={{width:500}}/>
                      </div>
                      <div>
                            <h3 className="text-[14px] font-light">Social media accounts</h3>
                              <Select  placeholder='Select' style={{width:500,}}onChange={handleChange}
                              options={[
                              {
                                value: '1 bathroom',
                                label: '1 bathroom',
                              },
                              {
                                value: '2 bathrooms',
                                label: '2 bathrooms',
                              },
                              {
                                value: '3 bathrooms',
                                label: '3 bathrooms',
                               },
                            
                              ]}
                              />
                      </div>
                                     
                    </div>
                    <div className=" flex items-center w-[100px] h-[40px] py-[50px] px-[10px]">
                            <Button onClick={Submit} type="primary" style={{background:'#376FFF'}} block>
                              Submit
                          </Button>
                        </div>    
                  </div>



                </div>

                <div className="flex mx-[5px] px-[10px] py-[10px] gap-[10px] my-[50px] flex-col border-[2px] border-[#C8C8C8]">
                  
                  <div className="flex px-[5px]">
                    <h3 className="font-semibold">Upload Property Photos</h3>
                  </div>
                  <Divider />
                  <div className="text-[13px] text-[#787878]">
                    <p>Today renters, especially those searching online, are extremely visual. Include as many strong photos to give a sense of the space and all it has to offer.</p>
                  </div>
                  <div>
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <Button type="primary"  style={{background:'#376FFF',width:200,alignItems:'center',justifyContent:"center"}} block>
                        <p className="text-white font-medium"><InboxOutlined />  Choose Files</p>
                        
                        
                      </Button>
                      
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint"></p>
                  </Dragger>
                  </div>
                </div>

                <div className="flex mx-[5px] px-[20px] py-[10px] gap-[10px] my-[50px] flex-col border-[2px] border-[#C8C8C8]">
                  
                  <div className="flex px-[5px]">
                    <h3 className="font-semibold">Upload Property Video</h3>
                  </div>
                  <Divider />
                  <div className="text-[13px] text-[#787878]">
                    <p>Today renters, especially those searching online, are extremely visual. Include as many strong photos to give a sense of the space and all it has to offer.</p>
                  </div>
                  <div>
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <Button type="primary"  style={{background:'#376FFF',width:200,alignItems:'center',justifyContent:"center"}} block>
                        <p className="text-white font-medium"><InboxOutlined />  Choose Files</p>
                        
                        
                      </Button>
                      
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint"></p>
                  </Dragger>
                  </div>
                </div>


                {/* Rental Application & Screening */}
                <div className="flex mx-[5px] px-[20px] py-[10px] gap-[10px] my-[50px] flex-col border-[2px] border-[#C8C8C8]">
                    
                <div className="flex px-[5px]">
                    <h3 className="font-semibold">Rental Application & Screening</h3>
                  </div>
                  <Divider />
                  <div className="text-[13px] text-[#787878]">
                    <p>Find the most qualified tenants for your listing by choosing Rental Applications and screening.</p>
                  </div>
                  <div>
                  <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}><h6 className="font-normal  text-[13px]">Yes, i want to screen new tenants myself</h6></Radio>
                        <Radio value={2}><h6 className="font-normal  text-[13px]">Let NestQuest screen new tenants</h6></Radio>
                    </Radio.Group>
                  </div>

                </div>


                  {/* other sections */}

                <div className="flex flex-col mx-[5px] px-[20px] py-[10px] gap-[10px] my-[50px]">

                  {/* link */}
                  <div className="font-medium py-[10px] text-[#376FFF] flex">
                    <a href="">Other Sections</a>
                    <ChevronRight color='#376FFF'  />
                  </div>



                  <div className="border-[3px] border-black">
                  <Dropdown 
                        menu={{
                            items,onClick}} trigger={['click']}
                        
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <button className='flex justify-between py-[1px] px-[5px] w-[1000px] text-[13px] h-[35px] items-center font-medium '>Filter 1 
                                    <div>
                                    <ChevronDown width={15} />
                                    </div>
                                </button>
                            </Space>
                        </a>
                    </Dropdown>  
                  </div>

                  <div className="border-[3px] my-[10px] border-black">
                  <Dropdown 
                        menu={{
                            items,onClick}} trigger={['click']}
                        
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <button className='flex justify-between py-[1px] px-[5px] w-[1000px] text-[13px] h-[35px] items-center font-medium '>Filter 1 
                                    <div>
                                    <ChevronDown width={15} />
                                    </div>
                                </button>
                            </Space>
                        </a>
                    </Dropdown>  
                  </div>

                  <div className="border-[3px] my-[10px] border-black">
                  <Dropdown 
                        menu={{
                            items,onClick}} trigger={['click']}
                        
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <button className='flex justify-between py-[1px] px-[5px] w-[1000px] text-[13px] h-[35px] items-center font-medium '>Filter 1 
                                    <div>
                                    <ChevronDown width={15} />
                                    </div>
                                </button>
                            </Space>
                        </a>
                    </Dropdown>  
                  </div>

                  <div className="border-[3px] my-[10px] border-black">
                  <Dropdown 
                        menu={{
                            items,onClick}} trigger={['click']}
                        
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <button className='flex justify-between py-[1px] px-[5px] w-[1000px] text-[13px] h-[35px] items-center font-medium '>Filter 1 
                                    <div>
                                    <ChevronDown width={15} />
                                    </div>
                                </button>
                            </Space>
                        </a>
                    </Dropdown>  
                  </div>

                  <div className="border-[3px] my-[10px] border-black">
                  <Dropdown 
                        menu={{
                            items,onClick}} trigger={['click']}
                        
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                <button className='flex justify-between py-[1px] px-[5px] w-[1000px] text-[13px] h-[35px] items-center font-medium '>Filter 1 
                                    <div>
                                    <ChevronDown width={15} />
                                    </div>
                                </button>
                            </Space>
                        </a>
                    </Dropdown>  
                  </div>

                  

                
                </div>

                              
            </section>
            
        </main>
    )
    }