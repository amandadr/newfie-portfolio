#!/usr/bin/env node

/**
 * Development Performance Analysis Script
 *
 * This script helps analyze performance metrics during development
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class DevPerformanceAnalyzer {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      bundleSize: {},
      imageOptimization: {},
      recommendations: [],
    };
  }

  // Analyze bundle sizes
  analyzeBundleSize() {
    console.log("📊 Analyzing bundle sizes...");

    try {
      // Check if .next directory exists
      const nextDir = path.join(process.cwd(), ".next");
      if (!fs.existsSync(nextDir)) {
        console.log("⚠️  No build found. Running build first...");
        execSync("npm run build", { stdio: "inherit" });
      }

      // Analyze static files
      const staticDir = path.join(nextDir, "static");
      if (fs.existsSync(staticDir)) {
        const chunks = this.getDirectorySize(path.join(staticDir, "chunks"));
        const css = this.getDirectorySize(path.join(staticDir, "css"));

        this.results.bundleSize = {
          totalChunks: chunks,
          totalCSS: css,
          total: chunks + css,
        };

        console.log(`  ✅ JavaScript chunks: ${this.formatBytes(chunks)}`);
        console.log(`  ✅ CSS files: ${this.formatBytes(css)}`);
        console.log(`  ✅ Total static: ${this.formatBytes(chunks + css)}`);
      }
    } catch (error) {
      console.error("❌ Bundle analysis failed:", error.message);
    }
  }

  // Analyze image optimization opportunities
  analyzeImageOptimization() {
    console.log("🖼️  Analyzing image usage...");

    const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif", ".svg"];
    const srcDir = path.join(process.cwd(), "src");
    const publicDir = path.join(process.cwd(), "public");

    let imageReferences = [];
    let publicImages = [];

    // Find image references in source code
    this.findImageReferences(srcDir, imageReferences);

    // Find images in public directory
    if (fs.existsSync(publicDir)) {
      this.findPublicImages(publicDir, publicImages);
    }

    this.results.imageOptimization = {
      referencesFound: imageReferences.length,
      publicImagesFound: publicImages.length,
      unusedPublicImages: publicImages.filter(
        (img) =>
          !imageReferences.some((ref) => ref.includes(path.basename(img)))
      ),
    };

    console.log(`  ✅ Image references in code: ${imageReferences.length}`);
    console.log(`  ✅ Images in public folder: ${publicImages.length}`);
    console.log(
      `  ⚠️  Potentially unused: ${this.results.imageOptimization.unusedPublicImages.length}`
    );
  }

  // Generate performance recommendations
  generateRecommendations() {
    console.log("💡 Generating recommendations...");

    const { bundleSize, imageOptimization } = this.results;

    // Bundle size recommendations
    if (bundleSize.total > 1024 * 1024) {
      // > 1MB
      this.results.recommendations.push({
        type: "bundle",
        severity: "high",
        message:
          "Bundle size is large. Consider code splitting and tree shaking.",
        size: bundleSize.total,
      });
    }

    // Image optimization recommendations
    if (imageOptimization.unusedPublicImages?.length > 0) {
      this.results.recommendations.push({
        type: "images",
        severity: "medium",
        message: `${imageOptimization.unusedPublicImages.length} unused images found in public folder.`,
        files: imageOptimization.unusedPublicImages,
      });
    }

    if (imageOptimization.publicImagesFound > 0) {
      this.results.recommendations.push({
        type: "images",
        severity: "medium",
        message:
          "Consider moving images to a CDN or using Next.js Image optimization.",
        count: imageOptimization.publicImagesFound,
      });
    }

    // Display recommendations
    this.results.recommendations.forEach((rec, index) => {
      const icon =
        rec.severity === "high"
          ? "🔴"
          : rec.severity === "medium"
          ? "🟡"
          : "🟢";
      console.log(`  ${icon} ${rec.message}`);
    });
  }

  // Helper methods
  getDirectorySize(dirPath) {
    if (!fs.existsSync(dirPath)) return 0;

    let totalSize = 0;
    const files = fs.readdirSync(dirPath);

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        totalSize += this.getDirectorySize(filePath);
      } else {
        totalSize += stats.size;
      }
    });

    return totalSize;
  }

  findImageReferences(dir, references) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        this.findImageReferences(filePath, references);
      } else if (file.match(/\.(ts|tsx|js|jsx)$/)) {
        const content = fs.readFileSync(filePath, "utf8");
        const imageMatches = content.match(
          /["']([^"']*\.(jpg|jpeg|png|webp|avif|svg))["']/gi
        );
        if (imageMatches) {
          references.push(
            ...imageMatches.map((match) => match.replace(/["']/g, ""))
          );
        }
      }
    });
  }

  findPublicImages(dir, images) {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        this.findPublicImages(filePath, images);
      } else if (file.match(/\.(jpg|jpeg|png|webp|avif|svg)$/i)) {
        images.push(filePath);
      }
    });
  }

  formatBytes(bytes) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }

  // Save results to file
  saveResults() {
    const resultsFile = path.join(process.cwd(), "performance-analysis.json");
    fs.writeFileSync(resultsFile, JSON.stringify(this.results, null, 2));
    console.log(`📄 Results saved to: ${resultsFile}`);
  }

  // Run complete analysis
  async run() {
    console.log("🚀 Starting development performance analysis...\n");

    this.analyzeBundleSize();
    console.log("");

    this.analyzeImageOptimization();
    console.log("");

    this.generateRecommendations();
    console.log("");

    this.saveResults();

    console.log("\n✅ Performance analysis complete!");
    console.log(
      "💡 Check the recommendations above for optimization opportunities."
    );
  }
}

// Run the analyzer
if (require.main === module) {
  const analyzer = new DevPerformanceAnalyzer();
  analyzer.run().catch(console.error);
}

module.exports = DevPerformanceAnalyzer;
