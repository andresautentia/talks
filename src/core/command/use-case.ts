export interface UseCase {
    handle(params?: any): Promise<any>
}
