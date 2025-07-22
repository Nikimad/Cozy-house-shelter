import type { PropsWithChildren } from "react";

import InertProvider from "./InertProvider";

const Providers = ({ children }: PropsWithChildren) => (
  <InertProvider>{children}</InertProvider>
);

export default Providers;
