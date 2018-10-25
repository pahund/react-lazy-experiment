import React, { lazy, Suspense } from "react";
const OtherComponent = lazy(async () => {
  let component = await import("./World");
  const sayHello = (await import("./sayHello")).default;
  sayHello();
  return component;
});

export default () => (
  <Suspense fallback={<div>Loading...</div>}>
    <OtherComponent />
  </Suspense>
);
