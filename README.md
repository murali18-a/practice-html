<<<<<<< HEAD
# Community Event Portal - HTML5 Exercises Guide

## Project Overview
This project is a lightweight, browser-based community event portal that demonstrates HTML5, CSS, and JavaScript fundamentals.

## Files Included
- **index.html** - Main portal with all features and exercises
- **help.html** - Help and FAQ page (opens in new tab)
- **README.md** - This guide

---

## How to Use

### Step 1: Open the Portal
1. Navigate to the `practice` folder
2. Right-click on `index.html`
3. Select "Open with" > "Google Chrome" (or your preferred browser)
4. The portal will load with all sections visible

### Step 2: Test Each Feature

#### Feature 1: HTML5 Base Template (Task 1)
- The page uses proper HTML5 structure: `<!DOCTYPE html>`, `<html lang="en">`, `<meta charset="UTF-8">`
- Open Chrome DevTools: Press `F12`
- Go to the "Elements" tab to inspect the document structure
- Notice the semantic tags: `<nav>`, `<main>`, `<section>`, `<footer>`
- Comments label major sections in the code

#### Feature 2: Navigation and Linking (Task 2)
- Use the navigation menu at the top to jump between sections
- Click "Events" to jump to the events section
- Click "Help" to open the help page in a new tab
- Each navigation link uses `<a>` tags with proper href attributes

#### Feature 3: Welcome Message with Styling (Task 3)
- The blue banner at the top uses `id="welcomeBanner"` with internal CSS styling
- The "Limited Time" offer uses inline styles for red, bold text
- The "Explore events" section has the `.highlight` class applied
- View these in Chrome DevTools by inspecting them

#### Feature 4: Image Gallery (Task 4)
- Scroll down to the "Gallery" section
- Images are displayed in a 3x2 table layout
- Each image has:
  - `alt` attribute for accessibility
  - `title` attribute (hover to see)
  - Border styling using the `.event-image` class
  - Double-click any image to enlarge it
- Click the dark background to close the enlarged view

#### Feature 5: Event Registration Form (Task 5)
- Scroll to the "Register" section
- Fill in the form fields:
  - **Full Name** - Required, has autofocus
  - **Email** - Required, email type validation
  - **Event Date** - Date picker
  - **Event Type** - Dropdown select
  - **Phone** - Optional validation
  - **Message** - Text area with character counter
- Submit the form to see a confirmation message in the `<output>` element
- Character counter updates as you type in the message field

#### Feature 6: Event Feedback with Event Handlers (Task 6)
- Go to the "Feedback" section
- **Phone validation (onblur)**: Type in phone field and click away - invalid format triggers warning
- **Event type change (onchange)**: Select an event from dropdown and fee displays automatically
- **Character counting (onkeyup)**: Type in feedback and see character count update
- **Button click (onclick)**: Click "Submit Feedback" to show confirmation
- **Double-click images (ondblclick)**: Go to Gallery and double-click any image to enlarge
- Check browser console (F12 > Console) to see logged messages

#### Feature 7: Video with Media Events (Task 7)
- Scroll to the "Video" section
- The video element has `oncanplay` event - displays "Video ready to play" message
- The `onbeforeunload` event triggers when you try to leave with unsaved form data
  - Try filling the feedback form, then refreshing the page
  - A warning dialog will appear
- Use video controls to play/pause/fullscreen

#### Feature 8: Saving Preferences (Task 8)
- Go to the "Preferences" section
- Select your preferred event type from the dropdown
- Your selection is saved to **localStorage**
- Reload the page - your preference is still selected
- Click "Clear All Preferences" to clear both localStorage and sessionStorage
- Open DevTools (F12) > Application > Local Storage to see saved data

#### Feature 9: Geolocation (Task 9)
- Scroll to the "Nearby" section
- Click "Find Nearby Events"
- Browser will request location permission
- Grant permission to see your coordinates and accuracy
- If denied, an error message appears
- Uses high accuracy geolocation options
- Location data is not stored, only displayed temporarily

#### Feature 10: Debugging with Chrome DevTools (Task 10)
- Press `F12` to open Chrome DevTools
- **Elements Tab**: Inspect the HTML structure and live-edit CSS
  - Click the inspect tool (top left)
  - Click any element to see its HTML and CSS
  - Edit CSS values live to see instant changes
  - Try changing the welcome banner color or button styles
- **Console Tab**: View JavaScript logs and errors
  - You'll see "Community Event Portal loaded successfully"
  - Try other actions to see console messages
- **Debugger Tab**: Set breakpoints
  - Click on any JavaScript line number to add a breakpoint
  - Perform an action that triggers that code
  - The debugger will pause and show variable values
  - Try setting a breakpoint in the form submission function

---

## Testing Checklist

### Navigation Testing
- [ ] All navigation links work and scroll to correct sections
- [ ] Help link opens in a new tab
- [ ] Back link on help page returns to portal

