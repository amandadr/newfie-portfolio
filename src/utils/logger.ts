import winston from "winston";

// Define log levels
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// Define log colors
const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "blue",
};

// Add colors to Winston
winston.addColors(colors);

// Define the format
const format = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

// Define transports based on environment
const transports: winston.transport[] = [
  // Console transport for all environments
  new winston.transports.Console(),
];

// Only add file transports in Node.js environment (not in Edge Runtime)
if (
  typeof window === "undefined" &&
  typeof process !== "undefined" &&
  process.versions?.node
) {
  try {
    // File transport for errors
    transports.push(
      new winston.transports.File({
        filename: "logs/error.log",
        level: "error",
      })
    );

    // File transport for all logs
    transports.push(new winston.transports.File({ filename: "logs/all.log" }));
  } catch (error) {
    // If file logging fails (e.g., in restricted environments), continue with console only
    console.warn("File logging not available, using console only");
  }
}

// Create the logger
const logger = winston.createLogger({
  level: process.env.NODE_ENV === "development" ? "debug" : "warn",
  levels,
  format,
  transports,
});

export default logger;
