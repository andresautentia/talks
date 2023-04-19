import { UseCase } from './use-case'

export class UseCaseService {
    execute(useCase: UseCase, params: any) {
        console.log(useCase, params)
        return useCase.handle(params)
    }
}
