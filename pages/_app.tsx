import { ReactNode } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Fotter, MobileHeader, MobileSidebar, Navbar } from "../components";

interface Props {
  children: ReactNode;
}

const MyApp = ({ children }: Props) => {
  return <div className="min-h-[60vh] 2xl:container m-auto">{children}</div>;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-Poppins">
      <RecoilRoot>
        <MobileSidebar />
        <MobileHeader/>
        <Navbar />
        <MyApp>
          <Component {...pageProps} />
        </MyApp>
        <div className="flex justify-center">
          <Fotter />
        </div>
      </RecoilRoot>
    </div>
  );
}
