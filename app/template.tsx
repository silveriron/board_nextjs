import Header from "@/components/ui/Header";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="h-full">{children}</main>
    </>
  );
}
