<!-- BEGIN:nextjs-agent-rules -->

# Next.js: ALWAYS read docs before coding

Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated — the docs are the source of truth.

<!-- END:nextjs-agent-rules -->

# Tailwind v4: ALWAYS inspect installed styles

Before using Tailwind classes, inspect the repo's installed Tailwind v4 configuration and generated styles. Only use utility classes and theme values that are actually defined in this repository; do not assume colors, spacing, or other tokens exist unless they are present in the local Tailwind setup.
