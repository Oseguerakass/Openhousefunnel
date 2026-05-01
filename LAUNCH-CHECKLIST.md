# Launch Checklist

## 1. Connect Formspree

1. In Formspree, create a new form for this landing page.
2. Copy the endpoint URL that looks like:

```text
https://formspree.io/f/your-form-id
```

3. Paste it into [app.js](/Users/kassandra/Documents/New%20project/app.js:14) as:

```js
formspreeEndpoint: "https://formspree.io/f/your-form-id"
```

## 2. Add your live domain reference

Update [app.js](/Users/kassandra/Documents/New%20project/app.js:15):

```js
customDomain: "https://yourdomain.com"
```

This is mainly for keeping the template organized for future listings.

## 3. Publish on Netlify

1. Push this project to GitHub.
2. In Netlify, choose `Add new site` -> `Import an existing project`.
3. Select this GitHub repo.
4. Use these settings:
   - Build command: leave blank
   - Publish directory: `.`
5. Deploy the site.

## 4. Connect your custom domain

1. In Netlify, open `Domain management`.
2. Add your purchased domain.
3. Follow Netlify's DNS instructions with your registrar.
4. Wait for the SSL certificate to finish provisioning.

## 5. Test the live funnel

1. Open the live site on desktop and mobile.
2. Submit the form with your own email.
3. Confirm:
   - Formspree receives the lead
   - You receive the submission notification
   - The Buyer Pack `.txt` file downloads after submit
   - The countdown, calculator, and video work correctly

## 6. Reuse for the next open house

For future listings, update the single `listingProfile` object in [app.js](/Users/kassandra/Documents/New%20project/app.js:7):

- `brand`
- `media`
- `hero`
- `event`
- `valueCards`
- `propertyDescription`
- `journeyCards`
- `buyerPack`
- `agent`
- `snapshot`

The page is now designed so most listing swaps happen there instead of across the HTML.
