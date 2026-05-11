const storageKey = "zulfiqar-computers-v1";
const themeKey = "zulfiqar-theme";
const adminPassword = "Zulfiqar786";
const defaultStaffPassword = "staff123";
const shopWhatsAppNumber = "923000000000";
const serviceCategoryOptions = [
  "Laptop",
  "CPU / Desktop",
  "Monitor",
  "Printer",
  "Camera",
  "CCTV Camera",
  "Motherboard",
  "Keyboard",
  "Mouse",
  "SSD / Hard Drive",
  "RAM",
  "Graphics Card",
  "Power Supply",
  "Networking Device",
  "Software / Windows",
  "Other",
];
const laptopRequestOptions = {
  category: ["Laptop", "Desktop", "Gaming Laptop", "Business Laptop", "Student Laptop", "Workstation", "SSD", "RAM", "Graphics Card", "Monitor", "Printer", "CCTV Camera", "Accessory", "Other"],
  company: ["Any", "Dell", "HP", "Lenovo", "Asus", "Acer", "Apple", "MSI", "Samsung", "Kingston", "Logitech", "Dahua", "Hikvision", "Other"],
  ram: ["4 GB", "8 GB", "16 GB", "32 GB", "64 GB"],
  processor: ["Intel Core i3", "Intel Core i5", "Intel Core i7", "Intel Core i9", "AMD Ryzen 3", "AMD Ryzen 5", "AMD Ryzen 7", "Apple M-series"],
  graphics: ["Integrated Graphics", "Intel Iris Xe", "NVIDIA GTX", "NVIDIA RTX 2050", "NVIDIA RTX 3050", "NVIDIA RTX 4050", "NVIDIA RTX 5060", "AMD Radeon"],
  storage: ["256 GB SSD", "512 GB SSD", "1 TB SSD", "2 TB SSD", "SSD + HDD"],
  display: ["Any", "13 inch", "14 inch", "15.6 inch", "16 inch", "17 inch", "FHD", "2K", "4K", "External monitor"],
  condition: ["New", "Secondhand", "Any"],
  budget: ["Under 50,000", "50,000 - 80,000", "80,000 - 120,000", "120,000 - 180,000", "180,000+"],
  useCase: ["Office Work", "Students", "Programming", "Gaming", "Design / Editing", "Business", "General Use"],
};

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "DB", kicker: "Business overview" },
  { id: "customers", label: "Customers", icon: "CU", kicker: "Customer records" },
  { id: "inventory", label: "Laptop Requests", icon: "RQ", kicker: "Customer laptop preferences" },
  { id: "sales", label: "Sales", icon: "SL", kicker: "Purchases and payments" },
  { id: "services", label: "Services", icon: "SV", kicker: "Repair and service jobs" },
  { id: "users", label: "Users", icon: "US", kicker: "Employee access" },
];

const defaultData = {
  customers: [
    {
      id: crypto.randomUUID(),
      name: "Ahmed Raza",
      phone: "0300-1122334",
      address: "Main Bazaar",
      idNumber: "35202-0000000-1",
      notes: "Prefers WhatsApp updates",
    },
    {
      id: crypto.randomUUID(),
      name: "Sana Iqbal",
      phone: "0312-9988776",
      address: "Model Town",
      idNumber: "",
      notes: "Asked for student discount options",
    },
  ],
  laptops: [
    {
      id: crypto.randomUUID(),
      company: "Dell",
      productName: "Latitude 7490",
      category: "Laptop",
      brand: "Dell",
      model: "Latitude 7490",
      type: "Secondhand",
      quantity: 2,
      processor: "Intel Core i7 8th Gen",
      ram: "16 GB",
      storage: "512 GB SSD",
      graphics: "Intel UHD",
      display: "14 inch FHD",
      condition: "A Grade",
      warranty: "15 days checking",
      costPrice: 78000,
      salePrice: 92000,
      status: "Available",
      notes: "Clean body, fresh battery backup",
    },
    {
      id: crypto.randomUUID(),
      company: "HP",
      productName: "15s-fq5000",
      category: "Laptop",
      brand: "HP",
      model: "15s-fq5000",
      type: "New",
      quantity: 3,
      processor: "Intel Core i5 12th Gen",
      ram: "8 GB",
      storage: "512 GB SSD",
      graphics: "Intel Iris Xe",
      display: "15.6 inch FHD",
      condition: "Box packed",
      warranty: "1 year official",
      costPrice: 118000,
      salePrice: 132000,
      status: "Available",
      notes: "Good office and student model",
    },
    {
      id: crypto.randomUUID(),
      company: "Lenovo",
      productName: "ThinkPad T480",
      category: "Laptop",
      brand: "Lenovo",
      model: "ThinkPad T480",
      type: "Secondhand",
      quantity: 1,
      processor: "Intel Core i5 8th Gen",
      ram: "8 GB",
      storage: "256 GB SSD",
      graphics: "Intel UHD",
      display: "14 inch FHD",
      condition: "B+ Grade",
      warranty: "7 days checking",
      costPrice: 56000,
      salePrice: 68000,
      status: "Reserved",
      notes: "Keyboard slightly shiny",
    },
    {
      id: crypto.randomUUID(),
      company: "Kingston",
      productName: "NV2 SSD",
      category: "SSD",
      brand: "Kingston",
      model: "NV2",
      type: "Accessory",
      quantity: 8,
      processor: "",
      ram: "",
      storage: "1 TB NVMe",
      graphics: "",
      display: "",
      condition: "New",
      warranty: "Official warranty",
      costPrice: 0,
      salePrice: 18500,
      status: "Available",
      notes: "M.2 NVMe SSD for laptop and desktop upgrades",
    },
    {
      id: crypto.randomUUID(),
      company: "Logitech",
      productName: "MK120 Keyboard Mouse Combo",
      category: "Keyboard / Mouse",
      brand: "Logitech",
      model: "MK120",
      type: "Accessory",
      quantity: 12,
      processor: "",
      ram: "",
      storage: "",
      graphics: "",
      display: "",
      condition: "New",
      warranty: "Checking warranty",
      costPrice: 0,
      salePrice: 3600,
      status: "Available",
      notes: "Wired keyboard and mouse set",
    },
  ],
  sales: [],
  laptopRequests: [
    {
      id: crypto.randomUUID(),
      customerName: "Sample Customer",
      phone: "0300-0000000",
      ram: "16 GB",
      processor: "Intel Core i7",
      graphics: "NVIDIA RTX 3050",
      storage: "512 GB SSD",
      condition: "Secondhand",
      budget: "120,000 - 180,000",
      useCase: "Gaming",
      notes: "Needs good battery backup",
      status: "New",
      requestDate: new Date().toISOString().slice(0, 10),
    },
  ],
  services: [
    {
      id: crypto.randomUUID(),
      customerId: "",
      customerName: "Walk-in Customer",
      device: "Acer Aspire 5",
      serviceCategory: "Laptop",
      serviceType: "Laptop Repair",
      issue: "No display after power on",
      diagnosis: "Initial inspection pending",
      partsUsed: "",
      technician: "Workshop",
      estimate: 4500,
      paid: 1000,
      status: "Checking",
      receivedDate: new Date().toISOString().slice(0, 10),
      deliveryDate: "",
      notes: "Call before changing parts",
    },
  ],
  users: [
    {
      id: crypto.randomUUID(),
      name: "Zulfiqar Admin",
      phone: "Owner",
      role: "Admin",
      status: "Active",
      password: "",
      notes: "Full access",
    },
    {
      id: crypto.randomUUID(),
      name: "Staff Member",
      phone: "staff",
      role: "Staff",
      status: "Active",
      password: defaultStaffPassword,
      notes: "Default staff profile",
    },
    {
      id: crypto.randomUUID(),
      name: "Devesh Staff",
      phone: "devesh",
      role: "Staff",
      status: "Active",
      password: defaultStaffPassword,
      notes: "Staff profile",
    },
  ],
};

const schemas = {
  customers: {
    title: "Customer",
    fields: [
      { name: "name", label: "Customer name", required: true },
      { name: "phone", label: "Phone number", required: true },
      { name: "address", label: "Address" },
      { name: "idNumber", label: "CNIC / ID" },
      { name: "notes", label: "Notes", type: "textarea", full: true },
    ],
  },
  laptops: {
    title: "Inventory Item",
    fields: [
      { name: "company", label: "Company", type: "companySelect", required: true },
      { name: "productName", label: "Product name", required: true },
      { name: "category", label: "Category", type: "select", options: ["Laptop", "Desktop", "SSD", "RAM", "Graphics Card", "Motherboard", "Keyboard / Mouse", "CCTV Camera", "Accessory", "Other"] },
      { name: "type", label: "Type", type: "select", options: ["New", "Secondhand", "Accessory", "Part"] },
      { name: "quantity", label: "Quantity available", type: "number", required: true },
      { name: "brand", label: "Brand / make" },
      { name: "model", label: "Model / series" },
      { name: "processor", label: "Processor" },
      { name: "ram", label: "RAM" },
      { name: "storage", label: "Storage" },
      { name: "graphics", label: "Graphics" },
      { name: "display", label: "Display" },
      { name: "condition", label: "Condition" },
      { name: "warranty", label: "Warranty" },
      { name: "costPrice", label: "Cost price", type: "number" },
      { name: "salePrice", label: "Sale price", type: "number", required: true },
      { name: "status", label: "Status", type: "select", options: ["Available", "Low Stock", "Reserved", "Sold", "Unavailable"] },
      { name: "imageUrl", label: "Product image URL", full: true },
      { name: "notes", label: "Specifications / notes", type: "textarea", full: true },
    ],
  },
  sales: {
    title: "Sale",
    fields: [
      { name: "customerId", label: "Customer", type: "customerSelect", required: true },
      { name: "laptopId", label: "Product / inventory item", type: "laptopSelect", required: true },
      { name: "saleDate", label: "Sale date", type: "date", required: true },
      { name: "salePrice", label: "Sale price", type: "number", required: true },
      { name: "paid", label: "Paid amount", type: "number", required: true },
      { name: "paymentMethod", label: "Payment method", type: "select", options: ["Cash", "Bank Transfer", "Card", "Installments"] },
      { name: "taxRate", label: "GST / tax percent", type: "number" },
      { name: "warrantyMonths", label: "Warranty months", type: "number" },
      { name: "notes", label: "Notes", type: "textarea", full: true },
    ],
  },
  laptopRequests: {
    title: "Laptop Request",
    fields: [
      { name: "customerName", label: "Customer name", required: true },
      { name: "phone", label: "Phone number", required: true },
      { name: "category", label: "Item type", type: "select", options: laptopRequestOptions.category },
      { name: "company", label: "Preferred company", type: "select", options: laptopRequestOptions.company },
      { name: "model", label: "Model / laptop name" },
      { name: "ram", label: "RAM", type: "select", options: laptopRequestOptions.ram },
      { name: "processor", label: "Processor", type: "select", options: laptopRequestOptions.processor },
      { name: "graphics", label: "Graphics", type: "select", options: laptopRequestOptions.graphics },
      { name: "storage", label: "Storage", type: "select", options: laptopRequestOptions.storage },
      { name: "display", label: "Display / screen", type: "select", options: laptopRequestOptions.display },
      { name: "condition", label: "Condition", type: "select", options: laptopRequestOptions.condition },
      { name: "budget", label: "Budget", type: "select", options: laptopRequestOptions.budget },
      { name: "useCase", label: "Use case", type: "select", options: laptopRequestOptions.useCase },
      { name: "status", label: "Status", type: "select", options: ["New", "Checking Stock", "Contacted", "Matched", "Closed"] },
      { name: "requestDate", label: "Request date", type: "date" },
      { name: "notes", label: "Notes", type: "textarea", full: true },
    ],
  },
  services: {
    title: "Service Job",
    fields: [
      { name: "customerId", label: "Customer", type: "customerSelect" },
      { name: "customerName", label: "Walk-in name" },
      { name: "serviceCategory", label: "Device category", type: "select", options: serviceCategoryOptions },
      { name: "device", label: "Device", required: true },
      { name: "serviceType", label: "Service type", type: "select", options: ["Laptop Repair", "Desktop Repair", "Software Installation", "Windows Installation", "SSD Upgrade", "RAM Upgrade", "Data Recovery", "CCTV Service", "Cleaning / Maintenance", "Other"] },
      { name: "issue", label: "Problem / issue", required: true },
      { name: "diagnosis", label: "Diagnosis / work done", type: "textarea", full: true },
      { name: "partsUsed", label: "Parts used" },
      { name: "technician", label: "Technician / handled by" },
      { name: "estimate", label: "Estimated amount", type: "number" },
      { name: "paid", label: "Paid amount", type: "number" },
      { name: "receivedDate", label: "Received date", type: "date" },
      { name: "deliveryDate", label: "Delivery date", type: "date" },
      { name: "status", label: "Status", type: "select", options: ["Received", "Checking", "Repairing", "Ready", "Delivered"] },
      { name: "tokenNumber", label: "Repair token number" },
      { name: "notes", label: "Extra notes", type: "textarea", full: true },
    ],
  },
  users: {
    title: "User",
    fields: [
      { name: "name", label: "Employee name", required: true },
      { name: "phone", label: "Phone / login name" },
      { name: "role", label: "Role", type: "select", options: ["Admin", "Staff", "Viewer"] },
      { name: "status", label: "Status", type: "select", options: ["Active", "Paused"] },
      { name: "password", label: "Staff password", type: "password" },
      { name: "notes", label: "Notes", type: "textarea", full: true },
    ],
  },
};

