import { Request, Response, NextFunction } from 'express';

export interface RequestInterface {
  req: Request, res: Response, next: NextFunction;
}

export default RequestInterface;
