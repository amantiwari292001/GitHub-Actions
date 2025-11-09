    // lighthouserc.js
    module.exports = {
      ci: {
        collect: {
          url: [
            'https://www.youtube.com/',
          ],
          settings: {
            onlyCategories: ['accessibility'], // Run only accessibility audits
          },
        },
        assert: {
          assertions: {
            'categories:accessibility': ['error', { minScore: 0.9 }], // Fail if accessibility score is below 90%
          },
        },
        upload: {
          target: 'temporary-public-storage', // Upload reports to a temporary public storage
        },
      },
    };