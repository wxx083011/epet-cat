import Vue from 'vue'
import Router from 'vue-router'
import shoppingCart from '../pages/shoppingCart/shoppingCart.vue'
import Catalogue from '../pages/Catalogue/Catalogue.vue'
import personalCenter from '../pages/personalCenter/personalCenter.vue'
import  Home from '../pages/Home/Home.vue'
import catasTab1 from '../pages/Catalogue/catasTab1/catasTab1.vue'
import catasTab2 from '../pages/Catalogue/catasTab2/catasTab2.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'

    },
    {
      path:'/Catalogue',
      component:Catalogue,
      children: [
        {
          path: '/Catalogue',
          redirect: '/Catalogue/catasTab1'
        },
        {
          path: 'catasTab1',
          component: catasTab1
        },
        {
          path: 'catasTab2',
          component: catasTab2
        }
      ]
    },
    {
      path:'/personalCenter',
      component:personalCenter

    },
    {
      path:'/shoppingCart',
      component:shoppingCart

    },
    {
      path:'/Home',
      component:Home

    },


  ]
})
