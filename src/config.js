let env = "prod";

let config = {};

if (env == "prod") {
  config = {
    backend_url: "https://dsk-portfolio-backend.onrender.com/contact",
    env: env,
  };
} else if (env == "dev") {
  config = {
    backend_url: "http://localhost:5000/contact",
    env: env,
  };
}

export default config;
