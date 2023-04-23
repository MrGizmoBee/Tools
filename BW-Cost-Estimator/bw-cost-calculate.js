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
  var vidLength = parseInt(document.getElementById("vid-length").value);

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

    var videoBandwidthMonthly = vidsViewedMonthly * sizePerVideo * vidLength; // convert to GB
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
