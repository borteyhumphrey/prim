# Valentine's Day Scroll Story Website

An elegant, interactive scroll-based story website with emerald green theme and music player.

## Files Included

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - Interactive functionality (scroll animations, music player)
- `README.md` - This file

## Setup Instructions

1. **Keep all files in the same folder** - The HTML file references the CSS and JS files, so they must be in the same directory.

2. **Add your music** (optional):
   - Place your music file (MP3, WAV, or OGG) in the same folder
   - Open `index.html` in a text editor
   - Find line 20 and uncomment/update it:
     ```html
     <source src="your-music-file.mp3" type="audio/mpeg">
     ```
   - Replace `your-music-file.mp3` with your actual filename
   - Supported formats:
     - MP3: `type="audio/mpeg"`
     - WAV: `type="audio/wav"`
     - OGG: `type="audio/ogg"`

3. **Open the website**:
   - Double-click `index.html` to open in your browser
   - OR right-click → "Open with" → Choose your browser

## Customization Guide

### Adding Your Memories

Edit `index.html` to replace the placeholder text:

1. Find each `<section class="memory-section">` block
2. Update:
   - `MEMORY 01` - Keep numbering or change it
   - `The First Time` - Change the title
   - The paragraph text - Add your story

### Adding More Memories

Copy this entire block and paste it before the final section:

```html
<section class="memory-section">
    <div class="decoration decoration-1"></div>
    <div class="memory-container">
        <div class="memory-number">MEMORY 04</div>
        <h2 class="memory-title">Your Memory Title</h2>
        <div class="memory-text">
            <p>Your memory text here...</p>
        </div>
    </div>
</section>
```

### Changing the Final Message

Find the `<section class="final-section">` near the bottom and edit:
- The main message
- The signature

### Color Customization

Edit `styles.css` at the top to change colors:

```css
:root {
    --emerald: #2d6a4f;        /* Main emerald color */
    --emerald-light: #52b788;   /* Lighter accent */
    --emerald-dark: #1b4332;    /* Darker shade */
    --cream: #faf8f3;           /* Background */
    --gold: #d4af37;            /* Gold accents (optional) */
    --text-dark: #2c3e2d;       /* Text color */
}
```

## Hosting Options

### Option 1: Share as Files
- Zip all files together
- Send to your girlfriend
- She can open `index.html` in her browser

### Option 2: Host Online (Free)
1. **Netlify Drop** (easiest):
   - Go to app.netlify.com/drop
   - Drag all files into the browser
   - Get a free URL to share

2. **GitHub Pages**:
   - Create a GitHub account
   - Create a new repository
   - Upload all files
   - Enable GitHub Pages in settings

3. **Neocities**:
   - Sign up at neocities.org
   - Upload all files
   - Get a free website URL

## Tips

- **Mobile responsive** - Works great on phones and tablets
- **Smooth animations** - Memories fade in as you scroll
- **Music autoplay** - Most browsers block autoplay, so user must click play button
- **No internet required** - Once downloaded, works offline (except for Google Fonts)

## Browser Support

Works in all modern browsers:
- Chrome / Edge
- Firefox
- Safari
- Mobile browsers

Enjoy! 💚
