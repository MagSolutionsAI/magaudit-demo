# MagAudit demo

A small Next.js shop used to show what [MagAudit](https://magsolutionsai.com) does on a pull request.

Open pull request **"Add payments and file uploads"** to see the check in action: it flags a
hardcoded AWS key, a Stripe secret exposed to the browser, and a dependency that does not exist
on npm, each with the file, the line and the fix.

**Everything in this repository is fake.** The keys are made up, the package in the pull request
does not exist, and nothing here is deployed. Do not copy any of it.

- Install MagAudit: https://github.com/apps/magaudit-agent
- How it works for agencies: https://magsolutionsai.com/agencies.html
