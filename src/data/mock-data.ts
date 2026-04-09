// Mock data for the dashboard

export interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
  status: "active" | "inactive";
  avatar: string;
  createdAt: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "in_stock" | "low_stock" | "out_of_stock";
  image: string;
  createdAt: string;
}

export interface Order {
  id: number;
  orderNumber: string;
  customer: string;
  email: string;
  product: string;
  amount: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
}

export interface DailyRevenue {
  date: string;
  revenue: number;
  orders: number;
}

export interface KpiData {
  totalRevenue: number;
  totalOrders: number;
  totalUsers: number;
  conversionRate: number;
  revenueGrowth: number;
  ordersGrowth: number;
  usersGrowth: number;
  conversionGrowth: number;
}

export const mockUsers: User[] = [
  { id: 1, name: "张三", email: "zhangsan@example.com", role: "admin", status: "active", avatar: "", createdAt: "2025-01-15" },
  { id: 2, name: "李四", email: "lisi@example.com", role: "editor", status: "active", avatar: "", createdAt: "2025-02-20" },
  { id: 3, name: "王五", email: "wangwu@example.com", role: "viewer", status: "inactive", avatar: "", createdAt: "2025-03-10" },
  { id: 4, name: "赵六", email: "zhaoliu@example.com", role: "editor", status: "active", avatar: "", createdAt: "2025-04-05" },
  { id: 5, name: "孙七", email: "sunqi@example.com", role: "viewer", status: "active", avatar: "", createdAt: "2025-05-12" },
  { id: 6, name: "周八", email: "zhouba@example.com", role: "admin", status: "active", avatar: "", createdAt: "2025-06-01" },
  { id: 7, name: "吴九", email: "wujiu@example.com", role: "viewer", status: "inactive", avatar: "", createdAt: "2025-07-18" },
  { id: 8, name: "郑十", email: "zhengshi@example.com", role: "editor", status: "active", avatar: "", createdAt: "2025-08-22" },
  { id: 9, name: "陈明", email: "chenming@example.com", role: "viewer", status: "active", avatar: "", createdAt: "2025-09-15" },
  { id: 10, name: "林华", email: "linhua@example.com", role: "admin", status: "active", avatar: "", createdAt: "2025-10-08" },
];

export const mockProducts: Product[] = [
  { id: 1, name: "无线蓝牙耳机", category: "电子产品", price: 299, stock: 150, status: "in_stock", image: "", createdAt: "2025-01-10" },
  { id: 2, name: "机械键盘", category: "电子产品", price: 599, stock: 80, status: "in_stock", image: "", createdAt: "2025-01-15" },
  { id: 3, name: "智能手表", category: "电子产品", price: 1299, stock: 5, status: "low_stock", image: "", createdAt: "2025-02-01" },
  { id: 4, name: "运动背包", category: "运动户外", price: 199, stock: 200, status: "in_stock", image: "", createdAt: "2025-02-20" },
  { id: 5, name: "保温杯", category: "生活用品", price: 89, stock: 0, status: "out_of_stock", image: "", createdAt: "2025-03-05" },
  { id: 6, name: "笔记本电脑支架", category: "办公用品", price: 159, stock: 120, status: "in_stock", image: "", createdAt: "2025-03-18" },
  { id: 7, name: "USB-C 扩展坞", category: "电子产品", price: 349, stock: 45, status: "in_stock", image: "", createdAt: "2025-04-02" },
  { id: 8, name: "人体工学椅", category: "办公用品", price: 2499, stock: 8, status: "low_stock", image: "", createdAt: "2025-04-15" },
  { id: 9, name: "便携充电宝", category: "电子产品", price: 129, stock: 300, status: "in_stock", image: "", createdAt: "2025-05-01" },
  { id: 10, name: "瑜伽垫", category: "运动户外", price: 79, stock: 0, status: "out_of_stock", image: "", createdAt: "2025-05-20" },
];

