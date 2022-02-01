import React from 'react';

type Props = {
    title: string,
    createdOn: string,
};

const TimelineEntry = ({ title, createdOn }: Props) => {
    return (
        <article className="bg-white dark:bg-slate-900 rounded-lg px-4 py-5 drop-shadow-md dark:border dark:border-slate-600">
            <h2 className="text-slate-800 dark:text-white text-lg font-bold">{title}</h2>
            <small className="text-slate-500 dark:text-slate-400 text-sm">{createdOn}</small>
        </article>
    )
};

export default TimelineEntry;
