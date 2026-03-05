interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="flex flex-col gap-4 w-full text-left">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      {children}
    </div>
  );
};
