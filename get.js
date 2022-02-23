const error = {
    error: {
        error: {
            code: 'code-001'
        }
    }
}
const { error: {error: {code: downstreamErrorCode, message} = {}, statusCode = 500} = {} } = error;

console.log(downstreamErrorCode, message, statusCode);