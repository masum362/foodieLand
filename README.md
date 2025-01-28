# Foodie - Recipe Sharing Platform

## Description
Foodie is a modern web application built with React and Tailwind CSS that allows users to discover, share, and explore delicious recipes. The platform features a social media-style interface where users can browse recipes, share their culinary creations, and connect with other food enthusiasts.

## Features
- 🏠 **Responsive Home Page** with featured recipes and categories
- 📸 **Image Carousel** for recipe photos using Swiper.js
- 💬 **Social Interaction** including likes, comments, and sharing
- 📧 **Newsletter Subscription** for updates and new recipes
- 📱 **Social Media Style Cards** for recipe sharing

## Technologies Used
- React.js
- Tailwind CSS
- Shadcn UI Components
- Swiper.js
- Lucide Icons
- React Icons

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/masum362/foodieLand.git
```

2. Install dependencies
```bash
cd foodieLand
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser


## Component Documentation

### SocialCard
A component for displaying recipes in a social media post style format.
```jsx
<SocialCard
  socialCard={{
    username: "username",
    userAvatar: "avatar-url",
    images: ["image-urls"],
    likes: {
      mutual: [{name: "user"}],
      like: "count"
    },
    caption: "post caption",
    isVerified: boolean
  }}
/>
```

### AboutUs
The about page component featuring company information and contact form.
```jsx
<AboutUs />
```


## Configuration
Key configurations are stored in:
- `tailwind.config.js` - Tailwind CSS configuration
- `package.json` - Project dependencies and scripts
- `.env` - Environment variables (create from `.env.example`)

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments
- Design inspiration from Instagram and modern food blogs
- Icons provided by [Lucide Icons](https://lucide.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)

## Contact
- Project Link: [https://github.com/masum362/foodieLand](htthttps://github.com/masum362/foodieLand)
- Website: [https://masum362-foodieland.netlify.app]

---
Made with ❤️ by [Md. Masum Ahmed]

Remember to star ⭐ this repository if you find it helpful!