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
        'categories:accessibility': ['error', { minScore: 0.1 }],
        'categories:performance': ['error', { minScore: 0.1 }],
        'categories:seo': ['error', { minScore: 0.1 }],
        'categories:best-practices': ['error', { minScore: 0.1 }],
      },
    },
    upload: {
      target: '.lighthouseci/',
    },
  },
};