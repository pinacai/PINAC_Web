import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="grid min-h-full place-items-center bg-primary px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-lg font-semibold text-secondary">404</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-light sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
export const runtime = "edge"; // 'nodejs' | 'edge'
