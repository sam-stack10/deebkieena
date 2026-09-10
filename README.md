# 💍 Dr. Sameena & Dr. Adeeb - Wedding Invitation Website

A beautiful, responsive Muslim wedding invitation website with sophisticated design, interactive countdown timer, scratch card reveal, and guest engagement features.

## 🎨 Features

✨ **4-Page Elegant Experience**
- Page 1: Nikah Invitation with live countdown
- Page 2: Nikah Venue with map integration
- Page 3: Haldi Celebration with scratch card reveal
- Page 4: Guest Dua form + In Loving Memory + Closing blessing

🎯 **Interactive Elements**
- Live countdown timer (updates every second)
- Scratch card that reveals Haldi date when scratched
- Functional RSVP form with Google Forms/Formspree integration
- Personalized guest greetings via URL parameter

📱 **Responsive Design**
- Desktop, tablet, and mobile optimized
- Beautiful on all screen sizes
- No horizontal scrolling
- Touch-friendly interactions

🌟 **Design Elements**
- Sophisticated desi/South Asian aesthetic
- Burgundy, cream, and antique gold color scheme
- Elegant arches and ornamental borders
- Islamic geometric details
- Floral embellishments
- Luxurious typography

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/sam-stack10/deebkieena.git
cd deebkieena
```

### 2. Add your assets
Create an `assets/` folder and add:
- `background.png` - Cream embossed floral background
- `bismillah.png` - Bismillah calligraphy PNG
- `as-logo.png` - AS logo

### 3. Set up form submission
Update the Formspree endpoint in `config.js`:
```javascript
formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID"
```

[Get your Formspree ID here](https://formspree.io/)

### 4. Open in browser
Simply open `index.html` in your web browser, or serve with a local server:
```bash
python3 -m http.server 8000
# or
npx http-server
```

Visit `http://localhost:8000`

## ⚙️ Configuration

Edit `config.js` to customize:

```javascript
const weddingConfig = {
  brideName: "Dr. Sameena Firdous",
  groomName: "Dr. Mohammed Adeeb Sagri",
  
  nikahDate: "2026-12-29",
  nikahVenue: "The Vintage Palace",
  nikahAddress: "...",
  nikahMapUrl: "https://maps.app.goo.gl/...",
  
  haldiDate: "2026-12-26",
  haldiVenue: "Pavani Petals",
  haldiAddress: "...",
  haldiMapUrl: "https://maps.app.goo.gl/...",
  
  formspreeEndpoint: "https://formspree.io/f/YOUR_ID"
};
```

## 🔗 Personalized Guest URLs

Share customized links with guests:

```
https://your-domain.com?guest=Fatima
https://your-domain.com?guest=Mohammed+Adeeb
```

The website will display:
> Dear Fatima,

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with all elements
- **Tablet (768px)**: Adjusted typography and spacing
- **Mobile (480px)**: Compact menu, stacked layout, optimized touch targets

## 🎨 Color Palette

```css
--cream: #f5f1ed
--ivory: #faf8f5
--burgundy: #6b1f1f
--deep-red: #8b2e2e
--antique-gold: #c9a661
--muted-green: #5a6b4a
--vibrant-yellow: #f4d03f (Haldi only)
```

## 🏗️ File Structure

```
deebkieena/
├── index.html          # Main HTML
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── config.js           # Editable configuration
├── README.md           # This file
├── .gitignore          # Git ignore rules
└── assets/             # (Create this folder)
    ├── background.png
    ├── bismillah.png
    └── as-logo.png
```

## 🔧 Key Functions

### Countdown Timer
Updates every second until the Nikah date:
```javascript
updateCountdown()
```

### Scratch Card
Interactive canvas-based scratch reveal:
```javascript
new ScratchCard('scratch-canvas', 'revealed-date')
```

### Guest Greeting
Personalized greeting from URL parameter:
```javascript
getGuestName()
displayGuestGreeting()
```

### Form Submission
Sends Dua and RSVP via Formspree:
```javascript
setupDuaForm()
```

## 📋 Page Descriptions

### Page 1 - Nikah Invitation
- AS logo in circular medallion
- Bismillah calligraphy
- Couple introduction
- Nikah date: 29 · 12 · 2026
- Live countdown timer

### Page 2 - Nikah Venue
- Single ornate arch
- Venue: The Vintage Palace
- Complete address
- Google Maps button

### Page 3 - Haldi
- Single ornate arch (golden)
- "A little sunshine is coming..."
- Scratch card (reveals 26 · 12 · 2026)
- Haldi venue: Pavani Petals
- Google Maps button

### Page 4 - Dua, Memory & Closing
- **Share Your Dua**: Form to collect guest messages
- **In Loving Memory Of**: Tribute section
- **Closing**: Islamic blessing (Ameen)

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Select `main` branch
4. Site will be live at `https://sam-stack10.github.io/deebkieena`

### Netlify
1. Connect GitHub repo to Netlify
2. Deploy automatically

### Custom Domain
Point your domain's DNS to your hosting provider.

## 📧 Form Submission

The Dua form collects:
- Guest name
- RSVP (Yes/No)
- Dua/Message

Submissions are sent to your email via Formspree.

## 🎯 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 📝 Notes

- The countdown timer is live and updates automatically
- Scratch card works with mouse, touch, and trackpad
- Form requires valid Formspree endpoint
- All assets must be in `/assets/` folder
- Color scheme is locked to the desi aesthetic

## 🤝 Support

For questions or issues, please create a GitHub issue.

---

**Created with ❤️ for Dr. Sameena & Dr. Adeeb**

May Allah bless this union with sakinah, mawaddah, and rahmah. Ameen.
