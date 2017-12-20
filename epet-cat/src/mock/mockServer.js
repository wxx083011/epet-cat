import Mock from 'mockjs'
import apiData from './data.json'
import apiHomeData from './homedata.json'

Mock.mock('/api2/categorys', {code:0, data:apiData.classifyName.categorys})
Mock.mock('/api2/brand', {code:0, data:apiData.classifyName.brand})
Mock.mock('/api2/brandGather', {code:0, data:apiData.classifyName.brand_gather})
Mock.mock('/api2/HomeDataNav', {code:0, data:apiHomeData.menus})
Mock.mock('/api2/slideshow', {code:0, data:apiHomeData.datas[0]})
Mock.mock('/api2/homeData', {code:0, data:apiHomeData.datas})



