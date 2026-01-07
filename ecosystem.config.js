module.exports = {
  apps: [
    {
      name: "uispl-web",
      script: "./node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: "./",
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
