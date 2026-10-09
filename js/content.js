/* ============================================================
   CONTENT — edit this file to change anything on the site.
   Save, refresh the page, done. No build step needed.
   ============================================================ */

window.PROFILE = {
    name: "Danish Lakhanpal",
    // Headline uses the words recruiters search for. Keep it truthful to your current role.
    role: "IT Support & Infrastructure Technician",
    currentTitle: "IT User Support Technician (Microsoft 365 Global Admin)",
    location: "United Kingdom",
    status: "Open to onsite and hybrid IT roles in the UK",

    // Job titles you'd accept — recruiters and search engines match on these.
    targetRoles: [
        "IT Support Engineer",
        "2nd Line Support Analyst",
        "Desktop Support Engineer",
        "Onsite Technical Analyst",
        "IT Infrastructure Technician",
        "Microsoft 365 / Intune Administrator",
    ],

    intro:
        "IT support professional with 6+ years' experience across end-user support, Microsoft 365 administration, endpoint management and IT security. Sole IT contact for 500+ users across a global organisation, resolving 200+ incidents and service requests a month at 95% CSAT.",

    email: "danish.lakhanpal777@gmail.com",
    phone: "07588 816 093",
    linkedin: "", // e.g. "https://www.linkedin.com/in/your-handle" — leave "" to hide

    // Practical details hiring managers check first. Leave "" to hide a line.
    rightToWork: "",      // e.g. "Full right to work in the UK — no sponsorship required"
    noticePeriod: "",     // e.g. "One month"
    drivingLicence: "",   // e.g. "Full UK driving licence"

    // Put a general (non-tailored) CV in /assets with this exact file name.
    cvUrl: "assets/Danish_Lakhanpal_CV.pdf",

    // CONTACT FORM — create a free form at https://formspree.io, then paste
    // the ID from its endpoint (formspree.io/f/THIS_PART). While empty, the
    // form opens the visitor's email app instead.
    formspreeId: "",

    // PROFESSIONAL SUMMARY
    summary: [
        "IT Support Technician and Microsoft 365 Global Administrator with 6+ years' experience delivering 1st and 2nd line support, endpoint management and IT infrastructure services in fast-paced enterprise environments.",
        "Currently the sole IT support contact for 500+ users at Boston Limited, owning the full support lifecycle from triage to resolution and reporting to senior leadership. Led the migration from on-premises Active Directory to Microsoft Entra ID (Azure AD), achieved Cyber Essentials Plus two years running, and reduced security incidents by 25% through Microsoft Defender and Mimecast policy work.",
        "Confident supporting users at every level, including senior leadership — desk-side, remotely and at external event venues. Working towards ITIL 4 Foundation and ServiceNow ITSM.",
    ],

    // KEY SKILLS — plain keyword list for fast scanning (recruiters, ATS-style search, Google).
    keySkills: [
        { group: "IT support and service desk", items: ["1st and 2nd line support", "End-user support", "Desk-side and onsite support", "Remote support", "Executive and VIP support", "Incident management", "Service request fulfilment", "Troubleshooting", "Customer service (95% CSAT)", "Event support"] },
        { group: "ITSM and process", items: ["ITIL 4 (in progress)", "Jira Service Management", "ServiceNow (training)", "SLA management", "Change management", "Knowledge management", "CMDB and IT asset management", "Documentation"] },
        { group: "Microsoft 365 and identity", items: ["Microsoft 365 administration", "Global Administrator", "Microsoft Entra ID (Azure AD)", "Active Directory", "Cloud migration", "Exchange Online", "Microsoft Teams", "SharePoint", "Single sign-on (SSO)", "User provisioning and licensing"] },
        { group: "Endpoint management", items: ["Microsoft Intune", "Windows Autopilot", "MDM and MAM", "Compliance policies", "Conditional Access", "Windows 10/11", "macOS", "iOS", "Linux", "Apple Business Manager", "Jamf (familiar)", "Patching and software deployment"] },
        { group: "Security and compliance", items: ["Microsoft Defender", "Mimecast", "Sophos", "Email security", "Threat remediation", "Cyber Essentials Plus", "Phishing simulation", "KnowBe4", "Security awareness training", "Compliance reporting"] },
        { group: "Networking and infrastructure", items: ["TCP/IP", "DNS", "DHCP", "VPN", "Citrix", "TeamViewer", "Network troubleshooting", "CCTV and door access", "AV and meeting-room equipment", "Printers and peripherals", "Hardware deployment", "Device lifecycle"] },
        { group: "Ways of working", items: ["Stakeholder communication", "Project delivery", "Vendor coordination", "Training users", "Working independently", "Out-of-hours support"] },
    ],

    // "Core areas" list in the summary section.
    competencies: [
        { title: "Service desk and end-user support", desc: "1st and 2nd line support for 500+ users — desk-side, remote and at events — at 95% CSAT." },
        { title: "Microsoft 365 and identity", desc: "Global Administrator for Microsoft 365 and Entra ID (Azure AD); led the cloud migration from on-premises AD." },
        { title: "Endpoint management", desc: "Microsoft Intune, Windows Autopilot, compliance policies; Windows 10/11, macOS and iOS." },
        { title: "Security and compliance", desc: "Microsoft Defender, Mimecast, KnowBe4 awareness training and Cyber Essentials Plus." },
        { title: "ITSM and process", desc: "Jira workflows, SLA automation, change tracking, knowledge base; ITIL 4 in progress." },
        { title: "Infrastructure and hardware", desc: "Networking fundamentals, device lifecycle, AV, CCTV and door-access upgrades." },
    ],

    experience: [
        {
            company: "Boston Limited",
            role: "IT User Support Technician (Microsoft 365 Global Admin)",
            period: "Mar 2023 – present",
            highlights: [
                "Sole IT support contact for 500+ users across a global organisation, providing 1st and 2nd line support from triage to resolution and reporting directly to senior leadership.",
                "Resolve 200+ incidents and service requests a month while maintaining 95% CSAT, consistently meeting SLAs and keeping users updated throughout.",
                "Led the migration from on-premises Active Directory to Microsoft Entra ID (Azure AD) and took Global Administrator ownership of Microsoft 365, Intune, TeamViewer, Sophos and Mimecast, cutting user provisioning time by an estimated 30%.",
                "Achieved Cyber Essentials Plus certification two years running — a first for the organisation — by auditing and remediating gaps across endpoints, network and access control.",
                "Reduced security incidents by 25% and improved network uptime by 15% by tightening Microsoft Defender endpoint protection and Mimecast email security policies, threat-remediation workflows and compliance reporting.",
                "Deployed and configured 100+ Windows laptops and desktops for new starters and office relocations using Microsoft Intune and Windows Autopilot, standardising builds and reducing setup time per device.",
                "Designed Jira workflows for incident, change and service request management, with queues, priority rules and SLA alert automations that give leadership clear visibility of response times.",
                "Coordinated 12 software update rollouts in 2023 with the development team, with zero unplanned downtime.",
                "Managed CCTV and door-access upgrade projects end to end, including vendor coordination, delivered on time and within budget.",
                "Ran phishing simulation campaigns and KnowBe4 security awareness training for 500+ users.",
                "Built and maintained a knowledge base of hardware, software and configuration documentation that reduced repeat tickets.",
                "Earned three Microsoft Fundamentals certifications (Azure AI, Security, Power Platform) within six months of joining.",
            ],
            showFirst: 6,
        },
        {
            company: "NHS — Central London Community Healthcare",
            role: "Administrator Officer (part-time)",
            period: "Mar 2020 – May 2024",
            highlights: [
                "Processed 100% of new patient referrals in line with NHS Standard Operating Procedures, with zero procedural breaches in a regulated healthcare environment.",
                "Awarded the NHS Badge of Honour for community support during the COVID-19 pandemic.",
                "Maintained accurate records and communications between district nurses and therapists.",
            ],
        },
        {
            company: "Marquis Technology",
            role: "Test Engineer",
            period: "Feb 2020 – Jul 2020",
            highlights: [
                "Delivered pre-launch device testing for UK mobile network providers (OnePlus, Realme), covering firmware flashing, functional testing and defect reporting, with all projects completed on schedule.",
            ],
        },
        {
            company: "Polani Travels Ltd",
            role: "IT Technician",
            period: "Oct 2018 – Jul 2019",
            highlights: [
                "Managed operating system and software deployments, peripheral troubleshooting and network performance optimisation.",
                "Delivered end-user training to junior staff, reducing repeat support requests.",
            ],
        },
    ],

    /* SKILLS — each one expands to show what I did and how.
       To add one, copy an entry: { name, scope, did, how, tags } */
    skillCategories: [
        {
            category: "Microsoft 365 and identity",
            skills: [
                {
                    name: "Microsoft Entra ID (Azure AD)",
                    scope: "Global Administrator",
                    did: "Led the migration from on-premises Active Directory to Azure AD and hold Global Administrator responsibility for Microsoft 365, Intune, TeamViewer, Sophos and Mimecast.",
                    how: "Ran a phased migration — synced accounts, rebuilt groups and permissions in the cloud, re-pointed device enrolment and single sign-on apps — cutting provisioning time by an estimated 30%.",
                    tags: ["Entra ID", "Azure AD", "Active Directory migration", "SSO", "User provisioning"],
                },
                {
                    name: "Microsoft 365 administration",
                    scope: "Tenant administration",
                    did: "Administer Microsoft 365 end to end — identity, licensing, Teams, SharePoint and mail flow — for 500+ users.",
                    how: "Standardised provisioning through the cloud directory and ran coordinated rollouts, including 12 update rollouts in 2023 with zero unplanned downtime.",
                    tags: ["Exchange Online", "Teams", "SharePoint", "Licensing"],
                },
            ],
        },
        {
            category: "Endpoint management",
            skills: [
                {
                    name: "Microsoft Intune",
                    scope: "Device and app management",
                    did: "Own device enrolment, configuration and compliance across the Windows fleet as Global Administrator.",
                    how: "Deployed Autopilot builds for 100+ laptops and desktops and wrote configuration and compliance policies covering company-owned and personal devices.",
                    tags: ["MDM", "MAM", "Windows Autopilot", "Compliance policies", "Conditional Access"],
                },
                {
                    name: "Apple ecosystem",
                    scope: "Apple Business Manager · JAMF (familiar)",
                    did: "Manage Macs and iPhones through Apple Business Manager and Apple Configurator across several macOS and iOS generations.",
                    how: "Enrol iOS devices into Intune, with working familiarity of JAMF, standardising setup and keeping OS versions current.",
                    tags: ["Apple Business Manager", "Apple Configurator", "JAMF", "iOS via Intune"],
                },
                {
                    name: "Windows, macOS and Linux",
                    scope: "Desktop lifecycle",
                    did: "Own the full desktop lifecycle — build, deployment, patching and support — across Windows 10/11, macOS and Linux.",
                    how: "Standardised builds with Autopilot and keep a knowledge base of configurations and fixes that reduced repeat tickets.",
                    tags: ["Deployment", "Patching", "Knowledge base", "Peripherals"],
                },
            ],
        },
        {
            category: "Security and compliance",
            skills: [
                {
                    name: "Microsoft Defender",
                    scope: "Endpoint protection",
                    did: "Tightened endpoint protection policies, contributing to a 25% drop in security incidents and 15% better network uptime.",
                    how: "Set Defender policies for endpoint protection and compliance, routed alerts into response workflows and produced compliance reporting for senior leadership.",
                    tags: ["Endpoint protection", "Compliance", "Threat intelligence"],
                },
                {
                    name: "Mimecast",
                    scope: "Policy administrator",
                    did: "Own email security policy for the whole organisation.",
                    how: "Configure URL and attachment protection, handle threat remediation — holding, releasing, blocking and purging malicious mail — and maintain compliance reporting.",
                    tags: ["URL protection", "Attachment protection", "Threat remediation"],
                },
                {
                    name: "Cyber Essentials Plus and awareness",
                    scope: "Compliance delivery",
                    did: "Achieved Cyber Essentials Plus two years running — a first for the organisation.",
                    how: "Audited and remediated gaps across endpoints, network and access control ahead of external assessment, then ran phishing simulations and KnowBe4 training for 500+ users.",
                    tags: ["Cyber Essentials Plus", "Phishing simulation", "KnowBe4", "Auditing"],
                },
            ],
        },
        {
            category: "Networking and remote access",
            skills: [
                {
                    name: "Networking fundamentals",
                    scope: "TCP/IP · DNS · DHCP · VPN",
                    did: "Diagnose and fix connectivity, VPN and remote-access issues for office, remote and event-venue users.",
                    how: "Work through TCP/IP, DNS and DHCP troubleshooting, VPN client configuration and remote tooling to keep people productive wherever they are.",
                    tags: ["TCP/IP", "DNS", "DHCP", "VPN"],
                },
                {
                    name: "Citrix and remote support",
                    scope: "Virtual apps · remote tooling",
                    did: "Support Citrix sessions and TeamViewer-based remote support for users at every level of seniority.",
                    how: "Triage session and profile issues, adapt the approach for face-to-face, remote and venue-based support, and document fixes for reuse.",
                    tags: ["Citrix", "TeamViewer", "Remote support"],
                },
            ],
        },
        {
            category: "ITSM and process",
            skills: [
                {
                    name: "Jira Service Management",
                    scope: "Workflow design · queue management",
                    did: "Built and run the Jira workflows used for incident, change and request tracking.",
                    how: "Set up queues, priority rules and SLA alert automations so response times are visible to leadership at a glance.",
                    tags: ["Incident management", "Change management", "Service requests", "SLA automation", "Queues"],
                },
                {
                    name: "ServiceNow and ITIL 4",
                    scope: "Self-paced training in progress",
                    did: "Studying ServiceNow (Fundamentals and ITSM modules) and ITIL 4 Foundation.",
                    how: "Mapping existing Jira practice to ITIL 4 and ServiceNow equivalents, ready to onboard quickly onto any ITSM platform.",
                    tags: ["ServiceNow", "ITIL 4", "CMDB", "Ticketing"],
                },
            ],
        },
        {
            category: "Hardware and infrastructure",
            skills: [
                {
                    name: "Device deployment and lifecycle",
                    scope: "100+ devices deployed",
                    did: "Deployed and configured 100+ Windows laptops and desktops for new starters and office moves.",
                    how: "Used Autopilot to standardise builds and cut setup time, with documentation that lets new starters get going from day one.",
                    tags: ["Imaging", "Autopilot", "Asset management"],
                },
                {
                    name: "Physical security and AV",
                    scope: "CCTV · door access · AV",
                    did: "Ran CCTV and door-access upgrade projects end to end — on time and within budget.",
                    how: "Scoped, procured and coordinated the upgrades, alongside day-to-day AV, printer and peripheral support.",
                    tags: ["CCTV", "Door access", "AV equipment", "Printers"],
                },
            ],
        },
        {
            category: "Scripting and automation",
            skills: [
                {
                    name: "PowerShell",
                    scope: "Admin scripting",
                    did: "Use PowerShell for bulk user and device tasks across Microsoft 365 and Azure AD.",
                    how: "Script account provisioning, licence assignment and inventory reports in place of repetitive admin-console work.",
                    tags: ["Microsoft 365", "Bulk tasks", "Reporting"],
                },
                {
                    name: "Power Automate",
                    scope: "Workflow automation",
                    did: "Build flows for routine Microsoft 365 work — approvals, notifications and hand-offs.",
                    how: "Connect triggers across Outlook, Teams and SharePoint so reminders and escalations happen automatically.",
                    tags: ["Flows", "Approvals", "Notifications"],
                },
                {
                    name: "Web basics and GitHub",
                    scope: "HTML, CSS, JavaScript · personal projects",
                    did: "Use HTML, CSS and JavaScript for personal projects, version-controlled on GitHub.",
                    how: "This site was built with AI-assisted tools, then reviewed and edited by me and hosted from a GitHub repository.",
                    tags: ["HTML", "CSS", "JavaScript", "GitHub"],
                },
                {
                    name: "MySQL",
                    scope: "Academic and personal projects",
                    did: "Designed schemas and queried structured data for academic and personal projects.",
                    how: "Modelled entities and relationships and wrote reporting queries, reinforced by LinkedIn's Programming Foundations: Databases course.",
                    tags: ["Schema design", "Queries", "Reporting"],
                },
            ],
        },
    ],

    /* PROVIDER LOGOS — shown on each credential card. Cisco, Atlassian and
       Anthropic come from the open Simple Icons set. Microsoft, LinkedIn and
       PeopleCert aren't in that set: download their official logo from each
       company's brand/press page, save it in assets/logos with the file name
       below, and it will appear automatically. Until then a lettered tile shows. */
    providers: {
        Microsoft: { logo: "assets/logos/microsoft.svg", short: "MS" },
        Cisco: { logo: "assets/logos/cisco.svg", short: "CS" },
        PeopleCert: { logo: "assets/logos/peoplecert.svg", short: "PC" },
        Atlassian: { logo: "assets/logos/atlassian.svg", short: "AT" },
        Anthropic: { logo: "assets/logos/anthropic.svg", short: "AN" },
        "LinkedIn Learning": { logo: "assets/logos/linkedin.svg", short: "in" },
    },

    /* CERTIFICATIONS — add a verifyUrl (Credly, Microsoft Learn transcript)
       to show a "Verify" link next to the certificate. */
    certifications: [
        { title: "Azure AI Fundamentals", issuer: "Microsoft", status: "Certified", verifyUrl: "" },
        { title: "Azure Security Fundamentals", issuer: "Microsoft", status: "Certified", verifyUrl: "" },
        { title: "Power Platform Fundamentals", issuer: "Microsoft", status: "Certified", verifyUrl: "" },
        { title: "Intune & Security Fundamentals", issuer: "Microsoft", status: "Certified", verifyUrl: "" },
        { title: "Networking Essentials", issuer: "Cisco", status: "Certified", verifyUrl: "" },
        { title: "Cybersecurity Essentials", issuer: "Cisco", status: "Certified", verifyUrl: "" },
        { title: "ITIL 4 Foundation", issuer: "PeopleCert", status: "In progress", verifyUrl: "" },
        { title: "Jira Work Management Fundamentals", issuer: "Atlassian", status: "Completed", verifyUrl: "" },
        { title: "Automating Jira", issuer: "Atlassian", status: "Completed", verifyUrl: "" },
        { title: "AI Fluency: Framework & Foundations", issuer: "Anthropic", status: "Completed", verifyUrl: "" },
        { title: "Claude 101", issuer: "Anthropic", status: "Completed", verifyUrl: "" },
        { title: "Business Analyst & Project Manager Collaboration", issuer: "LinkedIn Learning", status: "Completed", verifyUrl: "" },
        { title: "Programming Foundations: Databases", issuer: "LinkedIn Learning", status: "Completed", verifyUrl: "" },
    ],

    education: [
        { degree: "MBA, Data Analytics", institution: "University of Bedfordshire", year: "2022" },
        { degree: "MSc, Advanced Computer Science", institution: "University of Hertfordshire", year: "2020" },
        { degree: "BSc, Computing and Information Systems", institution: "University of West London", year: "2017" },
    ],

    recognition: "NHS Badge of Honour for community support during the COVID-19 pandemic.",

    contactIntro:
        "Looking for a senior IT professional with hands-on experience across infrastructure, security and end-user support? Let's talk.",

    availability: [
        "Full-time, Monday to Friday",
        "Out-of-hours support when needed (evenings and weekends)",
        "UK travel for events and cover",
    ],

    /* PROJECTS — hidden while empty. Add entries like:
       { name: "", category: "", status: "", summary: "", tags: [] } */
    projects: [],
};
