<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zulfiqar Computers</title>
    <meta name="theme-color" content="#0f7b6c" />
    <link rel="manifest" href="manifest.webmanifest" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <section class="login-screen" id="loginScreen">
      <div class="login-layout">
        <aside class="login-showcase" aria-label="Zulfiqar Computers overview">
          <div class="login-showcase-inner">
            <div class="brand login-brand">
              <div class="brand-mark logo-image-mark login-logo" aria-label="Zulfiqar Computers logo">
                <img src="5071cff4-288b-44db-a039-54858f16f0f0.jpg" alt="Zulfiqar Computers" />
              </div>
              <div>
                <strong>Zulfiqar Computers</strong>
                <span>Computer shop management portal</span>
              </div>
            </div>
            <div class="login-copy">
              <p class="eyebrow">Customer, staff, and admin access</p>
              <h1>Manage your computer shop smarter</h1>
              <p>Track sales, repairs, customer records, and stock requests in one clean workspace built for a real laptop and computer business.</p>
            </div>
            <div class="login-feature-grid" aria-label="Portal highlights">
              <span>Inventory Management</span>
              <span>Service Tracking</span>
              <span>Customer Records</span>
              <span>Sales Dashboard</span>
            </div>
          </div>
        </aside>

        <div class="login-panel">
          <div class="login-card-heading">
            <span class="login-card-icon" aria-hidden="true">ZC</span>
            <div>
              <p class="eyebrow">Secure portal</p>
              <h2>Welcome back</h2>
              <p>Choose customer access or open the business workspace.</p>
            </div>
          </div>

          <div class="login-tabs" role="tablist" aria-label="Login type">
            <button class="login-tab active" id="customerLoginTab" type="button">Customer</button>
            <button class="login-tab" id="adminLoginTab" type="button">Admin</button>
          </div>

          <form class="login-form" id="customerLoginForm">
            <div class="portal-intro customer-portal-intro">
              <span aria-hidden="true">CU</span>
              <div>
                <strong>Enter Customer Portal</strong>
                <p>Track your purchases, repairs, and available products.</p>
              </div>
            </div>
            <button class="primary-action" type="submit">Enter Customer Portal</button>
            <p class="login-hint">No login required. Search your name inside to view purchases and services.</p>
          </form>

          <form class="login-form hidden" id="adminLoginForm">
            <div class="role-picker" aria-label="Admin login role">
              <label>
                <input type="radio" name="adminRole" value="admin" checked />
                <span>Main Admin</span>
              </label>
              <label>
                <input type="radio" name="adminRole" value="staff" />
                <span>Staff</span>
              </label>
            </div>
            <div class="staff-login-field hidden" id="staffLoginField">
              <label for="staffLoginName">Staff login name</label>
              <input class="input" id="staffLoginName" name="staffLoginName" type="text" placeholder="Enter staff login name" />
            </div>
            <label for="adminPassword" id="adminPasswordLabel">Admin password</label>
            <div class="password-field">
              <input class="input" id="adminPassword" type="password" placeholder="Enter admin password" required />
              <button class="password-toggle" id="passwordToggle" type="button" aria-label="Show password">Show</button>
            </div>
            <button class="primary-action" type="submit">Open Workspace</button>
            <p class="login-hint">Main Admin uses the admin password. Staff uses their own login name and password.</p>
            <p class="login-hint">Real secure employee accounts will be added with database authentication.</p>
          </form>
        </div>
      </div>
    </section>

    <div class="app-shell hidden" id="adminShell">
      <aside class="sidebar" aria-label="Main navigation">
        <div class="brand">
          <div class="brand-mark logo-image-mark" aria-label="Zulfiqar Computers logo">
            <img src="5071cff4-288b-44db-a039-54858f16f0f0.jpg" alt="Zulfiqar Computers" />
          </div>
          <div>
            <strong>Zulfiqar Computers</strong>
            <span>Admin Workspace</span>
          </div>
        </div>
        <nav class="nav-list" id="navList"></nav>
        <div class="sidebar-footer">
          <span class="status-dot"></span>
          <span>Local prototype data</span>
        </div>
      </aside>

      <main class="main-panel">
        <header class="topbar">
          <button class="icon-button menu-toggle" id="menuToggle" aria-label="Toggle menu">Menu</button>
          <div>
            <p class="eyebrow" id="pageKicker">Business overview</p>
            <h1 id="pageTitle">Dashboard</h1>
          </div>
          <div class="topbar-actions">
            <button class="secondary-action hidden" id="pdfButton" type="button">PDF</button>
            <button class="secondary-action" id="backupButton" type="button">Backup</button>
            <button class="secondary-action" id="restoreButton" type="button">Restore</button>
            <button class="secondary-action" id="themeButton" type="button">Dark</button>
            <button class="secondary-action" id="adminLogoutButton" type="button">Logout</button>
            <button class="primary-action" id="quickAddButton" type="button">Add Entry</button>
            <input class="hidden" id="restoreInput" type="file" accept="application/json" />
          </div>
        </header>

        <section class="content" id="appContent" aria-live="polite"></section>
      </main>
    </div>

    <section class="customer-shell hidden" id="customerShell">
      <header class="customer-hero">
        <div>
          <div class="brand">
            <div class="brand-mark logo-image-mark" aria-label="Zulfiqar Computers logo">
              <img src="5071cff4-288b-44db-a039-54858f16f0f0.jpg" alt="Zulfiqar Computers" />
            </div>
            <div>
              <strong>Zulfiqar Computers</strong>
              <span>Customer Portal</span>
            </div>
          </div>
          <h1>Your purchases, repair status, and laptop requests in one place.</h1>
          <p class="customer-hero-copy">Search your name to view shop records, send a service request, or tell us the laptop configuration you need.</p>
        </div>
        <button class="secondary-action" id="customerLogoutButton" type="button">Logout</button>
      </header>
      <main class="customer-content">
        <section class="customer-search-band">
          <label for="customerPortalSearch">Find your customer record</label>
          <div class="customer-search-row">
            <input class="input" id="customerPortalSearch" type="search" placeholder="Type your full or partial name" />
            <button class="primary-action" id="customerPortalSearchButton" type="button">Search</button>
          </div>
        </section>
        <section id="customerPortalContent"></section>
      </main>
    </section>

    <div class="drawer-backdrop" id="drawerBackdrop"></div>
    <div class="modal-backdrop hidden" id="modalBackdrop">
      <section class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div class="modal-header">
          <div>
            <p class="eyebrow" id="modalKicker">New entry</p>
            <h2 id="modalTitle">Add record</h2>
          </div>
          <button class="icon-button" id="modalClose" type="button" aria-label="Close">X</button>
        </div>
        <form id="recordForm" class="form-grid"></form>
      </section>
    </div>

    <script src="app.js"></script>
    <script>
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("service-worker.js").catch(() => {});
      }
    </script>
  </body>
</html>
