/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import TopicsController from '../app/controllers/topics_controller.js'
import PostsController from '../app/controllers/posts_controller.js'



router.group(()=>{
  router.get('',[TopicsController,'index'])
  router.post('',[TopicsController,'store'])
  router.group(()=>{
    router.get('',[TopicsController,'show'])
    router.put('',[TopicsController,'update'])
    router.delete('',[TopicsController,'delete'])
    router.group(()=>{
      router.get('',[PostsController,'index'])
      router.post('',[PostsController,'store'])
      router.group(()=>{
        router.get('',[PostsController,'show'])
        router.put('',[PostsController,'update'])
        router.delete('',[PostsController,'delete'])
      }).prefix('/:postId')
    }).prefix('/posts')
  }).prefix('/:topicId')
}).prefix('/topics')