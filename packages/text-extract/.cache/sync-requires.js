const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/dennygeorge/Documents/Tattle/web-apps/packages/text-extract/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/dennygeorge/Documents/Tattle/web-apps/packages/text-extract/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/dennygeorge/Documents/Tattle/web-apps/packages/text-extract/src/pages/index.js"))),
  "component---src-pages-learn-more-js": hot(preferDefault(require("/Users/dennygeorge/Documents/Tattle/web-apps/packages/text-extract/src/pages/learn-more.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/dennygeorge/Documents/Tattle/web-apps/packages/text-extract/src/pages/page-2.js"))),
  "component---src-pages-ui-guide-js": hot(preferDefault(require("/Users/dennygeorge/Documents/Tattle/web-apps/packages/text-extract/src/pages/ui-guide.js"))),
  "component---src-pages-learn-mdx": hot(preferDefault(require("/Users/dennygeorge/Documents/Tattle/web-apps/packages/text-extract/src/pages/learn.mdx")))
}

