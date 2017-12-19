/**
 * Created by admin on 2017/12/19.
 */
import {getCategorys,getBrands} from '../api'
import {RECEIVE_CATEGORYS,RECEIVE_BRANDS} from './types'

const RECEIVE_OK = 0

export default {
  reqCategorys({commit}){
    getCategorys().then(response => {
      const result = response.data
      if (result.code === RECEIVE_OK) {
        const categorys = result.data
        commit(RECEIVE_CATEGORYS, {categorys})
      }

    })
  },
  reqBrands({commit}){
    getBrands().then(response => {
      const result = response.data
      if (result.code === RECEIVE_OK) {
        const brands = result.data
        commit(RECEIVE_BRANDS, {brands})
      }

    })
  }
}
