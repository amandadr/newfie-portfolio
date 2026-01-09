import { NextRequest, NextResponse } from "next/server";
import logger from "@/utils/logger";

export async function POST(request: NextRequest) {
  try {
    const metric = await request.json();
    const { name, value, rating, delta } = metric;

    // Log the Web Vital metric
    logger.info(`Web Vital: ${name}`, {
      value,
      rating,
      delta,
      clientIp: request.ip || "unknown",
      userAgent: request.headers.get("user-agent") || "unknown",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error("Error processing analytics data", { error });
    return NextResponse.json(
      { error: "Failed to process analytics" },
      { status: 500 }
    );
  }
}
