/**
 * Created by admin on 2017/12/19.
 */
import {RECEIVE_BRANDGATHER,RECEIVE_CATEGORYS,RECEIVE_BRANDS,RECEIVE_NAVLIST,RECEIVE_SLIDPIC,RECEIVE_HOMEDATA} from './types'
export default {
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys=categorys
  },

  [RECEIVE_BRANDS](state,{brands}){
    state.brands=brands
  },
  [RECEIVE_NAVLIST](state,{navList}){
    state.navList=navList
  },
  [RECEIVE_SLIDPIC](state,{slidpic}){
    state.slidpic=slidpic
  },
  [RECEIVE_HOMEDATA](state,{HomeData}){
    state.HomeData=HomeData
  },
  [RECEIVE_BRANDGATHER](state,{brandgather}){
    state.brandgather=brandgather
  }


}
