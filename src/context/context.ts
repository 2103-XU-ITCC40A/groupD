import React, { createContext } from "react";

// CREATE A USE CONTEXT HOOK

const myContext = createContext<HookInterface | null>(null);

export default myContext;