let state = loadState();
let activeView = "dashboard";
let filters = { search: "", type: "All", status: "All" };
let session = { role: "login", customerSearch: "", customerTab: "purchases", productSearch: "", productCategory: "All", productPrice: "All", productAvailability: "All", serviceSuccess: null, laptopRequestSuccess: null };

const appContent = document.querySelector("#appContent");
const navList = document.querySelector("#navList");
const pageTitle = document.querySelector("#pageTitle");
const pageKicker = document.querySelector("#pageKicker");
const loginScreen = document.querySelector("#loginScreen");
const adminShell = document.querySelector("#adminShell");
const customerShell = document.querySelector("#customerShell");
const customerPortalContent = document.querySelector("#customerPortalContent");
const customerPortalSearch = document.querySelector("#customerPortalSearch");
const modalBackdrop = document.querySelector("#modalBackdrop");
const recordForm = document.querySelector("#recordForm");
const modalTitle = document.querySelector("#modalTitle");
const modalKicker = document.querySelector("#modalKicker");
const pdfButton = document.querySelector("#pdfButton");
const staffLoginField = document.querySelector("#staffLoginField");
const adminPasswordLabel = document.querySelector("#adminPasswordLabel");
const backupButton = document.querySelector("#backupButton");
const restoreButton = document.querySelector("#restoreButton");
const restoreInput = document.querySelector("#restoreInput");
const themeButton = document.querySelector("#themeButton");
const passwordToggle = document.querySelector("#passwordToggle");

document.querySelector("#customerLoginTab").addEventListener("click", () => setLoginTab("customer"));
document.querySelector("#adminLoginTab").addEventListener("click", () => setLoginTab("admin"));
passwordToggle?.addEventListener("click", () => {
  const passwordInput = document.querySelector("#adminPassword");
  const showPassword = passwordInput.type === "password";
  passwordInput.type = showPassword ? "text" : "password";
  passwordToggle.textContent = showPassword ? "Hide" : "Show";
  passwordToggle.setAttribute("aria-label", showPassword ? "Hide password" : "Show password");
});
document.querySelectorAll('input[name="adminRole"]').forEach((input) => {
  input.addEventListener("change", updateAdminRoleFields);
});
document.querySelector("#customerLoginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  openCustomerPortal("");
});
document.querySelector("#adminLoginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const value = document.querySelector("#adminPassword").value.trim();
  const selectedRole = new FormData(event.currentTarget).get("adminRole");

  if (selectedRole === "staff") {
    const loginName = normalizeLogin(document.querySelector("#staffLoginName").value);
    const staffUser = findStaffForLogin(loginName, value);
    if (!staffUser) {
      toast("Incorrect staff login");
      return;
    }
    session = { role: "staff", staffId: staffUser.id, staffName: staffUser.name, customerSearch: "" };
    activeView = "dashboard";
    render();
    return;
  }

  if (value !== adminPassword) {
    toast("Incorrect password");
    return;
  }
  session = { role: "admin", customerSearch: "" };
  activeView = "dashboard";
  render();
});
document.querySelector("#adminLogoutButton").addEventListener("click", logout);
document.querySelector("#customerLogoutButton").addEventListener("click", logout);
document.querySelector("#customerPortalSearchButton").addEventListener("click", () => {
  session.customerSearch = customerPortalSearch.value.trim();
  session.customerTab = "purchases";
  session.serviceSuccess = null;
  renderCustomerPortal();
});
customerPortalSearch.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    session.customerSearch = customerPortalSearch.value.trim();
    session.customerTab = "purchases";
    session.serviceSuccess = null;
    renderCustomerPortal();
  }
});
document.querySelector("#menuToggle").addEventListener("click", () => document.body.classList.toggle("menu-open"));
document.querySelector("#drawerBackdrop").addEventListener("click", () => document.body.classList.remove("menu-open"));
document.querySelector("#modalClose").addEventListener("click", closeModal);
document.querySelector("#quickAddButton").addEventListener("click", () => openCreateForView());
pdfButton.addEventListener("click", downloadPdfReport);
backupButton.addEventListener("click", exportBackup);
restoreButton.addEventListener("click", () => restoreInput.click());
restoreInput.addEventListener("change", importBackup);
themeButton.addEventListener("click", toggleTheme);

document.documentElement.dataset.theme = localStorage.getItem(themeKey) || "light";
themeButton.textContent = document.documentElement.dataset.theme === "dark" ? "Light" : "Dark";

render();

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return normalizeState(structuredClone(defaultData));
  try {
    return normalizeState({ ...structuredClone(defaultData), ...JSON.parse(saved) });
  } catch {
    return normalizeState(structuredClone(defaultData));
  }
}

function normalizeState(data) {
  data.laptops = (data.laptops || []).map((item) => ({
    quantity: item.status === "Sold" ? 0 : 1,
    company: item.company || item.brand || "General",
    productName: item.productName || item.model || item.brand || "Inventory item",
    category: item.category || "Laptop",
    type: item.type || "New",
    ...item,
  }));
  data.services = (data.services || []).map((job) => ({
    serviceCategory: "Laptop",
    serviceType: "Laptop Repair",
    diagnosis: "",
    partsUsed: "",
    technician: "",
    deliveryDate: "",
    tokenNumber: "",
    ...job,
  }));
  data.sales = (data.sales || []).map((sale) => ({
    taxRate: 0,
    warrantyMonths: 0,
    ...sale,
  }));
  data.laptopRequests = (data.laptopRequests || []).map((request) => ({
    status: "New",
    requestDate: new Date().toISOString().slice(0, 10),
    ...request,
  }));
  data.users = (data.users || []).map((user) => ({
    password: user.role === "Staff" ? defaultStaffPassword : "",
    ...user,
  }));
  if (!data.users.some((user) => user.role === "Staff")) {
    data.users.push({
      id: crypto.randomUUID(),
      name: "Staff Member",
      phone: "staff",
      role: "Staff",
      status: "Active",
      password: defaultStaffPassword,
      notes: "Default staff profile",
    });
  }
  if (!data.users.some((user) => normalizeLogin(user.name) === "devesh staff" || normalizeLogin(user.phone) === "devesh")) {
    data.users.push({
      id: crypto.randomUUID(),
      name: "Devesh Staff",
      phone: "devesh",
      role: "Staff",
      status: "Active",
      password: defaultStaffPassword,
      notes: "Staff profile",
    });
  }
  return data;
}

function normalizeLogin(value) {
  return String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function findStaffForLogin(loginName, password) {
  return state.users.find((user) => {
    const isStaff = normalizeLogin(user.role) === "staff";
    const isActive = normalizeLogin(user.status || "Active") === "active";
    const userPassword = String(user.password || defaultStaffPassword).trim();
    const possibleNames = [user.name, user.phone].map(normalizeLogin).filter(Boolean);
    const nameMatch = possibleNames.some((name) => name === loginName || name.includes(loginName) || loginName.includes(name));
    return isStaff && isActive && nameMatch && userPassword === password;
  });
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function money(value) {
  const number = Number(value || 0);
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(number);
}

function render() {
  loginScreen.classList.toggle("hidden", session.role !== "login");
  adminShell.classList.toggle("hidden", !isWorkspaceUser());
  customerShell.classList.toggle("hidden", session.role !== "customer");

  if (session.role === "login") return;
  if (session.role === "customer") {
    renderCustomerPortal();
    return;
  }

  renderNav();
  if (!allowedViews().some((nav) => nav.id === activeView)) activeView = "dashboard";
  const item = navItems.find((nav) => nav.id === activeView);
  pageTitle.textContent = item.label;
  pageKicker.textContent = `${item.kicker} - ${isMainAdmin() ? "Main Admin" : `Staff: ${session.staffName || "Staff"}`}`;
  document.querySelector("#quickAddButton").textContent = activeView === "dashboard" ? (isMainAdmin() ? "Add Sale" : "Add Service") : `Add ${singular(activeView)}`;
  pdfButton.classList.toggle("hidden", !["sales", "inventory", "customers", "services"].includes(activeView));
  pdfButton.textContent = `${item.label} PDF`;

  if (activeView === "dashboard") renderDashboard();
  if (activeView === "customers") renderCustomers();
  if (activeView === "inventory") renderInventory();
  if (activeView === "sales") renderSales();
  if (activeView === "services") renderServices();
  if (activeView === "users") renderUsers();
}

function setLoginTab(type) {
  const isCustomer = type === "customer";
  loginScreen.classList.remove("login-tab-customer", "login-tab-admin");
  loginScreen.classList.add(isCustomer ? "login-tab-customer" : "login-tab-admin");
  document.querySelector("#customerLoginTab").classList.toggle("active", isCustomer);
  document.querySelector("#adminLoginTab").classList.toggle("active", !isCustomer);
  document.querySelector("#customerLoginForm").classList.toggle("hidden", !isCustomer);
  document.querySelector("#adminLoginForm").classList.toggle("hidden", isCustomer);
  if (!isCustomer) updateAdminRoleFields();
}

function updateAdminRoleFields() {
  const selectedRole = new FormData(document.querySelector("#adminLoginForm")).get("adminRole");
  const isStaff = selectedRole === "staff";
  staffLoginField.classList.toggle("hidden", !isStaff);
  document.querySelector("#staffLoginName").required = isStaff;
  adminPasswordLabel.textContent = isStaff ? "Staff password" : "Admin password";
  document.querySelector("#adminPassword").placeholder = isStaff ? "Enter staff password" : "Enter admin password";
}

function openCustomerPortal(name) {
  session = { role: "customer", customerSearch: name.trim(), customerTab: "purchases", productSearch: "", productCategory: "All", productPrice: "All", productAvailability: "All", serviceSuccess: null, laptopRequestSuccess: null };
  customerPortalSearch.value = session.customerSearch;
  render();
}

function logout() {
  session = { role: "login", customerSearch: "", customerTab: "purchases", productSearch: "", productCategory: "All", productPrice: "All", productAvailability: "All", serviceSuccess: null, laptopRequestSuccess: null };
  document.querySelector("#adminPassword").value = "";
  document.querySelector("#staffLoginName").value = "";
  document.body.classList.remove("menu-open");
  closeModal();
  render();
}

function isWorkspaceUser() {
  return session.role === "admin" || session.role === "staff";
}

function isMainAdmin() {
  return session.role === "admin";
}

function allowedViews() {
  return isMainAdmin() ? navItems : navItems.filter((item) => ["dashboard", "customers", "services"].includes(item.id));
}

function renderNav() {
  navList.innerHTML = allowedViews()
    .map((item) => {
      const count = getCount(item.id);
      return `<button class="nav-item ${activeView === item.id ? "active" : ""}" data-view="${item.id}" type="button">
        <span>${item.icon}</span><span>${item.label}</span><span class="nav-count">${count}</span>
      </button>`;
    })
    .join("");

  navList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeView = button.dataset.view;
      filters = { search: "", type: "All", status: "All" };
      document.body.classList.remove("menu-open");
      render();
    });
  });
}

