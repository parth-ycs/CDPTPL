import { redirect } from "next/navigation";
import LoginForm from "@/components/admin/LoginForm";
import { isAuthenticated } from "@/lib/auth/session";

export const metadata = { title: "Admin sign in", robots: { index: false, follow: false } };

export default async function LoginPage() {
  if (await isAuthenticated()) redirect("/admin/dashboard");

  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 p-4 text-stone-900">
      <LoginForm />
    </main>
  );
}
