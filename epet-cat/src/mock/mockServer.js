import Mock from 'mockjs'
import apiData from './data.json'

Mock.mock('/api2/categorys', {code:0, data:apiData.classifyName.categorys})
Mock.mock('/api2/brand', {code:0, data:apiData.classifyName.brand})

