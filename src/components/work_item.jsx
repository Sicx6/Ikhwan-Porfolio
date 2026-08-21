import React from 'react';

const WorkItem = ({
  title,
  type,
  backgroundImage,
  desc,
  stack,
  workLink,
  demoLink,
  proprietary,
  highlights = [],
}) => {
  const hasMedia = Boolean(backgroundImage);

  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-[#314142] bg-[#20292a] transition duration-300 hover:-translate-y-1 hover:border-[#4e696a]">
      {hasMedia && (
        <div className="overflow-hidden bg-[#172021]">
          <img
            src={backgroundImage}
            alt={`${title} project preview`}
            className="h-56 w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className={`flex h-full flex-col p-6 ${hasMedia ? '' : 'min-h-[360px]'}`}>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#0ef6cc]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#0ef6cc]">
            {type}
          </span>
          {proprietary && (
            <span className="rounded-full border border-[#405455] px-3 py-1 text-xs text-[#9eb1b2]">
              Commercial / Proprietary
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold leading-tight text-[#f4fefd]">{title}</h3>
        <p className="mt-3 text-sm font-medium leading-relaxed text-[#71d8c6]">{stack}</p>
        <p className="mt-5 text-[15px] leading-7 text-[#b3c5c5]">{desc}</p>

        {highlights.length > 0 && (
          <div className="mt-5 grid gap-2">
            {highlights.map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-6 text-[#d1dddd]">
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#0ef6cc]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
          {workLink && (
            <a
              href={workLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-[#0ef6cc] px-4 py-2.5 text-sm font-bold text-[#142021] transition hover:opacity-90"
            >
              View Source
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[#0ef6cc] px-4 py-2.5 text-sm font-bold text-[#0ef6cc] transition hover:bg-[#0ef6cc]/10"
            >
              Watch Demo
            </a>
          )}
          {proprietary && (
            <p className="text-xs leading-5 text-[#7f9697]">
              Source code and project media are not publicly shared.
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

export default WorkItem;
