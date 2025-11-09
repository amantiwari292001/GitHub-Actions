module.exports = {
  ci: {
    collect: {
      url: ['https://www.youtube.com/'],
      numberOfRuns: 3,
      settings: {
        onlyCategories: ['accessibility', 'performance', 'seo', 'best-practices'],
        output: ['html', 'json'],
        preset: 'desktop',
        throttlingMethod: 'devtools',
      },
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 0.8 }],
        'categories:performance': ['error', { minScore: 0.8 }],
        'categories:seo': ['error', { minScore: 0.8 }],
        'categories:best-practices': ['error', { minScore: 0.8 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};