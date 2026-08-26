import en from "./en.json";
import zh from "./zh.json";
import cn from "./cn.json";

export const allMessages = { en, zh, cn } as const;

export type Locale = keyof typeof allMessages;
