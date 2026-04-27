# Aangan Boutique - Website Update Roadmap

This document outlines the plan for updating the Aangan Boutique website, including unzipping the source code, understanding the current tech stack, and implementing new features.

## Phase 1: Initial Assessment & Setup (COMPLETED)
- [x] Unzip the source code (`aanganboutique-main.zip`).
- [x] Identify the tech stack (React, Vite, TailwindCSS, Framer Motion).
- [ ] Install dependencies and run the project locally.
- [x] Map the existing sections of the website.
  - Header, Hero, Clients, About, Products (Collections), Gallery (Lookbook), Testimonials, BookingSection, Contact, MapSection, Footer.

## Phase 2: Instagram Integration (COMPLETED)
- [x] **Analyze existing Gallery component**: Replaced with `InstagramFeed.jsx`.
- [x] **Instagram API/Feed Strategy**:
  - Implemented a clean, aesthetic `InstagramFeed` component with placeholders (fetching 5 latest posts style).
- [x] **Implementation**:
  - Created `InstagramFeed.jsx`.
  - Styled posts to match the brand aesthetic.
- [x] **Placement**: Placed below the new Collection Gallery.

## Phase 3: Gallery Section (New Collection Division) (COMPLETED)
- [x] **Photo Asset Preparation**:
  - Downloaded sample high-quality photos from Google Drive to `public/gallery/`.
- [x] **Component Creation**:
  - Created `CollectionGallery.jsx` with a masonry-style layout.
- [x] **Aesthetic Placement**:
  - Placed below the "Products" section.

## Phase 4: General Improvements & Polishing (COMPLETED)
- [x] **Hero Section Update**:
  - Updated background to a high-quality brand banner (`/banner.jpg`).
  - Adjusted color scheme to better match the Maroon & Gold luxury palette.
  - Fixed HTML structure (removed empty `h1`).
- [x] **Asset Integration**:
  - Replaced multiple Unsplash placeholders with real photos from Google Drive in `Products`, `Lifestyle`, and `CollectionGallery` sections.
- [x] **Design Polishing**:
  - Improved `Clients` section by removing placeholder text and refining typography.
  - Updated `Testimonials` background for consistency.
- [x] **Contact Info Update**:
  - Verified and ensured consistent branding across components.
- [x] **Final Validation**:
  - Successfully ran `npm run build` with no errors.

## Notes & Resources
- **Google Drive Link:** [Photos for Collection](https://drive.google.com/drive/folders/1GXjegvHQjgSA14LlZmD2q0_Ro0TP7zX2)
- **Official Website:** [www.aanganboutique.in](https://www.aanganboutique.in)
- **Instagram Profile:** [_aanganboutique_](https://www.instagram.com/_aanganboutique_/)
