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
