/**
 * Client-side logger utility
 *
 * Since Winston is primarily for server-side logging, this utility provides
 * similar logging functionality for client components while ensuring logs are
 * sent to the server when appropriate.
 */

const isDev = process.env.NODE_ENV === "development";

type LogLevel = "error" | "warn" | "info" | "debug";

interface LogMessage {
  level: LogLevel;
  message: string;
  meta?: Record<string, any>;
  timestamp: string;
}

// Function to log to console with appropriate styling
const logToConsole = (
  level: LogLevel,
  message: string,
  meta?: Record<string, any>
) => {
  const timestamp = new Date().toISOString();
  const formattedMeta = meta ? ` ${JSON.stringify(meta)}` : "";

  switch (level) {
    case "error":
      console.error(`[${timestamp}] ERROR: ${message}${formattedMeta}`);
      break;
    case "warn":
      console.warn(`[${timestamp}] WARN: ${message}${formattedMeta}`);
      break;
    case "info":
      console.info(`[${timestamp}] INFO: ${message}${formattedMeta}`);
      break;
    case "debug":
      console.debug(`[${timestamp}] DEBUG: ${message}${formattedMeta}`);
      break;
  }
};

// Function to send logs to server (for important logs like errors)
const sendToServer = async (logData: LogMessage) => {
  try {
    // Only send errors and warnings to the server to avoid unnecessary traffic
    if (logData.level === "error" || logData.level === "warn") {
      await fetch("/api/log", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logData),
      });
    }
  } catch (error) {
    // Don't use the logger here to avoid infinite loops
    console.error("Failed to send log to server:", error);
  }
};

// The client logger API
const clientLogger = {
  error: (message: string, meta?: Record<string, any>) => {
    logToConsole("error", message, meta);
    sendToServer({
      level: "error",
      message,
      meta,
      timestamp: new Date().toISOString(),
    });
  },

  warn: (message: string, meta?: Record<string, any>) => {
    logToConsole("warn", message, meta);
    sendToServer({
      level: "warn",
      message,
      meta,
      timestamp: new Date().toISOString(),
    });
  },

  info: (message: string, meta?: Record<string, any>) => {
    // Only log info in development
    if (isDev) {
      logToConsole("info", message, meta);
    }
  },

  debug: (message: string, meta?: Record<string, any>) => {
    // Only log debug in development
    if (isDev) {
      logToConsole("debug", message, meta);
    }
  },
};

export default clientLogger;
