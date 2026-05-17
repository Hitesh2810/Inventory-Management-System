# 📦 Inventory Management System

A complete **Inventory Management System Database Schema** designed using **MySQL** for managing products, inventory, suppliers, orders, sales, reports, users, OTP verification, and activity logs.

This schema is structured for scalable enterprise-level inventory and warehouse management applications.

---

# 🛠️ Technologies Used

- 🗄️ MySQL Database
- 🐍 Django REST Framework (Backend Ready)
- ⚛️ Next.js Frontend Integration Ready
- 🔗 REST API Architecture

---

# 📊 Database Overview

The system contains the following core modules:

| Module | Description |
|--------|-------------|
| 👤 Users | Manage system users and authentication |
| 🔐 OTP Verification | OTP-based verification system |
| 📝 Activity Logs | Track user actions and system activities |
| 📂 Categories | Product category management |
| 🚚 Suppliers | Supplier information management |
| 📦 Products | Product catalog management |
| 🏬 Inventory | Stock tracking and inventory monitoring |
| 🛒 Orders | Customer order management |
| 📄 Order Items | Individual products within orders |
| 💰 Sales | Sales transaction tracking |
| 📑 Reports | Generated analytics and reports |

---

# 🧩 Database Tables

---

# 👤 USERS

Stores all system user details.

## Columns

| Column | Type | Description |
|-------|------|-------------|
| `user_id` | INT | Primary Key |
| `name` | VARCHAR(100) | User full name |
| `email` | VARCHAR(100) | Unique email |
| `password` | VARCHAR(255) | Encrypted password |
| `phone` | VARCHAR(15) | Contact number |
| `role` | ENUM | admin / manager / customer |
| `is_verified` | BOOLEAN | Verification status |
| `created_at` | TIMESTAMP | Account creation date |

---

# 🔐 OTP_VERIFICATION

Handles OTP verification for users.

## Columns

| Column | Type |
|-------|------|
| `otp_id` | INT |
| `user_id` | INT |
| `otp_code` | VARCHAR(10) |
| `expires_at` | DATETIME |
| `is_used` | BOOLEAN |

---

# 📝 ACTIVITY_LOGS

Tracks user activities inside the system.

## Columns

| Column | Type |
|-------|------|
| `log_id` | INT |
| `user_id` | INT |
| `action` | VARCHAR(255) |
| `created_at` | TIMESTAMP |

---

# 📂 CATEGORIES

Stores product categories.

## Columns

| Column | Type |
|-------|------|
| `category_id` | INT |
| `category_name` | VARCHAR(100) |
| `description` | TEXT |
| `created_at` | TIMESTAMP |

---

# 🚚 SUPPLIERS

Stores supplier information.

## Columns

| Column | Type |
|-------|------|
| `supplier_id` | INT |
| `supplier_name` | VARCHAR(100) |
| `email` | VARCHAR(100) |
| `phone` | VARCHAR(15) |
| `address` | TEXT |
| `created_at` | TIMESTAMP |

---

# 📦 PRODUCTS

Stores all product information.

## Columns

| Column | Type |
|-------|------|
| `product_id` | INT |
| `product_name` | VARCHAR(150) |
| `description` | TEXT |
| `product_image` | VARCHAR(255) |
| `barcode` | VARCHAR(100) |
| `price` | DECIMAL(10,2) |
| `stock_quantity` | INT |
| `category_id` | INT |
| `supplier_id` | INT |
| `created_at` | TIMESTAMP |
| `updated_at` | TIMESTAMP |

---

# 🏬 INVENTORY

Tracks inventory movement and stock levels.

## Columns

| Column | Type |
|-------|------|
| `inventory_id` | INT |
| `product_id` | INT |
| `stock_in` | INT |
| `stock_out` | INT |
| `low_stock_threshold` | INT |
| `updated_at` | TIMESTAMP |

---

# 🛒 ORDERS

Stores customer order details.

## Columns

| Column | Type |
|-------|------|
| `order_id` | INT |
| `user_id` | INT |
| `total_amount` | DECIMAL(10,2) |
| `order_status` | ENUM |
| `payment_status` | ENUM |
| `payment_method` | VARCHAR(50) |
| `shipping_address` | TEXT |
| `order_date` | TIMESTAMP |

---

# 📄 ORDER_ITEMS

Stores products inside each order.

## Columns

| Column | Type |
|-------|------|
| `order_item_id` | INT |
| `order_id` | INT |
| `product_id` | INT |
| `quantity` | INT |
| `price` | DECIMAL(10,2) |

---

# 💰 SALES

Tracks sales transactions.

## Columns

| Column | Type |
|-------|------|
| `sale_id` | INT |
| `product_id` | INT |
| `quantity_sold` | INT |
| `total_price` | DECIMAL(10,2) |
| `sale_date` | DATE |

---

# 📑 REPORTS

Stores generated reports.

## Columns

| Column | Type |
|-------|------|
| `report_id` | INT |
| `report_name` | VARCHAR(150) |
| `report_type` | ENUM |
| `generated_by` | INT |
| `generated_date` | DATETIME |

---

# 🔐 Authentication Features

- User registration
- Login system
- OTP verification
- Role-based access
- Activity tracking

---

# 📦 Inventory Features

- Product stock tracking
- Low stock alerts
- Supplier management
- Inventory movement tracking
- Sales monitoring

---

# 📈 Reporting Features

- Sales reports
- Inventory reports
- Order reports
- Stock reports
- User activity reports

---

# 🚀 Future Enhancements

- 📡 Real-time inventory updates
- 🔔 Notification system
- 🤖 AI demand forecasting
- ☁️ Cloud deployment
- 📱 Mobile app integration
- 📊 Advanced analytics dashboard

---

# ⚙️ Backend Integration Ready

This database schema is fully prepared for:

- 🐍 Django REST Framework APIs
- 🔗 RESTful services
- ⚛️ Next.js frontend integration
- 🔐 JWT authentication
- 🗄️ MySQL relational database operations

---

# 📌 Notes

- Designed using normalized relational database principles
- Supports scalable enterprise applications
- Optimized for inventory and warehouse systems
- Suitable for full-stack MERN/Next.js + Django projects

---

# 👨‍💻 Project Type

Enterprise-Level Inventory Management System Database Schema 🚀