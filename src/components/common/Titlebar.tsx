import { cn } from "@/lib/utils";

const Titlebar = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={cn("mb-8 flex flex-col items-center text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
      <p className="mt-2 max-w-xl text-lg text-gray-500">{description}</p>
    </div>
  );
};

export default Titlebar;
