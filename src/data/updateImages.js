const fs = require("fs");
const path = require("path");

// Directories to search for images
const directories = ["../../public/images/", "../../public/images/projects/"];
const baseDirectory = "/images/";

// Function to get image files from a directory recursively
const getImageFiles = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      // Recursively search in subdirectory
      results = results.concat(getImageFiles(filePath));
    } else {
      const ext = path.extname(file).toLowerCase();
      if ([".jpeg", ".jpg", ".png"].includes(ext)) {
        // Crop the path to begin with baseDirectory
        const relativePath = path.relative(
          path.join(__dirname, "../../public/images"),
          filePath
        );
        results.push(path.join(baseDirectory, relativePath));
      }
    }
  });
  return results;
};

// Collect all image files from the specified directories
let allImages = [];
directories.forEach((dir) => {
  const fullPath = path.join(__dirname, dir);
  if (fs.existsSync(fullPath)) {
    allImages = allImages.concat(getImageFiles(fullPath));
  } else {
    console.error(`Directory not found: ${fullPath}`);
  }
});

// The rest of the code remains the same
const imagesFilePath = path.join(__dirname, "Images.ts");
let imagesFileContent;
try {
  imagesFileContent = fs.readFileSync(imagesFilePath, "utf-8");
} catch (error) {
  console.error(`Failed to read Images.ts: ${error.message}`);
  process.exit(1);
}

const imagesArrayMatch = imagesFileContent.match(
  /const images = \[(.|\s)*?\];/s
);
if (imagesArrayMatch) {
  const arrayContent = imagesArrayMatch[0].match(/\[(.|\s)*?\]/s)[0];
  let jsonArrayContent = arrayContent.replace(/'/g, '"');

  try {
    jsonArrayContent = jsonArrayContent.replace(/,\s*]/, "]");
    const existingImages = JSON.parse(jsonArrayContent);
    const newImages = [...new Set([...existingImages, ...allImages])];

    const newImagesArrayString = `const images = ${JSON.stringify(
      newImages,
      null,
      2
    )};`;
    imagesFileContent = imagesFileContent.replace(
      /const images = \[(.|\s)*?\];/s,
      newImagesArrayString
    );

    try {
      fs.writeFileSync(imagesFilePath, imagesFileContent, "utf-8");
      console.log("Images array updated successfully.");
    } catch (error) {
      console.error(`Failed to write to Images.ts: ${error.message}`);
    }
  } catch (jsonError) {
    console.error(`Invalid JSON format: ${jsonError.message}`);
  }
} else {
  console.error("Failed to find the images array in Images.ts.");
}
