import type { HttpContext } from '@adonisjs/core/http'

import { inject } from "@adonisjs/core";
import PostService from "../services/post_service.js";
import { postCreateValidator, postUpdateValidator } from '../validators/post.js';
@inject()
export default class PostsController {
    constructor(private postService: PostService) { }

    index() {
        return this.postService.index()
    }

    findByTopic({ params }: HttpContext) {
        return this.postService.findByTopic(params.topicId)
    }

    show({ params }: HttpContext) {
        return this.postService.findById(params.postId)
    }

    async store({ request, params }: HttpContext) {
        const newPost = await request.validateUsing(postCreateValidator)
        const topicId = params.topicId
        return this.postService.create(newPost, topicId)
    }

    async update({ request, params }: HttpContext) {
        const updatedPost = await request.validateUsing(postUpdateValidator)
        const postId = params.postId
        return this.postService.update(updatedPost, postId)
    }
    async delete({ params }: HttpContext) {
        const postId = params.postId
        return this.postService.delete(postId)
    }
}