/*
  Template setup:
  For the next open house, update the listingProfile object below.
  The rest of the page and thank-you funnel will repopulate automatically.
*/

const listingProfile = {
  site: {
    title: "Open House Buyer Preview | Kassandra Oseguera",
    description:
      "Tour the home, request the Buyer Pack, and get local insights, pricing guidance, and next-step support before you make an offer."
  },
  integrations: {
    formspreeEndpoint: "https://formspree.io/f/xeenqnpk",
    customDomain: "https://yourealtorkass.com"
  },
  brand: {
    monogram: "K",
    agentName: "Kassandra Oseguera",
    email: "kass@madrealtyco.com",
    brokerage: "Mad Realty Co",
    licenseLabel: "Realtor | DRE #02192705",
    footerLine: "Kassandra Oseguera | Mad Realty Co | kass@madrealtyco.com | DRE #02192705",
    headshotSrc: "assets/kassandra-headshot-display.jpg",
    headshotAlt: "Kassandra Oseguera headshot"
  },
  media: {
    heroVideoSrc: "assets/listing-featured.mp4"
  },
  hero: {
    eyebrow: "Rancho Cucamonga open house",
    subheadline:
      "Get the Buyer Pack before your visit so you can compare the home, understand the estimated payment, review financing options, and know what to look for during the tour.",
    primaryCtaLabel: "Get The Free Buyer Pack",
    secondaryCtaLabel: "Estimate Monthly Payment",
    trustChips: [
      "Architect-led remodel",
      "Payment estimate included",
      "VA, FHA & Conventional overview",
      "Rancho Cucamonga lifestyle snapshot"
    ]
  },
  event: {
    address: "9056 La Vine St, Rancho Cucamonga",
    dateLabel: "May 2 & 3, 2026",
    timeLabel: "11:00 AM to 3:00 PM",
    priceLabel: "$744,900",
    statsLabel: "3 beds, 2 full baths, 1,360 sq ft, 7,200 sq ft lot",
    countdownNote:
      "Visitors who register receive the Buyer Pack instantly, including the property checklist, remodel notes, financing overview, escrow timeline, and Rancho Cucamonga resident snapshot.",
    dateISO: "2026-05-02T11:00:00-07:00"
  },
  valueCards: [
    {
      title: "Know What You're Touring",
      body: "Property highlights, remodel notes, lot details, and buyer questions to ask during the walkthrough"
    },
    {
      title: "Understand the Payment",
      body: "Review an estimated monthly payment range, down payment scenarios, and financing options before you write an offer"
    },
    {
      title: "Compare the Long-Term Value",
      body: "See Rancho Cucamonga lifestyle highlights, nearby conveniences, and long-term purchase context"
    }
  ],
  calculator: {
    defaultRate: 6.75,
    defaultTerm: 30,
    annualTaxRate: 0.0125,
    annualInsurance: 1800,
    monthlyHoa: 0
  },
  propertyDescription: {
    eyebrow: "Property Description",
    headline: "Fully remodeled single-story in Rancho Cucamonga, with nearly every major upgrade already done.",
    paragraphs: [
      "This 3-bedroom, 1,360 sq ft home on 9056 La Vine St was completely transformed inside and out. New wood laminate flooring. Fresh interior and exterior paint. New dual-pane windows and sliding patio door. New interior doors and hardware. Custom hallway storage and closet systems. Updated lighting throughout. Remodeled bathroom with modern finishes and LED mirror. Ring doorbell.",
      "The kitchen is where this home earns its price: new cabinetry, quartz countertops, tile backsplash, under-cabinet lighting, upgraded plumbing fixtures, and newer appliances, designed for everyday living and weekend entertaining alike.",
      "The big-ticket upgrades are already done too: 200-amp electrical panel with dedicated EV charger, tankless water heater, and energy-efficient dual-pane windows. No solar lease. No lease transfer. No obligations attached to the title, just long-term savings with no strings.",
      "Two-car detached garage. 7,200 sq ft lot. Refreshed landscaping. Roof has been maintained and is in good condition, inspection welcome. Minutes from the 15 and 210 freeways, shopping, dining, and Alta Loma High School."
    ]
  },
  journeyCards: [
    {
      number: "01",
      title: "Before The Visit",
      body: "Get familiar with the price, estimated payment, financing options, and key property details before you walk in."
    },
    {
      number: "02",
      title: "During The Tour",
      body: "Use the checklist to inspect layout, condition, upgrades, storage, and neighborhood fit."
    },
    {
      number: "03",
      title: "After The Open House",
      body: "Let's get in touch, review options, run numbers, and decide if it makes sense to place an offer."
    }
  ],
  buyerPack: {
    eyebrow: "Free Buyer Resource",
    headline: "Get the Buyer Pack before you tour.",
    subheadline:
      "A simple, mobile-friendly guide to help you tour with clarity, ask better questions, understand financing basics, and evaluate whether this home fits your next move.",
    previewButtonLabel: "Preview The Guide",
    guideHeading: "What buyers receive",
    guideLabel: "For the Rancho Cucamonga featured home",
    guideItems: [
      "Property highlights, remodel notes, lot size, bedroom/bath count, and open house details.",
      "Room-by-room walkthrough checklist so you know what to look for during the tour.",
      "Questions to ask about condition, upgrades, offer terms, financing, and resale value.",
      "Simple escrow timeline from accepted offer to closing.",
      "Pre-approval checklist so you know what a lender may ask for.",
      "Quick overview of VA, FHA, and Conventional financing options.",
      "Rancho Cucamonga 2026 resident snapshot: lifestyle, commuting, schools, shopping, and local conveniences."
    ],
    guideTags: ["Printable", "Mobile-friendly", "Useful for follow-up"]
  },
  form: {
    intro: "Reserve your open house visit and get the free Buyer Pack instantly.",
    subcopy:
      "No pressure. This helps us send you the guide, answer property questions, and understand what would be most helpful before your visit.",
    buyerTypes: [
      "First-time buyer",
      "Move-up buyer",
      "Investor",
      "Relocating buyer",
      "Just exploring",
      "Agent representing a buyer"
    ],
    timelines: ["Ready now", "1-3 months", "3 to 6 months", "6-12 months", "Not sure yet"],
    notesPlaceholder:
      "Tell me what you want help with: payment estimate, financing options, comparing this home, escrow timeline, or deciding if this property is a good fit.",
    submitLabel: "Send Me the Buyer Pack",
    privacyLine:
      "By submitting, you agree to be contacted about this property and related home-buying resources. No spam - just helpful follow-up.",
    successMessage: "Buyer Pack request received. Check your email for follow-up from Kassandra."
  },
  agent: {
    eyebrow: "Why work with me",
    headline: "Get clear guidance before, during, and after the open house.",
    bio:
      "I help buyers make confident real estate decisions by combining property education, payment awareness, financing guidance, and local market context. For this open house, I'm helping buyers understand not just the home itself, but the full picture: monthly payment, financing fit, offer strategy, neighborhood value, and long-term ownership potential.",
    points: [
      {
        title: "Buyer-first guidance",
        body: "Ask questions, compare options, and understand the numbers before making a decision."
      },
      {
        title: "Financing awareness",
        body: "Review basic VA, FHA, and Conventional financing options so you can speak with a lender more prepared."
      },
      {
        title: "Offer strategy support",
        body: "Understand what matters beyond price: contingencies, timelines, seller expectations, repairs, appraisal, and closing costs."
      }
    ]
  },
  snapshot: {
    eyebrow: "Buyer Snapshot",
    headline: "What buyers usually want to know before they decide to tour or write.",
    body:
      "This home offers clarity where it matters most: payment guidance, upgraded condition, neighborhood convenience, and a better understanding of how the property compares to nearby alternatives in Rancho Cucamonga.",
    points: [
      {
        label: "Schools + location",
        value: "Near Alta Loma High School, shopping, dining, and quick access to the 15 and 210"
      },
      {
        label: "Upgrade value",
        value: "Major systems and design updates are already done, which can mean fewer surprise costs after closing"
      },
      {
        label: "Comparable value",
        value: "Listed at $744,900 while offering more size, newer construction, and strong remodel appeal versus nearby alternatives"
      }
    ]
  },
  funnel: {
    thankYouPage: "thank-you.html",
    sessionKey: "openhousefunnel-latest-lead",
    returnToListingLabel: "Back To The Listing",
    emailCtaLabel: "Email Kassandra",
    calculatorCtaLabel: "Review Payment Scenarios",
    buyerPackCtaLabel: "Download Buyer Pack Backup",
    thankYouEyebrow: "Buyer Pack Requested",
    thankYouHeadline: "You are officially on the list for the open house.",
    thankYouBody:
      "Your Buyer Pack request is in. Kassandra can follow up by email, and you can use the next steps below to stay organized, review the numbers, and make the most of your visit.",
    nextSteps: [
      {
        title: "Check your inbox",
        body: "We have your inquiry, and Kassandra can now follow up by email with property-specific answers and next-step guidance."
      },
      {
        title: "Review the numbers",
        body: "Use the mortgage calculator and Buyer Pack together so you know what feels comfortable before the tour."
      },
      {
        title: "Arrive prepared",
        body: "Bring your questions about condition, financing, and next steps so the open house becomes a decision-making visit."
      }
    ]
  }
};

