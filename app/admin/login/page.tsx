
"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.message || "Invalid email or password");
        return;
      }

      router.replace(data.redirectTo || "/admin/dashboard");
      router.refresh();
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f6f8] flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-md">

        {/* Branding */}
        <div className="text-center mb-9">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            CDPTPL
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Content Management Portal
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 sm:p-10">

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Welcome back
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Sign in to access your administration panel.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@company.com"
                autoComplete="username"
                required
                disabled={loading}
                className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 disabled:opacity-60"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  disabled={loading}
                  className="w-full h-12 px-4 pr-16 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 disabled:opacity-60"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-500 hover:text-gray-900"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div
                role="alert"
                className="rounded-lg bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-600"
              >
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !email || !password}
              className="w-full h-12 rounded-lg bg-[#17365D] text-white text-sm font-medium transition hover:bg-[#102947] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-7">
          Authorized personnel only
        </p>

      </div>
    </main>
  );
}
