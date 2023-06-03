import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function  GET () {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany({
    include: {
      products: true
    }
  })
  return NextResponse.json(categories)
}

export async function POST() {}
