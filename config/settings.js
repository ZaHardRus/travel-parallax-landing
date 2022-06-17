const isProd = process.argv.includes("--production")
const isDev = !isProd
export default {
    isProd,
    isDev,
    htmlmin: {
        collapseWhitespace: isProd
    },
    imagemin: {
        verbose: true
    },
    pug: {
        pretty: isDev,
    },
    webpack: {
        mode: isProd ? 'production' : 'development'
    },
    fonter: {
        formats: ["ttf", "woff", "eot", "svg"]
    }
}