import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/comics/3/chapter/301'
    },
    {
      path: '/comics',
      name: 'Comics',
      component: () => import('@/pages/Comics') // 使用該頁時才載入 code splitting 代碼分裂功能(webpack方法)
    },
    {
      path: '/comics/:id',
      name: 'ComicDetail',
      component: () => import('@/pages/ComicDetail')
    },
    {
      path: '/comics/:id/chapter/:cid',
      name: 'ComicChapter',
      component: () => import('@/pages/ComicChapter')
    }
  ]
})
