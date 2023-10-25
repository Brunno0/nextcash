import { NextApiRequest, NextApiResponse } from 'next';
import SignupBusiness from '../business/signupBusiness';
import { SignupInputDTO, SignupSchema } from '../dtos/signup.dto';
import { ZodError } from "zod";

export default class SignupController {
  constructor(private signupBusiness: SignupBusiness) {}

  public signup = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const input = SignupSchema.parse({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
        
      const user = await this.signupBusiness.signup(input);
      res.status(201).json(user);
    } catch (error: any) {
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      }
      res.status(500).json({ error: 'Error while processing the request', details: error.message });
    }
  }
}
