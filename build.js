/* Writes the content from js/content.js into index.html as real HTML,
   so search engines, LinkedIn previews and recruiter tools can read it.
   Run after editing content:   node build.js
   (Netlify / Cloudflare Pages: set the build command to "node build.js".) */
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const dir = __dirname;
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(dir, "js/content.js"), "utf8"), sandbox);
const P = sandbox.window.PROFILE;
const R = require(path.join(dir, "js/render.js"));

let html = fs.readFileSync(path.join(dir, "index.html"), "utf8");
for (const id of Object.keys(R.sections)) {
    const re = new RegExp('(<section id="' + id + '"[^>]*>)[\\s\\S]*?(</section>)');
    if (!re.test(html)) { console.warn("No <section id=\"" + id + "\"> in index.html"); continue; }
    const body = R.sections[id](P);
    html = html.replace(re, (m, open, close) => {
        let o = open.replace(/\s+hidden(?=[\s>])/, "");
        if (!body) o = o.replace(/>$/, " hidden>");
        return o + "\n" + body + "\n" + close;
    });
}
html = html.replace(/(<script type="application\/ld\+json" id="ld">)[\s\S]*?(<\/script>)/, (m, a, b) => a + "\n" + R.jsonLd(P) + "\n" + b);
fs.writeFileSync(path.join(dir, "index.html"), html);
console.log("index.html updated.");
