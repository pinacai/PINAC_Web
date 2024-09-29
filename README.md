## PINAC_Web

Building the Official Website of the Organization


## Figma Design

https://www.figma.com/design/jRPYU80RWHxfvz6cpYbsMI/PINAC-Web?node-id=0-1&t=yq0Lu7CfoWjVN7ge-1

## Tergated File Structure

    .
    ├── public/
    │   └── pinac.svg
    ├── src/
    │   ├── assets/
    │   ├── components/                             # common components
    │   │    ├── styles/                            # css for all different tsx file
    │   │    ├── Footer.tsx
    │   │    └── (others)
    │   ├── pages/
    │   │   ├── Home/
    │   │   │   ├── sections/                       # page sections
    │   │   │   │   ├── HeroSection.tsx
    │   │   │   │   ├── AboutSection.tsx
    │   │   │   │   ├── ProjectsSection.tsx
    │   │   │   │   └── (other sections)
    │   │   │   ├── components/                     # componets unique for this page
    │   │   │   │   ├── Navbar.tsx                  # navbar is different for each page
    │   │   │   │   └── (others)
    │   │   │   ├── styles/                         # css for all different tsx file with same name
    │   │   │   └── index.tsx
    │   │   ├── PINAC-Workspace/                    # page for our project PINAC_Workspace
    │   │   │   └──(same struct. as Home)
    │   │   ├── Docs/                               # Documentations
    │   │   │   └──(will be unique struct.)
    │   │   └── Support/
    │   │       └──(will be unique struct.)
    │   ├── App.css                                 # some global styles
    │   ├── App.tsx
    │   └── index.tsx
    |
    └── index.html
