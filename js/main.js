// 承影门户 - 博客文章加载器

document.addEventListener('DOMContentLoaded', function() {
  const path = window.location.pathname;

  // 博客列表页 - 只在 /blog 或 /blog/ 时加载列表
  if (path === '/blog' || path === '/blog/' || path.endsWith('/blog/index.html')) {
    loadPostsList();
  }
});

// 加载博客文章列表
function loadPostsList() {
  const grid = document.getElementById('posts-grid');
  if (!grid) return;

  const posts = [];

  grid.innerHTML = posts.map(post => `
    <a href="/blog/${post.slug}.html" class="post-card">
      <h2>${post.title}</h2>
      <div class="post-meta">${post.date}</div>
      <p class="post-excerpt">${post.excerpt}</p>
      <span class="read-more">阅读全文 →</span>
    </a>
  `).join('');
}
