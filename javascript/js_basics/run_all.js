// Запуск всех задач подряд: node run_all.js   (или одной КТ: node run_all.js kt3)
const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const only = process.argv[2];
const folders = ["kt1", "kt2", "kt3", "kt4", "kt5"].filter((kt) => !only || kt === only);

for (const kt of folders) {
  const files = fs
    .readdirSync(path.join(__dirname, kt))
    .filter((f) => f.startsWith("task") && f.endsWith(".js"))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  for (const file of files) {
    console.log(`\n===== ${kt.toUpperCase()} / ${file} =====`);
    process.stdout.write(execFileSync(process.execPath, [path.join(__dirname, kt, file)]));
  }
}
