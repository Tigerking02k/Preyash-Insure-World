// ========== BRAND FORM ==========
function openForm(brand) {
  document.getElementById("brandFormModal").style.display = "flex";
  document.getElementById("brandName").textContent = brand;
  document.getElementById("brandNameInput").value = brand;
}

function closeForm() {
  document.getElementById("brandFormModal").style.display = "none";
}

document.getElementById("brandInquiryForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const brand = document.getElementById("brandNameInput").value;
  const name = document.getElementById("userName").value.trim();
  const phone = document.getElementById("userPhone").value.trim();
  const email = document.getElementById("userEmail").value.trim();
  const query = document.getElementById("userQuery").value.trim();

  if (!name || !phone || !query) {
    document.getElementById("popupMessage").textContent = "❌ Please fill all required fields.";
    return;
  }

  const message = `New Enquiry for ${brand}%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AQuery: ${query}`;
  window.open(`https://wa.me/918849795135?text=${message}`, "_blank");
  document.getElementById("popupMessage").textContent = "✅ Enquiry sent via WhatsApp!";
  this.reset();
  setTimeout(() => closeForm(), 3000);
});


// ========== CONTACT FORM ==========
document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const phone = this.phone.value.trim();
  const contact = this.contact.value.trim();
  const email = this.email.value.trim();
  const insurance = this.insuranceType.value;

  if (!name || !phone || !contact || !insurance) {
    document.getElementById("formMessage").textContent = "❌ Please fill all required fields.";
    return;
  }

  const message = `New Contact Form Enquiry:%0AName: ${name}%0APhone: ${phone}%0AWhatsApp: ${contact}%0AEmail: ${email}%0AInsurance Type: ${insurance}`;
  window.open(`https://wa.me/918849795135?text=${message}`, "_blank");

  this.reset();
  window.location.href = "success.html";
});


// ========== SERVICE MODAL ==========
const serviceCompanies = {
  "Life Insurance": ["LIC", "HDFC Life", "ICICI Prudential", "SBI Life", "Tata AIA", "Max Life"],
  "Health Insurance": ["Star Health", "HDFC Ergo", "Religare", "Max Bupa", "ICICI Lombard"],
  "Motor Insurance": ["Bajaj Allianz", "HDFC Ergo", "Tata AIG", "IFFCO Tokio"],
  "Travel Insurance": ["TATA AIG", "Religare", "ICICI Lombard"],
  "Corporate Insurance": ["New India Assurance", "Oriental Insurance", "United India"]
};

const serviceDescriptions = {
  "Life Insurance": "Financial protection for your family in case of unfortunate events.",
  "Health Insurance": "Covers hospital bills, surgeries, and other medical expenses.",
  "Motor Insurance": "Protect your vehicle against accidents, theft, and damage.",
  "Travel Insurance": "Covers loss, health, and emergencies while travelling abroad.",
  "Corporate Insurance": "Group policies for employees and business coverage."
};

function openServiceForm(serviceName) {
  document.getElementById("serviceTitle").textContent = serviceName;
  document.getElementById("serviceDescription").textContent = serviceDescriptions[serviceName] || "";
  const companySelect = document.getElementById("serviceCompanySelect");
  companySelect.innerHTML = `<option value="">Select Insurance Company</option>`;
  (serviceCompanies[serviceName] || []).forEach(company => {
    const option = document.createElement("option");
    option.textContent = company;
    option.value = company;
    companySelect.appendChild(option);
  });
  document.getElementById("serviceFormModal").style.display = "flex";
}

function closeServiceForm() {
  document.getElementById("serviceFormModal").style.display = "none";
}

document.getElementById("serviceForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const service = document.getElementById("serviceTitle").textContent;
  const company = document.getElementById("serviceCompanySelect").value;
  const name = document.getElementById("serviceUserName").value.trim();
  const phone = document.getElementById("serviceUserPhone").value.trim();
  const query = document.getElementById("serviceUserQuery").value.trim();

  if (!company || !name || !phone || !query) {
    document.getElementById("serviceFormMsg").textContent = "❌ Please fill all fields.";
    return;
  }

  const message = `New Enquiry for ${service}%0ACompany: ${company}%0AName: ${name}%0APhone: ${phone}%0AQuery: ${query}`;
  window.open(`https://wa.me/918849795135?text=${message}`, "_blank");

  this.reset();
  document.getElementById("serviceFormMsg").textContent = "✅ Sent to WhatsApp!";
  setTimeout(() => closeServiceForm(), 3000);
});
// ✅ Animated Client Counter
let started = false;
const counter = document.getElementById("clientCount");

function animateCounter() {
  let value = 0;
  const endValue = 500;
  const duration = 1500; // 1.5 seconds
  const stepTime = Math.floor(duration / endValue);

  const timer = setInterval(() => {
    value++;
    counter.textContent = value;
    if (value >= endValue) clearInterval(timer);
  }, stepTime);
}

// Trigger on scroll
window.addEventListener("scroll", () => {
  const top = counter.getBoundingClientRect().top;
  if (!started && top < window.innerHeight) {
    started = true;
    animateCounter();
  }
});

const companyOptions = {
  life: ["LIC", "HDFC Life", "ICICI Prudential", "SBI Life", "Tata AIA", "Max Life"],
  health: ["Star Health", "HDFC Ergo", "Care Health", "Niva Bupa", "ICICI Lombard"],
  motor: ["Bajaj Allianz", "HDFC Ergo", "Tata AIG", "IFFCO Tokio"],
  travel: ["TATA AIG", "Care Health", "ICICI Lombard"],
  corporate: ["New India Assurance", "Oriental Insurance", "United India"]
};

function filterCompanies() {
  const type = document.getElementById("insuranceType").value;
  const companySelect = document.getElementById("companySelect");

  companySelect.innerHTML = '<option value="">Select Insurance Company</option>';

  if (companyOptions[type]) {
    companyOptions[type].forEach(company => {
      const option = document.createElement("option");
      option.value = company;
      option.textContent = company;
      companySelect.appendChild(option);
    });
  }
}
