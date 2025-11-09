module.exports = {
  ci: {
    collect: {
      url: [
        'https://www.youtube.com/'
      ],
      settings: {
        onlyCategories: ['accessibility', 'performance', 'seo', 'best-practices'],
        // You can also add 'pwa' if you're testing Progressive Web Apps
        output: ['html', 'json'], // Ensure reports are generated
      },
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:performance': ['error', { minScore: 0.8 }],
        'categories:seo': ['error', { minScore: 0.85 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        // Optional: 'categories:pwa': ['warn', { minScore: 0.5 }]
      },
    },
    upload: {
      target: '.lighthouseci/',
    },
  },
};