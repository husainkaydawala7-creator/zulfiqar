const storageKey = "zulfiqar-computers-v1";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: "DB", kicker: "Business overview" },
  { id: "customers", label: "Customers", icon: "CU", kicker: "Customer records" },
  { id: "inventory", label: "Inventory", icon: "IN", kicker: "New and secondhand laptops" },
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
      brand: "Dell",
      model: "Latitude 7490",
      type: "Secondhand",
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
      brand: "HP",
      model: "15s-fq5000",
      type: "New",
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
      brand: "Lenovo",
      model: "ThinkPad T480",
      type: "Secondhand",
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
  ],
  sales: [],
  services: [
    {
      id: crypto.randomUUID(),
      customerId: "",
      customerName: "Walk-in Customer",
      device: "Acer Aspire 5",
      issue: "No display after power on",
      estimate: 4500,
      paid: 1000,
      status: "Checking",
      receivedDate: new Date().toISOString().slice(0, 10),
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
      notes: "Full access",
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
    title: "Laptop",
    fields: [
      { name: "brand", label: "Brand", required: true },
      { name: "model", label: "Model", required: true },
      { name: "type", label: "Type", type: "select", options: ["New", "Secondhand"] },
      { name: "processor", label: "Processor" },
      { name: "ram", label: "RAM" },
      { name: "storage", label: "Storage" },
      { name: "graphics", label: "Graphics" },
      { name: "display", label: "Display" },
      { name: "condition", label: "Condition" },
      { name: "warranty", label: "Warranty" },
      { name: "costPrice", label: "Cost price", type: "number" },
      { name: "salePrice", label: "Sale price", type: "number", required: true },
      { name: "status", label: "Status", type: "select", options: ["Available", "Reserved", "Sold"] },
      { name: "notes", label: "Notes", type: "textarea", full: true },
    ],
  },
  sales: {
    title: "Sale",
    fields: [
      { name: "customerId", label: "Customer", type: "customerSelect", required: true },
      { name: "laptopId", label: "Laptop", type: "laptopSelect", required: true },
      { name: "saleDate", label: "Sale date", type: "date", required: true },
      { name: "salePrice", label: "Sale price", type: "number", required: true },
      { name: "paid", label: "Paid amount", type: "number", required: true },
      { name: "paymentMethod", label: "Payment method", type: "select", options: ["Cash", "Bank Transfer", "Card", "Installments"] },
      { name: "notes", label: "Notes", type: "textarea", full: true },
    ],
  },
  services: {
    title: "Service Job",
    fields: [
      { name: "customerId", label: "Customer", type: "customerSelect" },
      { name: "customerName", label: "Walk-in name" },
      { name: "device", label: "Device", required: true },
      { name: "issue", label: "Problem / issue", required: true },
      { name: "estimate", label: "Estimated amount", type: "number" },
      { name: "paid", label: "Paid amount", type: "number" },
      { name: "receivedDate", label: "Received date", type: "date" },
      { name: "status", label: "Status", type: "select", options: ["Received", "Checking", "Repairing", "Ready", "Delivered"] },
      { name: "notes", label: "Notes", type: "textarea", full: true },
    ],
  },
  users: {
    title: "User",
    fields: [
      { name: "name", label: "Employee name", required: true },
      { name: "phone", label: "Phone / login name" },
      { name: "role", label: "Role", type: "select", options: ["Admin", "Staff", "Viewer"] },
      { name: "status", label: "Status", type: "select", options: ["Active", "Paused"] },
      { name: "notes", label: "Notes", type: "textarea", full: true },
    ],
  },
};

let state = loadState();
let activeView = "dashboard";
let filters = { search: "", type: "All", status: "All" };

const appContent = document.querySelector("#appContent");
const navList = document.querySelector("#navList");
const pageTitle = document.querySelector("#pageTitle");
const pageKicker = document.querySelector("#pageKicker");
const modalBackdrop = document.querySelector("#modalBackdrop");
const recordForm = document.querySelector("#recordForm");
const modalTitle = document.querySelector("#modalTitle");
const modalKicker = document.querySelector("#modalKicker");

document.querySelector("#menuToggle").addEventListener("click", () => document.body.classList.toggle("menu-open"));
document.querySelector("#drawerBackdrop").addEventListener("click", () => document.body.classList.remove("menu-open"));
document.querySelector("#modalClose").addEventListener("click", closeModal);
document.querySelector("#quickAddButton").addEventListener("click", () => openCreateForView());
document.querySelector("#exportButton").addEventListener("click", exportData);

