//Next.js API route support: https://next.js.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity";
import { Project } from "../../typings";


const query = groq`
    *[_type =="project"] {
        ...,
        technologies[]->
    }
`;

type Data = {
    socials: Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const socials: Social[] = await sanityClient.fetch(query);

    res.status(200).json({ socials })
  }
  