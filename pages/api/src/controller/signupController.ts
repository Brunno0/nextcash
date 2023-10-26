import { NextApiRequest, NextApiResponse } from 'next';
import SignupBusiness from '../business/signupBusiness';
import { SignupInputDTO, SignupSchema } from '../dtos/signup.dto';
import { ZodError } from "zod";
import { BaseError } from '../errors/BaseError';

export default class SignupController {
  constructor(private signupBusiness: SignupBusiness) { }

  public signup = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const input = SignupSchema.parse({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      const output = await this.signupBusiness.signup(input);
      res.status(201).send({ token: output });

    } catch (error: any) {

      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        console.log(error.message)
        res.status(error.statusCode).json({
          error:error.message,
          details: error.message 
        })
      } else {

        res.status(500).json({ 
            error: 'Internal error', 
            details: error.message 
          });
      }
    }

  }
}
