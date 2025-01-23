# ServiceHub - Service Marketplace Platform

ServiceHub is a modern, user-friendly service marketplace platform built with Next.js and TypeScript. It allows users to browse, search, and book various professional services with a seamless checkout experience.

![{19A13380-7ED9-4585-B02F-6BCC1C75274B}](https://github.com/user-attachments/assets/5de6d988-6783-44de-9f1e-ba55587a08b8)


## Features

- 🛍️ **Service Browsing**: Browse through a curated list of professional services
- 🔍 **Search Functionality**: Search services by name, description, or category
- 🛒 **Shopping Cart**: Add services to cart, update quantities, and remove items
- 💳 **Checkout Process**: Simple and secure checkout with customer information

## Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Animations**: Custom CSS animations

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/servicehub.git
cd servicehub
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
servicehub/
├── app/
│   ├── components/     # Reusable UI components
│   ├── data/          # Static data and mock services
│   ├── types/         # TypeScript type definitions
│   ├── services/      # Services page
│   ├── page.tsx       # Home page
│   └── layout.tsx     # Root layout
├── components/
│   └── ui/           # shadcn/ui components
├── lib/
│   └── utils.ts      # Utility functions
```

## Code Flow

1. **Entry Point**: The application starts from `app/layout.tsx`, which includes the navigation and global styles.

2. **Routing**:
   - `/` - Home page with features and hero section
   - `/services` - Service marketplace with cart functionality

3. **State Management**:
   - Cart state is managed using React's useState hook
   - Services data is stored in `data/services.ts`

4. **Component Hierarchy**:
   ```
   Layout
   ├── Navbar
   └── Pages
       ├── Home
       └── Services
           ├── ServiceCard
           ├── Cart
           ├── CheckoutDialog
           └── Receipt
   ```

5. **Data Flow**:
   - Services are displayed using ServiceCard components
   - Adding to cart updates the cart state
   - Checkout process collects customer data and generates a receipt
   - Receipt is displayed in a modal dialog

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
