const fs = require('fs');
const path = require('path');

// Function to copy directory recursively
function copyDir(src, dest) {
    // Create destination directory if it doesn't exist
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    // Read source directory
    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            // Recursively copy subdirectories
            copyDir(srcPath, destPath);
        } else {
            // Copy files
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied: ${srcPath} -> ${destPath}`);
        }
    }
}

// Function to copy file
function copyFile(src, dest) {
    // Create destination directory if it doesn't exist
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }
    
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${src} -> ${dest}`);
}

// Build process
try {
    console.log('Starting build process...');
    
    // Clean docs directory
    const docsDir = path.join(__dirname, 'docs');
    if (fs.existsSync(docsDir)) {
        fs.rmSync(docsDir, { recursive: true, force: true });
        console.log('Cleaned docs directory');
    }
    
    // Copy src to docs
    copyDir(path.join(__dirname, 'src'), docsDir);
    
    console.log('Build completed successfully!');
    console.log('Files copied to docs directory for GitHub Pages deployment.');
    
} catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
}