function getCount(view) {
  if (view === "dashboard") return "";
  if (view === "inventory") return state.laptopRequests.length;
  return state[view]?.length ?? "";
}

function renderDashboard() {
  const revenue = state.sales.reduce((sum, sale) => sum + Number(sale.salePrice || 0), 0);
  const cost = state.sales.reduce((sum, sale) => {
    const item = state.laptops.find((laptop) => laptop.id === sale.laptopId);
    return sum + Number(item?.costPrice || 0);
  }, 0);
  const profit = revenue - cost;
  const due = state.sales.reduce((sum, sale) => sum + Math.max(Number(sale.salePrice || 0) - Number(sale.paid || 0), 0), 0);
  const serviceDue = state.services.reduce((sum, job) => sum + Math.max(Number(job.estimate || 0) - Number(job.paid || 0), 0), 0);
  const available = state.laptops.filter((item) => Number(item.quantity || 0) > 0 && item.status !== "Unavailable" && item.status !== "Sold").length;
  const bestProduct = bestBy(state.sales.map((sale) => laptopName(sale.laptopId))).label;
  const repairedType = bestBy(state.services.map((job) => job.serviceCategory || "Device")).label;
  const warrantyAlerts = warrantyExpiringSales().length;

  appContent.innerHTML = `
    <div class="stats-grid">
      ${statCard("Customers", state.customers.length)}
      ${statCard("Laptop Requests", state.laptopRequests.length)}
      ${statCard("Sales Revenue", money(revenue))}
      ${statCard("Profit", money(profit))}
      ${statCard("Pending Balance", money(due + serviceDue))}
      ${statCard("Repair Tokens", state.services.length)}
      ${statCard("Best Seller", bestProduct || "-")}
      ${statCard("Most Repaired", repairedType || "-")}
      ${statCard("Warranty Alerts", warrantyAlerts)}
    </div>
    <div class="dashboard-grid">
      <section class="data-card">
        <h2 class="section-title">Recent Sales</h2>
        ${activityList(
          state.sales.slice(-6).reverse().map((sale) => ({
            title: customerName(sale.customerId),
            subtitle: `${laptopName(sale.laptopId)} - ${sale.saleDate || "No date"}`,
            badge: money(sale.salePrice),
            tone: balance(sale.salePrice, sale.paid) > 0 ? "warn" : "good",
          })),
          "No sales yet. Add your first sale from the Sales section."
        )}
      </section>
      <section class="data-card">
        <h2 class="section-title">Open Services</h2>
        ${activityList(
          state.services
            .filter((job) => job.status !== "Delivered")
            .slice(-6)
            .reverse()
            .map((job) => ({
              title: job.device,
              subtitle: `${serviceCustomer(job)} - ${job.issue}`,
              badge: job.status,
              tone: serviceTone(job.status),
            })),
          "No open service jobs."
        )}
      </section>
    </div>`;
}

function renderCustomerPortal() {
  customerPortalSearch.value = session.customerSearch;
  const term = session.customerSearch.trim().toLowerCase();
  const products = filteredCustomerProducts();
  const matchedCustomers = term
    ? state.customers.filter((customer) => customer.name.toLowerCase().includes(term))
    : [];
  const customerIds = matchedCustomers.map((customer) => customer.id);
  const purchases = state.sales.filter((sale) => customerIds.includes(sale.customerId));
  const services = state.services.filter((job) => {
    const nameMatch = serviceCustomer(job).toLowerCase().includes(term);
    return term && (customerIds.includes(job.customerId) || nameMatch);
  });

  customerPortalContent.innerHTML = `
    <section class="customer-dashboard-strip">
      ${customerMetric("Purchases", purchases.length)}
      ${customerMetric("Services", services.length)}
      ${customerMetric("Open Repairs", services.filter((job) => job.status !== "Delivered").length)}
      ${customerMetric("Balance", money(
        purchases.reduce((sum, sale) => sum + balance(sale.salePrice, sale.paid), 0) +
        services.reduce((sum, job) => sum + balance(job.estimate, job.paid), 0)
      ))}
    </section>
    <section class="customer-tabs">
      ${customerTabButton("purchases", "Purchases")}
      ${customerTabButton("services", "Services")}
      ${customerTabButton("products", "Stock Request")}
      ${customerTabButton("request", "Service Request")}
    </section>
    <section class="data-card customer-record-card">
      ${customerTabContent({ term, matchedCustomers, purchases, services, products })}
    </section>
  `;

  bindCustomerPortalActions();
}

function customerTabButton(id, label) {
  return `<button class="customer-tab ${session.customerTab === id ? "active" : ""}" type="button" data-customer-tab="${id}">${label}</button>`;
}

function customerTabContent({ term, matchedCustomers, purchases, services, products }) {
  if (session.customerTab === "purchases") {
    return `${customerPanelHeader("Customer dashboard", "Purchases", "Contact shop")}
      ${term ? customerPurchasesHtml(matchedCustomers, purchases) : customerEmptyState("Search your name to see purchase history, warranty notes, and payment balance.")}`;
  }
  if (session.customerTab === "services") {
    return `${customerPanelHeader("Repair tracking", "Services", "Check repair status")}
      ${term ? customerServicesHtml(matchedCustomers, services) : customerEmptyState("Search your name to see your repair timeline and service history.")}`;
  }
  if (session.customerTab === "products") {
    return `${customerPanelHeader("Stock finder", "Request Product By Specification", "Contact shop")}
      <div class="portal-section stock-request-panel">
        <div class="section-heading-row">
          <div>
            <p class="eyebrow">Arrange on demand</p>
            <h2 class="section-title">Tell Us What You Need</h2>
          </div>
          <span class="badge good">Sent to admin</span>
        </div>
        ${session.laptopRequestSuccess ? laptopRequestSuccessHtml(session.laptopRequestSuccess) : laptopRequestFormHtml()}
      </div>
      <div class="portal-section">
        <div class="section-heading-row">
          <div>
            <p class="eyebrow">Current examples</p>
            <h2 class="section-title">Available Product Samples</h2>
          </div>
        </div>
        ${customerProductFilters()}
        <div class="cards-grid">${products.length ? products.map(customerProductCard).join("") : empty("No products found for these filters.")}</div>
      </div>`;
  }
  return `${customerPanelHeader("Repair support", "Request Service", "Contact shop")}
    ${session.serviceSuccess ? serviceSuccessHtml(session.serviceSuccess) : serviceRequestFormHtml()}
    <div class="portal-section">
      <div class="section-heading-row">
        <div>
          <p class="eyebrow">Laptop finder</p>
          <h2 class="section-title">Request A Laptop By Specification</h2>
        </div>
        <span class="badge good">Admin receives request</span>
      </div>
      ${laptopRequestFormHtml()}
    </div>`;
}

function customerPanelHeader(kicker, title, actionLabel) {
  return `<div class="section-heading-row">
    <div>
      <p class="eyebrow">${kicker}</p>
      <h2 class="section-title">${title}</h2>
    </div>
    ${whatsAppLink(actionLabel, "Hello Zulfiqar Computers, I need help from the customer portal.")}
  </div>`;
}

function customerPurchasesHtml(customers, purchases) {
  if (!customers.length && !purchases.length) {
    return `<div class="empty-state premium-empty">
      <strong>No purchase record found</strong>
      <span>Check the spelling or contact the shop so we can find your bill.</span>
      ${whatsAppLink("Contact shop", "Hello Zulfiqar Computers, please help me find my purchase record.")}
    </div>`;
  }
  return `${summaryBand([
    ["Matched customers", customers.length],
    ["Purchases", purchases.length],
    ["Pending", money(purchases.reduce((sum, sale) => sum + balance(sale.salePrice, sale.paid), 0))],
  ])}
  ${purchases.length ? `<div class="note-list customer-note-list">${purchases.map(customerSaleNote).join("")}</div>` : empty("No purchases found for this name.")}`;
}

function customerServicesHtml(customers, services) {
  if (!customers.length && !services.length) {
    return `<div class="empty-state premium-empty">
      <strong>No service record found</strong>
      <span>If your device was recently submitted, contact the shop with your phone number or token.</span>
      ${whatsAppLink("Check repair status", "Hello Zulfiqar Computers, please help me check my repair status.")}
    </div>`;
  }
  return `${summaryBand([
    ["Matched customers", customers.length],
    ["Service jobs", services.length],
    ["Open repairs", services.filter((job) => job.status !== "Delivered").length],
  ])}
  ${services.length ? `<div class="note-list customer-note-list">${services.map(customerServiceNote).join("")}</div>` : empty("No service records found for this name.")}`;
}

function serviceRequestFormHtml() {
  return `<form class="contact-form" id="customerServiceForm">
    <input class="input" name="customerName" placeholder="Your name" value="${escapeHtml(session.customerSearch)}" required />
    <input class="input" name="phone" placeholder="Phone number" />
    <select class="select" name="serviceCategory" required>
      ${serviceCategoryOptions.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("")}
    </select>
    <input class="input" name="device" placeholder="Device model / details" required />
    <textarea class="textarea" name="issue" placeholder="Tell us the problem" required></textarea>
    <button class="primary-action" type="submit">Send Service Request</button>
  </form>`;
}

function laptopRequestFormHtml() {
  return `<form class="form-grid laptop-request-form" id="customerLaptopRequestForm">
    <div class="form-field">
      <label>Your name</label>
      <input class="input" name="customerName" value="${escapeHtml(session.customerSearch)}" required />
    </div>
    <div class="form-field">
      <label>Phone number</label>
      <input class="input" name="phone" required />
    </div>
    ${requestSelect("Item type", "category", laptopRequestOptions.category)}
    ${requestSelect("Preferred company", "company", laptopRequestOptions.company)}
    <div class="form-field">
      <label>Model / laptop name</label>
      <input class="input" name="model" placeholder="Example: EliteBook, ThinkPad, Victus, any model" />
    </div>
    ${requestSelect("RAM", "ram", laptopRequestOptions.ram)}
    ${requestSelect("Processor", "processor", laptopRequestOptions.processor)}
    ${requestSelect("Graphics", "graphics", laptopRequestOptions.graphics)}
    ${requestSelect("Storage", "storage", laptopRequestOptions.storage)}
    ${requestSelect("Display / screen", "display", laptopRequestOptions.display)}
    ${requestSelect("Condition", "condition", laptopRequestOptions.condition)}
    ${requestSelect("Budget", "budget", laptopRequestOptions.budget)}
    ${requestSelect("Use case", "useCase", laptopRequestOptions.useCase)}
    <div class="form-field full">
      <label>Extra notes</label>
      <textarea class="textarea" name="notes" placeholder="Any preferred company, model, screen size, battery backup, etc."></textarea>
    </div>
    <div class="form-actions">
      <button class="primary-action" type="submit">Send Laptop Request</button>
    </div>
  </form>`;
}

