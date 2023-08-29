import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center gap-10">
      <h2 className="font-bold text-3xl"> 404 Not Found</h2>
      <Link
        href="/"
        className="border-2 w-32 h-16 flex items-center justify-center rounded-3xl bg-slate-400 text-white"
      >
        Return Home
      </Link>
    </div>
  );
}
