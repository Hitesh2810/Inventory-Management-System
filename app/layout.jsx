import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "NovaIMS | Futuristic Inventory Management",
  description: "A premium AI-native inventory management frontend built for modern operations."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
