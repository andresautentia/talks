import { inject, injectable } from 'tsyringe'
import { TOKENS } from '../../../core/di/injection-tokens'
import { Talk } from '../domain/talk'
import type { TalkRepository } from '../domain/talk-repository'
import { UseCase } from '../../../core/command/use-case'

@injectable()
export class FilterTalksQry implements UseCase {
    constructor(@inject(TOKENS.TALKS_REPOSITORY) private readonly talkRepository: TalkRepository) {}

    handle(params: any): Promise<Talk[]> {
        const { speakerSelected, topicSelected } = params
        return this.talkRepository.filterTalks(speakerSelected, topicSelected)
    }
}
