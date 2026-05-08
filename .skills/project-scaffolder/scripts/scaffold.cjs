const fs = require('fs');

const dirs = ['assets/img', 'team', 'docs', 'src/css', 'src/js'];

console.log("🚀 Scaffolding new project structure...");

dirs.forEach(dir => {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
        console.log(`✅ Created: ${dir}`);
    } else {
        console.log(`ℹ️ Already exists: ${dir}`);
    }
});

console.log("\n✨ Scaffolding complete.");
