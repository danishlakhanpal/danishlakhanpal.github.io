/* Turns js/content.js into HTML. Used by build.js (to write real HTML into
   index.html for search engines and recruiter tools) and by the browser as a
   fallback. You shouldn't need to edit this file. */
(function (root) {
    "use strict";

    function esc(s) {
        return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
        });
    }
    function slug(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
    function head(id, title, sub) {
        return '<div class="section-head"><h2 id="' + id + '">' + esc(title) + "</h2>" + (sub ? "<p>" + esc(sub) + "</p>" : "") + "</div>";
    }
    function telHref(phone) { return "tel:+44" + phone.replace(/\s+/g, "").replace(/^0/, ""); }

    function hero(P) {
        var parts = P.name.split(" ");
        return "<div>" +
            (P.status ? '<p class="status">' + esc(P.status) + "</p>" : "") +
            '<h1 id="hero-name"><span>' + esc(parts[0]) + "</span><span>" + esc(parts.slice(1).join(" ")) + "</span></h1>" +
            '<p class="hero-role">' + esc(P.role) + "<small>" + esc(P.currentTitle) + " · " + esc(P.location) + "</small></p>" +
            '<p class="hero-intro">' + esc(P.intro) + "</p>" +
            '<div class="actions"><a class="btn primary" href="#contact">Get in touch</a>' +
            (P.cvUrl ? '<a class="btn" href="' + esc(P.cvUrl) + '" download>Download CV</a>' : "") +
            "</div></div>" +
            '<figure class="hero-photo"><img src="assets/portrait.jpg" alt="Portrait of ' + esc(P.name) + '" width="800" height="800" fetchpriority="high"><figcaption>Microsoft 365 Global Admin</figcaption></figure>';
    }

    function summary(P) {
        var practical = [
            ["Right to work", P.rightToWork], ["Notice period", P.noticePeriod], ["Driving", P.drivingLicence],
        ].filter(function (x) { return x[1]; });
        return head("summary-h", "Professional summary") +
            '<div><div class="prose">' +
            P.summary.map(function (p, i) { return "<p" + (i === 0 ? ' class="lede"' : "") + ">" + esc(p) + "</p>"; }).join("") +
            "</div>" +
            '<h3 class="subhead">Target roles</h3><p class="roles">' + P.targetRoles.map(esc).join('<span aria-hidden="true"> / </span>') + "</p>" +
            '<h3 class="subhead">Core areas</h3><ul class="look-after">' +
            P.competencies.map(function (c) { return "<li><strong>" + esc(c.title) + "</strong><span>" + esc(c.desc) + "</span></li>"; }).join("") +
            "</ul>" +
            '<div class="facts">' +
            "<div><h3>Availability</h3><ul>" + P.availability.map(function (a) { return "<li>" + esc(a) + "</li>"; }).join("") +
            practical.map(function (x) { return "<li>" + esc(x[0]) + ": " + esc(x[1]) + "</li>"; }).join("") + "</ul></div>" +
            "<div><h3>Recognition</h3><p>" + esc(P.recognition) + "</p></div>" +
            "<div><h3>Location</h3><p>" + esc(P.location) + " — open to onsite, hybrid and UK travel</p></div>" +
            "</div></div>";
    }

    function keySkills(P) {
        return head("keyskills-h", "Key skills", "Tools, platforms and practices at a glance.") +
            '<div class="kw">' +
            P.keySkills.map(function (g) {
                return '<div class="kw-group"><h3>' + esc(g.group) + '</h3><ul role="list">' +
                    g.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul></div>";
            }).join("") + "</div>";
    }

    function experience(P) {
        return head("experience-h", "Experience", "Most recent first.") +
            '<ol class="log">' +
            P.experience.map(function (job, j) {
                var first = job.showFirst || job.highlights.length;
                var items = job.highlights.map(function (h, i) {
                    return "<li" + (i >= first ? " hidden data-extra" : "") + ">" + esc(h) + "</li>";
                }).join("");
                var more = job.highlights.length > first
                    ? '<button type="button" class="more-toggle" aria-expanded="false" aria-controls="job-' + j + '" data-total="' + job.highlights.length + '">Show all ' + job.highlights.length + " highlights</button>"
                    : "";
                var current = /present/i.test(job.period);
                return '<li class="' + (current ? "current" : "") + '"><div class="when">' + esc(job.period) + "</div>" +
                    '<div class="what"><h3>' + esc(job.role) + '</h3><p class="title">' + esc(job.company) + "</p>" +
                    '<ul class="points" id="job-' + j + '">' + items + "</ul>" + more + "</div></li>";
            }).join("") +
            "</ol>";
    }

    function skills(P) {
        var cats = P.skillCategories, all = [];
        cats.forEach(function (c) { c.skills.forEach(function (s) { all.push({ s: s, cat: c.category }); }); });
        return '<div class="side">' + head("skills-h", "Technical skills", "Pick a category, search, or open any skill to see what I did and how.") +
            '<ul class="side-menu" role="list" aria-label="Skill categories">' +
            '<li><button type="button" aria-pressed="true" data-cat="all"><span>All skills</span><span class="count">' + all.length + "</span></button></li>" +
            cats.map(function (c) {
                return '<li><button type="button" aria-pressed="false" data-cat="' + slug(c.category) + '"><span>' + esc(c.category) + '</span><span class="count">' + c.skills.length + "</span></button></li>";
            }).join("") +
            "</ul></div>" +
            '<div class="skills-main">' +
            '<label class="search"><span class="sr">Search skills</span><input type="search" placeholder="Search skills — try “Intune” or “security”" autocomplete="off"></label>' +
            '<p class="result-count" aria-live="polite">' + all.length + " skills in all categories</p>" +
            '<div class="skill-grid">' +
            all.map(function (x) {
                var s = x.s;
                var text = [s.name, s.scope, s.did, s.how, x.cat].concat(s.tags || []).join(" ").toLowerCase();
                return '<details class="skill-card" data-cat="' + slug(x.cat) + '" data-text="' + esc(text) + '"><summary>' +
                    '<span class="n">' + esc(s.name) + '</span><span class="s">' + esc(s.scope) + '</span><span class="tag">' + esc(x.cat) + "</span></summary>" +
                    '<div class="body"><h4>What I did</h4><p>' + esc(s.did) + "</p><h4>How</h4><p>" + esc(s.how) + "</p>" +
                    (s.tags && s.tags.length ? '<p class="tags">' + s.tags.map(esc).join(", ") + "</p>" : "") +
                    "</div></details>";
            }).join("") +
            '</div><p class="empty" hidden>No skills match that search.</p></div>';
    }

    function projects(P) {
        if (!P.projects || !P.projects.length) return "";
        return head("projects-h", "Projects", "Things I'm building outside the day job.") +
            '<ul class="projects">' + P.projects.map(function (p) {
                return "<li><h3>" + esc(p.name) + '</h3><p class="meta">' + esc([p.category, p.status].filter(Boolean).join(", ")) + "</p>" +
                    "<p>" + esc(p.summary) + "</p>" + (p.tags && p.tags.length ? '<p class="meta">' + p.tags.map(esc).join(", ") + "</p>" : "") + "</li>";
            }).join("") + "</ul>";
    }

    function credentials(P) {
        var provs = P.providers || {};
        function logo(issuer) {
            var p = provs[issuer] || {};
            var short = p.short || issuer.slice(0, 2);
            return '<span class="logo">' +
                (p.logo ? '<img src="' + esc(p.logo) + '" alt="' + esc(issuer) + ' logo" loading="lazy" onerror="this.remove()">' : "") +
                '<span class="mono" aria-hidden="true">' + esc(short) + "</span></span>";
        }
        return head("credentials-h", "Certifications and education") +
            "<div>" +
            '<div class="highlight"><span class="badge">2 years running</span><div><h3>Cyber Essentials Plus</h3>' +
            "<p>Delivered for Boston Limited by auditing and remediating gaps across endpoints, network and access control — the first time the organisation had achieved it.</p></div></div>" +
            '<h3 class="subhead first">Certifications</h3>' +
            '<ul class="cert-grid" role="list">' +
            P.certifications.map(function (c) {
                var cls = /certified/i.test(c.status) ? "certified" : /progress/i.test(c.status) ? "progress" : "done";
                return '<li class="cert"><div class="cert-top">' + logo(c.issuer) +
                    '<span class="pill ' + cls + '">' + esc(c.status) + "</span></div>" +
                    "<h4>" + esc(c.title) + '</h4><p class="issuer">' + esc(c.issuer) +
                    (c.verifyUrl ? ' · <a href="' + esc(c.verifyUrl) + '" target="_blank" rel="noopener">Verify</a>' : "") +
                    "</p></li>";
            }).join("") +
            "</ul>" +
            '<h3 class="subhead">Education</h3><ul class="edu-list">' +
            P.education.map(function (e) {
                return "<li><span><strong>" + esc(e.degree) + "</strong> — " + esc(e.institution) + '</span><span class="yr">' + esc(e.year) + "</span></li>";
            }).join("") +
            "</ul></div>";
    }

    function contact(P) {
        return head("contact-h", "Contact", P.contactIntro) +
            '<div class="contact-grid">' +
            '<div class="direct"><dl>' +
            '<div><dt>Email</dt><dd><a href="mailto:' + esc(P.email) + '">' + esc(P.email) + "</a></dd></div>" +
            (P.phone ? '<div><dt>Phone</dt><dd><a href="' + telHref(P.phone) + '">' + esc(P.phone) + "</a></dd></div>" : "") +
            (P.linkedin ? '<div><dt>LinkedIn</dt><dd><a href="' + esc(P.linkedin) + '" target="_blank" rel="noopener">View profile</a></dd></div>' : "") +
            "<div><dt>Location</dt><dd>" + esc(P.location) + "</dd></div>" +
            "</dl>" +
            (P.cvUrl ? '<a class="btn" href="' + esc(P.cvUrl) + '" download>Download CV</a>' : "") +
            "</div>" +
            '<form class="contact" novalidate>' +
            '<div class="row"><label>Your name<input name="name" autocomplete="name" required></label>' +
            '<label>Your email<input name="email" type="email" autocomplete="email" required></label></div>' +
            '<label>Message<textarea name="message" required></textarea></label>' +
            '<label class="hp" aria-hidden="true">Leave this empty<input name="_gotcha" tabindex="-1" autocomplete="off"></label>' +
            '<div><button class="btn primary" type="submit">Send message</button></div>' +
            '<p class="form-note" role="status" aria-live="polite"></p>' +
            "</form></div>";
    }

    /* schema.org structured data — lets Google and recruiter tools read the
       profile as data (name, job title, skills, credentials, education). */
    function jsonLd(P) {
        var skills = [];
        P.keySkills.forEach(function (g) { g.items.forEach(function (i) { skills.push(i); }); });
        var data = {
            "@context": "https://schema.org",
            "@type": "Person",
            name: P.name,
            jobTitle: P.currentTitle,
            description: P.intro,
            email: "mailto:" + P.email,
            telephone: P.phone ? "+44 " + P.phone.replace(/^0/, "") : undefined,
            address: { "@type": "PostalAddress", addressCountry: "GB" },
            worksFor: { "@type": "Organization", name: P.experience[0].company },
            knowsAbout: skills,
            alumniOf: P.education.map(function (e) { return { "@type": "CollegeOrUniversity", name: e.institution }; }),
            hasCredential: P.certifications.filter(function (c) { return !/progress/i.test(c.status); }).map(function (c) {
                return { "@type": "EducationalOccupationalCredential", name: c.title, recognizedBy: { "@type": "Organization", name: c.issuer } };
            }),
            sameAs: P.linkedin ? [P.linkedin] : undefined,
        };
        return JSON.stringify(data, null, 2).replace(/</g, "\\u003c");
    }

    var sections = {
        top: hero, summary: summary, keyskills: keySkills, experience: experience,
        skills: skills, projects: projects, credentials: credentials, contact: contact,
    };

    var api = { sections: sections, jsonLd: jsonLd, esc: esc };
    if (typeof module !== "undefined" && module.exports) module.exports = api;
    else root.RENDER = api;
})(typeof window !== "undefined" ? window : this);
