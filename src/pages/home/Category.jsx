import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Toycard from './Toycard';
import Aos from "aos"
import 'aos/dist/aos.css'


const Category = () => {

    useEffect(()=>{
        Aos.init({duration:1500})
    },[])

    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("spiderman");

    const handleActivetab = category => {
        setActiveTab(category);
    }

    useEffect(() => {
        fetch(`https://toy-marketplace-server-ruddy.vercel.app/findbysubcategory/${activeTab}`)
            .then((res) => res.json())
            .then((result) => {
                setToys(result);
            });
    }, [activeTab]);


    return (
        <div className='mt-24 pb-20' data-aos="fade-left">
            <h1 className='text-center text-3xl font-bold mb-12'>Shop By Category</h1>
            <div className='p-10'>
                <Tabs defaultIndex={0}>
                    <TabList>
                        <Tab >All Toys</Tab>
                    </TabList>
                    <TabPanel>
                        <Tabs>
                            <TabList>
                                <Tab onClick={() => handleActivetab('spiderman')}>Spiderman</Tab>
                                <Tab onClick={() => handleActivetab('captainamerica')}>Captain America</Tab>
                                <Tab onClick={() => handleActivetab('Hulk')}>Hulk</Tab>
                                <Tab onClick={() => handleActivetab('aquaman')}>Aquaman</Tab>
                                <Tab onClick={() => handleActivetab('wonderwomen')}>Wonder Women</Tab>
                                <Tab onClick={() => handleActivetab('superman')}>Superman</Tab>
                                <Tab onClick={() => handleActivetab('theflash')}>The Flash</Tab>
                                <Tab onClick={() => handleActivetab('batman')}>Batman</Tab>
                                <Tab onClick={() => handleActivetab('joker')}>Joker</Tab>
                            </TabList>
                            <TabPanel>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                                    {
                                        toys.map((toy, index) => <Toycard
                                            key={index}
                                            toy={toy}
                                        ></Toycard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4'>
                                    {
                                        toys.map((toy, index) => <Toycard
                                            key={index}
                                            toy={toy}
                                        ></Toycard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                                    {
                                        toys.map((toy, index) => <Toycard
                                            key={index}
                                            toy={toy}
                                        ></Toycard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                                    {
                                        toys.map((toy, index) => <Toycard
                                            key={index}
                                            toy={toy}
                                        ></Toycard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                                    {
                                        toys.map((toy, index) => <Toycard
                                            key={index}
                                            toy={toy}
                                        ></Toycard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                                    {
                                        toys.map((toy, index) => <Toycard
                                            key={index}
                                            toy={toy}
                                        ></Toycard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                                    {
                                        toys.map((toy, index) => <Toycard
                                            key={index}
                                            toy={toy}
                                        ></Toycard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                                    {
                                        toys.map((toy, index) => <Toycard
                                            key={index}
                                            toy={toy}
                                        ></Toycard>)
                                    }
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                                    {
                                        toys.map((toy, index) => <Toycard
                                            key={index}
                                            toy={toy}
                                        ></Toycard>)
                                    }
                                </div>
                            </TabPanel>
                            
                        </Tabs>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Category;