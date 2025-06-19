# Sujit S Portfolio

A modern, professional AI Engineer portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion.

## Features

-   **Dynamic Sections:**
    -   Timeline, Work Experience, Projects, Certificates, Education, Prototypes, Paper Publications, Technical Skills
-   **Modern UI:**
    -   Animated headings, smooth gradients, interactive icons, modals for project details, and responsive design
-   **Resume Download:**
    -   Prominent button to download resume (PDF)
-   **Project Cards:**
    -   Animated, image-based, with inline details and technology tags
-   **Prototypes Section:**
    -   Dedicated area for IoT and hardware projects
-   **Paper Publications:**
    -   Includes image and PDF download for published papers
-   **Accessibility & Performance:**
    -   Semantic HTML, keyboard navigation, optimized images, and smooth scrolling

## Getting Started

1. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

2. **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

3. **Build for production:**
    ```bash
    npm run build
    # or
    yarn build
    ```

## Customization

-   Update your details, sections, and content in `src/app/page.tsx`.
-   Place your resume as `public/resume.pdf` and paper as `public/paper.pdf`.
-   Add images to `public/images/` and update references in your project data.
-   Adjust colors and fonts in `tailwind.config.ts` and `globals.css` as desired.

## File Structure

-   `src/app/page.tsx` — Main portfolio content and layout
-   `src/components/` — Custom React components (icons, UI)
-   `public/` — Static assets (images, resume, paper, icons)

## License

MIT
