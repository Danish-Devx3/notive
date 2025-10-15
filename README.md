# Notive

A modern, full-stack note-taking application built with Next.js, Drizzle ORM, and `better-auth` for authentication.

## ✨ Features

- **Authentication:** Secure user authentication (signup, login, logout) with email-based password reset functionality.
- **Notebooks & Notes:** Organize your thoughts by creating notebooks and adding notes to them.
- **Rich Text Editor:** A powerful and intuitive Tiptap-based editor that supports various formatting options.
- **Responsive Design:** A beautiful and responsive UI built with Tailwind CSS and shadcn/ui.
- **Light & Dark Mode:** Switch between light and dark themes.
- **Email Notifications:** Receive email notifications for password resets.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Authentication:** [better-auth](https://www.npmjs.com/package/better-auth)
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Database:** [Neon](https://neon.tech/) (Postgres)
- **UI:** [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
- **Form Management:** [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
- **Rich Text Editor:** [Tiptap](https://tiptap.dev/)
- **Email:** [Nodemailer](https://nodemailer.com/), [React Email](https://react.email/)
- **Icons:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20 or later)
- [pnpm](https://pnpm.io/installation) (or your preferred package manager)
- A [Neon](https://neon.tech/) account for the PostgreSQL database.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Danish-Devx3/notive.git
    cd notive
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Set up environment variables:**

    Create a `.env.local` file in the root of your project and add the following environment variables. You can get the `DATABASE_URL` from your Neon project settings.

    ```env
    DATABASE_URL="your_database_url"

    # Email (Nodemailer)
    EMAIL_HOST="your_email_host"
    EMAIL_PORT="your_email_port"
    EMAIL_USER="your_email_user"
    EMAIL_PASS="your_email_password"

    # better-auth
    # Generate a secret using: openssl rand -base64 32
    AUTH_SECRET="your_auth_secret"
    ```

4.  **Push the database schema:**

    This command will push the schema defined in `db/schema.ts` to your Neon database.

    ```bash
    pnpm drizzle-kit push
    ```

### Running the Application

To start the development server, run:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Available Scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Creates a production build.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Runs the linter.

## 🚀 Deployment

The easiest way to deploy this application is to use [Vercel](https://vercel.com/), the creators of Next.js.

Make sure to set up the environment variables in your Vercel project settings.