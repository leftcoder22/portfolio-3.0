//Next.js API route support: https://next.js.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity";


const query = groq`
    *[_type =="social"]
`