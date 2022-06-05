import process from 'process';

export const parseEnv = () => {
  const data = []; 

  Object.keys(process.env).forEach((key) => {
    if (key.startsWith('RSS_')) {
      data.push(`${key}=${process.env[key]}`)
    }
  });
  
  console.log(data.join('; '))
};
