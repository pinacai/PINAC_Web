<div align="center">

<h1 style="border-bottom: none">
    <b><a href="https://github.com/pinacai">PINAC Web</a></b>
</h1>

![Repo Banner](https://github.com/user-attachments/assets/17d588ca-48ff-4afd-ae15-f82d52803cc6)

<br>
<be>

![Star Badge](https://img.shields.io/static/v1?label=%F0%9F%8C%9F&message=If%20Useful&style=style=flat&color=BC4E99)
![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)
[![View Repositories](https://img.shields.io/badge/View-Our_Repositories-blue?logo=GitHub)](https://github.com/pinacai?tab=repositories)

Building the Official Website of the Organization

![](https://skillicons.dev/icons?i=react,vite,typescript)

</div>


## ✍ Figma Design

https://www.figma.com/design/jRPYU80RWHxfvz6cpYbsMI/PINAC-Web?node-id=0-1&t=yq0Lu7CfoWjVN7ge-1


## 📂 File Structure

    .
    ├── src/
    │   ├── assets/
    │   ├── components/                             # common components
    │   │    ├── styles/                            # css for all different tsx file
    │   │    ├── Footer.tsx
    │   │    └── (others)
    |   |
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
    │   │   │   ├── styles/                         # css for all different tsx files with the same name
    │   │   │   └── index.tsx
    |   |   |
    │   │   ├── PINAC-Workspace/                    # page for our project PINAC_Workspace
    │   │   │   └──(same struct. as Home)
    │   │   └── Docs/                               # Documentations
    │   │       └──(will be unique struct.)
    │   ├── App.css                                 # some global styles
    │   ├── App.tsx
    │   └── index.tsx
    └── index.html


## 🚀 Getting Started

1. Clone the Repository

   ```bash
   git clone https://github.com/pinacai/PINAC_Web.git && cd PINAC_Web
   ```

2. Install Node dependencies

   ```bash
   npm install
   ```

3. Start the App
   ```bash
   npm run dev
   ```


## 🎉 Contributing

I highly welcome contributions! You can contribute to this project in different ways: _*Build design on Figma*_, _*Contribute to the codebase*_, or _*provide functionality ideas*_!


## 📄 License

PINAC Web is licensed under the **MIT License**. See the <a href="https://github.com/pinacai/PINAC_Web/blob/main/LICENSE">LICENSE</a> file for more details.
