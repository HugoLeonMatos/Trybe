export type ServiceMessage = { message: string } | any;

type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'CONFLICT';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: ServiceMessage
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL' | 'CREATED' | 'UNPROCESSABLE_ENTITY',
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
