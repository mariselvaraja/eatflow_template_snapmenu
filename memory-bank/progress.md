# Progress

## What works
- Basic website structure.
- Navigation component.
- Cart context.
- Site content context.

## What's left to build
- Loading site content.
- Page content.
- Footer.
- Cart drawer.
- Pages: Home, Menu, About, Contact, Blog, Events, Gallery, Reservation, Checkout, Confirmation, Blog Post, Cart.

## Current status
- Fixed site content context error in BlogPost.
- Fixed site content context error in Navigation.
- Fixed site content context error in Reservation.

## Known issues
- None known
## Recent changes
- Implemented validation for all Pickup Information fields (First Name, Last Name, Email, Phone Number, and Pickup Time) in Checkout component, moving the validation logic to the Order Summary section and refactoring the validation logic into a separate function called `validateForm`.

## Recent changes
- Fixed "Maximum update depth exceeded" error in Menu.jsx by memoizing the `categories` variable using `useMemo`.
- Fixed "TypeError: Cannot read properties of null (reading 'useState')" error in `SiteContentContext.jsx` by adding `restaurant_id` to the dependency array of the `useEffect` hook in `MenuContext.jsx`.
