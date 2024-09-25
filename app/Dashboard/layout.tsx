export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto h-screen">
        {children}
      </div>
    </section>
  );
}
