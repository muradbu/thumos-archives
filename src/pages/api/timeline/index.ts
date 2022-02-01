import { NextApiRequest, NextApiResponse } from 'next';
import { getEntries } from '@/utils/timelineQueries'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const entries = await getEntries();

    req.statusCode = 200
    res.send(entries)
}