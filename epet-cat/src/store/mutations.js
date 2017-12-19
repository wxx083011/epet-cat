/**
 * Created by admin on 2017/12/19.
 */
import {RECEIVE_CATEGORYS,RECEIVE_BRANDS} from './types'
export default {
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys=categorys
  },

  [RECEIVE_BRANDS](state,{brands}){
    state.brands=brands
  },

}