function laptopRequestSuccessHtml(data) {
  return `<div class="success-panel">
    <span class="success-icon">OK</span>
    <h3>Stock request sent to admin</h3>
    <p>Thanks, ${escapeHtml(data.customerName)}. Zulfiqar Computers will check the market and contact you about this request.</p>
    <div class="note-specs">
      ${specLine("Item", data.category)}
      ${specLine("Company", data.company)}
      ${specLine("Model", data.model)}
      ${specLine("Processor", data.processor)}
      ${specLine("RAM", data.ram)}
      ${specLine("Budget", data.budget)}
      ${specLine("Status", "New request")}
    </div>
    ${whatsAppLink("Message shop", `Hello Zulfiqar Computers, I submitted a stock request for ${data.category || "a product"}.`)}
    <button class="secondary-action" type="button" id="newLaptopRequestButton">Send another stock request</button>
  </div>`;
}

function serviceSuccessHtml(data) {
  return `<div class="success-panel">
    <span class="success-icon">OK</span>
    <h3>Service request received</h3>
    <p>Thanks, ${escapeHtml(data.customerName)}. Zulfiqar Computers will contact you about your ${escapeHtml(data.device)}.</p>
    <div class="note-specs">
      ${specLine("Category", data.serviceCategory)}
      ${specLine("Phone", data.phone)}
      ${specLine("Status", "Received")}
    </div>
    ${whatsAppLink("Message shop", `Hello Zulfiqar Computers, I submitted a service request for ${data.device}.`)}
    <button class="secondary-action" type="button" id="newServiceRequestButton">Send another request</button>
  </div>`;
}

function customerProductFilters() {
  const categories = ["All", ...new Set(state.laptops.map((item) => item.category || "Other"))];
  const prices = ["All", "Under 50,000", "50,000 - 100,000", "100,000 - 150,000", "150,000+"];
  const availability = ["All", "Available", "Low Stock", "Reserved", "Sold", "Unavailable"];
  return `<div class="customer-product-filters">
    <input class="input" id="customerProductSearch" type="search" placeholder="Search products, brands, RAM, storage..." value="${escapeHtml(session.productSearch || "")}" />
    <select class="select" id="customerProductCategory">${categories.map((option) => `<option value="${escapeHtml(option)}" ${session.productCategory === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>
    <select class="select" id="customerProductPrice">${prices.map((option) => `<option value="${escapeHtml(option)}" ${session.productPrice === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>
    <select class="select" id="customerProductAvailability">${availability.map((option) => `<option value="${escapeHtml(option)}" ${session.productAvailability === option ? "selected" : ""}>${escapeHtml(option === "All" ? "All stock" : option)}</option>`).join("")}</select>
  </div>`;
}

function filteredCustomerProducts() {
  return state.laptops.filter((item) => {
    const query = String(session.productSearch || "").trim().toLowerCase();
    const searchable = [itemName(item), item.company, item.brand, item.category, item.type, item.processor, item.ram, item.storage, item.graphics, item.display, item.condition, item.warranty, item.notes]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    const searchMatch = !query || searchable.includes(query);
    const availability = publicStockText(item);
    const availabilityMatch = session.productAvailability === "All" || !session.productAvailability || availability === session.productAvailability;
    const categoryMatch = session.productCategory === "All" || !session.productCategory || item.category === session.productCategory;
    const priceMatch = priceRangeMatch(item.salePrice, session.productPrice);
    return searchMatch && availabilityMatch && categoryMatch && priceMatch;
  });
}

function priceRangeMatch(value, range) {
  const price = Number(value || 0);
  if (!range || range === "All") return true;
  if (range === "Under 50,000") return price < 50000;
  if (range === "50,000 - 100,000") return price >= 50000 && price <= 100000;
  if (range === "100,000 - 150,000") return price > 100000 && price <= 150000;
  if (range === "150,000+") return price > 150000;
  return true;
}

function customerProductCard(item) {
  return `<article class="item-card product-card">
    ${productConfigImage(item)}
    <div class="product-card-body">
      <strong class="item-title">${escapeHtml(itemName(item))}</strong>
      <span class="item-subtitle">${escapeHtml(item.company || item.brand || "General")} - ${escapeHtml(item.condition || item.type || "Stock item")}</span>
      <div class="product-mini-specs">
        ${customerSpec("RAM", item.ram)}
        ${customerSpec("Storage", item.storage)}
        ${customerSpec("Graphics", item.graphics)}
      </div>
    </div>
    <div class="price-row">
      <strong>${money(item.salePrice)}</strong>
      <button class="secondary-action" type="button" data-action="customer-product" data-id="${item.id}">View details</button>
    </div>
  </article>`;
}

function bindCustomerPortalActions() {
  document.querySelectorAll("[data-customer-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      session.customerTab = button.dataset.customerTab;
      session.serviceSuccess = null;
      renderCustomerPortal();
    });
  });
  document.querySelector("#customerServiceForm")?.addEventListener("submit", submitCustomerServiceRequest);
  document.querySelector("#customerLaptopRequestForm")?.addEventListener("submit", submitLaptopRequest);
  document.querySelector("#customerProductCategory")?.addEventListener("change", (event) => {
    session.productCategory = event.target.value;
    renderCustomerPortal();
  });
  document.querySelector("#customerProductPrice")?.addEventListener("change", (event) => {
    session.productPrice = event.target.value;
    renderCustomerPortal();
  });
  document.querySelector("#customerProductAvailability")?.addEventListener("change", (event) => {
    session.productAvailability = event.target.value;
    renderCustomerPortal();
  });
  document.querySelector("#customerProductSearch")?.addEventListener("change", (event) => {
    session.productSearch = event.target.value;
    renderCustomerPortal();
  });
  document.querySelector("#customerProductSearch")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      session.productSearch = event.target.value;
      renderCustomerPortal();
    }
  });
  document.querySelector("#newServiceRequestButton")?.addEventListener("click", () => {
    session.serviceSuccess = null;
    renderCustomerPortal();
  });
  document.querySelector("#newLaptopRequestButton")?.addEventListener("click", () => {
    session.laptopRequestSuccess = null;
    renderCustomerPortal();
  });
  document.querySelectorAll('[data-action="customer-product"]').forEach((button) => {
    button.addEventListener("click", () => openCustomerProductModal(button.dataset.id));
  });
}

function customerMetric(label, value) {
  return `<div class="customer-metric"><span>${label}</span><strong>${value}</strong></div>`;
}

function customerEmptyState(message) {
  return `<div class="empty-state premium-empty">
    <strong>No customer selected yet</strong>
    <span>${escapeHtml(message)}</span>
  </div>`;
}

function requestSelect(label, name, options) {
  return `<div class="form-field">
    <label>${label}</label>
    <select class="select" name="${name}">${options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("")}</select>
  </div>`;
}

function whatsAppLink(label, message) {
  return `<a class="quick-link" href="https://wa.me/${shopWhatsAppNumber}?text=${encodeURIComponent(message)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`;
}

function openCustomerProductModal(id) {
  const item = state.laptops.find((laptop) => laptop.id === id);
  if (!item) return;
  const related = relatedProducts(item);
  modalKicker.textContent = "Product details";
  modalTitle.textContent = itemName(item);
  recordForm.innerHTML = `<div class="product-detail-modal full">
    <div class="product-detail-hero">
      ${productConfigImage(item, "detail")}
      <div class="product-detail-summary">
        <div>
          <span class="badge neutral">${escapeHtml(item.category || "Product")}</span>
          <span class="badge ${stockTone(item)}">${publicStockText(item)}</span>
        </div>
        <h3>${escapeHtml(itemName(item))}</h3>
        <p>${escapeHtml(item.company || item.brand || "Zulfiqar Computers")} - ${escapeHtml(item.type || item.condition || "Inventory item")}</p>
        <strong class="product-detail-price">${money(item.salePrice)}</strong>
        <div class="form-actions">
          ${whatsAppLink("Contact shop", `Hello Zulfiqar Computers, I want details for ${itemName(item)}.`)}
          <button class="secondary-action" type="button" id="productRequestService">Request service</button>
          <button class="secondary-action" type="button" id="productModalClose">Close</button>
        </div>
      </div>
    </div>
    <div class="note-specs product-detail-specs">
      ${specLine("Company / brand", item.company || item.brand)}
      ${specLine("Category", item.category)}
      ${specLine("Type", item.type)}
      ${specLine("Processor", item.processor)}
      ${specLine("RAM", item.ram)}
      ${specLine("Storage", item.storage)}
      ${specLine("Graphics", item.graphics)}
      ${specLine("Display", item.display)}
      ${specLine("Condition", item.condition)}
      ${specLine("Warranty", item.warranty)}
      ${specLine("Stock quantity", Number(item.quantity || 0))}
      ${specLine("Availability", publicStockText(item))}
    </div>
    ${item.notes ? `<p class="note-text">${escapeHtml(item.notes)}</p>` : ""}
    <section class="related-products">
      <div class="section-heading">
        <span class="eyebrow">Matched stock</span>
        <h3>Related Products</h3>
      </div>
      <div class="related-products-grid">
        ${related.length ? related.map(relatedProductCard).join("") : empty("No related products found yet.")}
      </div>
    </section>
  </div>`;
  recordForm.onsubmit = (event) => event.preventDefault();
  modalBackdrop.classList.remove("hidden");
  document.querySelector("#productModalClose").addEventListener("click", closeModal);
  document.querySelector("#productRequestService").addEventListener("click", () => {
    closeModal();
    session.customerTab = "request";
    renderCustomerPortal();
  });
  document.querySelectorAll('[data-action="related-product"]').forEach((button) => {
    button.addEventListener("click", () => openCustomerProductModal(button.dataset.id));
  });
}

function customerRecordHtml(customers, purchases, services) {
  if (!customers.length && !purchases.length && !services.length) {
    return `<div class="empty-state premium-empty">
      <strong>No matching record found</strong>
      <span>Check the spelling or send a service request. The shop can create your profile when they contact you.</span>
      <a class="quick-link" href="https://wa.me/?text=Hello%20Zulfiqar%20Computers%2C%20please%20help%20me%20find%20my%20record." target="_blank" rel="noreferrer">Contact shop</a>
    </div>`;
  }

  return `
    <div class="summary-band">
      <div><span>Matched customers</span><strong>${customers.length}</strong></div>
      <div><span>Purchases</span><strong>${purchases.length}</strong></div>
      <div><span>Service jobs</span><strong>${services.length}</strong></div>
    </div>
    <h3 class="section-title">Purchases</h3>
    ${
      purchases.length
        ? `<div class="note-list customer-note-list">${purchases.map(customerSaleNote).join("")}</div>`
        : empty("No purchases found for this name.")
    }
    <h3 class="section-title portal-section">Services</h3>
    ${
      services.length
        ? `<div class="note-list customer-note-list">${services.map(customerServiceNote).join("")}</div>`
        : empty("No service records found for this name.")
    }
  `;
}

function customerSaleNote(sale) {
  const item = state.laptops.find((stockItem) => stockItem.id === sale.laptopId);
  const due = balance(sale.salePrice, sale.paid);
  return `<details class="mini-note expandable-note">
    <summary>
      <div>
        <strong>${escapeHtml(item ? itemName(item) : "Purchased product")}</strong>
        <span>${escapeHtml(sale.saleDate || "No date")} - ${escapeHtml(item?.company || "Zulfiqar Computers")}</span>
      </div>
      <div>
        ${badge(due > 0 ? "Balance Due" : "Paid", due > 0 ? "warn" : "good")}
        <span>${money(sale.salePrice)} / Balance ${money(due)}</span>
      </div>
    </summary>
    <div class="expandable-body">
      <span><strong>Payment:</strong> ${escapeHtml(sale.paymentMethod || "-")}</span>
      <span><strong>Paid:</strong> ${money(sale.paid)}</span>
      <span><strong>Warranty:</strong> ${sale.warrantyMonths ? `${escapeHtml(sale.warrantyMonths)} months` : "Not added"}</span>
      <a class="quick-link" href="https://wa.me/?text=${encodeURIComponent(`Hello Zulfiqar Computers, I need details for my purchase: ${item ? itemName(item) : "product"}.`)}" target="_blank" rel="noreferrer">Contact shop</a>
    </div>
  </details>`;
}

