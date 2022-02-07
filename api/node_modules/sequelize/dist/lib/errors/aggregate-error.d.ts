import BaseError from './base-error';
/**
 * A wrapper for multiple Errors
 *
 * @param errors Array of errors
 */
declare class AggregateError extends BaseError {
    errors: Array<AggregateError | Error>;
    constructor(errors: Array<AggregateError | Error>);
    toString(): string;
}
export default AggregateError;
