import Image from 'next/image';

export default function AdminPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <p className="text-2xl font-medium text-[#1A1A1A]">Welcome to</p>
      <Image
        src="/logo.svg"
        alt="Relengo"
        width={180}
        height={49}
        priority
      />
      <p className="text-2xl font-medium text-[#1A1A1A]">Workspace</p>
    </main>
  );
}
