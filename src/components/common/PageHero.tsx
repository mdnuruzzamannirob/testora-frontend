import { cn } from "@/lib/utils";

const PageHero = ({
  title,
  description,
  className,
  children,
}: {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "from-primary/10 flex flex-col items-center gap-4 bg-linear-to-b py-16 text-center",
        className
      )}
    >
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
      <p className="max-w-2xl text-gray-500">{description}</p>

      {children && children}
    </div>
  );
};

export default PageHero;
