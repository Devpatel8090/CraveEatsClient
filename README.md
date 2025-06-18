# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



git subtree pull --prefix=CraveEatsClient https://github.com/Devpatel8090/CraveEatsClient.git master --squash
git subtree pull --prefix=server https://github.com/Devpatel8090/CraveEatsServer.git master --squash


# Push updated client code
git subtree push --prefix=CraveEatsClient https://github.com/Devpatel8090/CraveEatsClient.git master

# Push updated server code
git subtree push --prefix=server https://github.com/Devpatel8090/CraveEatsServer.git master
