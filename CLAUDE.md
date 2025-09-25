# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

**UDS Protocol Learning Platform** - Interactive educational website for teaching Unified Diagnostic Services (ISO 14229) through animations and demos. Currently a single-page application optimized for GitHub Pages deployment.

## Development Commands

### Deployment
```bash
# Preview locally (serve from project root)
python -m http.server 8000
# Or use any static file server
npx serve .

# Check codebase integrity
node -v   # Verify Node.js available (not required for runtime)
ls -la    # List all files
```

### Development Workflow
```bash
# Code validation (manual checks)
echo "✓ Check: All tags properly closed"
echo "✓ Verify: No console errors in browser"
echo "✓ Test: Responsive design on 320px width"
echo "✓ Confirm: Animations work at 60fps"

# Performance checks
ls -lh index.html  # < 500KB for optimal loading
```

## Architecture Overview

### Current Structure (Single File SPA)
- **Main Entry:** `index.html` - Self-contained HTML/CSS/JS
- **Style Organization:** Embedded CSS with logical sections:
  - Lines 7-328: Core styles (layout, components, animations)
  - Lines 44-70: Navigation tabs
  - Lines 90-153: Device communication animations
  - Lines 154-386: Service cards and UI components
- **JavaScript Organization:** Single file with clear separation:
  - Lines 508-698: Application logic
  - Functions: `showTab()`, `updateProgress()`, `startDemo()`, `simulate*()`
- **Data Organization:** JavaScript objects storing UDS service definitions

### Key Design Patterns
```javascript
// Tab-based navigation
showTab(tabName) {
  // Hide all sections, show selected
  // Update progress bar automatically
  // Maintain single-page app state
}

// Demo execution pattern
startDemo(type) {
  // Validate state
  // Animate message flow
  // Update device statuses
  // Log communication
  // Auto-cleanup on completion
}
```

## GitHub Pages Deployment

This repository is configured for **GitHub Pages Direct Deployment**:
- **Target Branch:** `main` (already configured)
- **Source:** Root directory (simplified setup)
- **Trigger:** Push to main branch → Live in 60 seconds

### Deployment Checklist (Before Major Changes)
1. Test locally: `python -m http.server 8000`
2. Check mobile responsiveness: Chrome DevTools (320px-768px)
3. Verify animations: No frame drops at 60fps
4. Validate Chinese text: No encoding issues
5. Console check: Zero JavaScript errors

## Code Style Guidelines

### HTML/CSS Conventions
- **Chinese Comments:** Use in `<title>`, headings, `alert()` messages
- **Animation Standards:** 60fps target, use `transform` and `opacity` for performance
- **Responsive Design:** Mobile-first, test at 320px minimum
- **Color Scheme:** Gradient backgrounds (#667eea → #764ba2)

### JavaScript Conventions
- **Chinese Strings:** Keep Chinese text consistent with UI design
- **Event Handling:** Use `onclick` attributes (current pattern)
- **Animation Timing:** Use `setTimeout` with reasonable delays (1000-2500ms)
- **State Management:** Simple variables, no complex state library

### CSS Animation Guidelines
```css
/* Preferred animation pattern */
@keyframes example {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Use transform for performance */
.device {
  transform: translateY(0); /* Good */
  /* avoid: top: 0; */ /* Bad for performance */
}
```

## Core Functionality Areas

1. **Progressive Learning System**
   - Tab-based content sections (basics → services → demo → quiz)
   - Automatic progress tracking (0% → 100%)
   - Chinese language interface throughout

2. **Interactive Demonstrations**
   - Session management simulation (0x10)
   - Security access flow (0x27)
   - Data reading operation (0x22)
   - Real-time message logging

3. **Knowledge Testing**
   - Multiple choice questions (4 options)
   - Instant visual feedback (correct/wrong styling)
   - Chinese question text

4. **Visual Design System**
   - Gradient backgrounds
   - Glass morphism effects
   - Device animation (Client ↔ Server)
   - Color-coded service categories

## Common Development Tasks

### Adding a New UDS Service
1. **Data Definition**: Add service object to `services` JS object around line 544
   - Service ID (hex), name, description, request/response structure
2. **UI Addition**: Add service card in services tab HTML (around line 750)
   - Follow existing card pattern with glass-morphism styling
3. **Event Binding**: Add onclick="selectService('serviceId')" to card
4. **Testing**: Verify card appears, selection shows correct UDS service details

### Extending Demo System
1. **Control Flow**: Add new case in `startDemo(type)` switch (line ~650)
2. **Simulation Function**: Create `simulate*Demo()` following pattern:
   - Returns array of animation steps with delays
   - Updates device statuses via DOM manipulation
   - Adds message logs via `logMessage()`
3. **Animation Timing**: Use 1500-2500ms delays for readability
4. **Testing**: Check Chrome DevTools timeline for 60fps performance

### Styling Changes
1. **Color System**: Maintain gradient (#667eea → #764ba2) or add analogs
2. **Performance**: Use `transform` and `opacity` for animations (avoid top/left)
3. **Responsive**: Test mobile-first from 320px upward
4. **i18n**: Keep Chinese text in UI elements, use hex for service IDs in code

## Testing Requirements

### Essential Quality Checks
- [ ] **Mobile Safari (iOS):** No layout breaking
- [ ] **Chrome Mobile (Android):** Animations smooth
- [ ] **Desktop Chrome:** All features functional
- [ ] **Firefox:** No console errors
- [ ] **Edge:** Equivalent performance to Chrome

### Performance Metrics
- **Page Load:** < 3 seconds on 3G network
- **Animation FPS:** Consistent 60fps on mobile
- **Memory Usage:** < 100MB for typical session
- **File Size:** HTML file < 300KB gzipped

## Important Constraints

1. **GitHub Pages Only**: No server-side code, must be static
2. **Chinese Interface**: Primary language is Chinese, maintain consistency
3. **Zero Dependencies**: No external libraries/frameworks allowed
4. **Accessibility**: Must work with screen readers and keyboard navigation
5. **Offline Capability**: Should function with poor network conditions

## Debug Playbooks

### Animation Debugging
- **Symptom**: Jittery/choppy animations
- **Check**: devtools Performance tab → confirm 60fps, no layout thrashing
- **Fix**: Use `transform: translate3d()` and `opacity` only, never `left/top`

### Layout Breakage
- **Symptom**: Elements overflow on small screens
- **Check**: Add `border: 1px solid red` to identify overflow elements
- **Fix**: Use `min()`/`clamp()` for responsive sizing, test 320px-1200px range

### Character Encoding Issues
- **Symptom**: � or ? replacing Chinese characters
- **Check**: HTML has `<meta charset="UTF-8">` and file saved as UTF-8-BOM
- **Fix**: Ensure web server sends `Content-Type: text/html; charset=utf-8`

### Performance Optimization Quick Tests
```bash
# Start local server
python -m http.server 8000
# Chrome DevTools testing sequence:
# 1. Network → Throttle → 3G fast → Load page (target: <3s)
# 2. Performance → Start profiling → Toggle all tabs → 60fps
# 3. Responsive → Test 320px-1200px range → No horizontal scroll
# 4. Console → Test demos → Zero errors, clean logs
```

### Testing Matrix
**Devices**: 320px, 375px (iPhone), 768px (iPad), 1200px
**Browsers**: Chrome, Safari, Firefox, Edge
**Languages**: zh-CN primary, verify Google Translate to en