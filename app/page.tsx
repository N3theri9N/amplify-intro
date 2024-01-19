"use client";
import MainComponent from "@/components";
import { splashTime } from "./loadingControlOption";

let promise: Promise<any> | undefined;
let promiseStatus: "fulfilled" | "rejected" | "pending" = "pending";
let promiseValue: any;

export default function Home() {
  wrapPromise();
  return promiseValue && <MainComponent />;
}

function wrapPromise() {
  if (!promise) {
    promise = new Promise((res) => {
      setTimeout(() => {
        res("TRUE");
      }, splashTime);
    });
  }

  if (promiseStatus === "fulfilled") {
    return promiseValue;
  } else {
    promiseStatus = "pending";
    promise.then((result) => {
      promiseStatus = "fulfilled";
      promiseValue = result;
    });
  }
  throw promise;
}
