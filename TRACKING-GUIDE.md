# Tracking Guide

## 1. Add your Google Analytics 4 Measurement ID

In [app.js](/Users/kassandra/Documents/New%20project/app.js:13), replace:

```js
googleAnalyticsId: "PASTE_GA4_MEASUREMENT_ID"
```

with your real GA4 Measurement ID, which looks like:

```text
G-XXXXXXXXXX
```

To find it in Google Analytics:

1. Open `Admin`
2. Go to `Data streams`
3. Click your website stream
4. Copy the `Measurement ID`

## 2. What is tracked automatically

Once your GA4 ID is added, the site will track:

- page views
- primary hero CTA clicks
- mortgage calculator CTA clicks
- Buyer Pack preview clicks
- thank-you page CTA clicks
- successful form submissions

Lead submit events also include:

- `buyer_type`
- `timeline`
- `source`
- `utm_source`
- `utm_medium`
- `utm_campaign`

## 3. UTM link examples

Base URL:

```text
https://yourealtorkass.com/
```

### Instagram story

```text
https://yourealtorkass.com/?source=instagram-story&utm_source=instagram&utm_medium=social&utm_campaign=la-vine-open-house&utm_content=story
```

### Instagram bio

```text
https://yourealtorkass.com/?source=instagram-bio&utm_source=instagram&utm_medium=social&utm_campaign=la-vine-open-house&utm_content=bio
```

### Text message

```text
https://yourealtorkass.com/?source=text-message&utm_source=sms&utm_medium=direct&utm_campaign=la-vine-open-house&utm_content=text
```

### Email blast

```text
https://yourealtorkass.com/?source=email-blast&utm_source=email&utm_medium=email&utm_campaign=la-vine-open-house&utm_content=buyer-list
```

### QR code for open house sign-in sheet or flyer

```text
https://yourealtorkass.com/?source=open-house-qr&utm_source=qr&utm_medium=offline&utm_campaign=la-vine-open-house&utm_content=flyer
```

## 4. QR code recommendation

Use the QR code URL above for:

- printed flyers
- open house sign-in signage
- property postcards
- countertop display at the event

This will let you separate QR traffic from social or text traffic inside both:

- Google Analytics
- Formspree submissions

## 5. Testing

After adding your GA4 Measurement ID and redeploying:

1. Visit the site with one of the UTM links
2. Click a CTA
3. Submit the form
4. In GA4, use `Realtime` to confirm the events are arriving

## 6. Suggested first campaign naming

For this property, keep naming consistent:

- `utm_campaign=la-vine-open-house`

For future listings, swap that value to the new property/campaign name.
