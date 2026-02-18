import type { ReactNode } from 'react';

interface ListLayoutProps {
  header: ReactNode;
  body: ReactNode;
  footer: ReactNode;
}

export function ListLayout(props: ListLayoutProps) {
  return (
    <div>
      <div className="flex items-center justify-between">{props.header}</div>
      <div className="grid gap-4">{props.body}</div>
    </div>
  );
}

//   return (
//     <div>
//       <div>{props.header}</div>
//       <div>{props.body}</div>
//       <div>{props.footer}</div>
//     </div>
//   );
