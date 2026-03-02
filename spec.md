# Specification

## Summary
**Goal:** Remove all price amounts, currency symbols, and price-related text from the entire website while keeping all section layouts, service names, and category headers intact.

**Planned changes:**
- In `Pricing.tsx`, strip all currency symbols (`$`, `₹`), numeric price values, and any "From $..." or "Starting at $..." strings from every service item, leaving only category headers and service names
- Audit and remove any remaining price amounts or currency symbols from all other components (`Services.tsx`, `BookingContact.tsx`, `Hero.tsx`, `Footer.tsx`, `Navigation.tsx`, `MapSection.tsx`, `FloatingActionButtons.tsx`, and any others)

**User-visible outcome:** The website displays no prices anywhere — only service category headers, service names, and descriptions are shown. All section layouts and styling remain visually unchanged.
