# Specification

## Summary
**Goal:** Replace all occurrences of the old phone number with +91 9917417861 across the entire website.

**Planned changes:**
- Update Navigation.tsx to display +91 9917417861 and use `tel:+919917417861`
- Update Hero.tsx Call Now button to `tel:+919917417861` and WhatsApp button to `https://wa.me/919917417861`
- Update FloatingActionButtons.tsx Call href to `tel:+919917417861` and WhatsApp href to `https://wa.me/919917417861`
- Update BookingContact.tsx displayed phone number and post-submission WhatsApp CTA link to `https://wa.me/919917417861`
- Update Footer.tsx phone display and any call/WhatsApp links to the new number
- Update MapSection.tsx contact phone display to +91 9917417861
- Remove every trace of the old number (96904 17361 / 919690417361) from all frontend source files

**User-visible outcome:** All phone and WhatsApp links across the website use the new number +91 9917417861, and tapping any WhatsApp or call button correctly connects to the updated number.
