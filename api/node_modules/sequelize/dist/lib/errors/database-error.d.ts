import BaseError, { CommonErrorProperties, ErrorOptions } from './base-error';
export interface DatabaseErrorParent extends Error, Pick<CommonErrorProperties, 'sql'> {
    /** The parameters for the sql that triggered the error */
    readonly parameters?: object;
}
export interface DatabaseErrorSubclassOptions extends ErrorOptions {
    parent?: DatabaseErrorParent;
    message?: string;
}
/**
 * A base class for all database related errors.
 */
declare class DatabaseError extends BaseError implements DatabaseErrorParent, CommonErrorProperties {
    parent: Error;
    original: Error;
    sql: string;
    parameters: object;
    constructor(parent: DatabaseErrorParent, options?: ErrorOptions);
}
export default DatabaseError;