const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

function setText(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
}

function setSelectOptions(id, options) {
  const select = document.getElementById(id);
  if (!select) return;

  const firstOption = select.querySelector("option");
  const placeholder = firstOption ? firstOption.outerHTML : '<option value="">Select one</option>';
  select.innerHTML = `${placeholder}${options.map((option) => `<option>${option}</option>`).join("")}`;
}

function renderSimpleCards(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items
    .map(
      (item) => `
        <div>
          <strong>${item.title}</strong>
          <span>${item.body}</span>
        </div>
      `
    )
    .join("");
}

function renderJourneyCards(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items
    .map(
      (item) => `
        <article class="feature-card">
          <span class="feature-kicker">${item.number}</span>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

function renderParagraphs(containerId, paragraphs) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

function renderList(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderTags(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map((item) => `<span>${item}</span>`).join("");
}

function renderAgentPoints(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items
    .map(
      (item) => `
        <div>
          <strong>${item.title}</strong>
          <span>${item.body}</span>
        </div>
      `
    )
    .join("");
}

function renderSnapshotPoints(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items
    .map(
      (item) => `
        <div>
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </div>
      `
    )
    .join("");
}

function getTrackingParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_content: params.get("utm_content") || "",
    utm_term: params.get("utm_term") || "",
    source: params.get("source") || "Open House Landing Page",
    landingPageUrl: window.location.href,
    referrerUrl: document.referrer || ""
  };
}

function hydrateTrackingFields() {
  const tracking = getTrackingParams();
  const mappings = {
    formSourceInput: tracking.source,
    formReferrerInput: tracking.referrerUrl,
    formLandingPageInput: tracking.landingPageUrl,
    formUtmSourceInput: tracking.utm_source,
    formUtmMediumInput: tracking.utm_medium,
    formUtmCampaignInput: tracking.utm_campaign,
    formUtmContentInput: tracking.utm_content,
    formUtmTermInput: tracking.utm_term
  };

  Object.entries(mappings).forEach(([id, value]) => {
    const node = document.getElementById(id);
    if (node) node.value = value;
  });

  return tracking;
}

function injectLandingContent() {
  document.title = listingProfile.site.title;

  const metaDescription = document.getElementById("metaDescription");
  if (metaDescription) {
    metaDescription.setAttribute("content", listingProfile.site.description);
  }

  const brandMonogram = document.querySelector(".brand-monogram");
  if (brandMonogram) brandMonogram.textContent = listingProfile.brand.monogram;

  setText("agentNameNav", listingProfile.brand.agentName);
  setText("agentEmailNav", listingProfile.brand.email);
  setText("agentNameFooter", listingProfile.brand.agentName);
  setText("footerLine", listingProfile.brand.footerLine);

  setText("heroEyebrow", listingProfile.hero.eyebrow);
  setText("propertySubhead", listingProfile.hero.subheadline);
  setText("heroPrimaryCta", listingProfile.hero.primaryCtaLabel);
  setText("heroSecondaryCta", listingProfile.hero.secondaryCtaLabel);
  renderTags("heroTrustChips", listingProfile.hero.trustChips);

  setText("propertyAddress", listingProfile.event.address);
  setText("eventDate", listingProfile.event.dateLabel);
  setText("eventTime", listingProfile.event.timeLabel);
  setText("listingPrice", listingProfile.event.priceLabel);
  setText("propertyStats", listingProfile.event.statsLabel);
  setText("eventNote", listingProfile.event.countdownNote);

  renderSimpleCards("valueCards", listingProfile.valueCards);

  setText("propertyDescriptionEyebrow", listingProfile.propertyDescription.eyebrow);
  setText("propertyDescriptionHeadline", listingProfile.propertyDescription.headline);
  renderParagraphs("propertyDescriptionBody", listingProfile.propertyDescription.paragraphs);

  renderJourneyCards("journeyCards", listingProfile.journeyCards);

  setText("buyerPackEyebrow", listingProfile.buyerPack.eyebrow);
  setText("buyerPackHeadline", listingProfile.buyerPack.headline);
  setText("buyerPackSubheadline", listingProfile.buyerPack.subheadline);
  setText("downloadGuideTop", listingProfile.buyerPack.previewButtonLabel);
  setText("guidePreviewHeading", listingProfile.buyerPack.guideHeading);
  setText("guidePropertyLabel", listingProfile.buyerPack.guideLabel);
  renderList("guideList", listingProfile.buyerPack.guideItems);
  renderTags("guideTags", listingProfile.buyerPack.guideTags);

  setText("formIntro", listingProfile.form.intro);
  setText("formSubcopy", listingProfile.form.subcopy);
  setText("formFootnote", listingProfile.form.privacyLine);

  const submitButton = document.querySelector('#lead-form button[type="submit"]');
  if (submitButton) submitButton.textContent = listingProfile.form.submitLabel;

  const notesInput = document.getElementById("notesInput");
  if (notesInput) notesInput.setAttribute("placeholder", listingProfile.form.notesPlaceholder);

  setText("agentNameCard", listingProfile.brand.agentName);
  setText("agentLicenseCard", listingProfile.brand.licenseLabel);
  setText("agentBrokerageCard", listingProfile.brand.brokerage);
  setText("agentEyebrow", listingProfile.agent.eyebrow);
  setText("agentHeadline", listingProfile.agent.headline);
  setText("agentBio", listingProfile.agent.bio);
  renderAgentPoints("agentPoints", listingProfile.agent.points);

  setText("snapshotEyebrow", listingProfile.snapshot.eyebrow);
  setText("snapshotHeadline", listingProfile.snapshot.headline);
  setText("snapshotBody", listingProfile.snapshot.body);
  renderSnapshotPoints("snapshotPoints", listingProfile.snapshot.points);

  const headshot = document.getElementById("agentHeadshot");
  if (headshot) {
    headshot.src = listingProfile.brand.headshotSrc;
    headshot.alt = listingProfile.brand.headshotAlt;
  }

  const videoSource = document.getElementById("heroVideoSource");
  const video = document.getElementById("heroVideo");
  if (videoSource && video) {
    videoSource.src = listingProfile.media.heroVideoSrc;
    video.load();
  }

  const hiddenFields = {
    formPropertyInput: listingProfile.event.address,
    formEventDateInput: listingProfile.event.dateLabel,
    formEventTimeInput: listingProfile.event.timeLabel,
    formListingPriceInput: listingProfile.event.priceLabel
  };

  Object.entries(hiddenFields).forEach(([id, value]) => {
    const node = document.getElementById(id);
    if (node) node.value = value;
  });

  setSelectOptions("buyerTypeInput", listingProfile.form.buyerTypes);
  setSelectOptions("timelineInput", listingProfile.form.timelines);
  hydrateTrackingFields();
}

function updateCountdown() {
  const countdown = document.getElementById("countdownText");
  if (!countdown) return;

  const target = new Date(listingProfile.event.dateISO).getTime();
  const now = Date.now();
  const diff = target - now;

  if (!listingProfile.event.dateISO || Number.isNaN(target)) {
    countdown.textContent = "Add exact open house date and time";
    return;
  }

  if (diff <= 0) {
    countdown.textContent = "Open house is underway";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  const parts = [];
  if (days > 0) parts.push(`${days}d`);
  parts.push(`${hours}h`);
  parts.push(`${minutes}m`);
  countdown.textContent = parts.join(" ");
}

function formatMoney(value) {
  return moneyFormatter.format(Math.max(0, Math.round(value || 0)));
}

function parseListingPrice(value) {
  return Number(String(value).replace(/[^0-9.]/g, "")) || 0;
}

function buildGuideText(lead) {
  return [
    "OPEN HOUSE BUYER PACK",
    "",
    `Hosted by: ${listingProfile.brand.agentName}`,
    `Property: ${listingProfile.event.address}`,
    `Date: ${listingProfile.event.dateLabel}`,
    `Time: ${listingProfile.event.timeLabel}`,
    "",
    `Prepared for: ${lead.name}`,
    "",
    "WHAT'S INSIDE",
    ...listingProfile.buyerPack.guideItems.map((item) => `- ${item}`),
    "",
    "WHAT TO LOOK FOR DURING THE TOUR",
    "- Layout, natural light, and everyday flow",
    "- Condition, upgrades, storage, and neighborhood fit",
    "- Payment comfort and how the home compares to alternatives",
    "",
    "PAYMENT PREVIEW",
    "- Use the mortgage calculator on the page to estimate principal, interest, taxes, insurance, and HOA",
    "- Final terms depend on credit, loan program, rate, taxes, insurance, HOA, and lender approval",
    "",
    "AFTER THE TOUR",
    "- Review the property against your timeline and budget",
    "- Talk through next steps and offer readiness",
    "- Decide whether the purchase makes sense for your goals",
    "",
    "NEXT STEP",
    `Reply to ${listingProfile.brand.agentName} for a follow-up conversation tailored to your timeline: ${lead.timeline}.`
  ].join("\n");
}

function downloadTextFile(filename, content) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function isFormspreeConfigured() {
  return /^https:\/\/formspree\.io\/f\/[\w-]+$/i.test(listingProfile.integrations.formspreeEndpoint);
}

function setFormStatus(message, type = "neutral") {
  const statusNode = document.getElementById("formStatus");
  if (!statusNode) return;

  statusNode.textContent = message;
  statusNode.dataset.state = type;
}

function sanitizeFirstName(fullName) {
  return (fullName || "").trim().split(/\s+/)[0] || "there";
}

function storeLatestLead(payload) {
  sessionStorage.setItem(listingProfile.funnel.sessionKey, JSON.stringify(payload));
}

function getLatestLead() {
  const stored = sessionStorage.getItem(listingProfile.funnel.sessionKey);
  if (!stored) return null;

  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

function buildThankYouUrl(lead) {
  const params = new URLSearchParams({
    name: sanitizeFirstName(lead.name),
    timeline: lead.timeline || "",
    type: lead.buyerType || ""
  });

  return `${listingProfile.funnel.thankYouPage}?${params.toString()}`;
}

async function handleLeadSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const successNode = document.getElementById("formSuccess");
  const submitButton = form.querySelector('button[type="submit"]');

  if (!isFormspreeConfigured()) {
    setFormStatus("Add your Formspree endpoint in app.js before publishing so leads can be delivered live.", "error");
    return;
  }

  const tracking = hydrateTrackingFields();
  const lead = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    buyerType: form.buyerType.value.trim(),
    timeline: form.timeline.value.trim(),
    notes: form.notes.value.trim(),
    submittedAt: new Date().toISOString()
  };

  const payload = {
    ...lead,
    propertyAddress: listingProfile.event.address,
    openHouseDate: listingProfile.event.dateLabel,
    openHouseTime: listingProfile.event.timeLabel,
    listingPrice: listingProfile.event.priceLabel,
    hostedBy: listingProfile.brand.agentName,
    agentEmail: listingProfile.brand.email,
    ...tracking
  };

  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
  }

  setFormStatus("Sending your Buyer Pack request...", "loading");
  if (successNode) successNode.textContent = "";

  try {
    const response = await fetch(listingProfile.integrations.formspreeEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Form submit failed with status ${response.status}`);
    }

    const safeName =
      lead.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "buyer";
    const guideText = buildGuideText(lead);

    setFormStatus("Request received. Watch your email and continue to the next step...", "success");
    if (successNode) successNode.textContent = listingProfile.form.successMessage;

    storeLatestLead({
      lead,
      payload,
      guideText,
      buyerPackFilename: `${safeName}-buyer-pack.txt`
    });

    window.setTimeout(() => {
      window.location.href = buildThankYouUrl(lead);
    }, 500);
  } catch (error) {
    setFormStatus(
      "The form could not send right now. Please try again in a moment or contact Kassandra directly.",
      "error"
    );
    if (successNode) successNode.textContent = "";
    console.error(error);
  } finally {
    if (submitButton) {
      submitButton.disabled = false;
      submitButton.textContent = listingProfile.form.submitLabel;
    }
  }
}

