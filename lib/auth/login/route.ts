
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { getPool } from "@/lib/db";
import { createAdminSession } from "@/lib/auth/session";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const password =
      typeof body.password === "string"
        ? body.password
        : "";

    if (
      !email ||
      !password ||
      email.length > 255 ||
      password.length > 128
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 400 }
      );
    }

    const pool = getPool();

    const result = await pool.query(
      `SELECT id, email, password_hash, is_active
       FROM admin_users
       WHERE email = $1
       LIMIT 1`,
      [email]
    );

    const user = result.rows[0];

    if (!user || !user.is_active) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      );
    }

    await createAdminSession({
      id: user.id,
      email: user.email,
    });

    return NextResponse.json({
      success: true,
      message: "Login successful",
      redirectTo: "/admin/dashboard",
    });
  } catch (error) {
    console.error("Admin login error:", error);

    return NextResponse.json(
      { success: false, message: "Unable to process login" },
      { status: 500 }
    );
  }
}
