import Topic from "../models/topic.js";
import { CreateTopicValidator, UpdateTopicValidator } from "../validators/topic.js";

export default class TopicService {

    index() {
        return Topic.query()
    }

    findById(id: number) {
        return Topic.findOrFail(id)
    }

    create(newTopic: CreateTopicValidator) {
        return Topic.create({ ...newTopic })
    }

    async update(updatedTopic: UpdateTopicValidator, id: number) {
        const topic = await Topic.findOrFail( id)
        topic.merge(updatedTopic)
        await topic.save()
        return topic
    }

    async delete(id: number) {
        const topic = await Topic.findOrFail( id)
        await topic.delete()
        return true
    }
}