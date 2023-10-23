// import express from 'express';
// import cors from 'cors';
// import { Request, Response } from 'express';

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.listen(Number(process.env.PORT) || 3003, () => {
//     console.log(`Servidor rodando na porta ${Number(process.env.PORT) || 3003}`);
// });

// app.get("/ping", (req: Request, res: Response) => {
//   res.send("Pong!");
// });

import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
}
