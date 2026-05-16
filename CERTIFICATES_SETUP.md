# Certificates Page Setup Guide

## ✅ What's Been Created

### 1. **Data Structure**
- **File**: `src/data/certificatesData.ts`
- Contains 7 certificates (3 existing + 4 placeholders)
- Centralized data source for both main page and full certificates page

### 2. **Components**
- **CertificateCard.tsx**: Reusable certificate card component
- **CertificateModal.tsx**: Full-screen modal for viewing certificate images
- **Certificates.tsx**: Updated to use shared data (shows first 3 only)

### 3. **Pages**
- **CertificatesAll.tsx**: Full certificates page showing all 7 certificates

### 4. **Routing**
- Main page: `/` (shows first 3 certificates)
- Full page: `/certificates` (shows all 7 certificates)
- Uses `wouter` for routing

## 📁 How to Add Certificate Images

### Step 1: Add Images to Public Folder
Place your certificate images in the `public/` folder:

```
public/
├── cert-clash-of-minds.jpg (already exists)
├── cert-cisco-it-essentials.png (add this)
├── cert-hour-of-code.jpeg (add this)
├── cert-placeholder-4.jpg (add this)
├── cert-placeholder-5.jpg (add this)
├── cert-placeholder-6.jpg (add this)
└── cert-placeholder-7.jpg (add this)
```

### Step 2: Update Certificate Data
Edit `src/data/certificatesData.ts` to update placeholder certificates:

```typescript
{
  id: 4,
  title: "Your Certificate Title",
  subtitle: "Organization Name",
  description: "Description of what you achieved",
  date: "Month Day, Year",
  image: "/cert-placeholder-4.jpg", // Update filename
  type: "image",
}
```

## 🎨 Features

### Main Page (/)
- Shows first 3 certificates only
- "More Certificates" button navigates to full page
- No modal on click (just displays cards)

### Full Certificates Page (/certificates)
- Shows all 7 certificates
- 3-3-1 grid layout (3 columns on desktop)
- Click any certificate → opens full-screen modal
- Back button returns to main page and scrolls to certificates section

### Modal Features
- Full-screen overlay with backdrop blur
- Click outside or press ESC to close
- Close button (X) in top-right
- Image scales to fit screen (max 90vw x 90vh)
- PDF certificates show download button

## 🎯 Grid Layout

**Desktop (≥1024px)**: 3 columns
```
[Cert 1] [Cert 2] [Cert 3]
[Cert 4] [Cert 5] [Cert 6]
[Cert 7]
```

**Tablet (640px - 1024px)**: 2 columns
```
[Cert 1] [Cert 2]
[Cert 3] [Cert 4]
[Cert 5] [Cert 6]
[Cert 7]
```

**Mobile (<640px)**: 1 column
```
[Cert 1]
[Cert 2]
[Cert 3]
[Cert 4]
[Cert 5]
[Cert 6]
[Cert 7]
```

## 🔧 Customization

### Add More Certificates
Edit `src/data/certificatesData.ts` and add new objects to the array:

```typescript
{
  id: 8,
  title: "New Certificate",
  subtitle: "Organization",
  description: "Description",
  date: "Date",
  image: "/cert-8.jpg",
  type: "image",
}
```

### Change Number of Certificates on Main Page
Edit `src/components/Certificates.tsx`:

```typescript
// Show first 5 instead of 3
const certificates = certificatesData.slice(0, 5);
```

### Styling
All certificate card styles are in `src/index.css` under the `/* ── Certificates ── */` section.

## 🚀 Testing

1. **Main Page**: Visit `/` and scroll to Certificates section
2. **Click "More Certificates"**: Should navigate to `/certificates`
3. **Click any certificate**: Should open modal with full image
4. **Press ESC or click outside**: Should close modal
5. **Click "Back"**: Should return to main page and scroll to certificates

## 📝 Notes

- Images should be optimized for web (recommended: max 2MB per image)
- Supported formats: JPG, PNG, JPEG
- PDF certificates show a preview icon and download button in modal
- All animations are smooth and minimal (no glow, no neon)
- Design is consistent with the rest of the portfolio
