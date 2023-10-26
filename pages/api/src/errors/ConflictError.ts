import { BaseError } from "./BaseError";

export class ConflictError extends BaseError {
    constructor(
        message: string = "Conflito de recurso. Verifique se o recurso já existe."
    ) {
        super(409, message)
    }
}
