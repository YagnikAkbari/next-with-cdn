import { NextResponse } from "next/server";
export let count = 0;

export async function middleware(request) {
  // count++;
  // console.log("request::count", request.url);
  return NextResponse.next();
}
