import type { Metadata } from "next";
import { Suspense } from "react";
import { FirebaseProvider } from "@/firebase/firebaseContext";
import "@/styles/globals.css";

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
    <html lang="en">
      <body>
        <FirebaseProvider>
          <Suspense>{children}</Suspense>
        </FirebaseProvider>
      </body>
    </html>
  );
};

export default RootLayout;
