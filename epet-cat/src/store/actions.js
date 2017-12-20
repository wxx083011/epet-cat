/**
 * Created by admin on 2017/12/19.
 */
import {getCategorys,getBrands,getHomeNav,getSlidPic,getHomeData,getbrandGather} from '../api'
import {RECEIVE_BRANDGATHER,RECEIVE_CATEGORYS,RECEIVE_BRANDS,RECEIVE_NAVLIST,RECEIVE_SLIDPIC,RECEIVE_HOMEDATA} from './types'

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
  },
  reqHomeNav({commit}){
    getHomeNav().then(response => {
      const result = response.data
      if (result.code === RECEIVE_OK) {
        const navList = result.data
        commit(RECEIVE_NAVLIST, {navList})
      }

    })
  },
  reqSlidPic({commit}){
    getSlidPic().then(response => {
      const result = response.data
      if (result.code === RECEIVE_OK) {
        const slidpic = result.data
        commit(RECEIVE_SLIDPIC, {slidpic})
      }

    })
  },
  reqHomeData({commit}){
    getHomeData().then(response => {
      const result = response.data
      if (result.code === RECEIVE_OK) {
        const HomeData = result.data
        commit(RECEIVE_HOMEDATA, {HomeData})
      }

    })
  },
  reqbrandGather({commit}){
    getbrandGather().then(response => {
      const result = response.data
      if (result.code === RECEIVE_OK) {
        const brandgather = result.data
        commit(RECEIVE_BRANDGATHER, {brandgather})
      }

    })
  }
}