function customerServiceNote(job) {
  const due = balance(job.estimate, job.paid);
  return `<details class="mini-note expandable-note">
    <summary>
      <div>
        <strong>${escapeHtml(job.device || "Service device")}</strong>
        <span>${escapeHtml(job.serviceCategory || "Device")} - ${escapeHtml(job.serviceType || "Service")} - ${escapeHtml(job.issue || "Issue not entered")}</span>
      </div>
      <div>
        ${badge(job.status || "Received", serviceTone(job.status))}
        <span>Estimate ${money(job.estimate)} / Balance ${money(due)}</span>
      </div>
    </summary>
    <div class="expandable-body">
      <span><strong>Token:</strong> ${escapeHtml(job.tokenNumber || "Pending")}</span>
      <span><strong>Received:</strong> ${escapeHtml(job.receivedDate || "-")}</span>
      <span><strong>Delivery:</strong> ${escapeHtml(job.deliveryDate || "Not delivered")}</span>
      ${job.diagnosis ? `<span><strong>Work:</strong> ${escapeHtml(job.diagnosis)}</span>` : ""}
      ${whatsAppLink("Check repair status", `Hello Zulfiqar Computers, I want to check repair status for ${job.device || "my device"}.`)}
    </div>
    ${repairTimeline(job.status)}
  </details>`;
}

function repairTimeline(status) {
  const steps = ["Received", "Checking", "Repairing", "Ready", "Delivered"];
  const current = Math.max(0, steps.indexOf(status || "Received"));
  return `<div class="repair-timeline">${steps.map((step, index) => `<span class="${index <= current ? "done" : ""}">${step}</span>`).join("")}</div>`;
}

function customerLaptopCard(laptop) {
  return `<article class="item-card product-card">
    ${productConfigImage(laptop)}
    <div>
      <span class="badge neutral">${escapeHtml(laptop.category || "Item")}</span>
      <span class="badge ${stockTone(laptop)}">${publicStockText(laptop)}</span>
    </div>
    <div>
      <strong class="item-title">${escapeHtml(itemName(laptop))}</strong>
      <span class="item-subtitle">${escapeHtml(laptop.company || laptop.brand || "General")} - ${escapeHtml(laptop.type || "Stock item")}</span>
    </div>
    <div class="spec-grid">
      ${customerSpec("Processor", laptop.processor)}
      ${customerSpec("RAM", laptop.ram)}
      ${customerSpec("Storage", laptop.storage)}
      ${customerSpec("Graphics", laptop.graphics)}
      ${customerSpec("Display", laptop.display)}
      ${customerSpec("Warranty", laptop.warranty)}
    </div>
    <div class="price-row">
      <strong>${money(laptop.salePrice)}</strong>
      ${badge(`Qty ${Number(laptop.quantity || 0)}`, "good")}
    </div>
  </article>`;
}

function customerSpec(label, value) {
  if (!value) return "";
  return `<span><strong>${label}:</strong> ${escapeHtml(value)}</span>`;
}

function submitCustomerServiceRequest(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const customerName = String(formData.get("customerName") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const existingCustomer = state.customers.find((customer) => customer.name.toLowerCase() === customerName.toLowerCase());

  const request = {
    id: crypto.randomUUID(),
    customerId: existingCustomer?.id || "",
    customerName,
    device: String(formData.get("device") || "").trim(),
    serviceCategory: String(formData.get("serviceCategory") || "Other"),
    serviceType: "Laptop Repair",
    issue: String(formData.get("issue") || "").trim(),
    diagnosis: "",
    partsUsed: "",
    technician: "",
    estimate: 0,
    paid: 0,
    status: "Received",
    receivedDate: new Date().toISOString().slice(0, 10),
    deliveryDate: "",
    notes: phone ? `Customer service request. Phone: ${phone}` : "Customer service request",
  };
  state.services.push(request);

  saveState();
  session.serviceSuccess = { customerName, phone, device: request.device, serviceCategory: request.serviceCategory };
  session.customerTab = "request";
  toast("Service request sent");
  renderCustomerPortal();
}

function submitLaptopRequest(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  state.laptopRequests.push({
    id: crypto.randomUUID(),
    customerName: String(formData.get("customerName") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    category: String(formData.get("category") || ""),
    company: String(formData.get("company") || ""),
    model: String(formData.get("model") || "").trim(),
    ram: String(formData.get("ram") || ""),
    processor: String(formData.get("processor") || ""),
    graphics: String(formData.get("graphics") || ""),
    storage: String(formData.get("storage") || ""),
    display: String(formData.get("display") || ""),
    condition: String(formData.get("condition") || ""),
    budget: String(formData.get("budget") || ""),
    useCase: String(formData.get("useCase") || ""),
    notes: String(formData.get("notes") || "").trim(),
    status: "New",
    requestDate: new Date().toISOString().slice(0, 10),
  });
  const request = state.laptopRequests[state.laptopRequests.length - 1];
  saveState();
  session.laptopRequestSuccess = request;
  session.customerTab = "products";
  toast("Laptop request sent to admin");
  renderCustomerPortal();
}

function renderCustomers() {
  const rows = filtered(state.customers, ["name", "phone", "address", "idNumber", "notes"]);
  appContent.innerHTML = `
    ${toolbar("Search customers", [], [])}
    ${rows.length ? `<div class="note-list">${rows.map(customerProfileNote).join("")}</div>` : empty("No matching customers found.")}
  `;
  bindToolbar();
  bindActions();
}

function customerProfileNote(customer) {
  const purchases = state.sales.filter((sale) => sale.customerId === customer.id);
  const services = state.services.filter((job) => job.customerId === customer.id || serviceCustomer(job).toLowerCase() === customer.name.toLowerCase());
  const pendingServiceBalance = services.reduce((sum, job) => sum + balance(job.estimate, job.paid), 0);
  const recentServices = services.slice(-3).reverse();

  return `<article class="note-card customer-profile-note">
    <div class="note-head">
      <div>
        <span class="note-company">Customer Profile</span>
        <h2>${escapeHtml(customer.name)}</h2>
        <p>${escapeHtml(customer.phone || "No phone")} - ${escapeHtml(customer.address || "No address")}</p>
      </div>
      <div class="note-stock">
        <span>Services</span>
        <strong>${services.length}</strong>
        ${badge(pendingServiceBalance > 0 ? "Balance Due" : "Clear", pendingServiceBalance > 0 ? "warn" : "good")}
      </div>
    </div>
    <div class="note-specs">
      ${specLine("CNIC / ID", customer.idNumber)}
      ${specLine("Purchases", purchases.length)}
      ${specLine("Service Jobs", services.length)}
      ${specLine("Service Balance", money(pendingServiceBalance))}
    </div>
    ${
      recentServices.length
        ? `<div class="embedded-list">${recentServices.map((job) => `<div>
            <strong>${escapeHtml(job.device || "Service device")}</strong>
            <span>${escapeHtml(job.serviceCategory || "Device")} - ${escapeHtml(job.serviceType || "Service")} - ${escapeHtml(job.status || "Received")} - ${money(balance(job.estimate, job.paid))} balance</span>
          </div>`).join("")}</div>`
        : `<p class="note-text">No service history yet.</p>`
    }
    ${customer.notes ? `<p class="note-text"><strong>Profile Notes:</strong><br>${escapeHtml(customer.notes)}</p>` : ""}
    <div class="note-actions">${actions("customers", customer.id)}</div>
  </article>`;
}

function renderInventory() {
  const rows = filtered(state.laptopRequests, ["customerName", "phone", "category", "company", "model", "ram", "processor", "graphics", "storage", "display", "condition", "budget", "useCase", "status", "notes"]).filter((request) => {
    return filters.status === "All" || request.status === filters.status;
  });
  appContent.innerHTML = `
    ${summaryBand([
      ["Total requests", rows.length],
      ["New requests", rows.filter((request) => request.status === "New").length],
      ["Matched", rows.filter((request) => request.status === "Matched").length],
    ])}
    ${toolbar("Search laptop requests", [], ["All", "New", "Checking Stock", "Contacted", "Matched", "Closed"])}
    ${rows.length ? `<div class="note-list">${rows.map(laptopRequestNote).join("")}</div>` : empty("No laptop requests found.")}
  `;
  bindToolbar();
  bindActions();
}

function laptopRequestNote(request) {
  return `<article class="note-card laptop-request-note">
    <div class="note-head">
      <div>
        <span class="note-company">${escapeHtml(request.category || "Laptop")} Request - ${escapeHtml(request.requestDate || "No date")}</span>
        <h2>${escapeHtml(request.customerName || "Customer")}</h2>
        <p>${escapeHtml(request.phone || "No phone")} - ${escapeHtml(request.company || "Any company")} ${request.model ? `- ${escapeHtml(request.model)}` : ""}</p>
      </div>
      <div class="note-stock">
        <span>Status</span>
        <strong class="status-word">${escapeHtml(request.status || "New")}</strong>
        ${badge(request.budget || "Budget", request.status === "Matched" ? "good" : request.status === "Closed" ? "neutral" : "warn")}
      </div>
    </div>
    <div class="note-specs">
      ${specLine("Item Type", request.category)}
      ${specLine("Preferred Company", request.company)}
      ${specLine("Model / Series", request.model)}
      ${specLine("Processor", request.processor)}
      ${specLine("RAM", request.ram)}
      ${specLine("Graphics", request.graphics)}
      ${specLine("Storage", request.storage)}
      ${specLine("Display", request.display)}
      ${specLine("Condition", request.condition)}
      ${specLine("Budget", request.budget)}
      ${specLine("Use Case", request.useCase)}
    </div>
    ${request.notes ? `<p class="note-text"><strong>Customer Notes:</strong><br>${escapeHtml(request.notes)}</p>` : ""}
    <div class="note-actions">${actions("laptopRequests", request.id)}</div>
  </article>`;
}

function companyInventoryGroups(items) {
  const groups = items.reduce((result, item) => {
    const company = item.company || item.brand || "General";
    result[company] = result[company] || [];
    result[company].push(item);
    return result;
  }, {});

  return Object.keys(groups)
    .sort((a, b) => a.localeCompare(b))
    .map((company) => `<section class="company-group">
      <div class="company-heading">
        <h2>${escapeHtml(company)}</h2>
        <span>${groups[company].reduce((sum, item) => sum + Number(item.quantity || 0), 0)} pieces</span>
      </div>
      <div class="note-list">${groups[company].map(inventoryNote).join("")}</div>
    </section>`)
    .join("");
}

function renderSales() {
  const term = filters.search.trim().toLowerCase();
  const rows = state.sales.filter((sale) => {
    const text = `${customerName(sale.customerId)} ${laptopName(sale.laptopId)} ${sale.saleDate} ${sale.paymentMethod} ${sale.notes}`.toLowerCase();
    return !term || text.includes(term);
  });
  const total = rows.reduce((sum, sale) => sum + Number(sale.salePrice || 0), 0);
  const pending = rows.reduce((sum, sale) => sum + balance(sale.salePrice, sale.paid), 0);
  appContent.innerHTML = `
    ${summaryBand([
      ["Visible sales", rows.length],
      ["Total value", money(total)],
      ["Pending amount", money(pending)],
    ])}
    ${toolbar("Search sales", [], [])}
    ${rows.length ? `<div class="note-list">${rows.map(saleNote).join("")}</div>` : empty("No matching sales found.")}
  `;
  bindToolbar();
  bindActions();
}

function renderServices() {
  const term = filters.search.trim().toLowerCase();
  const rows = state.services.filter((job) => {
    const text = `${serviceCustomer(job)} ${job.device} ${job.serviceCategory} ${job.serviceType} ${job.issue} ${job.diagnosis} ${job.partsUsed} ${job.technician} ${job.status} ${job.notes}`.toLowerCase();
    const statusMatch = filters.status === "All" || job.status === filters.status;
    return statusMatch && (!term || text.includes(term));
  });
  const totalEstimate = rows.reduce((sum, job) => sum + Number(job.estimate || 0), 0);
  const pending = rows.reduce((sum, job) => sum + balance(job.estimate, job.paid), 0);
  appContent.innerHTML = `
    ${summaryBand([
      ["Visible services", rows.length],
      ["Estimated value", money(totalEstimate)],
      ["Pending amount", money(pending)],
    ])}
    ${toolbar("Search services", [], ["All", "Received", "Checking", "Repairing", "Ready", "Delivered"])}
    ${rows.length ? `<div class="note-list">${rows.map(serviceNote).join("")}</div>` : empty("No matching service jobs found.")}
  `;
  bindToolbar();
  bindActions();
}

function renderUsers() {
  const rows = filtered(state.users, ["name", "phone", "role", "status", "notes"]);
  appContent.innerHTML = `
    ${toolbar("Search staff profiles", [], [])}
    ${rows.length ? `<div class="note-list">${rows.map(userProfileNote).join("")}</div>` : empty("No matching users found.")}
  `;
  bindToolbar();
  bindActions();
}

function userProfileNote(user) {
  const isStaffUser = user.role === "Staff";
  return `<article class="note-card staff-profile-note">
    <div class="note-head">
      <div>
        <span class="note-company">${escapeHtml(user.role || "User")}</span>
        <h2>${escapeHtml(user.name)}</h2>
        <p>${escapeHtml(user.phone || "No login name")} - ${escapeHtml(user.status || "Active")}</p>
      </div>
      <div class="note-stock">
        <span>Profile</span>
        <strong class="status-word">${escapeHtml(user.status || "Active")}</strong>
        ${badge(isStaffUser && user.password ? "Password Set" : isStaffUser ? "Needs Password" : "Admin", isStaffUser && user.password ? "good" : "warn")}
      </div>
    </div>
    <div class="note-specs">
      ${specLine("Login Name", user.phone)}
      ${specLine("Role", user.role)}
      ${specLine("Status", user.status)}
      ${specLine("Password", isStaffUser && user.password ? "Set by admin" : "Not required")}
    </div>
    ${user.notes ? `<p class="note-text"><strong>Profile Notes:</strong><br>${escapeHtml(user.notes)}</p>` : ""}
    <div class="note-actions">${actions("users", user.id)}</div>
  </article>`;
}

function statCard(label, value) {
  return `<div class="stat-card"><span>${label}</span><strong>${value}</strong></div>`;
}

function toolbar(placeholder, typeOptions, statusOptions) {
  return `<div class="toolbar">
    <input class="input" id="searchInput" type="search" placeholder="${placeholder}" value="${escapeHtml(filters.search)}" />
    ${
      typeOptions.length
        ? `<select class="select" id="typeFilter">${typeOptions.map((option) => `<option ${filters.type === option ? "selected" : ""}>${option}</option>`).join("")}</select>`
        : `<span></span>`
    }
    ${
      statusOptions.length
        ? `<select class="select" id="statusFilter">${statusOptions.map((option) => `<option ${filters.status === option ? "selected" : ""}>${option}</option>`).join("")}</select>`
        : `<span></span>`
    }
  </div>`;
}

function bindToolbar() {
  document.querySelector("#searchInput")?.addEventListener("input", (event) => {
    filters.search = event.target.value;
    render();
  });
  document.querySelector("#typeFilter")?.addEventListener("change", (event) => {
    filters.type = event.target.value;
    render();
  });
  document.querySelector("#statusFilter")?.addEventListener("change", (event) => {
    filters.status = event.target.value;
    render();
  });
}

function table(headers, rows) {
  return `<div class="table-wrap"><table>
    <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
    <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
  </table></div>`;
}

function laptopCard(laptop) {
  return inventoryNote(laptop);
}

function inventoryNote(item) {
  return `<article class="note-card">
    ${productConfigImage(item, "inventory")}
    <div class="note-head">
      <div>
        <span class="note-company">${escapeHtml(item.company || item.brand || "General")}</span>
        <h2>${escapeHtml(itemName(item))}</h2>
        <p>${escapeHtml(item.category || "Inventory")} - ${escapeHtml(item.type || "Stock item")}</p>
      </div>
      <div class="note-stock">
        <span>Qty</span>
        <strong>${Number(item.quantity || 0)}</strong>
        ${badge(item.status || publicStockText(item), stockTone(item))}
      </div>
    </div>
    <div class="note-specs">
      ${specLine("Processor", item.processor)}
      ${specLine("RAM", item.ram)}
      ${specLine("Storage", item.storage)}
      ${specLine("Graphics", item.graphics)}
      ${specLine("Display", item.display)}
      ${specLine("Condition", item.condition)}
      ${specLine("Warranty", item.warranty)}
      ${specLine("Sale Price", money(item.salePrice))}
    </div>
    ${item.notes ? `<p class="note-text">${escapeHtml(item.notes)}</p>` : ""}
    <div class="note-actions">${actions("laptops", item.id)}</div>
  </article>`;
}

function productConfigImage(item, variant = "card") {
  const specs = productImageSpecs(item);
  const image = productImageSource(item);
  const placeholderClass = image.isPlaceholder ? ` placeholder-image placeholder-${categorySlug(item.category)}` : "";
  return `<div class="product-image product-image-${variant} ${variant === "inventory" ? "inventory-product-image" : ""}${placeholderClass}">
    ${image.url ? `<img src="${escapeHtml(image.url)}" alt="${escapeHtml(itemName(item))}" loading="lazy" />` : categoryPlaceholderMarkup(item)}
    <div class="product-image-badges">
      <span class="badge neutral">${escapeHtml(item.category || "Other")}</span>
      <span class="badge ${stockTone(item)}">${publicStockText(item)}</span>
    </div>
    ${image.isPlaceholder ? "" : `<div class="product-image-brand">
        <span>Zulfiqar Computers</span>
        <strong>${escapeHtml(item.company || item.brand || "Product")}</strong>
      </div>
      <div class="config-banner">
        <strong>${escapeHtml(itemName(item))}</strong>
        <span>${escapeHtml(item.category || "Inventory")} - ${escapeHtml(item.type || "Stock")}</span>
      </div>
      <div class="config-chip-grid">
        ${specs.map((spec) => `<span><strong>${escapeHtml(spec.label)}</strong>${escapeHtml(spec.value)}</span>`).join("")}
      </div>`}
  </div>`;
}

function productImageSource(item) {
  const imageUrl = String(item.imageUrl || "").trim();
  if (imageUrl) return { url: imageUrl, isPlaceholder: false };
  return { url: "", isPlaceholder: true };
}

function categorySlug(category = "Other") {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "other";
}

function categoryPlaceholderMarkup(item) {
  const category = item.category || "Other";
  const initials = {
    Laptop: "LP",
    Desktop: "PC",
    SSD: "SSD",
    RAM: "RAM",
    "Graphics Card": "GPU",
    Motherboard: "MB",
    "Keyboard / Mouse": "KM",
    "CCTV Camera": "CAM",
    Accessory: "ACC",
    Other: "ZC",
  }[category] || "ZC";
  const specs = productImageSpecs(item);
  return `<div class="category-placeholder generated-product-art" style="${productVisualStyle(item)}" aria-label="${escapeHtml(category)} generated product graphic">
    <div class="generated-art-topline">
      <span>Zulfiqar Computers</span>
      <strong>${escapeHtml(item.company || item.brand || "ZC")}</strong>
    </div>
    <div class="generated-device generated-${categorySlug(category)}">
      <span>${escapeHtml(initials)}</span>
      <strong>${escapeHtml(itemName(item))}</strong>
    </div>
    <div class="generated-spec-strip">
      ${specs.length ? specs.slice(0, 4).map((spec) => `<span><strong>${escapeHtml(spec.label)}</strong>${escapeHtml(spec.value)}</span>`).join("") : `<span><strong>Type</strong>${escapeHtml(item.type || category)}</span>`}
    </div>
    <div class="generated-art-price">${money(item.salePrice)}</div>
  </div>`;
}

function productVisualStyle(item) {
  const seed = [itemName(item), item.company, item.category, item.processor, item.ram, item.storage, item.graphics, item.salePrice].filter(Boolean).join("|");
  const hash = simpleHash(seed);
  const hue = hash % 360;
  const hueTwo = (hue + 42) % 360;
  const hueThree = (hue + 178) % 360;
  return `--product-hue:${hue};--product-hue-two:${hueTwo};--product-hue-three:${hueThree};`;
}

function simpleHash(value) {
  return String(value || "Zulfiqar Computers").split("").reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) >>> 0, 0);
}

