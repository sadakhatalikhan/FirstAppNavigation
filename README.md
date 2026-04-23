## Git brach creation and push
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/sadakhatalikhan/FirstAppNavigation.git
git push -u origin main

## creation of application 
npx create-expo-app@latest FirstAppNavigation –-template

## Navigating between screens documentation
https://reactnative.dev/docs/navigation
https://reactnavigation.org/docs/getting-started
https://reactnavigation.org/docs/stack-navigator/

### Install important dependencies 
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
