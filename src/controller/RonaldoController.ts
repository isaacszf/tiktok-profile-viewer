import { Request, Response } from 'express';

import { tiktokScraper } from "../scraper/tiktokScraper";

class RonaldoController {
  public async index(req: Request, res: Response) {
    return res.json({ msg: 'To search for a profile, put a username in the URL' });
  }

  public async getInfo(req: Request, res: Response) {
    try {
      const {
        username,
        name,
        following,
        followers,
        likes,
        imageUrl,
        description,
        videos
      }  = await tiktokScraper(req.params.name);

      const generalInformation = {
        username,
        name,
        following,
        followers,
        likes,
        image_url: imageUrl,
        description,
        videos
      };

      return res.json({ generalInformation });
    } catch (err) {
      console.log(err.message);

      return res.status(404).json({ error: 'Profile not found' });
    }
  }
}

export default new RonaldoController();
