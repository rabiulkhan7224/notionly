import { betterAuth } from "better-auth";
import { PrismaClient } from "../generated/prisma/client";
import { prismaAdapter } from "better-auth/adapters/prisma";
export const auth = betterAuth({
  database: prismaAdapter(PrismaClient, { provider: "postgresql" }),
  emailAndPassword: { enabled: true },
  appName: "Notionly",
});
