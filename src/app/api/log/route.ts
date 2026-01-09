import { NextRequest, NextResponse } from "next/server";
import logger from "@/utils/logger";

export async function POST(request: NextRequest) {
  try {
    const logData = await request.json();
    const { level, message, meta, timestamp } = logData;

    // Validate the log level
    if (!["error", "warn", "info", "debug"].includes(level)) {
      return NextResponse.json({ error: "Invalid log level" }, { status: 400 });
    }

    // Add client IP and user agent to the log metadata
    const enhancedMeta = {
      ...meta,
      clientIp: request.ip || "unknown",
      userAgent: request.headers.get("user-agent") || "unknown",
      source: "client",
      timestamp,
    };

    // Log using the appropriate level
    switch (level) {
      case "error":
        logger.error(message, enhancedMeta);
        break;
      case "warn":
        logger.warn(message, enhancedMeta);
        break;
      case "info":
        logger.info(message, enhancedMeta);
        break;
      case "debug":
        logger.debug(message, enhancedMeta);
        break;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error("Error processing log request", { error });
    return NextResponse.json(
      { error: "Failed to process log" },
      { status: 500 }
    );
  }
}