render();

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return structuredClone(defaultData);
  try {
    return { ...structuredClone(defaultData), ...JSON.parse(saved) };
  } catch {
    return structuredClone(defaultData);
  }
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
  renderNav();
  const item = navItems.find((nav) => nav.id === activeView);
  pageTitle.textContent = item.label;
  pageKicker.textContent = item.kicker;
  document.querySelector("#quickAddButton").textContent = activeView === "dashboard" ? "Add Sale" : `Add ${singular(activeView)}`;

  if (activeView === "dashboard") renderDashboard();
  if (activeView === "customers") renderCustomers();
  if (activeView === "inventory") renderInventory();
  if (activeView === "sales") renderSales();
  if (activeView === "services") renderServices();
  if (activeView === "users") renderUsers();
}

function renderNav() {
  navList.innerHTML = navItems
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
  if (view === "inventory") return state.laptops.length;
  return state[view]?.length ?? "";
}

function renderDashboard() {
  const revenue = state.sales.reduce((sum, sale) => sum + Number(sale.salePrice || 0), 0);
  const due = state.sales.reduce((sum, sale) => sum + Math.max(Number(sale.salePrice || 0) - Number(sale.paid || 0), 0), 0);
  const serviceDue = state.services.reduce((sum, job) => sum + Math.max(Number(job.estimate || 0) - Number(job.paid || 0), 0), 0);
  const available = state.laptops.filter((laptop) => laptop.status === "Available").length;

  appContent.innerHTML = `
    <div class="stats-grid">
      ${statCard("Customers", state.customers.length)}
      ${statCard("Available Laptops", available)}
      ${statCard("Sales Revenue", money(revenue))}
      ${statCard("Pending Balance", money(due + serviceDue))}
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

function renderCustomers() {
  const rows = filtered(state.customers, ["name", "phone", "address", "idNumber", "notes"]);
  appContent.innerHTML = `
    ${toolbar("Search customers", [], [])}
    ${rows.length ? table(["Name", "Phone", "Address", "Purchases", "Services", ""], rows.map((customer) => [
      mainCell(customer.name, customer.idNumber || "No ID saved"),
      customer.phone || "-",
      customer.address || "-",
      state.sales.filter((sale) => sale.customerId === customer.id).length,
      state.services.filter((job) => job.customerId === customer.id).length,
      actions("customers", customer.id),
    ])) : empty("No matching customers found.")}
  `;
  bindToolbar();
  bindActions();
}

function renderInventory() {
  const laptopRows = filtered(state.laptops, ["brand", "model", "processor", "ram", "storage", "condition", "status"]).filter((laptop) => {
    const typeMatch = filters.type === "All" || laptop.type === filters.type;
    const statusMatch = filters.status === "All" || laptop.status === filters.status;
    return typeMatch && statusMatch;
  });
  appContent.innerHTML = `
    ${toolbar("Search laptops", ["All", "New", "Secondhand"], ["All", "Available", "Reserved", "Sold"])}
    ${laptopRows.length ? `<div class="cards-grid">${laptopRows.map(laptopCard).join("")}</div>` : empty("No laptops match this filter.")}
  `;
  bindToolbar();
  bindActions();
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
    ${rows.length ? table(["Customer", "Laptop", "Date", "Payment", "Amount", "Balance", ""], rows.map((sale) => [
      customerName(sale.customerId),
      laptopName(sale.laptopId),
      sale.saleDate || "-",
      sale.paymentMethod || "-",
      money(sale.salePrice),
      badge(balance(sale.salePrice, sale.paid) > 0 ? money(balance(sale.salePrice, sale.paid)) : "Paid", balance(sale.salePrice, sale.paid) > 0 ? "warn" : "good"),
      actions("sales", sale.id, true),
    ])) : empty("No matching sales found.")}
  `;
  bindToolbar();
  bindActions();
}

function renderServices() {
  const term = filters.search.trim().toLowerCase();
  const rows = state.services.filter((job) => {
    const text = `${serviceCustomer(job)} ${job.device} ${job.issue} ${job.status} ${job.notes}`.toLowerCase();
    const statusMatch = filters.status === "All" || job.status === filters.status;
    return statusMatch && (!term || text.includes(term));
  });
  appContent.innerHTML = `
    ${toolbar("Search services", [], ["All", "Received", "Checking", "Repairing", "Ready", "Delivered"])}
    ${rows.length ? table(["Customer", "Device", "Issue", "Estimate", "Balance", "Status", ""], rows.map((job) => [
      serviceCustomer(job),
      mainCell(job.device, job.receivedDate || "No date"),
      job.issue,
      money(job.estimate),
      money(balance(job.estimate, job.paid)),
      badge(job.status, serviceTone(job.status)),
      actions("services", job.id),
    ])) : empty("No matching service jobs found.")}
  `;
  bindToolbar();
  bindActions();
}

