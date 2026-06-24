---
name: Scientific Hope
colors:
  surface: '#f7fafb'
  surface-dim: '#d7dadb'
  surface-bright: '#f7fafb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f5'
  surface-container: '#ebeeef'
  surface-container-high: '#e5e9ea'
  surface-container-highest: '#e0e3e4'
  on-surface: '#181c1d'
  on-surface-variant: '#3f484a'
  inverse-surface: '#2d3132'
  inverse-on-surface: '#eef1f2'
  outline: '#6f797b'
  outline-variant: '#bfc8cb'
  surface-tint: '#1a6774'
  primary: '#005460'
  on-primary: '#ffffff'
  primary-container: '#226d7a'
  on-primary-container: '#a8ecfb'
  inverse-primary: '#8dd1e0'
  secondary: '#8a486f'
  on-secondary: '#ffffff'
  secondary-container: '#ffaeda'
  on-secondary-container: '#7c3d63'
  tertiary: '#6e4212'
  on-tertiary: '#ffffff'
  tertiary-container: '#8a5928'
  on-tertiary-container: '#ffdbbd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a9edfc'
  primary-fixed-dim: '#8dd1e0'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#ffd8ea'
  secondary-fixed-dim: '#ffaeda'
  on-secondary-fixed: '#3a0329'
  on-secondary-fixed-variant: '#6f3157'
  tertiary-fixed: '#ffdcc0'
  tertiary-fixed-dim: '#f9ba80'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#683c0d'
  background: '#f7fafb'
  on-background: '#181c1d'
  surface-variant: '#e0e3e4'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.01em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

This design system centers on a "Humanist Technical" aesthetic. It balances the cold, exacting precision of high-stakes scientific research with the warm, empathetic heartbeat of its mission. Inspired by modern moonshot initiatives, the style is rooted in **Minimalism** with a focus on expansive whitespace, allowing complex data and urgent narratives to breathe.

The visual language avoids unnecessary decoration, opting instead for structural clarity and rhythmic layouts. The atmosphere is one of focused urgency—serious enough for laboratory environments, yet soft enough to convey hope and the personal story behind the research. Elements are crisp and deliberate, suggesting a product where every detail has been scrutinized for accuracy and impact.

## Colors

The palette is anchored by **Paper White** and a range of **Neutral Grays**, creating a high-key environment that feels sterile yet accessible. The primary **Deep Teal** (#226D7A) provides the necessary weight for scientific authority and institutional trust. 

The **Signature Pink** (#F9A8D4) is used sparingly as a "humanity layer"—an intentional break from the technical monotony that highlights key moments of impact, progress, or personal storytelling. **Ice Blue** is utilized for data visualization and subtle background tiers, maintaining a cool, professional temperature across the interface.

## Typography

The typographic hierarchy prioritizes legibility and a systematic "lab report" feel. **Hanken Grotesk** is used for headlines to provide a sophisticated, geometric, and clear aesthetic that balances modern authority with approachability. **Inter** serves as the workhorse for body copy, chosen for its neutral tone and exceptional readability in dense research contexts.

To reinforce the scientific nature of the initiative, **JetBrains Mono** is introduced for small labels, metadata, and status indicators. This monospaced touch suggests data-driven precision. Use all-caps for labels to create clear visual anchors in complex layouts.

## Layout & Spacing

The design system utilizes a **12-column fixed grid** for desktop, centered on the screen to evoke a sense of stability and focus. On mobile, the system transitions to a 4-column fluid layout. 

Spacing is generous, following an 8px linear scale. Large vertical "voids" (64px+) are encouraged between major sections to emphasize the importance of each piece of information. Layouts should be asymmetrical where possible—for example, using a 4-column sidebar for metadata alongside an 8-column main content area—to mimic the structure of a modern scientific journal or high-end editorial.

## Elevation & Depth

Depth is achieved through **Tonal Layering** rather than heavy shadows. Most surfaces are flat, using subtle shifts between White, Ice Blue, and Light Gray to define hierarchy.

When elevation is required for interactivity (e.g., cards or modals), use **Low-Contrast Outlines** (1px solid #E2E8F0) combined with very soft, high-diffusion shadows. Shadows should have a 10% opacity of the Deep Teal primary color to create a "tinted depth" that feels more integrated into the brand's atmosphere than generic black shadows.

## Shapes

The shape language is **Soft (0.25rem)**. This slight rounding takes the "clinical edge" off the design, making the high-stakes science feel approachable and human. 

Larger containers like primary cards or featured imagery can use `rounded-lg` (0.5rem) to create a distinct containerized look. Form inputs and action buttons should remain at the base soft setting to maintain a look of professional discipline. Avoid fully circular "pill" shapes unless used for small status tags.

## Components

### Buttons
Primary buttons use the Deep Teal background with White text. Secondary buttons use a Ghost style (1px border, no fill). The Signature Pink is reserved for high-impact Call-to-Actions that represent "The Mission" or "Donate/Join."

### Cards
High-fidelity research cards feature a 1px Ice Blue border, a white background, and a "metadata header" using JetBrains Mono in all-caps. Content within cards should have significant internal padding (min 32px) to maintain the minimalist aesthetic.

### Navigation
The top navigation is persistent but transparent, only gaining a subtle frosted background blur (Glassmorphism) when scrolling over content. Links use the geometric weights of Hanken Grotesk or medium weight Inter depending on hierarchy.

### Data Inputs
Input fields are minimalist, utilizing a bottom-border-only focus state in Deep Teal. Labels are always visible above the field in the Label-Caps style to ensure accessibility in high-pressure data entry or reading environments.

### Progress Indicators
Scientific progress is visualized through thin, sleek horizontal bars. Use the Signature Pink to represent the "current status" of a goal, contrasting against a light gray track.