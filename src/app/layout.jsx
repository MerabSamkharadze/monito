import "@/styles/globals.css";

import Header from "@/components/Header";

export const metadata = {
  title: "Monito",
  icons: {
    icon: "https://cdn-icons-png.flaticon.com/512/468/468623.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={" w-full scroll-mt-12"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
