import Post from "../models/post.js";
import { CreatePostValidator, UpdatePostValidator } from "../validators/post.js";

export default class PostService {

    index() {
        return Post.query()
    }

    findByTopic(topicId: number) {
        return Post.query().where('topicId', topicId) 
    }

    findById(id: number) {
        return Post.findOrFail(id)
    }

    create(newPost: CreatePostValidator, topicId: number) {
        return Post.create({ ...newPost, topicId: topicId })
    }

    async update(updatedPost: UpdatePostValidator, id: number) {
        const post = await Post.findOrFail(id)
        post.merge(updatedPost)
        await post.save()
        return post
    }

    async delete(id: number) {
        const post = await Post.findOrFail(id)
        await post.delete()
        return true
    }
}