import react from '@vitejs/plugin-react'

export default {
    plugins:
    [
        react()
    ],
    root: "src/",
    publicDir: "../public/",
    base: "./",
    build:
    {
        outDir: "../dist",
        emptyOutDir: true,
        sourcemap: true
    }
}