# Photo Gallery Web App

A responsive photo gallery application built with React, Vite, and Tailwind CSS. The app fetches photos from the Picsum Photos API, displays them in a responsive grid, provides real-time search by author name, and allows users to mark photos as favourites with persistent storage.

---

## Features

- **API Integration**: Fetches 30 photos on load from the Picsum Photos API (`https://picsum.photos/v2/list?limit=30`).
- **Loading & Error States**: Displays a loading spinner while data is being fetched and an error alert if the request fails.
- **Responsive Grid**:
  - Desktop: 4 columns
  - Tablet: 2 columns
  - Mobile: 1 column
- **Real-Time Search**: Filters photos by author name in real-time as the user types, without reloading or making extra API calls.
- **Favourites with `useReducer` & `localStorage`**:
  - Heart icon toggles favourite status on photos.
  - Managed using `useReducer` instead of `useState`.
  - Favourites persist across page reloads using `localStorage`.
- **Custom Hook (`useFetchPhotos`)**: Separates data fetching and state logic (`photos`, `loading`, `error`) from the UI.
- **Performance Optimization**:
  - `useCallback` memoizes the search input handler to avoid unnecessary recreations.
  - `useMemo` computes and caches the filtered photos array based on search input and photo list.

---

## Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS v4**

---

## Project Structure

```
photo-gallery/
├── src/
│   ├── components/
│   │   ├── Gallery.jsx           # Main gallery page, search bar, and grid
│   │   └── PhotoCard.jsx         # Photo card with author details and heart toggle
│   ├── hooks/
│   │   └── useFetchPhotos.js     # Custom hook for fetching API photos
│   ├── reducers/
│   │   └── favouritesReducer.js  # Reducer function & localStorage logic for favourites
│   ├── App.jsx                   # Root component
│   ├── index.css                 # Tailwind styles
│   └── main.jsx                  # React DOM entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for production
```bash
npm run build
```

---

## 5-Minute Video Recording Talking Points

When recording the walkthrough video:

1. **Show the app in action**:
   - Initial loading spinner appearing while photos fetch.
   - 4-column grid on desktop, 2-column on tablet, and 1-column on mobile screen sizes.
   - Real-time search filter by typing an author name.
   - Heart button toggling favourite status on cards.
   - Refreshing the browser to demonstrate that favourites persist in `localStorage`.

2. **`useFetchPhotos` hook (`src/hooks/useFetchPhotos.js`)**:
   - Returns `{ photos, loading, error }`.
   - On error or failed API request, catches the error, sets `error` message, and sets `loading` to `false`.

3. **`favouritesReducer` (`src/reducers/favouritesReducer.js`)**:
   - Handles the action `TOGGLE_FAVOURITE`.
   - Checks if the photo ID exists in the list; if yes, filters it out, else adds it.
   - `useReducer` was chosen over `useState` to centralize state transitions in a pure function and keep logic clean and predictable.

4. **`useCallback` & `useMemo` (`src/components/Gallery.jsx`)**:
   - `useCallback` wraps `handleSearchChange` so its function reference remains stable across renders.
   - `useMemo` computes `filteredPhotos` only when `searchTerm` or `photos` changes, avoiding re-running the filter loop on unrelated re-renders (like favouriting a photo).

5. **Hardest Part & Solution**:
   - Handling image loading and maintaining responsive card aspect ratios while seamlessly synchronizing `useReducer` state with `localStorage`.
