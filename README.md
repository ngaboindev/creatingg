# Creatingg
personal portfolio website builder

## Installation Steps

1. Clone the repository

```bash
git clone https://github.com/ngaboindev/creatingg.git
```

2. Change the working directory

```bash
cd creatingg
```

3. Install dependencies

```bash
npm install
```

4. Create `.env` file in root and add your variables

```bash
DATABASE_URL=YOUR_PLANETSCALE_DB_URL
SHADOW_DATABASE_URL=YOUR_PLANETSCALE_SHADOW_DB_URL

# jwt
JWT_SECRET=YOUR_JWT_SECRET

# cloudinary
CLOUDINARY_NAME=YOUR_CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY=YOUR_CLOUDINARY_CLOUD_API_KEY
CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_CLOUD_SECRET
```

5. Run the app

```bash
npm run dev
```

You are all set! Open [localhost:3000](http://localhost:3000/) to see the app.

## 💻 Built with

- [Next JS](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Cloudinary](https://cloudinary.com/)
- [Planetscale Database](https://planetscale.com/): source for complete database
- [Chakra UI](https://chakra-ui.com/): source for complete styling
- [react-icons](https://react-icons.github.io/react-icons/): for icons
effects
- [Vercel](http://vercel.com/): for hosting


## What's next

- PWA
- Portfolio visits analytics
- Github and Google Auth
- Settings page
- Choose Secondary color
- Notification tab

## License

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.


##  Author

- [Robert Ngabo](https://www.robertngabo.tech/)