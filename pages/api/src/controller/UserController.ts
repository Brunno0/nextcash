import { NextApiRequest, NextApiResponse } from 'next';
import { ZodError } from "zod";
import { BaseError } from '../errors/BaseError';
import UserBusiness from '../business/UserBusiness';
import { GetUsersSchema } from '../dtos/getUsers.dto';
import { SignupSchema } from '../dtos/signup.dto';
import { LoginUserShema } from '../dtos/login.dto';

export default class UserController {
  constructor(private userBusiness: UserBusiness) { }

  public signup = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const input = SignupSchema.parse({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      const output = await this.userBusiness.signup(input);

      await this.userBusiness.createAccount(input)
      res.status(201).send(output);

    } catch (error: any) {

      if (error instanceof ZodError) {
        return res.status(400).send({
          error: error.issues[0].message,
          statusCode: 400
        })
      } else if (error instanceof BaseError) {
        return res.status(error.statusCode).json({ error: error.message })
      } else {

        return res.status(500).json({
          error: 'Internal error',
          details: error.message
        });
      }
    }

  }

  public getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const input = GetUsersSchema.parse({
        token: req.headers.authorization
      });

      const output = await this.userBusiness.getUsers(input);
      res.status(201).send(output);

    } catch (error: any) {

      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        console.log(error.message)
        res.status(error.statusCode).json({
          error: error.message,
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

  public login = async (req: NextApiRequest, res: NextApiResponse) => {
    try {

      const input = LoginUserShema.parse({
        email: req.body.email as string,
        password: req.body.password as string
      })

      const response = await this.userBusiness.login(input)

      res.status(200).send(response)

    } catch (error: any) {

      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        console.log(error.message)
        res.status(error.statusCode).send({
          error: error.message,
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
