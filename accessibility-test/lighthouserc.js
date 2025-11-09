module.exports = {
  ci: {
    collect: {
      url: [
        'https://www.amazon.in/'
      ],
      settings: {
        onlyCategories: ['accessibility', 'performance', 'seo', 'best-practices'],
      },
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 0.82 }],
        'categories:performance': ['error', { minScore: 0.82 }],
        'categories:seo': ['error', { minScore: 0.82 }],
        'categories:best-practices': ['warn', { minScore: 0.82 }],
      },
    },
  },
};