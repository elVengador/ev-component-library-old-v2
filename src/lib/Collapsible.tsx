import { ReactNode } from "react";

type CollapsibleProps = {
  title: ReactNode;
  children: ReactNode;
};
export const Collapsible = ({ title, children }: CollapsibleProps) => {
  return (
    <details className="w-full group bg-ev-light-hard dark:bg-ev-dark-hard p-4 rounded-lg">
      <summary className="group-[open]:bg-ev-primary text-ev-dark dark:text-ev-light select-none cursor-pointer">
        {title}
      </summary>
      <div className="mt-3 text-sm  text-ev-dark dark:text-ev-light">
        {children}
      </div>
    </details>
  );
};
