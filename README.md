# Inventory Management System

A futuristic Inventory Management System frontend built with the Next.js App Router and prepared for a Django REST Framework backend with a MySQL database.

This README documents the frontend work completed and the MySQL database schema shown in the provided IMS schema image.

## Project Overview

The system is designed for managing:

- Users
- OTP verification
- Activity logs
- Categories
- Suppliers
- Products
- Inventory
- Orders
- Order items
- Sales
- Reports

The frontend currently uses realistic mock data, but the structure is ready for REST API integration.

## Tech Stack

| Area | Technology |
| --- | --- |
| Frontend framework | Next.js App Router |
| Language | JavaScript JSX |
| Styling | Tailwind CSS |
| Animation | Framer Motion, GSAP |
| 3D visuals | Three.js, React Three Fiber, Drei |
| Icons | Lucide React |
| Charts | Recharts |
| Forms | React Hook Form |
| API client | Axios |
| Auth state | Context API |
| Planned backend | Django REST Framework |
| Planned database | MySQL |

## Frontend Features Completed

- Futuristic dark SaaS interface
- Glassmorphism cards and panels
- Neon blue, cyan, purple, emerald, and black gradient styling
- Animated navigation and dashboard layouts
- Responsive desktop, tablet, and mobile layouts
- Landing page with hero section and 3D inventory scene
- Login, signup, and OTP verification pages
- Dashboard with KPI cards, charts, heatmap, activity feed, and stock alerts
- Products page with search, filters, product cards, table, modal, and form
- Inventory page with stock indicators, low stock alerts, warehouse zone cards, and 3D scene
- Orders page with shipment timeline, status badges, payment status, and progress tracking
- Suppliers page with supplier cards, contact actions, and performance analytics
- Categories page with category analytics
- Sales page with revenue charts, sales trends, and top products
- Reports page with report cards and export actions
- Users page with role badges, verification status, and user table
- Analytics page with forecasting-style charts and heatmaps
- Settings page with profile, security, theme, and notification controls
- Activity logs page with timeline and audit cards
- API service layer prepared for backend integration
- Auth context and protected route wrapper

## MySQL Database Schema

The schema contains 11 core tables.

### 1. Users

Stores system users such as admins, managers, and customers.

| Column | Type | Key | Notes |
| --- | --- | --- | --- |
| user_id | INT | PK | Primary user ID |
| name | VARCHAR(100) |  | User full name |
| email | VARCHAR(100) | UNIQUE | Unique email address |
| password | VARCHAR(255) |  | Hashed password |
| phone | VARCHAR(15) |  | Phone number |
| role | ENUM('admin','manager','customer') |  | User role |
| is_verified | BOOLEAN |  | Default 0 |
| created_at | TIMESTAMP |  | Default CURRENT_TIMESTAMP |

### 2. OTP Verification

Stores OTP codes for user verification.

| Column | Type | Key | Notes |
| --- | --- | --- | --- |
| otp_id | INT | PK | Primary OTP ID |
| user_id | INT | FK | References users.user_id |
| otp_code | VARCHAR(10) |  | OTP code |
| expires_at | DATETIME |  | Expiration time |
| is_used | BOOLEAN |  | Default 0 |

### 3. Activity Logs

Stores system activity performed by users.

| Column | Type | Key | Notes |
| --- | --- | --- | --- |
| log_id | INT | PK | Primary log ID |
| user_id | INT | FK | References users.user_id |
| action | VARCHAR(255) |  | User or system action |
| created_at | TIMESTAMP |  | Default CURRENT_TIMESTAMP |

### 4. Categories

Stores product categories.

| Column | Type | Key | Notes |
| --- | --- | --- | --- |
| category_id | INT | PK | Primary category ID |
| category_name | VARCHAR(100) |  | Category name |
| description | TEXT |  | Category description |
| created_at | TIMESTAMP |  | Default CURRENT_TIMESTAMP |

### 5. Suppliers

Stores supplier profile information.

| Column | Type | Key | Notes |
| --- | --- | --- | --- |
| supplier_id | INT | PK | Primary supplier ID |
| supplier_name | VARCHAR(100) |  | Supplier name |
| email | VARCHAR(100) |  | Supplier email |
| phone | VARCHAR(15) |  | Supplier phone |
| address | TEXT |  | Supplier address |
| created_at | TIMESTAMP |  | Default CURRENT_TIMESTAMP |

### 6. Products

Stores product master data.

| Column | Type | Key | Notes |
| --- | --- | --- | --- |
| product_id | INT | PK | Primary product ID |
| product_name | VARCHAR(150) |  | Product name |
| description | TEXT |  | Product description |
| product_image | VARCHAR(255) |  | Product image path or URL |
| barcode | VARCHAR(100) | UNIQUE | Unique barcode |
| price | DECIMAL(10,2) |  | Product price |
| stock_quantity | INT |  | Default 0 |
| category_id | INT | FK | References categories.category_id |
| supplier_id | INT | FK | References suppliers.supplier_id |
| created_at | TIMESTAMP |  | Default CURRENT_TIMESTAMP |
| updated_at | TIMESTAMP |  | Default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP |

### 7. Inventory

Stores inventory stock movement values for each product.

