
// Problem 1:
function checkVariable(input) {
    switch (typeof input) {
        case 'string':
            return 'string';    
        case 'number':
            return 'number';
        case 'boolean':
            return 'boolean';
        case 'bigint':
            return 'bigint';
        case 'undefined':
            return 'undefined';
        case 'object':
            if (input === null) {
                return 'null';
            }
            return 'object';
    }
}