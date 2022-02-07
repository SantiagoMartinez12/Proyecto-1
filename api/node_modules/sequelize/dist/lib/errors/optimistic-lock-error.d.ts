import BaseError from './base-error';
interface OptimisticLockErrorOptions {
    message?: string;
    /** The name of the model on which the update was attempted */
    modelName?: string;
    /** The values of the attempted update */
    values?: Record<string, unknown>;
    where?: Record<string, unknown>;
}
/**
 * Thrown when attempting to update a stale model instance
 */
declare class OptimisticLockError extends BaseError {
    modelName?: string;
    values?: Record<string, unknown>;
    where?: Record<string, unknown>;
    constructor(options: OptimisticLockErrorOptions);
}
export default OptimisticLockError;