export const mockOrders: Order[] = [
  { id: 1, orderNumber: "ORD-2025001", customer: "张三", email: "zhangsan@example.com", product: "无线蓝牙耳机", amount: 299, status: "delivered", createdAt: "2025-10-01" },
  { id: 2, orderNumber: "ORD-2025002", customer: "李四", email: "lisi@example.com", product: "机械键盘", amount: 599, status: "shipped", createdAt: "2025-10-03" },
  { id: 3, orderNumber: "ORD-2025003", customer: "王五", email: "wangwu@example.com", product: "智能手表", amount: 1299, status: "processing", createdAt: "2025-10-05" },
  { id: 4, orderNumber: "ORD-2025004", customer: "赵六", email: "zhaoliu@example.com", product: "运动背包", amount: 199, status: "pending", createdAt: "2025-10-07" },
  { id: 5, orderNumber: "ORD-2025005", customer: "孙七", email: "sunqi@example.com", product: "保温杯", amount: 89, status: "cancelled", createdAt: "2025-10-08" },
  { id: 6, orderNumber: "ORD-2025006", customer: "周八", email: "zhouba@example.com", product: "笔记本电脑支架", amount: 318, status: "delivered", createdAt: "2025-10-10" },
  { id: 7, orderNumber: "ORD-2025007", customer: "吴九", email: "wujiu@example.com", product: "USB-C 扩展坞", amount: 349, status: "shipped", createdAt: "2025-10-12" },
  { id: 8, orderNumber: "ORD-2025008", customer: "郑十", email: "zhengshi@example.com", product: "人体工学椅", amount: 2499, status: "processing", createdAt: "2025-10-14" },
  { id: 9, orderNumber: "ORD-2025009", customer: "陈明", email: "chenming@example.com", product: "便携充电宝", amount: 258, status: "delivered", createdAt: "2025-10-15" },
  { id: 10, orderNumber: "ORD-2025010", customer: "林华", email: "linhua@example.com", product: "瑜伽垫", amount: 158, status: "pending", createdAt: "2025-10-16" },
  { id: 11, orderNumber: "ORD-2025011", customer: "张三", email: "zhangsan@example.com", product: "机械键盘", amount: 599, status: "delivered", createdAt: "2025-10-18" },
  { id: 12, orderNumber: "ORD-2025012", customer: "李四", email: "lisi@example.com", product: "智能手表", amount: 1299, status: "shipped", createdAt: "2025-10-20" },
];

export const mockDailyRevenue: DailyRevenue[] = [
  { date: "10-01", revenue: 12500, orders: 18 },
  { date: "10-02", revenue: 8900, orders: 12 },
  { date: "10-03", revenue: 15600, orders: 22 },
  { date: "10-04", revenue: 11200, orders: 16 },
  { date: "10-05", revenue: 18900, orders: 28 },
  { date: "10-06", revenue: 9800, orders: 14 },
  { date: "10-07", revenue: 21300, orders: 32 },
  { date: "10-08", revenue: 16700, orders: 24 },
  { date: "10-09", revenue: 14200, orders: 20 },
  { date: "10-10", revenue: 19500, orders: 26 },
  { date: "10-11", revenue: 13800, orders: 19 },
  { date: "10-12", revenue: 22100, orders: 30 },
  { date: "10-13", revenue: 17400, orders: 25 },
  { date: "10-14", revenue: 11900, orders: 17 },
  { date: "10-15", revenue: 24800, orders: 35 },
  { date: "10-16", revenue: 20100, orders: 29 },
  { date: "10-17", revenue: 15300, orders: 21 },
  { date: "10-18", revenue: 18600, orders: 27 },
  { date: "10-19", revenue: 13100, orders: 18 },
  { date: "10-20", revenue: 26200, orders: 38 },
  { date: "10-21", revenue: 19800, orders: 28 },
  { date: "10-22", revenue: 16500, orders: 23 },
  { date: "10-23", revenue: 21700, orders: 31 },
  { date: "10-24", revenue: 14600, orders: 20 },
  { date: "10-25", revenue: 23400, orders: 33 },
  { date: "10-26", revenue: 17900, orders: 25 },
  { date: "10-27", revenue: 12800, orders: 18 },
  { date: "10-28", revenue: 25100, orders: 36 },
  { date: "10-29", revenue: 19200, orders: 27 },
  { date: "10-30", revenue: 22800, orders: 32 },
];

export const mockKpi: KpiData = {
  totalRevenue: 518900,
  totalOrders: 745,
  totalUsers: 1280,
  conversionRate: 3.2,
  revenueGrowth: 12.5,
  ordersGrowth: 8.3,
  usersGrowth: 15.2,
  conversionGrowth: -0.8,
};

// Helper to get data collections by resource name
const dataMap: Record<string, unknown[]> = {
  users: mockUsers,
  products: mockProducts,
  orders: mockOrders,
};

export function getMockData(resource: string): unknown[] {
  return dataMap[resource] || [];
}
