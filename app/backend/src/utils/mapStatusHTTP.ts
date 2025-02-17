export default function mapStatusHTTP(status: string): number {
  switch (status) {
    case 'CREATED': return 201;
    case 'SUCCESSFUL': return 200;
    case 'INVALID_DATA': return 400;
    case 'NOT_FOUND': return 404;
    case 'CONFLICT': return 409;
    case 'UNAUTHORIZED': return 401;
    case 'UNPROCESSABLE_ENTITY': return 422;
    default: return 500;
  }
}

export const messgeError = 'It is not possible to create a match with two equal teams';
