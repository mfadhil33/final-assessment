function fibonacci(n) {
  const fibSeries = [];

  function fibHelper(n) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    const series = fibHelper(n - 1);
    series.push(series[n - 1] + series[n - 2]);
    return series;
  }

  return fibHelper(n);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
