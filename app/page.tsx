"use clent";
import MainComponent from "@/components";
import { splasyTime as splashTime } from "./loadingControlOption";

export default async function Home() {
  const promise = new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, splashTime);
  });

  const data = await promise.then();

  return data && <MainComponent />;
}
