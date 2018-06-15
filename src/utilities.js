exports.checkWorkDay = day => {
  return day === "Saturday" || day === "Sunday" ? false : true;
};

exports.determineBananaCost = date => {
  let day = Number(date.slice(3, 5));
  if (day <= 7) {
    return 0.05;
  } else if (day <= 14) {
    return 0.1;
  } else if (day <= 21) {
    return 0.15;
  } else if (day <= 28) {
    return 0.2;
  } else {
    return 0.25;
  }
};
