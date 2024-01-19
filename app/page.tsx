import MainComponent from "@/components";
import { splashTime } from "./loadingControlOption";

// serverComponent
export default async function Home() {
  const promise: Promise<string> = new Promise((res) => {
    setTimeout(() => {
      res(String(Math.floor(Math.random() * 100000)));
    }, splashTime);
  });

  const data: string = await promise.then();

  return data && <MainComponent />;
}
