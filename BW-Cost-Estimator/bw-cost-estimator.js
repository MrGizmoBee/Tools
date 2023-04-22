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

function calculateS3Costs(bandwidthUsageGB) {
  // Define the pricing tiers for Amazon S3
  const pricingTiers = [
    { maxGB: 50 * 1024, pricePerGB: 0.023 },
    { maxGB: 500 * 1024, pricePerGB: 0.022 },
    { maxGB: Infinity, pricePerGB: 0.021 },
  ];

  // Calculate the total cost based on the pricing tiers
  let totalCost = 0;
  for (let i = 0; i < pricingTiers.length; i++) {
    const tier = pricingTiers[i];
    if (bandwidthUsageGB <= tier.maxGB) {
      totalCost += bandwidthUsageGB * tier.pricePerGB;
      break;
    } else {
      totalCost += tier.maxGB * tier.pricePerGB;
      bandwidthUsageGB -= tier.maxGB;
    }
  }

  // Define an array of suffixes for each order of magnitude
  const suffixes = ["", "K", "M", "B", "T"];

  // Determine the appropriate suffix based on the magnitude of the total cost
  let suffixIndex = 0;
  while (totalCost >= 1000 && suffixIndex < suffixes.length - 1) {
    totalCost /= 1000;
    suffixIndex++;
  }

  // Format the total cost with the appropriate suffix and return it
  const suffix = suffixes[suffixIndex];
  const formattedCost = totalCost.toFixed(2);
  return `$${formattedCost} ${suffix}`;
}

function calculateCloudFrontCosts(bandwidthUsageGB) {
  // Define the pricing tiers for Amazon CloudFront
  const pricingTiers = [
    { maxGB: 10 * 1024, pricePerGB: 0.085 },
    { maxGB: 50 * 1024, pricePerGB: 0.08 },
    { maxGB: 150 * 1024, pricePerGB: 0.06 },
    { maxGB: 500 * 1024, pricePerGB: 0.04 },
    { maxGB: 1024 * 1024, pricePerGB: 0.03 },
    { maxGB: 5120 * 1024, pricePerGB: 0.025 },
    { maxGB: Infinity, pricePerGB: 0.02 },
  ];

  // Calculate the total cost based on the pricing tiers
  let totalCost = 0;
  for (let i = 0; i < pricingTiers.length; i++) {
    const tier = pricingTiers[i];
    if (bandwidthUsageGB <= tier.maxGB) {
      totalCost += bandwidthUsageGB * tier.pricePerGB;
      break;
    } else {
      totalCost += tier.maxGB * tier.pricePerGB;
      bandwidthUsageGB -= tier.maxGB;
    }
  }

  // Define an array of suffixes for each order of magnitude
  const suffixes = ["", "K", "M", "B", "T"];

  // Determine the appropriate suffix based on the magnitude of the total cost
  let suffixIndex = 0;
  while (totalCost >= 1000 && suffixIndex < suffixes.length - 1) {
    totalCost /= 1000;
    suffixIndex++;
  }

  // Format the total cost with the appropriate suffix and return it
  const suffix = suffixes[suffixIndex];
  const formattedCost = totalCost.toFixed(2);
  return `$${formattedCost} ${suffix}`;
}

function calculateKeyCDNCosts(bandwidthUsageGB) {
  // Define the pricing tiers for KeyCDN
  const pricingTiers = [
    { maxGB: 10 * 1024, pricePerGB: 0.04 },
    { maxGB: 50 * 1024, pricePerGB: 0.03 },
    { maxGB: 100 * 1024, pricePerGB: 0.02 },
    { maxGB: Infinity, pricePerGB: 0.01 },
  ];

  // Calculate the total cost based on the pricing tiers
  let totalCost = 0;
  for (let i = 0; i < pricingTiers.length; i++) {
    const tier = pricingTiers[i];
    if (bandwidthUsageGB <= tier.maxGB) {
      totalCost += bandwidthUsageGB * tier.pricePerGB;
      break;
    } else {
      totalCost += tier.maxGB * tier.pricePerGB;
      bandwidthUsageGB -= tier.maxGB;
    }
  }

  // Define an array of suffixes for each order of magnitude
  const suffixes = ["", "K", "M", "B", "T"];

  // Determine the appropriate suffix based on the magnitude of the total cost
  let suffixIndex = 0;
  while (totalCost >= 1000 && suffixIndex < suffixes.length - 1) {
    totalCost /= 1000;
    suffixIndex++;
  }

  // Format the total cost with the appropriate suffix and return it
  const suffix = suffixes[suffixIndex];
  const formattedCost = totalCost.toFixed(2);
  return `$${formattedCost} ${suffix}`;
}

