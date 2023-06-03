import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function  GET () {
  const prisma = new PrismaClient();
  const products = await prisma.products.findMany()
  return NextResponse.json(products)
}

export async function POST() {}
