# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

To potential employers:
.env is removed from gitignore since project is not going to be hosted live. Plus professor wanted me to do that. I know its a security risk to leave your MonogDB URI exposed and it must be added in the gitignore. Will delete after evaluation.

To professor:
For this this to work on local enviorment you have to run 2 local host servers. The one in marketplace npm run dev, and the one in server, (in terminal cd server, then npm start). Once both are running you can make requests/respones. You can submit to the mongoDB database and it will go through and give you a succees message. Both quantitiy and price MUST be numbers in order for it to pass MonogoDB server Validation otherwise it will give you an error.