function calculateBunnyCDNCheapCosts(bandwidthUsageGB) {
  // Define the pricing tiers for Bunny CDN
  const pricingTiers = [
    { maxGB: 500 * 1024, pricePerGB: 0.005 },
    { maxGB: 500 * 1024 * 1024, pricePerGB: 0.004 },
    { maxGB: Infinity, pricePerGB: 0.002 },
  ];

  // Calculate the total cost based on the pricing tiers
  let totalCost = 0;
  for (let i = 0; i < pricingTiers.length; i++) {
    const tier = pricingTiers[i];
    if (bandwidthUsageGB <= tier.maxGB) {
      totalCost += bandwidthUsageGB * tier.pricePerGB;
      break;
    } else {
      totalCost += tier.maxGB * tier.pricePerGB;
      bandwidthUsageGB -= tier.maxGB;
    }
  }

  // Define an array of suffixes for each order of magnitude
  const suffixes = ["", "K", "M", "B", "T"];

  // Determine the appropriate suffix based on the magnitude of the total cost
  let suffixIndex = 0;
  while (totalCost >= 1000 && suffixIndex < suffixes.length - 1) {
    totalCost /= 1000;
    suffixIndex++;
  }

  // Format the total cost with the appropriate suffix and return it
  const suffix = suffixes[suffixIndex];
  const formattedCost = totalCost.toFixed(2);
  return `$${formattedCost} ${suffix}`;
}

function calculateBandwidthUsage() {
  // Get the input values from the form
  var numUsers = parseInt(document.getElementById("num-users").value);
  var engagement =
    parseInt(document.getElementById("user-engagement").value) / 100;
  var growthPercentage =
    parseInt(document.getElementById("growth-percentage").value) / 100;
  var numPosts = parseInt(document.getElementById("num-posts").value);
  var numImages = parseInt(document.getElementById("num-images").value) / 100;
  var numVideos = parseInt(document.getElementById("num-videos").value) / 100;

  var sizePerPost = parseInt(document.getElementById("post-size").value); // bytes
  var sizePerImage = parseInt(document.getElementById("img-size").value) * 1024; // bytes
  var sizePerVideo =
    parseInt(document.getElementById("vid-size").value) * 1024 * 1024; // bytes

  // Calculate the estimated data for each month
  var data = [];
  var numUsersMonth = numUsers;
  for (var i = 1; i <= 24; i++) {
    var numTotalPosts = numUsersMonth * numPosts;
    var numTotalImages = numTotalPosts * numImages;
    var numTotalVideos = numTotalPosts * numVideos;
    var numTotalPostsViewed = numUsersMonth * numTotalPosts * engagement;

    var picsViewedMonthly = numTotalPostsViewed * numImages;
    var vidsViewedMonthly = numTotalPostsViewed * numVideos;

    var videoBandwidthMonthly = vidsViewedMonthly * sizePerVideo; // convert to GB
    var imageBandwidthMonthly = picsViewedMonthly * sizePerImage; // convert to GB
    var totalBandwidthMonthly =
      imageBandwidthMonthly +
      videoBandwidthMonthly +
      sizePerPost * numTotalPostsViewed;

    var usagePerUser = totalBandwidthMonthly / numUsersMonth;

    var totalBandwidthMonthlyGB = totalBandwidthMonthly / Math.pow(1024, 3);
    var awsS3Cost = calculateS3Costs(totalBandwidthMonthlyGB);
    var awsCloudfrontCost = calculateCloudFrontCosts(totalBandwidthMonthlyGB);
    var keyCdnCost = calculateKeyCDNCosts(totalBandwidthMonthlyGB);
    var bunnyCdnCheapCost = calculateBunnyCDNCheapCosts(
      totalBandwidthMonthlyGB
    );

    // Format the data for this month
    var monthData = [
      formatNumber(numUsersMonth),
      formatNumber(numTotalPosts),
      formatNumber(numTotalImages),
      formatNumber(numTotalVideos),
      formatNumber(numTotalPostsViewed),
      formatNumber(picsViewedMonthly),
      formatNumber(vidsViewedMonthly),
      formatData(totalBandwidthMonthly),
      formatData(videoBandwidthMonthly),
      formatData(imageBandwidthMonthly),
      awsS3Cost,
      awsCloudfrontCost,
      keyCdnCost,
      bunnyCdnCheapCost,
    ];

    // Add the data to the results array
    data.push(monthData);

    // Update the number of users for the next month
    numUsersMonth = numUsersMonth * (1 + growthPercentage);
  }

  // Build the table
  var tableHtml = "<table>\n";
  tableHtml += "<thead>\n";
  tableHtml += "<tr><th>Month #</th>";
  for (var i = 1; i <= 24; i++) {
    tableHtml += "<th>" + i.toLocaleString() + "</th>";
  }
  tableHtml += "</tr>\n";
  tableHtml += "</thead>\n";
  tableHtml += "<tbody>\n";
  var headings = [
    "Membership Count",
    "New Posts",
    "New Images",
    "New Videos",
    "Posts Viewed",
    "Pics Viewed",
    "Vids Viewed",
    "Total Bandwidth",
    "Video Bandwidth",
    "Image Bandwidth",
    "S3 Cost",
    "Cloudfront Cost",
    "KeyCDN Cost",
    "Bunny CDN Cost",
  ];
  for (var i = 0; i < headings.length; i++) {
    tableHtml += "<tr><th>" + headings[i] + "</th>";
    for (var j = 0; j < data.length; j++) {
      tableHtml += "<td>" + data[j][i] + "</td>";
    }
    tableHtml += "</tr>\n";
  }
  tableHtml += "</tbody>\n";
  tableHtml += "</table>\n";

  // Display the results
  var resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = tableHtml;
}
