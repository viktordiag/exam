export default (data) => {
// normalize data
  const normData = data
    .split('\n')
    .slice(1, -1)
    .map((elem) => elem
      .split(',')
      .map((element) => (Number.isNaN(Number(element)) ? element : Number(element))));

  // step1
  const dataStep1 = normData.length;
  console.log(`Count: ${dataStep1}`);
  // step2
  const dataStep2 = normData
    .reduce((acc, elem) => {
      if (!acc.includes(elem[7])) {
        acc.push(elem[7]);
      }
      return acc;
    }, [])
    .sort()
    .join(', ');
  console.log(`Cities: ${dataStep2}`);

  // step 3
  const dataStep3 = normData
    .map((elem) => elem[3])
    .sort((a, b) => a - b);
  console.log(`Humidity: Min: ${dataStep3[0]}, Max: ${dataStep3.at(-1)}`);

  // step4
  const dataStep4 = normData
    .sort((a, b) => b[1] - a[1]);
  console.log(`HottestDay: ${dataStep4[0][0]} ${dataStep4[0][7]}`);

  // step5
  const res = normData.reduce((acc, elem) => {
    if (elem[7] in acc) {
      acc[elem[7]].push(elem[1]);
    } else {
      acc[elem[7]] = [elem[1]];
    }
    return acc;
  }, {});

  // eslint-disable-next-line
  for (const elem in res) {
    res[elem] = res[elem]
      .reduce((acc, temp) => (acc + temp), 0) / res[elem].length;
  }

  const dataStep5 = Object.entries(res)
    .sort((a, b) => b[1] - a[1]);
  console.log(`HottestCity: ${dataStep5[0][0]}`);
};
