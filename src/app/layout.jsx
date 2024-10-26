import Navbar from "@/components/Navbar/Navbar";
import "../styles/globals.css";
import Footer from "@/components/Footer/Footer";
import Provider from "@/components/Provider/Provider";

export const metadata = {
  title: "RuaAI",
  description: "Discover & Share AI RuaAI",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className=" app">
          <Navbar />
          {children}
          <Footer />
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