function productImageSpecs(item) {
  return [
    { label: "CPU", value: item.processor },
    { label: "RAM", value: item.ram },
    { label: "Storage", value: item.storage },
    { label: "Graphics", value: item.graphics },
    { label: "Display", value: item.display },
    { label: "Warranty", value: item.warranty },
  ].filter((spec) => spec.value).slice(0, 6);
}

function relatedProducts(item) {
  const basePrice = Number(item.salePrice || 0);
  return state.laptops
    .filter((candidate) => candidate.id !== item.id)
    .map((candidate) => {
      const candidatePrice = Number(candidate.salePrice || 0);
      const priceDistance = Math.abs(candidatePrice - basePrice);
      const similarPrice = !basePrice || priceDistance <= Math.max(25000, basePrice * 0.25);
      const sameCategory = (candidate.category || "") === (item.category || "");
      const sameBrand = [candidate.company, candidate.brand].filter(Boolean).some((brand) => [item.company, item.brand].filter(Boolean).includes(brand));
      const available = publicStockText(candidate) === "Available";
      const score = (sameCategory ? 50 : 0) + (sameBrand ? 30 : 0) + (similarPrice ? 15 : 0) + (available ? 10 : 0) - Math.min(priceDistance / 10000, 20);
      return { item: candidate, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((entry) => entry.item);
}

function relatedProductCard(item) {
  return `<article class="related-product-card">
    ${productConfigImage(item, "related")}
    <div class="related-product-body">
      <strong>${escapeHtml(itemName(item))}</strong>
      <span>${escapeHtml(item.company || item.brand || "General")} - ${escapeHtml(item.category || "Product")}</span>
      <div class="product-mini-specs">
        ${customerSpec("RAM", item.ram)}
        ${customerSpec("Storage", item.storage)}
      </div>
      <div class="price-row">
        <strong>${money(item.salePrice)}</strong>
        <button class="secondary-action" type="button" data-action="related-product" data-id="${item.id}">View Details</button>
      </div>
    </div>
  </article>`;
}

function saleNote(sale) {
  const item = state.laptops.find((stockItem) => stockItem.id === sale.laptopId);
  return `<article class="note-card sale-note">
    <div class="note-head">
      <div>
        <span class="note-company">${escapeHtml(sale.saleDate || "No date")}</span>
        <h2>${escapeHtml(customerName(sale.customerId))}</h2>
        <p>${escapeHtml(item ? itemName(item) : "Unknown product")} - ${escapeHtml(sale.paymentMethod || "Payment not entered")}</p>
      </div>
      <div class="note-stock">
        <span>Total</span>
        <strong>${money(sale.salePrice)}</strong>
        ${badge(balance(sale.salePrice, sale.paid) > 0 ? "Balance Due" : "Paid", balance(sale.salePrice, sale.paid) > 0 ? "warn" : "good")}
      </div>
    </div>
    <div class="note-specs">
      ${specLine("Company", item?.company || item?.brand)}
      ${specLine("Category", item?.category)}
      ${specLine("Paid", money(sale.paid))}
      ${specLine("Balance", money(balance(sale.salePrice, sale.paid)))}
    </div>
    ${sale.notes ? `<p class="note-text">${escapeHtml(sale.notes)}</p>` : ""}
    <div class="note-actions">${actions("sales", sale.id, true)}</div>
  </article>`;
}

function serviceNote(job) {
  return `<article class="note-card service-note">
    <div class="note-head">
      <div>
        <span class="note-company">${escapeHtml(job.serviceCategory || "Device")} Service</span>
        <h2>${escapeHtml(serviceCustomer(job))}</h2>
        <p>${escapeHtml(job.device || "Device not entered")} - ${escapeHtml(job.serviceType || "Service")} - ${escapeHtml(job.issue || "Issue not entered")}</p>
      </div>
      <div class="note-stock">
        <span>Status</span>
        <strong class="status-word">${escapeHtml(job.status || "Received")}</strong>
        ${badge(balance(job.estimate, job.paid) > 0 ? "Balance Due" : "Paid", balance(job.estimate, job.paid) > 0 ? "warn" : "good")}
      </div>
    </div>
    <div class="note-specs">
      ${specLine("Received", job.receivedDate)}
      ${specLine("Category", job.serviceCategory)}
      ${specLine("Service Type", job.serviceType)}
      ${specLine("Delivery", job.deliveryDate)}
      ${specLine("Technician", job.technician)}
      ${specLine("Parts Used", job.partsUsed)}
      ${specLine("Estimate", money(job.estimate))}
      ${specLine("Paid", money(job.paid))}
      ${specLine("Balance", money(balance(job.estimate, job.paid)))}
    </div>
    ${job.diagnosis ? `<p class="note-text"><strong>Diagnosis / Work Done:</strong><br>${escapeHtml(job.diagnosis)}</p>` : ""}
    ${job.notes ? `<p class="note-text"><strong>Extra Notes:</strong><br>${escapeHtml(job.notes)}</p>` : ""}
    <div class="note-actions">${actions("services", job.id)}</div>
  </article>`;
}

function specLine(label, value) {
  if (value === undefined || value === null || value === "" || value === "PKR 0") return "";
  return `<span><strong>${label}:</strong> ${escapeHtml(value)}</span>`;
}

function activityList(items, fallback) {
  if (!items.length) return `<div class="empty-state">${fallback}</div>`;
  return `<ul class="activity-list">${items
    .map((item) => `<li class="activity-row"><div><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.subtitle)}</span></div>${badge(item.badge, item.tone)}</li>`)
    .join("")}</ul>`;
}

function bestBy(items) {
  const counts = items.filter(Boolean).reduce((map, item) => {
    map[item] = (map[item] || 0) + 1;
    return map;
  }, {});
  const [label = "", count = 0] = Object.entries(counts).sort((a, b) => b[1] - a[1])[0] || [];
  return { label, count };
}

function warrantyExpiringSales() {
  const today = new Date();
  return state.sales.filter((sale) => {
    if (!sale.saleDate || !Number(sale.warrantyMonths || 0)) return false;
    const expiry = addMonths(new Date(sale.saleDate), Number(sale.warrantyMonths));
    const days = Math.ceil((expiry - today) / 86400000);
    return days >= 0 && days <= 5;
  });
}

function addMonths(date, months) {
  const next = new Date(date);
  next.setMonth(next.getMonth() + months);
  return next;
}

function summaryBand(items) {
  return `<div class="summary-band">${items.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}</div>`;
}

function mainCell(title, subtitle) {
  return `<strong>${escapeHtml(title || "-")}</strong><br><span class="meta-text">${escapeHtml(subtitle || "")}</span>`;
}

function badge(text, tone = "neutral") {
  return `<span class="badge ${tone}">${escapeHtml(text)}</span>`;
}

function actions(collection, id, invoice = false) {
  return `<div class="row-actions">
    ${invoice ? `<button type="button" data-action="invoice" data-id="${id}" data-collection="${collection}">Invoice</button>` : ""}
    ${collection === "sales" ? `<button type="button" data-action="whatsapp-sale" data-id="${id}" data-collection="${collection}">WhatsApp</button>` : ""}
    ${collection === "services" ? `<button type="button" data-action="token" data-id="${id}" data-collection="${collection}">Token</button><button type="button" data-action="whatsapp-service" data-id="${id}" data-collection="${collection}">WhatsApp</button>` : ""}
    <button type="button" data-action="edit" data-id="${id}" data-collection="${collection}">Edit</button>
    ${isMainAdmin() ? `<button type="button" data-action="delete" data-id="${id}" data-collection="${collection}">Delete</button>` : ""}
  </div>`;
}

function bindActions() {
  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const { action, id, collection } = button.dataset;
      if (action === "edit") openForm(collection, id);
      if (action === "delete") deleteRecord(collection, id);
      if (action === "invoice") showReceipt(id);
      if (action === "token") printServiceToken(id);
      if (action === "whatsapp-sale") openWhatsAppForSale(id);
      if (action === "whatsapp-service") openWhatsAppForService(id);
    });
  });
}

