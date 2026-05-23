# Personal Website Build Notes

## Project

Next.js App Router project:

```text
c:\Users\abhay\OneDrive\Desktop\Documents\personalwebsite\abhaymurthy
```

Main files edited:

```text
app/page.tsx
app/globals.css
public/
```

## Current Page Structure

The page is a one-page personal website with:

- Fixed transparent top nav
- Intro browser-style hero card
- Experience project-style card underneath
- Dark radial background glow
- Webflow-inspired chrome, borders, glare lines, and shadows

## Top Nav

Top nav links:

- Instagram
- LinkedIn
- Resume
- Email

Current links are placeholders using `href="#"`.

Styling:

- Small coding/mono-style font
- Centered
- Fixed at the top
- Transparent/blurred background
- Underline animation on hover

Relevant CSS:

```css
.site-header
.top-link
.top-link::after
.top-link-arrow
```

## Intro Browser Element

The intro card uses a Webflow-inspired browser/window frame:

- Outer outline wrapper
- Top glare line
- Inner window border
- Blurred chrome bar
- Red/yellow/green window dots
- Plus icon on the right
- Bottom fade mask
- Bouncing downward arrow

Main markup:

```tsx
<div className="browser-hero">
  <div className="browser-chrome">...</div>
  <div className="intro-panel">...</div>
</div>
```

Relevant CSS:

```css
.browser-hero
.browser-hero::before
.browser-hero::after
.browser-chrome
.browser-chrome::before
.intro-panel
.bounce-arrow
```

## Intro Content

Intro content includes:

- Square headshot
- Heading: `Hey, I'm Abhay! 👋`
- Intro paragraph
- Interest chips

Intro paragraph:

```text
I'm an incoming freshman at UC Berkeley studying Bioengineering and Business as part of the MET Program. I'm interested in neurotech, product development, and therapeutics.
```

Interest chips:

- Bioengineering
- Business
- Neurotech

Headshot asset:

```text
public/abhay_headshot.jpg
```

## Experience Card

The second card was redesigned to follow the lower Webflow project-card style:

- Outer project-card outline
- Top glare line
- Inner glare line
- Dark gradient card surface
- Hover-only blue highlight
- Experience title
- Three expandable mini experience tiles

Main markup:

```tsx
<div className="project-card-outline mt-12">
  <article className="project-card">
    ...
  </article>
</div>
```

Relevant CSS:

```css
.project-card-outline
.project-card
.project-card-color
.project-card:hover .project-card-color
.project-card-top
.project-card-title
```

## Experience Tiles

Each experience tile is a rounded mini card with:

- Circular logo
- Organization name
- Role
- Date
- Expandable dropdown details

Current entries:

### TextbooksForTomorrow 501(c)(3)

Role:

```text
Co-Founder
```

Date:

```text
Jul 2023 - Present
```

Description:

```text
~$65k worth of books donated to underprivileged kids and prisons in 4 countries. Lead team of 11 to engage 200+ volunteers. Authored, filed, advocated TX SB203 with Texas Senator Jose Menendez.
```

Logo:

```text
public/textbooks-for-tomorrow-logo.jpg
```

### Boston University

Role:

```text
Research Intern
```

Date:

```text
Jun 2025 - Aug 2025
```

Description:

```text
Modeled BDNF signaling with an ODE-based dynamical system in Python to identify a potential biomarker for neurodegeneration. Presented @ SfN 2025.
```

Logo:

```text
public/bu-logo.jpg
```

### University of Texas at Dallas

Role:

```text
Research Intern
```

Date:

```text
Jun 2024 - Aug 2024
```

Description:

```text
Constructed comprehensive dataset of Ballon d'Or top three nominees. Found four defining factors of Ballon d'Or winners.
```

Logo:

```text
public/utd-logo.png
```

Relevant CSS:

```css
.experience-list
.experience-tile
.experience-tile summary
.experience-logo
.experience-logo-image
.experience-heading
.experience-name
.experience-role
.experience-date
.experience-link
```

## Background Glow

The true page background has a top-centered radial light source.

Relevant CSS:

```css
body {
  background:
    radial-gradient(...),
    radial-gradient(...),
    linear-gradient(...);
}
```

Important controls:

- Light position: `circle at 50% -10%`
- Brightness: `rgba(255, 255, 255, ...)`
- Spread: values like `6rem`, `34rem`, `46rem`

## Manual Controls

Browser/card width:

```tsx
max-w-[860px]
```

Located in:

```text
app/page.tsx
```

Vertical position of intro/browser area:

```tsx
pt-15
```

Experience card vertical offset:

```tsx
mt-12
```

T4T logo size inside circle:

```css
.experience-logo-image.t4t-logo {
  padding: 0.18rem;
}
```

Smaller padding makes the logo bigger.

## Fonts

The browser/card areas use Webflow's `Neue Montreal` font via `@font-face`.

Relevant CSS:

```css
@font-face {
  font-family: "Neue Montreal";
  ...
}

.browser-hero {
  font-family: "Neue Montreal", var(--font-geist-sans), Arial, sans-serif;
}
```

## Verification

Common commands used:

```bash
npm run lint
npm run build
```

Local preview:

```text
http://localhost:3000/
```

