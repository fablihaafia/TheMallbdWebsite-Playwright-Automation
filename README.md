# Playwright Automation for TheMall

🔹 **This repository contains an automated test script for the website TheMall using Playwright.**  
The script demonstrates various interactions with the webpage such as searching for products, adding them to the cart, and performing actions like navigating through menus and completing checkout.

---

## 📋 Prerequisites  
Before running the script, ensure you have the following installed:

<ul>
  <li>🔸 <b>Node.js</b> (preferably version 14.x or later)</li>
  <li>🔸 <b>npm</b> (Node package manager, which comes with Node.js)</li>
  <li>🔸 <b>Playwright</b> (for browser automation)</li>
  <li>🔸 <b>TypeScript</b> (if using TypeScript for tests)</li>
</ul>

🔹 **Install dependencies by running:**

<pre><code>npm install</code></pre>

---

## 🚀 Steps to Run the Test

**Step 1:** Clone the Repository  
<pre><code>git clone https://github.com/fablihaafia/TheMallbdWebsite-Playwright-Automation.git</code></pre>  
<pre><code>cd TheMallbdWebsite-Playwright-Automation</code></pre>

**Step 2:** Install Dependencies  
<pre><code>npm install</code></pre>

**Step 3:** Run the Tests  
To run the tests, execute the following command:  
<pre><code>npx playwright test</code></pre>

**Step 4:** View the Test Report  
After running tests, view the HTML report:  
<pre><code>npx playwright show-report</code></pre>

---

## 📝 Test Flow  
The test performs the following steps:

<ul>
  <li>🔹 <b>Navigate to TheMall website</b> and set the viewport size for the test.</li>
  <li>🔹 <b>Close any initial pop-up</b> if it appears upon page load.</li>
  <li>🔹 <b>Click the website logo</b> to return to the homepage.</li>
  <li>🔹 <b>Search for the product "ordinary"</b> and submit the search query.</li>
  <li>🔹 <b>Scroll down the page</b> to load more products.</li>
  <li>🔹 <b>Select a specific product</b> ("The Ordinary Glycolic Acid 7% Exfoliating Toner 100ml") and add it to the cart.</li>
  <li>🔹 <b>Navigate through categories</b> such as Makeup, Fragrance, and Sale.</li>
  <li>🔹 <b>Apply filters</b> (e.g., selecting "Oily Skin" filter).</li>
  <li>🔹 <b>Add products to the cart and wishlist</b> from different categories.</li>
  <li>🔹 <b>Proceed to checkout</b>, remove items from the cart, and complete the checkout process.</li>
  <li>🔹 <b>End the test</b> by closing the browser after all actions.</li>
</ul>

---

## 📚 Libraries Used
<ul>
  <li>🔸 <b>Playwright</b>: Used for browser automation and interacting with the web page.</li>
  <li>🔸 <b>TypeScript</b>: For writing the tests (if used in the project).</li>
  <li>🔸 <b>Test Reporter</b>: Playwright generates an HTML report of the test execution for easier debugging and analysis.</li>
</ul>

---

## 📝 Notes  
<ul>
  <li>🔸 This script uses <code>page.evaluate()</code> to interact with elements directly within the browser context.</li>
  <li>🔸 <b>Ensure Playwright browsers are installed</b> (e.g., Chromium, Firefox, or WebKit) using:  
    <pre><code>npx playwright install</code></pre></li>
  <li>🔸 Consider using <b>Playwright's default timeout settings</b> or adjusting them based on the specific needs of the test.</li>
  <li>🔸 This script is written in TypeScript, but JavaScript can be used with minimal changes.</li>
</ul>

---


