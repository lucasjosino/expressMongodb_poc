
export default interface ResponseServiceInterface {
    responseError(error: Error, res: Response): Response;
    response(content: any, res: Response): Response;
}