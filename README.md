# ☕ ALX Coffee Shop App

A modern mobile coffee-ordering app built using **React Native**, **Expo**, and **Expo Router**.  
Users can browse coffees, view details, customize orders, add items to a cart, choose delivery/pickup, and track their order.

## 🚀 Features

- Browse popular coffees
- Coffee detail page (description, sizes, rating)
- Global cart system (add, remove, update quantities)
- Order page with dynamic item handling
- Delivery or pickup workflow
- Delivery tracking screen
- Pickup success confirmation

## 🧠 Development Summary

1. Built home UI & coffee listing
2. Added detail screen with size selector and description toggle
3. Implemented full cart system using Context API
4. Added order page
5. Built delivery tracking & pickup success screens
6. Solved routing and TypeScript module path issues
7. Cleaned UI and moved styles into separate organized files

## 🧩 Challenges Solved

- Major **version mismatch** between libraries → some features didn’t work
  - Caused navigation + context errors
  - Required reinstalling, cleaning cache, and updating packages
  - Took **several days** to identify and fix
- Module path errors (`Cannot find module`)
- Component organization and Expo Router restructuring
- Ensuring navigation flow between Cart → Order → Delivery/Pickup worked smoothly

## ▶️ Run the App

```bash
npm install
npx expo start
```
