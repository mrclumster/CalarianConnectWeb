const { execSync } = require('child_process');

try {
    const status = execSync('git status --short').toString();
    const diff = execSync('git diff --cached').toString() || execSync('git diff').toString();
    
    if (!status) {
        console.log("No changes detected in the repository.");
    } else {
        console.log("### Git Status\n");
        console.log(status);
        console.log("\n### Git Diff\n");
        console.log(diff || "(No diff available - files might be untracked)");
    }
} catch (error) {
    console.error("Error: Not a git repository or git not found.");
}
