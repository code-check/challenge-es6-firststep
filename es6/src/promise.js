export function sleep(time) {
  //BEGIN_CHALLENGE
  return new Promise((resolve, reject) => {
    if (time < 0) {
      reject(time);
    } else {
      setTimeout(() => resolve(time), time);
    }
  });
  //END_CHALLENGE
  return null;
}

