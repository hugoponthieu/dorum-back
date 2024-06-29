import type { HttpContext } from '@adonisjs/core/http'

import { inject } from "@adonisjs/core";
import TopicService from "../services/topic_service.js";
import { topicCreateValidator, topicUpdateValidator } from '../validators/topic.js';
@inject()
export default class TopicsController {
    constructor(private topicService: TopicService) { }

    index() {
        return this.topicService.index()
    }

    show({ params }: HttpContext) {
        return this.topicService.findById(params.topicId)
    }

    async store({ request }: HttpContext) {
        const newTopic = await request.validateUsing(topicCreateValidator)
        return this.topicService.create(newTopic)
    }

    async update({ request, params }: HttpContext) {
        const updatedTopic = await request.validateUsing(topicUpdateValidator)
        const topicId = params.topicId
        return this.topicService.update(updatedTopic, topicId)
    }
    async delete({ params }: HttpContext) {
        const topicId = params.topicId
        return this.topicService.delete(topicId)
    }
}