### Form Testing
- [ ] Full Name field has autofocus (cursor starts here on page load)
- [ ] Email field validates email format
- [ ] Date picker opens calendar
- [ ] Event Type dropdown shows all options
- [ ] Character counter updates in real-time
- [ ] Phone validation warns on invalid format
- [ ] Form submission displays confirmation message
- [ ] Clear Form button resets all fields

### Visual Testing
- [ ] Welcome banner is blue with white text
- [ ] Highlight class shows orange background
- [ ] Images display with blue borders
- [ ] Images enlarge on double-click
- [ ] All buttons are green with hover effect
- [ ] Form elements are properly styled

### Interactive Testing
- [ ] Event fee displays when you select an event type
- [ ] Character counter counts correctly
- [ ] Video plays with controls
- [ ] Preferences save after page reload
- [ ] Location permission request appears
- [ ] Error messages show styled formatting

### DevTools Testing
- [ ] Inspect elements to see their IDs and classes
- [ ] Edit CSS in DevTools to see live changes
- [ ] Check Console for JavaScript messages
- [ ] Set breakpoints and watch variables
- [ ] View localStorage in Application tab

---

## Key HTML5 Features Demonstrated

1. **Semantic Structure**
   - `<!DOCTYPE html>` declaration
   - `<html lang="en">` language attribute
   - `<meta charset="UTF-8">` character encoding
   - Semantic tags: `<nav>`, `<main>`, `<section>`, `<footer>`

2. **Forms & Input Types**
   - `<input type="text">` with placeholder
   - `<input type="email">` with validation
   - `<input type="date">` date picker
   - `<input type="tel">` phone number
   - `<textarea>` multi-line text
   - `<select>` dropdowns
   - `required` and `autofocus` attributes
   - `<output>` for displaying results

3. **Media Elements**
   - `<img>` with alt, title, and border styling
   - `<video>` with controls and media events
   - `<table>` for image gallery layout

4. **Styling**
   - Internal `<style>` CSS
   - ID selectors (`#welcomeBanner`)
   - Class selectors (`.highlight`)
   - Inline styles
   - CSS flexbox and grid concepts

5. **JavaScript Events**
   - `onsubmit` - Form submission
   - `onchange` - Dropdown selection
   - `onblur` - Field validation
   - `onclick` - Button clicks
   - `ondblclick` - Double-click images
   - `onkeyup` - Character counting
   - `oncanplay` - Video ready
   - `onbeforeunload` - Warning before leaving

6. **Web APIs**
   - `localStorage` - Persistent storage
   - `sessionStorage` - Session storage
   - `navigator.geolocation` - Location access
   - `console.log()` - Debugging

---

## Browser Compatibility

Tested and working in:
- Google Chrome (Recommended)
- Mozilla Firefox
- Microsoft Edge
- Safari

Note: Geolocation requires HTTPS or localhost in modern browsers.

---

## Customization Tips

### Change Colors
Find the CSS section and modify these colors:
- Primary color (blue): `#3498db`
- Dark background: `#2c3e50`
- Green (buttons): `#27ae60`
- Highlight (orange): `#f39c12`

### Add More Events
In the HTML, find the event list and add more `<li>` items:
```html
<li><strong>New Event</strong> - Date and time</li>
```

### Change Form Fields
Add or remove form fields by modifying the form section:
```html
<div class="form-group">
    <label for="fieldName">Label Text</label>
    <input type="text" id="fieldName" name="fieldName">
</div>
```

### Modify Event Fees
Update the fees object in the JavaScript:
```javascript
const fees = {
    'event_id': 'Event Name - $XX price'
};
```

---

## Common Issues & Solutions

**Images not displaying?**
- The images use placeholder.com API - requires internet connection
- Or replace image URLs with local image paths

**Geolocation not working?**
- Ensure browser has permission to access location
- HTTPS is required in production (not on localhost)
- Grant permission when browser asks

**Form not submitting?**
- Make sure all required fields (marked with *) are filled
- Email must be in valid format
- Check browser console for JavaScript errors

**Styles not applied?**
- Clear browser cache (Ctrl+Shift+Del)
- Reload page (Ctrl+R or Cmd+R)
- Check DevTools to ensure CSS is loading

---

## Next Steps

After completing these exercises:
1. Experiment with adding more form fields
2. Try connecting the form to a backend server
3. Add more interactive features with JavaScript
4. Learn about responsive design and mobile optimization
5. Explore advanced HTML5 APIs like Service Workers and Web Storage

---

## Resources

- MDN HTML5 Documentation: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5
- Chrome DevTools Guide: https://developer.chrome.com/docs/devtools/
- HTML5 Form Elements: https://www.w3schools.com/html/html_form_input_types.asp
- JavaScript Events: https://www.w3schools.com/jsref/dom_obj_event.asp

---

## Support

For questions or issues with this project, refer to the Help page included in the portal (help.html).

Happy Learning!
=======
# practice-html
>>>>>>> 85737479633fc2d20b2576d8d218a62779be3a8a
