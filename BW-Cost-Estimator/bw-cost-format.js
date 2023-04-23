function formatNumber(num) {
  if (num >= 1000000000000) {
    return (num / 1000000000000).toFixed(1) + "T";
  } else if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + "B";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num.toFixed(0);
  }
}

function formatData(num) {
  if (num >= Math.pow(1024, 6)) {
    return (num / Math.pow(1024, 6)).toFixed(1) + " EiB";
  } else if (num >= Math.pow(1024, 5)) {
    return (num / Math.pow(1024, 5)).toFixed(1) + " PiB";
  } else if (num >= Math.pow(1024, 4)) {
    return (num / Math.pow(1024, 4)).toFixed(1) + " TiB";
  } else if (num >= Math.pow(1024, 3)) {
    return (num / Math.pow(1024, 3)).toFixed(1) + " GiB";
  } else if (num >= Math.pow(1024, 2)) {
    return (num / Math.pow(1024, 2)).toFixed(1) + " MiB";
  } else if (num >= 1024) {
    return (num / 1024).toFixed(1) + " KiB";
  } else {
    return num.toFixed(0) + " B";
  }
}