function previewGuide() {
  const sampleLead = {
    name: "Guest Buyer",
    timeline: "30 to 90 days"
  };
  downloadTextFile("buyer-pack-preview.txt", buildGuideText(sampleLead));
}

function calculateMortgagePayment(principal, annualRate, years) {
  const monthlyRate = annualRate / 100 / 12;
  const totalPayments = years * 12;

  if (!principal || !totalPayments) return 0;
  if (!monthlyRate) return principal / totalPayments;

  return (
    (principal * (monthlyRate * (1 + monthlyRate) ** totalPayments)) /
    ((1 + monthlyRate) ** totalPayments - 1)
  );
}

function initializeMortgageCalculator() {
  const form = document.getElementById("mortgageForm");
  if (!form) return;

  const inputs = {
    price: document.getElementById("calcPrice"),
    down: document.getElementById("calcDown"),
    rate: document.getElementById("calcRate"),
    term: document.getElementById("calcTerm"),
    tax: document.getElementById("calcTax"),
    insurance: document.getElementById("calcInsurance"),
    hoa: document.getElementById("calcHoa")
  };

  const output = {
    total: document.getElementById("paymentTotal"),
    loanAmount: document.getElementById("loanAmountValue"),
    principalInterest: document.getElementById("principalInterestValue"),
    tax: document.getElementById("taxValue"),
    insurance: document.getElementById("insuranceValue"),
    hoa: document.getElementById("hoaValue"),
    downPayment: document.getElementById("downPaymentValue")
  };

  const defaultPrice = parseListingPrice(listingProfile.event.priceLabel);
  inputs.price.value = defaultPrice;
  inputs.down.value = Math.round(defaultPrice * 0.2);
  inputs.rate.value = String(listingProfile.calculator.defaultRate);
  inputs.term.value = String(listingProfile.calculator.defaultTerm);
  inputs.tax.value = Math.round(defaultPrice * listingProfile.calculator.annualTaxRate);
  inputs.insurance.value = String(listingProfile.calculator.annualInsurance);
  inputs.hoa.value = String(listingProfile.calculator.monthlyHoa);

  function updateMortgage() {
    const price = Number(inputs.price.value) || 0;
    const down = Number(inputs.down.value) || 0;
    const rate = Number(inputs.rate.value) || 0;
    const term = Number(inputs.term.value) || 30;
    const annualTax = Number(inputs.tax.value) || 0;
    const annualInsurance = Number(inputs.insurance.value) || 0;
    const hoa = Number(inputs.hoa.value) || 0;

    const loanAmount = Math.max(price - down, 0);
    const principalInterest = calculateMortgagePayment(loanAmount, rate, term);
    const taxMonthly = annualTax / 12;
    const insuranceMonthly = annualInsurance / 12;
    const totalMonthly = principalInterest + taxMonthly + insuranceMonthly + hoa;

    output.total.textContent = `${formatMoney(totalMonthly)}/mo`;
    output.loanAmount.textContent = formatMoney(loanAmount);
    output.principalInterest.textContent = `${formatMoney(principalInterest)}/mo`;
    output.tax.textContent = `${formatMoney(taxMonthly)}/mo`;
    output.insurance.textContent = `${formatMoney(insuranceMonthly)}/mo`;
    output.hoa.textContent = `${formatMoney(hoa)}/mo`;
    output.downPayment.textContent = formatMoney(down);
  }

  Object.values(inputs).forEach((input) => input.addEventListener("input", updateMortgage));
  updateMortgage();
}

