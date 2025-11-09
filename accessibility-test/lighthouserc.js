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
        'categories:accessibility': ['error', { minScore: 0.3 }],
        'categories:performance': ['error', { minScore: 0.3 }],
        'categories:seo': ['error', { minScore: 0.3 }],
        'categories:best-practices': ['error', { minScore: 0.3 }],
      },
    },
  },
};