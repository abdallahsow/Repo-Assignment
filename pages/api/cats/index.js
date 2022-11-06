// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { cats } from "../../../data";

export default function index(req, res) {
  res.status(200).json(cats);
}
