"use client";

import { useState, useEffect, useRef } from "react";

const SESSION_KEY = "portfolio-auth";
const CORRECT_PASSWORD = "Miguel";

interface PasswordGateProps {
  children: React.ReactNode;
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored === "true") {
      setAuthenticated(true);
    }
    setChecking(false);
  }, []);

  useEffect(() => {
    if (!checking && !authenticated) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [checking, authenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === CORRECT_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      setAuthenticated(true);
    } else {
      setError(true);
      setShake(true);
      setInput("");
      setTimeout(() => setShake(false), 500);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  if (checking) {
    return null;
  }

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <p className="text-sm text-stone-400 dark:text-stone-500 mb-8 tracking-wide uppercase font-sans">
          Protected Work
        </p>
        <h1 className="font-serif text-3xl text-stone-900 dark:text-stone-50 mb-3 leading-tight">
          This work is password protected.
        </h1>
        <p className="text-stone-500 dark:text-stone-400 text-base mb-10 leading-relaxed font-sans">
          Please enter the password to view selected case studies.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className={shake ? "animate-shake" : ""}>
            <input
              ref={inputRef}
              type="password"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Password"
              autoComplete="current-password"
              className={[
                "w-full bg-transparent border-b py-3 text-base font-sans outline-none placeholder:text-stone-300 dark:placeholder:text-stone-600 transition-colors duration-200",
                error
                  ? "border-red-400 dark:border-red-600 text-red-600 dark:text-red-400"
                  : "border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-50 focus:border-stone-900 dark:focus:border-stone-200",
              ].join(" ")}
            />
            {error && (
              <p className="mt-2 text-sm text-red-500 dark:text-red-400 font-sans">
                Incorrect password. Please try again.
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!input}
            className="w-full py-3 text-sm font-sans font-medium bg-stone-900 dark:bg-stone-50 text-stone-50 dark:text-stone-900 rounded-full hover:bg-stone-700 dark:hover:bg-stone-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Enter
          </button>
        </form>
      </div>

      <style>{`
        @keyframes portfolio-shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: portfolio-shake 0.45s ease-in-out;
        }
      `}</style>
    </div>
  );
}
