const parseEnv = () => {
  const variablesEnv = process.env;
  const variablesRSS = Object
    .entries(variablesEnv)
    .filter((key) => key[0].startsWith('RSS_'))
    .map(([key, value]) => `${key}=${value}`)
    .join('; ')

  console.log(variablesRSS);
};

parseEnv();
