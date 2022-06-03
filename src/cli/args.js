import process from 'process';

export const parseArgs = () => {
  const result = [];

  process.argv.forEach((data, i, arr) => {
    if (data.startsWith('--')) {
      data = data.replace('--', '');
      
      result.push(`${data} is ${arr[i + 1] || ''}`);
    }
  });

  console.log(result.join(', '))
};
