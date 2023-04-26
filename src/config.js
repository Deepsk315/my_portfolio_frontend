let env = "prod";

let config = {};

if (env == "prod") {
  config = {
    backend_url: "https://myportfolio3697.herokuapp.com/contact",
    env: env,
  };
} else if (env == "dev") {
  config = {
    backend_url: "http://localhost:5000/contact",
    env: env,
  };
}

export default config;