function openCreateForView() {
  const collection = activeView === "dashboard" ? (isMainAdmin() ? "sales" : "services") : activeView === "inventory" ? "laptopRequests" : activeView;
  openForm(collection);
}

function openForm(collection, id = null) {
  const schema = schemas[collection];
  const existing = id ? state[collection].find((item) => item.id === id) : {};
  modalKicker.textContent = id ? "Edit entry" : "New entry";
  modalTitle.textContent = `${id ? "Edit" : "Add"} ${schema.title}`;

  recordForm.innerHTML = `${schema.fields.map((field) => fieldHtml(field, existing)).join("")}
    <div class="form-actions">
      <button class="secondary-action" type="button" id="cancelForm">Cancel</button>
      <button class="primary-action" type="submit">${id ? "Save changes" : "Create entry"}</button>
    </div>`;

  recordForm.onsubmit = (event) => {
    event.preventDefault();
    saveRecord(collection, id);
  };
  document.querySelector("#cancelForm").addEventListener("click", closeModal);
  modalBackdrop.classList.remove("hidden");
  recordForm.querySelector("input, select, textarea")?.focus();
}

function fieldHtml(field, existing) {
  const value = existing[field.name] ?? defaultValue(field);
  const required = field.required ? "required" : "";
  const className = `form-field ${field.full ? "full" : ""}`;
  const label = `<label for="${field.name}">${field.label}</label>`;
  if (field.type === "textarea") {
    return `<div class="${className}">${label}<textarea class="textarea" id="${field.name}" name="${field.name}" ${required}>${escapeHtml(value)}</textarea></div>`;
  }
  if (field.type === "select") {
    return `<div class="${className}">${label}<select class="select" id="${field.name}" name="${field.name}" ${required}>${field.options
      .map((option) => `<option ${value === option ? "selected" : ""}>${option}</option>`)
      .join("")}</select></div>`;
  }
  if (field.type === "customerSelect") {
    return `<div class="${className}">${label}<select class="select" id="${field.name}" name="${field.name}" ${required}>
      <option value="">Walk-in / select later</option>
      ${state.customers.map((customer) => `<option value="${customer.id}" ${value === customer.id ? "selected" : ""}>${escapeHtml(customer.name)} - ${escapeHtml(customer.phone)}</option>`).join("")}
    </select></div>`;
  }
  if (field.type === "companySelect") {
    const companies = [...new Set(["Dell", "HP", "Lenovo", "Asus", "Acer", "Apple", "MSI", "Kingston", "Samsung", "Logitech", "Dahua", "Hikvision", "Other", ...state.laptops.map((item) => item.company).filter(Boolean)])];
    return `<div class="${className}">${label}<input class="input" id="${field.name}" name="${field.name}" list="companyOptions" value="${escapeHtml(value)}" ${required} />
      <datalist id="companyOptions">${companies.map((company) => `<option value="${escapeHtml(company)}"></option>`).join("")}</datalist>
    </div>`;
  }
  if (field.type === "laptopSelect") {
    return `<div class="${className}">${label}<select class="select" id="${field.name}" name="${field.name}" ${required}>
      <option value="">Select product</option>
      ${state.laptops.map((laptop) => `<option value="${laptop.id}" ${value === laptop.id ? "selected" : ""}>${escapeHtml(itemName(laptop))} - Qty ${Number(laptop.quantity || 0)} - ${money(laptop.salePrice)}</option>`).join("")}
    </select></div>`;
  }
  return `<div class="${className}">${label}<input class="input" id="${field.name}" name="${field.name}" type="${field.type || "text"}" value="${escapeHtml(value)}" ${required} /></div>`;
}

function defaultValue(field) {
  if (field.name === "saleDate" || field.name === "receivedDate") return new Date().toISOString().slice(0, 10);
  if (field.type === "number") return 0;
  if (field.options) return field.options[0];
  return "";
}

function saveRecord(collection, id) {
  const formData = new FormData(recordForm);
  const schema = schemas[collection];
  const record = id ? { ...state[collection].find((item) => item.id === id) } : { id: crypto.randomUUID() };

  schema.fields.forEach((field) => {
    const value = formData.get(field.name);
    record[field.name] = field.type === "number" ? Number(value || 0) : value;
  });

  if (collection === "services" && !record.tokenNumber) {
    record.tokenNumber = `ZC-${new Date().getFullYear()}-${String(state.services.length + 1).padStart(4, "0")}`;
  }

  if (collection === "sales") {
    const laptop = state.laptops.find((item) => item.id === record.laptopId);
    if (laptop) {
      if (!id) laptop.quantity = Math.max(Number(laptop.quantity || 0) - 1, 0);
      laptop.status = Number(laptop.quantity || 0) <= 0 ? "Sold" : Number(laptop.quantity || 0) <= 2 ? "Low Stock" : "Available";
      if (!record.salePrice) record.salePrice = laptop.salePrice;
    }
  }

  if (id) {
    state[collection] = state[collection].map((item) => (item.id === id ? record : item));
  } else {
    state[collection].push(record);
  }

  saveState();
  closeModal();
  render();
  toast(`${schemas[collection].title} saved`);
}

function deleteRecord(collection, id) {
  const label = schemas[collection].title.toLowerCase();
  if (!confirm(`Delete this ${label}?`)) return;
  state[collection] = state[collection].filter((item) => item.id !== id);
  saveState();
  render();
  toast(`${schemas[collection].title} deleted`);
}

function closeModal() {
  modalBackdrop.classList.add("hidden");
  recordForm.reset();
}

function showReceipt(id) {
  const sale = state.sales.find((item) => item.id === id);
  if (!sale) return;
  const item = state.laptops.find((laptop) => laptop.id === sale.laptopId);
  const tax = Number(sale.salePrice || 0) * (Number(sale.taxRate || 0) / 100);
  const warrantyExpiry = sale.saleDate && Number(sale.warrantyMonths || 0) ? addMonths(new Date(sale.saleDate), Number(sale.warrantyMonths)).toISOString().slice(0, 10) : "";
  const body = `<section class="record">
    <h3>Customer Details</h3>
    <div class="grid">
      ${pdfField("Customer", customerName(sale.customerId))}
      ${pdfField("Date", sale.saleDate)}
      ${pdfField("Payment", sale.paymentMethod)}
      ${pdfField("Product", item ? itemName(item) : "Unknown product")}
      ${pdfField("Warranty", sale.warrantyMonths ? `${sale.warrantyMonths} months` : "")}
      ${pdfField("Warranty Expiry", warrantyExpiry)}
    </div>
  </section>
  <section class="record">
    <h3>Bill Details</h3>
    <div class="grid">
      ${pdfField("Subtotal", money(sale.salePrice))}
      ${pdfField("GST / Tax", `${sale.taxRate || 0}% (${money(tax)})`)}
      ${pdfField("Total", money(Number(sale.salePrice || 0) + tax))}
      ${pdfField("Paid", money(sale.paid))}
      ${pdfField("Balance", money(balance(Number(sale.salePrice || 0) + tax, sale.paid)))}
    </div>
    <div class="qr-box">ZC BILL ${escapeHtml(sale.id.slice(0, 8).toUpperCase())}</div>
    <p class="note">Customer Signature: ____________________ &nbsp;&nbsp; Authorized Signature: ____________________</p>
  </section>`;
  openPrintWindow("Invoice / Bill", body);
}

