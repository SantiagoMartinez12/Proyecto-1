import DatabaseError, { DatabaseErrorSubclassOptions } from '../database-error';
interface UnknownConstraintErrorOptions {
    constraint: string;
    fields: Record<string, string | number>;
    table: string;
}
/**
 * Thrown when constraint name is not found in the database
 */
declare class UnknownConstraintError extends DatabaseError implements UnknownConstraintErrorOptions {
    constraint: string;
    fields: Record<string, string | number>;
    table: string;
    constructor(options: UnknownConstraintErrorOptions & DatabaseErrorSubclassOptions);
}
export default UnknownConstraintError;
