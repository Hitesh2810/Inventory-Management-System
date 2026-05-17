export const kpis = [
  { label: "Revenue", value: 2845000, change: 18.4, tone: "cyan" },
  { label: "Orders", value: 18420, change: 12.9, tone: "violet" },
  { label: "Stock Accuracy", value: 98, change: 3.1, tone: "emerald" },
  { label: "Low Stock SKUs", value: 47, change: -8.6, tone: "amber" }
];

export const revenueData = [
  { month: "Jan", revenue: 220000, orders: 980, inventory: 74 },
  { month: "Feb", revenue: 270000, orders: 1140, inventory: 77 },
  { month: "Mar", revenue: 320000, orders: 1320, inventory: 81 },
  { month: "Apr", revenue: 380000, orders: 1480, inventory: 84 },
  { month: "May", revenue: 430000, orders: 1690, inventory: 88 },
  { month: "Jun", revenue: 510000, orders: 1910, inventory: 91 },
  { month: "Jul", revenue: 590000, orders: 2200, inventory: 93 },
  { month: "Aug", revenue: 670000, orders: 2510, inventory: 96 }
];

export const categoryData = [
  { name: "Electronics", value: 38, fill: "#00d5ff" },
  { name: "Industrial", value: 24, fill: "#7c3aed" },
  { name: "Apparel", value: 18, fill: "#34f5a5" },
  { name: "Medical", value: 12, fill: "#f8c14a" },
  { name: "Office", value: 8, fill: "#fb7185" }
];

export const products = [
  { id: 101, name: "Quantum Barcode Scanner", sku: "QBS-2049", category: "Electronics", stock: 1240, reorder: 320, price: 249, status: "Active", velocity: 88 },
  { id: 102, name: "Autonomous Shelf Sensor", sku: "ASS-1180", category: "IoT", stock: 480, reorder: 500, price: 129, status: "Low Stock", velocity: 94 },
  { id: 103, name: "Cold Chain Beacon", sku: "CCB-903", category: "Medical", stock: 870, reorder: 220, price: 89, status: "Active", velocity: 76 },
  { id: 104, name: "Carbon Fiber Storage Bin", sku: "CFS-442", category: "Industrial", stock: 290, reorder: 200, price: 54, status: "Active", velocity: 61 },
  { id: 105, name: "Smart Pallet Gateway", sku: "SPG-700", category: "IoT", stock: 96, reorder: 140, price: 540, status: "Critical", velocity: 98 },
  { id: 106, name: "Holographic Pick Light", sku: "HPL-310", category: "Warehouse", stock: 660, reorder: 180, price: 174, status: "Active", velocity: 82 }
];

export const inventoryLevels = [
  { zone: "A1", capacity: 92, throughput: 880 },
  { zone: "B4", capacity: 76, throughput: 640 },
  { zone: "C2", capacity: 58, throughput: 410 },
  { zone: "D7", capacity: 84, throughput: 730 },
  { zone: "E3", capacity: 69, throughput: 520 }
];

export const stockAlerts = [
  { sku: "SPG-700", message: "Smart Pallet Gateway below reorder threshold", severity: "Critical", eta: "2h" },
  { sku: "ASS-1180", message: "Autonomous Shelf Sensor demand spike detected", severity: "High", eta: "5h" },
  { sku: "RFD-290", message: "RFID rolls projected to deplete this week", severity: "Medium", eta: "2d" }
];

export const orders = [
  { id: "ORD-90421", customer: "Northstar Labs", status: "In Transit", payment: "Paid", total: 48920, progress: 72, date: "May 17, 2026" },
  { id: "ORD-90420", customer: "Apex Mobility", status: "Processing", payment: "Authorized", total: 18740, progress: 38, date: "May 17, 2026" },
  { id: "ORD-90419", customer: "Helio Retail", status: "Delivered", payment: "Paid", total: 62300, progress: 100, date: "May 16, 2026" },
  { id: "ORD-90418", customer: "Veridian Health", status: "Exception", payment: "Review", total: 14280, progress: 54, date: "May 16, 2026" }
];

export const suppliers = [
  { name: "Orbital Components", score: 96, region: "Singapore", spend: "$1.8M", onTime: 98 },
  { name: "Atlas Fabrication", score: 89, region: "Germany", spend: "$940K", onTime: 93 },
  { name: "Prism Medical Supply", score: 91, region: "United States", spend: "$1.2M", onTime: 95 },
  { name: "Neon Freight Systems", score: 87, region: "UAE", spend: "$780K", onTime: 90 }
];

export const salesTrend = [
  { day: "Mon", online: 44000, retail: 28000, wholesale: 39000 },
  { day: "Tue", online: 52000, retail: 30000, wholesale: 42000 },
  { day: "Wed", online: 61000, retail: 36000, wholesale: 45000 },
  { day: "Thu", online: 58000, retail: 40000, wholesale: 51000 },
  { day: "Fri", online: 72000, retail: 49000, wholesale: 56000 },
  { day: "Sat", online: 69000, retail: 52000, wholesale: 62000 },
  { day: "Sun", online: 81000, retail: 57000, wholesale: 68000 }
];

export const topProducts = [
  { name: "Smart Pallet Gateway", revenue: 420000, growth: 31 },
  { name: "Quantum Barcode Scanner", revenue: 310000, growth: 24 },
  { name: "Autonomous Shelf Sensor", revenue: 278000, growth: 21 },
  { name: "Holographic Pick Light", revenue: 188000, growth: 14 }
];

export const reports = [
  { title: "Executive Revenue Intelligence", type: "Revenue", updated: "Today", confidence: 99 },
  { title: "Inventory Risk Forecast", type: "Inventory", updated: "2 hours ago", confidence: 96 },
  { title: "Fulfillment SLA Performance", type: "Orders", updated: "Yesterday", confidence: 94 },
  { title: "Supplier Reliability Matrix", type: "Suppliers", updated: "May 15", confidence: 91 }
];

export const activities = [
  { title: "Low stock automation created PO-7782", user: "Nova AI", time: "3 min ago", tone: "cyan" },
  { title: "Avery approved supplier contract renewal", user: "Avery Stone", time: "18 min ago", tone: "emerald" },
  { title: "Shipment exception detected for ORD-90418", user: "Logistics Engine", time: "44 min ago", tone: "amber" },
  { title: "Cycle count completed in Zone A1", user: "Warehouse Team", time: "1h ago", tone: "violet" }
];

export const users = [
  { name: "Avery Stone", role: "Admin", status: "Verified", team: "Operations", lastSeen: "Now" },
  { name: "Mira Chen", role: "Manager", status: "Verified", team: "Inventory", lastSeen: "8 min ago" },
  { name: "Noah Reed", role: "Analyst", status: "Pending", team: "Finance", lastSeen: "1h ago" },
  { name: "Lina Torres", role: "Operator", status: "Verified", team: "Warehouse", lastSeen: "Today" }
];