function printServiceToken(id) {
  const job = state.services.find((item) => item.id === id);
  if (!job) return;
  const token = job.tokenNumber || `ZC-${new Date().getFullYear()}-${String(state.services.indexOf(job) + 1).padStart(4, "0")}`;
  const body = `<section class="record">
    <h3>Repair Token ${escapeHtml(token)}</h3>
    <div class="grid">
      ${pdfField("Customer", serviceCustomer(job))}
      ${pdfField("Device", job.device)}
      ${pdfField("Category", job.serviceCategory)}
      ${pdfField("Issue", job.issue)}
      ${pdfField("Received", job.receivedDate)}
      ${pdfField("Status", job.status)}
      ${pdfField("Estimate", money(job.estimate))}
      ${pdfField("Balance", money(balance(job.estimate, job.paid)))}
    </div>
    <div class="qr-box">${escapeHtml(token)}</div>
    <p class="note">Keep this token for delivery. Customer Signature: ____________________</p>
  </section>`;
  openPrintWindow("Repair Token", body);
}

function openWhatsAppForSale(id) {
  const sale = state.sales.find((item) => item.id === id);
  if (!sale) return;
  const customer = state.customers.find((item) => item.id === sale.customerId);
  const message = `Zulfiqar Computers: Your receipt for ${laptopName(sale.laptopId)} is ready. Paid: ${money(sale.paid)}, Balance: ${money(balance(sale.salePrice, sale.paid))}.`;
  openWhatsApp(customer?.phone, message);
}

function openWhatsAppForService(id) {
  const job = state.services.find((item) => item.id === id);
  if (!job) return;
  const customer = state.customers.find((item) => item.id === job.customerId);
  const message = `Zulfiqar Computers: Your ${job.device} service status is ${job.status}. Token: ${job.tokenNumber || "Pending"}. Balance: ${money(balance(job.estimate, job.paid))}.`;
  openWhatsApp(customer?.phone || extractPhone(job.notes), message);
}

function openWhatsApp(phone, message) {
  const clean = String(phone || "").replace(/\D/g, "");
  const url = `https://wa.me/${clean || ""}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function extractPhone(text) {
  return String(text || "").match(/\d[\d -]{8,}/)?.[0] || "";
}

function downloadPdfReport() {
  const reports = {
    customers: customerPdfHtml,
    inventory: inventoryPdfHtml,
    sales: salesPdfHtml,
    services: servicesPdfHtml,
  };
  const html = reports[activeView]?.();
  if (!html) return;
  openPrintWindow(`${pageTitle.textContent} Report`, html);
}

function openPrintWindow(title, html) {
  const reportWindow = window.open("", "_blank", "width=1000,height=800");
  if (!reportWindow) {
    toast("Allow popups to open the printable document");
    return;
  }
  reportWindow.document.write(reportDocument(title, html));
  reportWindow.document.close();
  reportWindow.focus();
  setTimeout(() => reportWindow.print(), 350);
}

function reportDocument(title, body) {
  return `<!doctype html>
  <html>
    <head>
      <title>${escapeHtml(title)}</title>
      <style>
        body { margin: 28px; color: #18202a; font-family: Arial, sans-serif; }
        header { border-bottom: 2px solid #18202a; margin-bottom: 18px; padding-bottom: 12px; }
        h1 { margin: 0; font-size: 26px; }
        h2 { margin: 24px 0 8px; font-size: 18px; }
        p { margin: 4px 0; }
        .meta { color: #68717d; font-size: 12px; }
        .record { break-inside: avoid; border: 1px solid #ccd3dc; border-left: 4px solid #0f766e; margin: 0 0 12px; padding: 12px; }
        .record h3 { margin: 0 0 6px; font-size: 16px; }
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px 12px; margin-top: 8px; }
        .field { font-size: 12px; }
        .field strong { display: inline-block; color: #34404c; }
        .note { margin-top: 8px; padding-top: 8px; border-top: 1px dashed #ccd3dc; white-space: pre-wrap; }
        .qr-box { width: 118px; height: 118px; margin-top: 14px; padding: 10px; display: grid; place-items: center; border: 8px solid #18202a; background: repeating-linear-gradient(45deg, #fff 0 6px, #18202a 6px 10px); color: #18202a; font-size: 11px; font-weight: 800; text-align: center; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th, td { border: 1px solid #ccd3dc; padding: 7px; font-size: 12px; text-align: left; vertical-align: top; }
        th { background: #f2f4f7; }
        @media print { button { display: none; } body { margin: 18mm; } }
      </style>
    </head>
    <body>
      <header>
        <h1>Zulfiqar Computers</h1>
        <p>${escapeHtml(title)}</p>
        <p class="meta">Generated on ${new Date().toLocaleString()}</p>
      </header>
      ${body}
    </body>
  </html>`;
}

function customerPdfHtml() {
  return `<h2>Customers</h2>
    <table>
      <thead><tr><th>Name</th><th>Phone</th><th>Address</th><th>CNIC / ID</th><th>Purchases</th><th>Services</th><th>Notes</th></tr></thead>
      <tbody>${state.customers.map((customer) => `<tr>
        <td>${escapeHtml(customer.name)}</td>
        <td>${escapeHtml(customer.phone || "-")}</td>
        <td>${escapeHtml(customer.address || "-")}</td>
        <td>${escapeHtml(customer.idNumber || "-")}</td>
        <td>${state.sales.filter((sale) => sale.customerId === customer.id).length}</td>
        <td>${state.services.filter((job) => job.customerId === customer.id).length}</td>
        <td>${escapeHtml(customer.notes || "-")}</td>
      </tr>`).join("")}</tbody>
    </table>`;
}

function inventoryPdfHtml() {
  return state.laptopRequests.map((request) => `<section class="record">
    <h3>${escapeHtml(request.customerName || "Customer")} - ${escapeHtml(request.phone || "No phone")}</h3>
    <p class="meta">${escapeHtml(request.requestDate || "No date")} | ${escapeHtml(request.status || "New")} | ${escapeHtml(request.budget || "No budget")}</p>
    <div class="grid">
      ${pdfField("Item Type", request.category)}
      ${pdfField("Preferred Company", request.company)}
      ${pdfField("Model / Series", request.model)}
      ${pdfField("Processor", request.processor)}
      ${pdfField("RAM", request.ram)}
      ${pdfField("Graphics", request.graphics)}
      ${pdfField("Storage", request.storage)}
      ${pdfField("Display", request.display)}
      ${pdfField("Condition", request.condition)}
      ${pdfField("Use Case", request.useCase)}
    </div>
    ${request.notes ? `<p class="note">${escapeHtml(request.notes)}</p>` : ""}
  </section>`).join("") || "<p>No laptop requests available.</p>";
}

function salesPdfHtml() {
  return state.sales.map((sale) => {
    const item = state.laptops.find((stockItem) => stockItem.id === sale.laptopId);
    return `<section class="record">
      <h3>${escapeHtml(customerName(sale.customerId))}</h3>
      <p class="meta">${escapeHtml(sale.saleDate || "No date")} | ${escapeHtml(sale.paymentMethod || "Payment not entered")}</p>
      <div class="grid">
        ${pdfField("Product", item ? itemName(item) : "Unknown product")}
        ${pdfField("Company", item?.company || item?.brand)}
        ${pdfField("Category", item?.category)}
        ${pdfField("Sale Price", money(sale.salePrice))}
        ${pdfField("Paid", money(sale.paid))}
        ${pdfField("Balance", money(balance(sale.salePrice, sale.paid)))}
      </div>
      ${sale.notes ? `<p class="note">${escapeHtml(sale.notes)}</p>` : ""}
    </section>`;
  }).join("") || "<p>No sales records available.</p>";
}

function servicesPdfHtml() {
  return state.services.map((job) => `<section class="record">
    <h3>${escapeHtml(serviceCustomer(job))}</h3>
    <p class="meta">${escapeHtml(job.serviceCategory || "Device")} | ${escapeHtml(job.serviceType || "Service")} | ${escapeHtml(job.status || "Received")} | ${escapeHtml(job.receivedDate || "No received date")}</p>
    <div class="grid">
      ${pdfField("Category", job.serviceCategory)}
      ${pdfField("Device", job.device)}
      ${pdfField("Service Type", job.serviceType)}
      ${pdfField("Issue", job.issue)}
      ${pdfField("Technician", job.technician)}
      ${pdfField("Parts Used", job.partsUsed)}
      ${pdfField("Delivery Date", job.deliveryDate)}
      ${pdfField("Estimate", money(job.estimate))}
      ${pdfField("Paid", money(job.paid))}
      ${pdfField("Balance", money(balance(job.estimate, job.paid)))}
    </div>
    ${job.diagnosis ? `<p class="note"><strong>Diagnosis / Work Done:</strong><br>${escapeHtml(job.diagnosis)}</p>` : ""}
    ${job.notes ? `<p class="note"><strong>Extra Notes:</strong><br>${escapeHtml(job.notes)}</p>` : ""}
  </section>`).join("") || "<p>No service records available.</p>";
}

function pdfField(label, value) {
  if (value === undefined || value === null || value === "" || value === "PKR 0") return "";
  return `<div class="field"><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</div>`;
}

function exportBackup() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `zulfiqar-backup-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
  toast("Backup downloaded");
}

function importBackup(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      state = normalizeState(JSON.parse(reader.result));
      saveState();
      render();
      toast("Backup restored");
    } catch {
      toast("Invalid backup file");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem(themeKey, next);
  themeButton.textContent = next === "dark" ? "Light" : "Dark";
}

function filtered(items, keys) {
  const term = filters.search.trim().toLowerCase();
  if (!term) return items;
  return items.filter((item) => keys.some((key) => String(item[key] ?? "").toLowerCase().includes(term)));
}

function customerName(id) {
  return state.customers.find((customer) => customer.id === id)?.name || "Unknown customer";
}

function laptopName(id) {
  const laptop = state.laptops.find((item) => item.id === id);
  return laptop ? itemName(laptop) : "Unknown product";
}

function itemName(item) {
  return item.productName || [item.brand, item.model].filter(Boolean).join(" ") || "Inventory item";
}

function publicStockText(item) {
  if (item.status === "Sold") return "Sold";
  if (item.status === "Unavailable") return "Unavailable";
  if (Number(item.quantity || 0) <= 0) return "Sold";
  if (item.status === "Reserved") return "Reserved";
  if (item.status === "Low Stock" || Number(item.quantity || 0) <= 2) return "Low Stock";
  return "Available";
}

function stockTone(item) {
  const status = publicStockText(item);
  if (status === "Available") return "good";
  if (status === "Low Stock" || status === "Reserved") return "warn";
  return "danger";
}

function serviceCustomer(job) {
  return job.customerId ? customerName(job.customerId) : job.customerName || "Walk-in Customer";
}

function balance(total, paid) {
  return Math.max(Number(total || 0) - Number(paid || 0), 0);
}

function serviceTone(status) {
  if (status === "Delivered") return "good";
  if (status === "Ready") return "good";
  if (status === "Repairing") return "warn";
  return "neutral";
}

function singular(view) {
  const labels = {
    customers: "Customer",
    inventory: "Laptop Request",
    sales: "Sale",
    services: "Service",
    users: "User",
  };
  return labels[view] || "Entry";
}

function empty(message) {
  return `<div class="empty-state">${message}</div>`;
}

function toast(message) {
  document.querySelector(".toast")?.remove();
  const element = document.createElement("div");
  element.className = "toast";
  element.textContent = message;
  document.body.appendChild(element);
  setTimeout(() => element.remove(), 2200);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
