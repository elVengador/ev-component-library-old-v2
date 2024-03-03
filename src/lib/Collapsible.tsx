import { ReactNode } from "react";

type CollapsibleProps = {
  title: ReactNode;
  children: ReactNode;
};
export const Collapsible = ({ title, children }: CollapsibleProps) => {
  return (
    <details
      className="w-full group open:bg-ev-light-hard dark:open:bg-ev-dark-hard p-4 rounded-lg"
      open
    >
      <summary className="group-[open]:bg-ev-primary text-ev-dark dark:text-ev-light select-none">
        {title}
      </summary>
      <div className="mt-3 text-sm  text-ev-dark dark:text-ev-light">
        {children}
      </div>
    </details>
  );
};
