interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="relative flex min-h-screen justify-center bg-black pattern-dots">
      <div className="absolute top-4 right-4 text-white/20 text-xs">
        hook &apos;em
      </div>
      <main className="relative z-10 flex w-full max-w-md flex-col items-start gap-8 px-6 py-16">
        {children}
      </main>
    </div>
  );
};
