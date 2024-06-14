import { ReactNode, useState } from "react";

type CollapsibleProps = {
  title: ReactNode;
  children: ReactNode;
  unmountInvisibleChildren?: boolean;
};

export const Collapsible = ({
  title,
  children,
  unmountInvisibleChildren,
}: CollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details
      onToggle={() => setIsOpen((p) => !p)}
      className="w-full group bg-ev-light-hard dark:bg-ev-dark-hard p-4 rounded-lg"
      open={isOpen}
    >
      <summary className="group-[open]:bg-ev-primary text-ev-dark dark:text-ev-light select-none cursor-pointer">
        {title}
      </summary>
      {(isOpen || !unmountInvisibleChildren) && (
        <div className="mt-3 text-sm  text-ev-dark dark:text-ev-light">
          {children}
        </div>
      )}
    </details>
  );
};
