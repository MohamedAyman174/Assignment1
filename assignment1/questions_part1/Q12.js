function delayedSuccess() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Success"), 3000);
  });
}