| Column | Type | Key | Notes |
| --- | --- | --- | --- |
| inventory_id | INT | PK | Primary inventory ID |
| product_id | INT | FK, UNIQUE | References products.product_id |
| stock_in | INT |  | Default 0 |
| stock_out | INT |  | Default 0 |
| low_stock_threshold | INT |  | Default 0 |
| updated_at | TIMESTAMP |  | Default CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP |

### 8. Orders

Stores customer order records.

| Column | Type | Key | Notes |
| --- | --- | --- | --- |
| order_id | INT | PK | Primary order ID |
| user_id | INT | FK | References users.user_id |
| total_amount | DECIMAL(10,2) |  | Total order amount |
| order_status | ENUM('pending','confirmed','shipped','delivered','cancelled') |  | Order status |
| payment_status | ENUM('pending','paid','failed','refunded') |  | Payment status |
| payment_method | VARCHAR(50) |  | Payment method |
| shipping_address | TEXT |  | Shipping address |
| order_date | TIMESTAMP |  | Default CURRENT_TIMESTAMP |

### 9. Order Items

Stores products included in each order.

| Column | Type | Key | Notes |
| --- | --- | --- | --- |
| order_item_id | INT | PK | Primary order item ID |
| order_id | INT | FK | References orders.order_id |
| product_id | INT | FK | References products.product_id |
| quantity | INT |  | Ordered quantity |
| price | DECIMAL(10,2) |  | Product price at order time |

### 10. Sales

Stores product sales records.

| Column | Type | Key | Notes |
| --- | --- | --- | --- |
| sale_id | INT | PK | Primary sale ID |
| product_id | INT | FK | References products.product_id |
| quantity_sold | INT |  | Quantity sold |
| total_price | DECIMAL(10,2) |  | Total sale price |
| sale_date | DATE |  | Sale date |

### 11. Reports

Stores generated report metadata.

| Column | Type | Key | Notes |
| --- | --- | --- | --- |
| report_id | INT | PK | Primary report ID |
| report_name | VARCHAR(150) |  | Report name |
| report_type | ENUM('sales','inventory','stock','orders') |  | Report category |
| generated_by | INT | FK | References users.user_id |
| generated_date | DATETIME |  | Report generation date |

## Relationship Summary

| Relationship | Cardinality |
| --- | --- |
| Users to Orders | 1 to many |
| Users to Reports | 1 to many |
| Users to Activity Logs | 1 to many |
| Users to OTP Verification | 1 to many |
| Categories to Products | 1 to many |
| Suppliers to Products | 1 to many |
| Products to Inventory | 1 to 1 |
| Products to Sales | 1 to many |
| Products to Order Items | 1 to many |
| Orders to Order Items | 1 to many |

## Backend Integration Plan

The frontend service layer is ready to connect with Django REST Framework endpoints for this database schema.

Planned endpoint groups:

- `/api/auth/`
- `/api/users/`
- `/api/otp-verification/`
- `/api/activity-logs/`
- `/api/categories/`
- `/api/suppliers/`
- `/api/products/`
- `/api/inventory/`
- `/api/orders/`
- `/api/order-items/`
- `/api/sales/`
- `/api/reports/`

## API Service Files

```txt
services/
├── api.js
├── authService.js
├── productService.js
├── inventoryService.js
├── salesService.js
└── reportService.js
```

Included API preparation:

- Axios base instance
- API base URL from environment variables
- Token injection through request interceptors
- Unauthorized response handling
- Mock fallback data
- Auth service methods
- Product service methods
- Inventory overview service
- Sales overview service
- Reports service

## Authentication Files

```txt
context/
└── AuthContext.jsx

components/layouts/
└── ProtectedRoute.jsx
```

Authentication includes:

- Login
- Signup
- Logout
- Mock user session
- Token storage in localStorage
- Protected route wrapper

## Frontend Project Structure

```txt
app/
├── layout.jsx
├── page.jsx
├── loading.jsx
├── error.jsx
├── not-found.jsx
├── globals.css
├── (auth)/
│   ├── login/
│   ├── signup/
│   └── otp-verification/
├── dashboard/
├── products/
├── inventory/
├── suppliers/
├── categories/
├── orders/
├── sales/
├── reports/
├── users/
├── analytics/
├── settings/
└── activity-logs/

components/
├── animations/
├── cards/
├── charts/
├── dashboard/
├── forms/
├── layouts/
├── modals/
├── navbar/
├── sidebar/
├── tables/
└── ui/

context/
data/
hooks/
services/
utils/
```

## Environment Variables

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
NEXT_PUBLIC_APP_NAME=Inventory Management System
```

## Styling

Tailwind CSS powers the UI.

Main styling file:

```txt
app/globals.css
```

Custom global utility classes:

- `glass`
- `neon-border`
- `grid-surface`
- `text-gradient`
- `scrollbar-thin`

## Run The Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Notes

- The frontend currently uses mock data.
- The schema above is based on the provided MySQL IMS database schema image.
- The frontend is ready to connect to Django REST Framework APIs.
- MySQL will be used through backend API endpoints, not directly from the frontend.
- The project is written in JavaScript JSX, not TypeScript.
