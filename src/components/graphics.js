export function Spark({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="m50 0 9 30L85 15 70 41l30 9-30 9 15 26-26-15-9 30-9-30-26 15 15-26L0 50l30-9-15-26 26 15Z" />
    </svg>
  );
}

export function Flower({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <circle cx="100" cy="42" r="36" /><circle cx="142" cy="58" r="36" />
        <circle cx="158" cy="100" r="36" /><circle cx="142" cy="142" r="36" />
        <circle cx="100" cy="158" r="36" /><circle cx="58" cy="142" r="36" />
        <circle cx="42" cy="100" r="36" /><circle cx="58" cy="58" r="36" />
        <circle cx="100" cy="100" r="60" />
      </g>
      <g fill="none" stroke="#171714" strokeWidth="5" strokeLinecap="round">
        <path d="M70 90q8-12 16 0m28 0q8-12 16 0M82 113q18 22 36 0" />
      </g>
    </svg>
  );
}

export function Scribble({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 220 90" fill="none" aria-hidden="true" focusable="false">
      <path d="M8 59C24 15 103 4 104 28c1 26-83 55-63 26S174 5 157 37s-56 40-49 21 62-40 101-22m-23-15 25 14-17 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
