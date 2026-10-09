/* Page behaviour: filters, toggles, contact form. Content comes from
   js/content.js — run `node build.js` after editing it (see README). */
(function () {
    "use strict";
    var P = window.PROFILE, R = window.RENDER;
    if (!P || !R) return;
    function $(id) { return document.getElementById(id); }
    function esc(s) { return R.esc(s); }

    /* Fallback: if build.js hasn't been run, draw any empty section from content.js. */
    Object.keys(R.sections).forEach(function (id) {
        var el = $(id);
        if (el && !el.innerHTML.trim()) {
            var html = R.sections[id](P);
            if (html) { el.innerHTML = html; el.hidden = false; }
        }
    });

    /* ---------- Experience: show all highlights ---------- */
    Array.prototype.forEach.call(document.querySelectorAll(".more-toggle"), function (btn) {
                btn.addEventListener("click", function () {
            var open = btn.getAttribute("aria-expanded") === "true";
            Array.prototype.forEach.call(btn.previousElementSibling.querySelectorAll("[data-extra]"), function (li) { li.hidden = open; });
            btn.setAttribute("aria-expanded", String(!open));
            btn.textContent = open ? "Show all " + btn.dataset.total + " highlights" : "Show fewer";
        });
    });

    /* ---------- Skills: category menu + search ---------- */
    var menuBtns = document.querySelectorAll(".side-menu button");
    var search = document.querySelector("#skills input[type=search]");
    var cards = document.querySelectorAll(".skill-card");
    var countEl = document.querySelector(".result-count");
    var activeCat = "all";
    function applySkills() {
        var q = search.value.trim().toLowerCase(), shown = 0;
        Array.prototype.forEach.call(cards, function (c) {
            var ok = (activeCat === "all" || c.dataset.cat === activeCat) && (!q || c.dataset.text.indexOf(q) !== -1);
            c.hidden = !ok; if (ok) shown++;
        });
        var label = activeCat === "all" ? "all categories" : document.querySelector('.side-menu button[data-cat="' + activeCat + '"] span').textContent;
        countEl.textContent = shown + (shown === 1 ? " skill" : " skills") + " in " + label;
        document.querySelector("#skills .empty").hidden = shown !== 0;
    }
    Array.prototype.forEach.call(menuBtns, function (b) {
        b.addEventListener("click", function () {
            activeCat = b.dataset.cat;
            Array.prototype.forEach.call(menuBtns, function (x) { x.setAttribute("aria-pressed", String(x === b)); });
            applySkills();
        });
    });
    search.addEventListener("input", applySkills);
    applySkills();

    /* ---------- Contact form ---------- */
    var form = document.querySelector("form.contact");
    var note = form.querySelector(".form-note");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var f = form.elements;
        var d = { name: f.namedItem("name").value.trim(), email: f.namedItem("email").value.trim(), message: f.namedItem("message").value.trim() };
        note.className = "form-note";
        if (!d.name || !d.email || !d.message) { note.textContent = "Please fill in your name, email and message."; note.classList.add("err"); return; }
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email)) { note.textContent = "That email address doesn't look right — please check it."; note.classList.add("err"); return; }
        if (f.namedItem("_gotcha").value) return;

        if (!P.formspreeId) {
            var url = "mailto:" + P.email + "?subject=" + encodeURIComponent("Portfolio enquiry from " + d.name) +
                "&body=" + encodeURIComponent(d.message + "\n\n— " + d.name + " (" + d.email + ")");
            window.location.href = url;
            note.textContent = "Your email app should open with the message ready to send.";
            return;
        }
        var btn = form.querySelector("button[type=submit]");
        btn.disabled = true; btn.textContent = "Sending…";
        fetch("https://formspree.io/f/" + encodeURIComponent(P.formspreeId), {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(d),
        }).then(function (r) {
            if (!r.ok) throw new Error();
            form.reset();
            note.textContent = "Message sent. I'll reply by email.";
            note.classList.add("ok");
        }).catch(function () {
            note.innerHTML = 'Your message didn\'t send. Please email <a href="mailto:' + esc(P.email) + '">' + esc(P.email) + "</a> instead.";
            note.classList.add("err");
        }).then(function () { btn.disabled = false; btn.textContent = "Send message"; });
    });

    /* ---------- Chrome ---------- */
    $("year").textContent = new Date().getFullYear();
    var bar = document.querySelector(".topbar");
    var onScroll = function () { bar.classList.toggle("scrolled", window.scrollY > 8); };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

    if ("IntersectionObserver" in window) {
        var links = {};
        Array.prototype.forEach.call(document.querySelectorAll(".nav-links a"), function (a) { links[a.getAttribute("href").slice(1)] = a; });
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting && links[en.target.id]) {
                    Object.keys(links).forEach(function (k) { links[k].removeAttribute("aria-current"); });
                    links[en.target.id].setAttribute("aria-current", "true");
                }
            });
        }, { rootMargin: "-45% 0px -50% 0px" });
        Object.keys(links).forEach(function (id) { var el = $(id); if (el) io.observe(el); });
    }
})();
