# Storyfont-Frontend

This is a re-built Angular frontend client of Storyfont, a PWA-ready webpage built to share your campaign notes with your fellow players. The matching backend is [here](https://github.com/PhilippMDoerner/NimStoryFont). This application allows documenting the following things:

1. Creatures
2. Characters
3. Sessionnotes in the form of diaryentries, split into individual scenes aka Encounters
4. Items
5. Locations
6. Maps including markers for locations
7. Organizations
8. Quests
9. Audio recordings of the session including timestamps
10. Rules
11. Spells
12. Quotes

# Storybook and Architecture
This re-built frontend includes a storybook for individual components. It now follows atomic-design principles as well as the smart-dumb component architecture. All pages are represented via templates, made up of organisms, molecules and atoms. All of them are representational "dumb" components. 

Pages are what connect the Templates to the backend, namely an NgRx store.

[The storybook can be accessed here](https://philippmdoerner.github.io/nimstoryfont-gui/)

# Supported Browsers
This project explicitly supports Chromium based Browsers as well as Firefox.
It explicitly does not support Safari, due to the resources this would cost to account for. It likely still works, but I can not troubleshoot for it.