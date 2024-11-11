<div align="center">

![header](https://github.com/user-attachments/assets/d9d7c863-96c0-4cbf-bc3c-617d05664c01)

<br>
<be>

![Star Badge](https://img.shields.io/static/v1?label=%F0%9F%8C%9F&message=If%20Useful&style=style=flat&color=BC4E99)
![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)
[![View Repositories](https://img.shields.io/badge/View-Our_Repositories-blue?logo=GitHub)](https://github.com/pinacai?tab=repositories)

Building the Website Page for PINAC Workspace

![](https://skillicons.dev/icons?i=nextjs,typescript,firebase)

</div>

_We are seeking collaboration to design the website on Figma._

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
    │   │   │   │   ├── AppPreview.tsx
    │   │   │   │   ├── FeatureSection.tsx
    │   │   │   │   └── (other sections)
    │   │   │   ├── components/                     # componets unique for this page
    │   │   │   │   ├── Navbar.tsx                  # navbar is different for each page
    │   │   │   │   └── (others)
    │   │   │   ├── styles/                         # css for all different tsx files with the same name
    │   │   │   └── index.tsx
    |   |   |
    │   │   ├── Profile/                            # same file structure as Home
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

We highly welcome contributions! Please follow the steps if you're interested.

1. Star the repository
2. Fork the repository on GitHub.
3. Clone the project to your machine.
4. create your own branch.
5. Commit changes to your branch.
6. Push your work back up to your fork.
7. Submit a Pull request so that we can review your changes

Also you can contribute in other ways: _*Building design on Figma*_ and _*providing functionality ideas*_!

## 📄 License

PINAC Web is licensed under the **MIT License**. See the <a href="https://github.com/pinacai/PINAC_Web/blob/main/LICENSE">LICENSE</a> file for more details.
