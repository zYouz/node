let stdout = 0

for (let i = 2; i < process.argv.length; i++) {
    stdout += Number(process.argv[i])
}

console.log(stdout)