export type InternalResponse = {
  code: 'success' | 'invalid' | 'error';
  message: string;
};

export type Success<T> = {
  code: 'success';
  message: T;
};

export type Invalid = {
  code: 'invalid';
  message: string;
};

export type Error = {
  code: 'error';
  message: string;
};
