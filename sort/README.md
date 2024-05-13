# Run
tsc index.ts // will compile and create a .js file

# Configuration
tsc --init // will create a configuration file tsconfig.json
tsconfig.json // to change the root and out dir change:
outDir and rootDir to wanted folders

# Run and watch errors on files
tsc -w // will compile everything on /src (rooDir) to /build (outDir)
// and watch for errors

# nodemon && concurrently
- nodemon: will monitor for any changes in your source and automatically restart your process
- concurrently: will run multiple commands concurrently.