"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      size="icon"
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/90 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all shadow-lg"
    >
      <Sun className="hidden dark:block w-5 h-5 text-amber-400" />
      <Moon className="block dark:hidden w-5 h-5 text-slate-700" />
    </Button>
  );
}
