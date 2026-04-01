# Design System Strategy: Neon Noir Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Neon Noir Editorial."** This is not a standard SaaS template; it is a high-fidelity digital experience that treats the browser as a premium physical canvas. We are merging the clinical precision of developer-focused interfaces with the bold, unapologetic scale of high-end fashion editorial.

To move beyond the "out-of-the-box" look, this system rejects rigid, boxed-in layouts. Instead, it utilizes **Intentional Asymmetry**—where content is weighted heavily to one side of the grid to create dynamic energy—and **Tonal Depth**, where the "infinite void" of the black background is sculpted using light and layers rather than lines.

## 2. Colors & Surface Architecture
The palette is built on a foundation of absolute darkness, punctuated by the high-frequency vibration of Fuchsia.

### The Palette
*   **Neutral Foundation:** `background` (#131313) and `surface` (#131313) provide the base. For a "True Black" landing page experience, use `#000000` for hero sections, transitioning into `surface_container_lowest` (#0e0e0e) for secondary content.
*   **The Primary Pulse:** `primary_container` (#FF00FF) is our signature fuchsia. It should be used sparingly but with maximum impact—like a neon sign in a dark alley.
*   **Tertiary Accents:** `tertiary` (#c3c0ff) provides a soft, periwinkle contrast to the fuchsia, perfect for secondary tags or subtle "glow" highlights.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections. We define space through background shifts.
*   **Execution:** A section on `surface` (#131313) should transition to `surface_container_low` (#1b1b1b) to signal a shift in content. The eye should perceive the edge through color change, not a stroke.

### Surface Hierarchy & Nesting
Treat the UI as a series of nested, translucent layers. 
*   **Level 0:** `background` (#131313).
*   **Level 1 (Cards):** `surface_container` (#1f1f1f).
*   **Level 2 (In-Card Accents):** `surface_container_high` (#2a2a2a).
By stacking these specific tokens, you create a natural visual lift that feels architectural rather than flat.

### The "Glass & Gradient" Rule
To achieve the "High-Tech" aesthetic, use Glassmorphism for floating elements (like Navbars or Hover Cards). Apply `surface_variant` at 40% opacity with a `24px` backdrop blur. 
*   **Signature Texture:** Use a linear gradient for main CTAs transitioning from `primary_container` (#FF00FF) to `secondary_container` (#5d03ca) at a 135-degree angle. This provides a "liquid light" effect.

## 3. Typography
The typographic voice is "Aggressive Sophistication." We pair the geometric precision of **Space Grotesk** with the utilitarian clarity of **Inter**.

*   **Display (Space Grotesk):** Use `display-lg` (3.5rem) for hero statements. Tighten letter-spacing to `-0.04em`. These should feel like monolithic architecture.
*   **Headlines (Space Grotesk):** `headline-lg` (2rem) uses a bold weight to command attention. 
*   **Body (Inter):** `body-lg` (1rem) is the workhorse. We prioritize legibility here with a generous line-height (1.6) to provide breathing room against the high-contrast fuchsia accents.
*   **Labels (Inter):** `label-md` (0.75rem) should be used for metadata, often in ALL CAPS with `0.1em` tracking to evoke a "technical manual" or "HUD" feel.

## 4. Elevation & Depth
In a dark mode system, shadows don't create depth—light does.

*   **The Layering Principle:** Avoid shadows on static cards. Use the Tonal Scale (`surface_container_lowest` through `highest`).
*   **Ambient Glow (Fuchsia Shadow):** When a floating element requires a shadow, use a "Glow Shadow" instead of black. Use the `primary` token (#ffabf3) at 10% opacity with a `48px` blur. This simulates the way neon light bleeds into the atmosphere.
*   **The "Ghost Border" Fallback:** If a border is required for input fields or buttons, use `outline_variant` at 20% opacity. 100% opaque borders are forbidden.
*   **Inner Glow:** For primary buttons, apply a 1px inner-stroke of `primary_fixed` (#ffd7f5) to give the edge a "lit from within" appearance.

## 5. Components

### Buttons
*   **Primary:** `primary_container` (#FF00FF) background, `on_primary_container` (#510051) text. **Shape:** `DEFAULT` (0.25rem) for a sharp, technical look.
*   **Secondary:** Ghost style. `outline_variant` border at 20%, `on_surface` text. On hover, background shifts to `surface_container_highest`.

### Cards & Lists
*   **Rule:** No dividers. Use `spacing.8` (2.75rem) to separate list items. 
*   **Interaction:** On hover, a card should shift from `surface_container` to `surface_container_high` and receive a `primary` ambient glow.

### Input Fields
*   **Default:** `surface_container_lowest` background, `outline_variant` (20%) border.
*   **Focus State:** Border becomes `primary` (#ffabf3) with a subtle 4px blur "halo."

### Decorative Elements (SaaS HUD)
*   Include "Data-Points"—tiny `label-sm` text elements placed in corners of sections using `ui-monospace` to simulate a technical interface.
*   **Fuchsia Accents:** Use `1px` vertical lines (using the `primary` token) to lead the user's eye between sections, acting as "optical wires."

## 6. Do's and Don'ts

### Do:
*   **Embrace the Void:** Use the `24` (8.5rem) spacing token between major sections to let the high-impact typography breathe.
*   **Use Subtle Gradients:** Apply a faint radial gradient (from `surface_container_low` to `background`) behind key hero elements to create a sense of focal light.
*   **Type as Image:** Treat `display-lg` text as a visual element. Overlap it slightly with `surface` containers to create depth.

### Don't:
*   **Don't use Grey Shadows:** On a #000000 background, grey shadows look like "mud." Use tonal shifts or colored glows.
*   **Don't use Rounded Corners:** Avoid `full` or `xl` radii. Stick to `DEFAULT` (0.25rem) or `sm` (0.125rem). The aesthetic is sharp, futuristic, and precise—not "bubbly."
*   **Don't Overuse Fuchsia:** If everything is fuchsia, nothing is important. Use it for "The Action" and "The Highlight" only.