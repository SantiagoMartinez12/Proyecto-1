import { CommonErrorProperties, ErrorOptions } from '../base-error';
import ValidationError, { ValidationErrorItem } from '../validation-error';
interface UniqueConstraintErrorParent extends Error, Pick<CommonErrorProperties, 'sql'> {
}
interface UniqueConstraintErrorOptions extends ErrorOptions {
    parent?: UniqueConstraintErrorParent;
    original?: UniqueConstraintErrorParent;
    errors?: ValidationErrorItem[];
    fields?: Record<string, unknown>;
    message?: string;
}
/**
 * Thrown when a unique constraint is violated in the database
 */
declare class UniqueConstraintError extends ValidationError implements CommonErrorProperties {
    parent: UniqueConstraintErrorParent;
    original: UniqueConstraintErrorParent;
    fields: Record<string, unknown>;
    sql: string;
    constructor(options: UniqueConstraintErrorOptions);
}
export default UniqueConstraintError;
