/* eslint-disable @typescript-eslint/no-unused-vars */
import { NODE_ENV } from '../app/config';
import { Request, Response, NextFunction } from 'express';

const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  // console.log(error);

  const errorResponse = {
    // Fallback error response
    statusCode: error.statusCode || 500,
    status: error.status || 'error',
    message: error.message || 'Something went wrong',
    issues: error.issues || [],
  };

  res.status(errorResponse.statusCode).json({
    status: errorResponse.status,
    message: errorResponse.message,
    issues: errorResponse.issues,
    // Only include stack trace in NODE_ENV=development
    stack: NODE_ENV === 'development' ? error.stack : undefined,
    error: error,
  });
};

export default globalErrorHandler;
