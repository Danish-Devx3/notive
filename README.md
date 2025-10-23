# Notive 📝

A modern, feature-rich note-taking application built with Next.js 15, featuring secure authentication, rich text editing, and a beautiful user interface. Perfect for organizing your thoughts, code snippets, and daily notes.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-336791?style=flat-square&logo=postgresql)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

### 🔐 Authentication & Security
- **Email/Password Authentication** with secure JWT-based sessions
- **Google OAuth Integration** for seamless sign-in
- **Email Verification** to ensure account authenticity
- **Password Reset** functionality with secure token-based recovery
- **Protected Routes** ensuring only authenticated users can access notes
- Session management with automatic expiration and refresh

### 📒 Notebooks & Notes
- **Organize with Notebooks** - Create multiple notebooks to categorize your notes
- **Hierarchical Structure** - Notebooks → Notes relationship for better organization
- **Quick Note Creation** - Instantly create and edit notes
- **Search Functionality** - Find your notes quickly (coming soon)
- **Tags & Categories** - Organize notes with custom tags (coming soon)

### ✍️ Rich Text Editor (Tiptap)
- **Markdown Support** - Write in markdown with live preview
- **Text Formatting** - Bold, Italic, Strikethrough, Code
- **Headings** - H1, H2, H3 for document structure
- **Lists** - Bullet lists and numbered lists
- **Code Blocks** - Syntax-highlighted code snippets
- **Blockquotes** - Beautiful quote formatting
- **Tables** - Create and edit tables (coming soon)
- **Images** - Embed images (coming soon)
- **Real-time Auto-save** - Never lose your work

### 🎨 UI/UX
- **Beautiful Design** - Modern, clean interface with shadcn/ui components
- **Light & Dark Mode** - Switch themes based on your preference
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations** - Polished transitions and interactions
- **Accessible** - WCAG compliant with keyboard navigation support

### 📧 Email System
- **Professional Email Templates** - Built with React Email
- **Verification Emails** - Confirm account creation
- **Password Reset Emails** - Secure recovery process
- **Responsive Email Design** - Works on all email clients

---

## 🚀 Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible components
- **[Lucide React](https://lucide.dev/)** - Modern icon library
- **[Tiptap](https://tiptap.dev/)** - Headless rich text editor

### Backend & Database
- **[better-auth](https://www.better-auth.com/)** - Modern authentication library
- **[Drizzle ORM](https://orm.drizzle.team/)** - Type-safe ORM for TypeScript
- **[Neon Database](https://neon.tech/)** - Serverless PostgreSQL
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant form library
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### Email
- **[Resend](https://resend.com/)** - Modern email API
- **[React Email](https://react.email/)** - Build emails with React

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Git](https://git-scm.com/)** - Version control

---

## 🏁 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** v20 or later ([Download](https://nodejs.org/))
- **pnpm** (recommended) or npm/yarn ([Install pnpm](https://pnpm.io/installation))
- A **Neon Database** account ([Sign up](https://neon.tech/))
- A **Resend** account for emails ([Sign up](https://resend.com/))
- **Google OAuth credentials** (optional, for social login)

### Installation

1. **Clone the repository:**
```bash
   git clone https://github.com/Danish-Devx3/notive.git
   cd notive
```

2. **Install dependencies:**
```bash
   pnpm install
```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory:
```env
   # Database (Neon PostgreSQL)
   DATABASE_URL="postgresql://username:password@hostname/database?sslmode=require"

   # Better Auth Configuration
   BETTER_AUTH_SECRET="your-secret-key-here"
   BETTER_AUTH_URL="http://localhost:3000"

   # Google OAuth (Optional)
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"

   # Node Environment
   NODE_ENV="development"
```

4. **Set up the database:**
```bash
   pnpm drizzle-kit push
```

5. **Start the development server:**
```bash
   pnpm dev
```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure
```
notive/
├── app/
│   ├── (auth)/
│   ├── (dashboard)/
│   ├── api/
│   └── globals.css
├── components/
│   ├── emails/
│   ├── editor/
│   └── ui/
├── db/
│   ├── drizzle.ts
│   └── schema.ts
├── lib/
│   ├── auth.ts
│   └── utils.ts
├── server/
└── public/
```

---

## 🛠️ Available Scripts
```bash
pnpm dev              # Start development server
pnpm build            # Create production build
pnpm start            # Start production server
pnpm drizzle-kit push      # Push schema to database
pnpm drizzle-kit studio    # Open Drizzle Studio
pnpm lint             # Run ESLint
```

---

## 🗄️ Database Schema

### Tables

**Users** - User account information  
**Sessions** - Active user sessions  
**Accounts** - OAuth provider accounts  
**Verification** - Email verification & password reset tokens  
**Notebooks** - User's notebook collections  
**Notes** - Individual notes with rich content

### Relationships
```
User (1) ──→ (N) Notebooks ──→ (N) Notes
User (1) ──→ (N) Sessions
User (1) ──→ (N) Accounts
```

---

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import to Vercel
3. Configure environment variables
4. Deploy

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🐛 Roadmap

- [ ] Full-text search across notes
- [ ] Note sharing & collaboration
- [ ] Export notes (PDF, Markdown)
- [ ] Mobile apps
- [ ] Offline mode with sync
- [ ] Browser extension
- [ ] Note templates
- [ ] Tags and advanced filtering

---

## 📝 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Danish Ansari**

- GitHub: [@Danish-Devx3](https://github.com/Danish-Devx3)
- LinkedIn: [Danish Ansari](https://linkedin.com/in/danishansaridev)
- Email: danish.devx3@gmail.com

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Hosting platform
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tiptap](https://tiptap.dev/) - Rich text editor
- [better-auth](https://www.better-auth.com/) - Authentication library
- [Neon](https://neon.tech/) - Serverless PostgreSQL

---

## ⭐ Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub!

---

**Made with ❤️ by Danish Ansari**