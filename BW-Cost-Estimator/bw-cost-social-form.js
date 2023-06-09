const socialForm = `
      <div>
        <label for="num-users">Number of starting users:</label>
        <input
          type="number"
          id="num-users"
          name="num-users"
          value="600"
          min="0"
          required
        />
      </div>
      <div>
        <label for="growth-percentage">% monthly growth:</label>
        <input
          type="number"
          id="growth-percentage"
          name="growth-percentage"
          value="50"
          max="100"
        />
      </div>
      <div>
        <label for="user-engagement">% user engagement:</label>
        <input
          type="number"
          id="user-engagement"
          name="user-engagement"
          value="10"
          min="0"
          max="100"
          required
        />
      </div>
      <div>
        <label for="num-posts"># posts/user/month:</label>
        <input
          type="number"
          id="num-posts"
          name="num-posts"
          value="20"
          min="0"
          required
        />
      </div>
      <div>
        <label for="num-images">% of posts with images:</label>
        <input
          type="number"
          id="num-images"
          name="num-images"
          value="50"
          min="0"
          required
        />
      </div>
      <div>
        <label for="num-videos">% of posts with videos:</label>
        <input
          type="number"
          id="num-videos"
          name="num-videos"
          value="16"
          min="0"
          required
        />
      </div>
      <div>
        <label for="post-size">Average Post Size (characters):</label>
        <input
          type="number"
          id="post-size"
          name="post-size"
          value="150"
          min="0"
          required
        />
      </div>
      <div>
        <label for="img-size">Average Image Size (KB):</label>
        <input
          type="number"
          id="img-size"
          name="img-size"
          value="150"
          min="0"
          required
        />
      </div>
      <div>
        <label for="vid-size">Average Video Size (MB) [per min]:</label>
        <input
          type="number"
          id="vid-size"
          name="vid-size"
          value="75"
          min="0"
          required
        />
      </div>
      <div>
        <label for="vid-length">Average Video Length (mins):</label>
        <input
          type="number"
          id="vid-length"
          name="vid-length"
          value="3"
          min="0"
          required
        />
      </div>
      <button type="button" onclick="calculateBandwidthUsage()">
        Calculate
      </button>`;
