/**
 * Created by admin on 2017/12/19.
 */
import axios from 'axios'

export function getCategorys() {
  return axios.get('/api2/categorys') // 返回一个promise对象
}
export function getBrands() {
  return axios.get('/api2/brand')
}

