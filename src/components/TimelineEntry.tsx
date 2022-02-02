import React from 'react';

type Props = {
    title: string,
    createdOn: string,
};

const TimelineEntry = ({ title, createdOn }: Props) => {
    return (
        <article className="bg-white dark:bg-zinc-800 rounded-lg px-4 py-5 shadow-md dark:border dark:border-zinc-900">
            <h2 className="text-neutral-900 dark:text-white text-lg font-bold">{title}</h2>
            <small className="text-neutral-700 dark:text-slate-400 text-sm">{createdOn}</small>
        </article>
    )
};

export default TimelineEntry;
