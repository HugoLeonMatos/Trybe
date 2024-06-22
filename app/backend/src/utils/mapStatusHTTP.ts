export default function mapStatusHTTP(status: string): number {
  switch (status) {
    case 'CREATED': return 201;
    case 'SUCCESSFUL': return 200;
    case 'INVALID_DATA': return 400;
    case 'NOT_FOUND': return 404;
    case 'CONFLICT': return 409;
    case 'UNAUTHORIZED': return 401;
    default: return 500;
  }
}
