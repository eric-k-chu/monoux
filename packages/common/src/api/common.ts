export type ResponseSuccess = {
  type: 'success'
}

export type ResponseError<T> = {
  type: 'error'
  error: T
  message?: string
}

export type GetErrors = ResponseError<'NotFound' | 'InternalError'>

export type ListErrors = GetErrors