function initializeThankYouPage() {
  const latestLead = getLatestLead();
  const params = new URLSearchParams(window.location.search);
  const firstName = params.get("name") || sanitizeFirstName(latestLead?.lead?.name);
  const timeline = params.get("timeline") || latestLead?.lead?.timeline || "your timeline";
  const buyerType = params.get("type") || latestLead?.lead?.buyerType || "buyer";
  const personalizedHeadline =
    firstName && firstName.toLowerCase() !== "there"
      ? `${firstName}, ${listingProfile.funnel.thankYouHeadline}`
      : listingProfile.funnel.thankYouHeadline;

  document.title = `Thank You | ${listingProfile.brand.agentName}`;

  setText("thankYouAgentName", listingProfile.brand.agentName);
  setText("thankYouAgentEmail", listingProfile.brand.email);
  setText("thankYouAgentNameFooter", listingProfile.brand.agentName);
  setText("thankYouEyebrow", listingProfile.funnel.thankYouEyebrow);
  setText("thankYouHeadline", personalizedHeadline);
  setText("thankYouBody", listingProfile.funnel.thankYouBody);
  setText("thankYouAddress", listingProfile.event.address);
  setText("thankYouDate", listingProfile.event.dateLabel);
  setText("thankYouTime", listingProfile.event.timeLabel);
  setText("thankYouPrice", listingProfile.event.priceLabel);
  setText("thankYouTimeline", timeline);
  setText("thankYouBuyerType", buyerType);
  setText("thankYouFooterLine", listingProfile.brand.footerLine);
  setText("returnToListingLabel", listingProfile.funnel.returnToListingLabel);
  setText("emailCtaLabel", listingProfile.funnel.emailCtaLabel);
  setText("calculatorCtaLabel", listingProfile.funnel.calculatorCtaLabel);
  setText("buyerPackCtaLabel", listingProfile.funnel.buyerPackCtaLabel);

  const brandMonogram = document.querySelector(".brand-monogram");
  if (brandMonogram) brandMonogram.textContent = listingProfile.brand.monogram;

  const emailLink = document.getElementById("thankYouEmailLink");
  if (emailLink) {
    emailLink.href = `mailto:${listingProfile.brand.email}?subject=${encodeURIComponent(
      `Open House Follow-Up: ${listingProfile.event.address}`
    )}`;
  }

  const returnLink = document.getElementById("returnToListingLink");
  if (returnLink) {
    returnLink.href = `${listingProfile.integrations.customDomain}/`;
  }

  const calculatorLink = document.getElementById("calculatorReviewLink");
  if (calculatorLink) {
    calculatorLink.href = `${listingProfile.integrations.customDomain}/#calculator`;
  }

  const nextSteps = document.getElementById("thankYouSteps");
  if (nextSteps) {
    nextSteps.innerHTML = listingProfile.funnel.nextSteps
      .map(
        (item) => `
          <article class="feature-card">
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </article>
        `
      )
      .join("");
  }

  const downloadAgainButton = document.getElementById("downloadBuyerPackAgain");
  if (downloadAgainButton) {
    downloadAgainButton.addEventListener("click", () => {
      if (latestLead?.guideText && latestLead?.buyerPackFilename) {
        downloadTextFile(latestLead.buyerPackFilename, latestLead.guideText);
        return;
      }

      const fallbackLead = {
        name: latestLead?.lead?.name || firstName || "Guest Buyer",
        timeline: latestLead?.lead?.timeline || timeline || "30 to 90 days"
      };
      downloadTextFile("buyer-pack.txt", buildGuideText(fallbackLead));
    });
  }
}

function initializePage() {
  const pageType = document.body.dataset.page || "landing";

  if (pageType === "landing") {
    injectLandingContent();
    updateCountdown();
    initializeMortgageCalculator();
    window.setInterval(updateCountdown, 60000);

    const leadForm = document.getElementById("lead-form");
    if (leadForm) {
      leadForm.addEventListener("submit", handleLeadSubmit);
    }

    const previewButton = document.getElementById("downloadGuideTop");
    if (previewButton) {
      previewButton.addEventListener("click", previewGuide);
    }
  }

  if (pageType === "thank-you") {
    initializeThankYouPage();
  }
}

initializePage();
