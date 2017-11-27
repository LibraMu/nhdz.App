import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Show from '@/components/show/show'
import Find from '@/components/find/find'
import My from '@/components/my/my'
import Care from '@/components/HeaderItem/care'
import Essence from '@/components/HeaderItem/essence'
import Pic from '@/components/HeaderItem/pic'
import Riff from '@/components/HeaderItem/riff'
import Video from '@/components/HeaderItem/video'
import Recommend from '@/components/HeaderItem/recommend'
import Gif from '@/components/loginGif'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      redirect:'/index/recommend',
      component: Index
    },{
    	path:'/index',
    	name:'index',
      redirect:'/index/recommend',
    	component:Index,
      children:[
        {
          path:'case',
          component:Care
        },{
          path:'essence',
          component:Essence
        },{
          path:'pic',
          component:Pic
        },{
          path:'riff',
          component:Riff
        },{
          path:'video',
          component:Video
        },{
          path:'recommend',
          component:Recommend
        }
      ]
    },{
    	path:'/show',
    	name:'show',
    	component:Show
    },{
    	path:'/find',
    	name:'find',
    	component:Find
    },{
    	path:'/my',
    	name:'my',
    	component:My
    }
  ]
})
