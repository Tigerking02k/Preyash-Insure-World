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
  window.open(`https://wa.me/919722574788?text=${message}`, "_blank");
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
  window.open(`https://wa.me/919722574788?text=${message}`, "_blank");

  this.reset();
  window.location.href = "success.html";
});


// ========== SERVICE MODAL ==========
const serviceCompanies = {
  "Life Insurance": [
    "Aviva Life Insurance Company India Ltd.",
    "Axis Max Life Insurance Co. Ltd.",
    "Bajaj Allianz Life Insurance Co. Ltd.",
    "Bharti AXA Life Insurance Co. Ltd.",
    "HDFC Life Insurance Co. Ltd.",
    "ICICI Prudential Life Insurance Co. Ltd.",
    "Kotak Life Insurance Co. Ltd.",
    "Life Insurance Corporation of India",
    "PNB MetLife India Insurance Co. Ltd.",
    "Reliance Nippon Life Insurance Company",
    "SBI Life Insurance Co. Ltd.",
    "TATA AIA Life Insurance Co. Ltd."
  ],

  "Health Insurance": [
    "Aditya Birla Health Insurance",
    "Bajaj Allianz General Insurance",
    "Cholamandalam MS General Insurance",
    "Future Generali India Insurance",
    "Go Digit Insurance",
    "HDFC ERGO General Insurance Company",
    "ICICI Lombard",
    "IFFCO TOKIO General Insurance",
    "Manipal Cigna Health Insurance Company Limited",
    "National Insurance Company",
    "New India Assurance",
    "Niva Bupa Health Insurance",
    "Reliance General Insurance",
    "SBI General Insurance",
    "Tata AIG General Insurance",
    "The Oriental Insurance Company",
    "United India Insurance Company"
  ],

  "Motor Insurance": [
    "Aditya Birla Health Insurance",
    "Agriculture Insurance Company of India",
    "Bajaj Allianz General Insurance",
    "Cholamandalam MS General Insurance",
    "Future Generali India Insurance",
    "Go Digit Insurance",
    "HDFC ERGO General Insurance Company",
    "ICICI Lombard",
    "IFFCO TOKIO General Insurance",
    "Liberty General Insurance",
    "Magma General Insurance",
    "Manipal Cigna Health Insurance Company Limited",
    "National Insurance Company",
    "New India Assurance",
    "Niva Bupa Health Insurance",
    "Raheja QBE General Insurance",
    "Reliance General Insurance",
    "Royal Sundaram General Insurance",
    "SBI General Insurance",
    "Shriram General Insurance",
    "Tata AIG General Insurance",
    "The Oriental Insurance Company",
    "United India Insurance Company",
    "Universal Sompo General Insurance Company"
  ],

  "Travel Insurance": ["HDFC Ergo", "ICICI Lombard", "Oriental Insurance", "TATA AIG"],

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
  window.open(`https://wa.me/919722574788?text=${message}`, "_blank");

  this.reset();
  document.getElementById("serviceFormMsg").textContent = "✅ Sent to WhatsApp!";
  setTimeout(() => closeServiceForm(), 3000);
});
// ✅ Enhanced Client Counter based on Visitor Count
let started = false;
const counter = document.getElementById("clientCount");

function animateClientCounter() {
  // Get visitor count from localStorage
  const visitorCount = localStorage.getItem('preyashVisitorCount') || 1250;
  const endValue = Math.floor(visitorCount * 0.15); // 15% of visitors become clients
  const duration = 2000; // 2 seconds
  const stepTime = Math.floor(duration / endValue);
  
  let value = 0;
  
  const timer = setInterval(() => {
    value += Math.ceil(endValue / 50); // Increment by chunks for smoother animation
    if (value >= endValue) {
      value = endValue;
      clearInterval(timer);
    }
    counter.textContent = value.toLocaleString();
  }, stepTime);
}

// Trigger on scroll
window.addEventListener("scroll", () => {
  if (counter) {
    const top = counter.getBoundingClientRect().top;
    if (!started && top < window.innerHeight) {
      started = true;
      animateClientCounter();
    }
  }
});

// Updated company options for Contact Us panel
const companyOptions = {
  life: [
    "Aviva Life Insurance Company India Ltd.",
    "Axis Max Life Insurance Co. Ltd.",
    "Bajaj Allianz Life Insurance Co. Ltd.",
    "Bharti AXA Life Insurance Co. Ltd.",
    "HDFC Life Insurance Co. Ltd.",
    "ICICI Prudential Life Insurance Co. Ltd.",
    "Kotak Life Insurance Co. Ltd.",
    "Life Insurance Corporation of India",
    "PNB MetLife India Insurance Co. Ltd.",
    "Reliance Nippon Life Insurance Company",
    "SBI Life Insurance Co. Ltd.",
    "TATA AIA Life Insurance Co. Ltd."
  ],
  health: [
    "Aditya Birla Health Insurance",
    "Bajaj Allianz General Insurance",
    "Cholamandalam MS General Insurance",
    "Future Generali India Insurance",
    "Go Digit Insurance",
    "HDFC ERGO General Insurance Company",
    "ICICI Lombard",
    "IFFCO TOKIO General Insurance",
    "Manipal Cigna Health Insurance Company Limited",
    "National Insurance Company",
    "New India Assurance",
    "Niva Bupa Health Insurance",
    "Reliance General Insurance",
    "SBI General Insurance",
    "Tata AIG General Insurance",
    "The Oriental Insurance Company",
    "United India Insurance Company"
  ],
  motor: [
    "Aditya Birla Health Insurance",
    "Agriculture Insurance Company of India",
    "Bajaj Allianz General Insurance",
    "Cholamandalam MS General Insurance",
    "Future Generali India Insurance",
    "Go Digit Insurance",
    "HDFC ERGO General Insurance Company",
    "ICICI Lombard",
    "IFFCO TOKIO General Insurance",
    "Liberty General Insurance",
    "Magma General Insurance",
    "Manipal Cigna Health Insurance Company Limited",
    "National Insurance Company",
    "New India Assurance",
    "Niva Bupa Health Insurance",
    "Raheja QBE General Insurance",
    "Reliance General Insurance",
    "Royal Sundaram General Insurance",
    "SBI General Insurance",
    "Shriram General Insurance",
    "Tata AIG General Insurance",
    "The Oriental Insurance Company",
    "United India Insurance Company",
    "Universal Sompo General Insurance Company"
  ],
  travel: [
    "HDFC Ergo", "ICICI Lombard", "Oriental Insurance", "TATA AIG"
  ],
  corporate: [
    "New India Assurance", "Oriental Insurance", "United India"
  ]
};

function filterCompanies() {
  const type = document.getElementById("insuranceType").value;
  const companySelect = document.getElementById("companySelect");
  companySelect.innerHTML = '<option value="">Select Insurance Company</option>';
  if (companyOptions[type]) {
    companySelect.disabled = false;
    companyOptions[type].forEach(company => {
      const option = document.createElement("option");
      option.value = company;
      option.textContent = company;
      companySelect.appendChild(option);
    });
  } else {
    companySelect.disabled = true;
  }
}

// Lock company select initially
document.addEventListener('DOMContentLoaded', function() {
  filterCompanies();
  document.getElementById('companySelect').disabled = true;
});
