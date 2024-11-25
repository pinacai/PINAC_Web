import type { Metadata } from "next";
import Head from "next/head";
import { Suspense } from "react";
import { FirebaseProvider } from "@/firebase/firebaseContext";
import "./globals.css";

export const runtime = "edge"; // 'nodejs' | 'edge'

export const metadata: Metadata = {
  title: "Pinac Workspace",
  description: "Official website of pinac workspace",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="h-full">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="h-full bg-primary">
        <FirebaseProvider>
          <Suspense>{children}</Suspense>
        </FirebaseProvider>
      </body>
    </html>
  );
};

export default RootLayout;