function renderUsers() {
  const rows = filtered(state.users, ["name", "phone", "role", "status", "notes"]);
  appContent.innerHTML = `
    ${toolbar("Search users", [], [])}
    ${rows.length ? table(["Name", "Phone / login", "Role", "Status", "Notes", ""], rows.map((user) => [
      user.name,
      user.phone || "-",
      badge(user.role, user.role === "Admin" ? "good" : "neutral"),
      badge(user.status, user.status === "Active" ? "good" : "warn"),
      user.notes || "-",
      actions("users", user.id),
    ])) : empty("No matching users found.")}
  `;
  bindToolbar();
  bindActions();
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
  return `<article class="item-card">
    <div>
      <span class="badge ${laptop.type === "New" ? "good" : "neutral"}">${laptop.type}</span>
      <span class="badge ${laptop.status === "Available" ? "good" : laptop.status === "Reserved" ? "warn" : "danger"}">${laptop.status}</span>
    </div>
    <div>
      <strong class="item-title">${escapeHtml(laptop.brand)} ${escapeHtml(laptop.model)}</strong>
      <span class="item-subtitle">${escapeHtml(laptop.processor || "Processor not entered")}</span>
    </div>
    <div class="spec-grid">
      <span>${escapeHtml(laptop.ram || "RAM -")}</span>
      <span>${escapeHtml(laptop.storage || "Storage -")}</span>
      <span>${escapeHtml(laptop.display || "Display -")}</span>
      <span>${escapeHtml(laptop.condition || "Condition -")}</span>
    </div>
    <div class="price-row">
      <strong>${money(laptop.salePrice)}</strong>
      <div class="row-actions">${actions("laptops", laptop.id)}</div>
    </div>
  </article>`;
}

function activityList(items, fallback) {
  if (!items.length) return `<div class="empty-state">${fallback}</div>`;
  return `<ul class="activity-list">${items
    .map((item) => `<li class="activity-row"><div><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.subtitle)}</span></div>${badge(item.badge, item.tone)}</li>`)
    .join("")}</ul>`;
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
    ${invoice ? `<button type="button" data-action="invoice" data-id="${id}" data-collection="${collection}">Receipt</button>` : ""}
    <button type="button" data-action="edit" data-id="${id}" data-collection="${collection}">Edit</button>
    <button type="button" data-action="delete" data-id="${id}" data-collection="${collection}">Delete</button>
  </div>`;
}

function bindActions() {
  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const { action, id, collection } = button.dataset;
      if (action === "edit") openForm(collection, id);
      if (action === "delete") deleteRecord(collection, id);
      if (action === "invoice") showReceipt(id);
    });
  });
}

function openCreateForView() {
  const collection = activeView === "dashboard" ? "sales" : activeView === "inventory" ? "laptops" : activeView;
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
  if (field.type === "laptopSelect") {
    return `<div class="${className}">${label}<select class="select" id="${field.name}" name="${field.name}" ${required}>
      <option value="">Select laptop</option>
      ${state.laptops.map((laptop) => `<option value="${laptop.id}" ${value === laptop.id ? "selected" : ""}>${escapeHtml(laptop.brand)} ${escapeHtml(laptop.model)} - ${money(laptop.salePrice)}</option>`).join("")}
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

  if (collection === "sales") {
    const laptop = state.laptops.find((item) => item.id === record.laptopId);
    if (laptop) {
      laptop.status = "Sold";
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
  const receipt = [
    "ZULFIQAR COMPUTERS",
    "Sale Receipt",
    `Date: ${sale.saleDate || "-"}`,
    `Customer: ${customerName(sale.customerId)}`,
    `Laptop: ${laptopName(sale.laptopId)}`,
    `Sale Price: ${money(sale.salePrice)}`,
    `Paid: ${money(sale.paid)}`,
    `Balance: ${money(balance(sale.salePrice, sale.paid))}`,
    `Payment: ${sale.paymentMethod || "-"}`,
    sale.notes ? `Notes: ${sale.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");
  alert(receipt);
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `zulfiqar-computers-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
  toast("Data exported");
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
  return laptop ? `${laptop.brand} ${laptop.model}` : "Unknown laptop";
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
    inventory: "Laptop",
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
