import { getEntry } from '@/utils/timelineQueries';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const pageId = req.query.pid;

    const page = await getEntry(pageId)

    req.statusCode = 200
    res.send(page)
}