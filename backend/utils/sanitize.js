const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

function sanitizeHtml(dirtyHtml) {
  return DOMPurify.sanitize(dirtyHtml, {
    ALLOWED_TAGS: ['div', 'span', 'style', 'h1', 'h2','h3','h4','h5','h6', 'p', 'b', 'i', 'ul', 'li', 'br', 'section', 'main','header','a','ol'],
    ALLOWED_ATTR: ['class', 'style'],
  });
}

module.exports = sanitizeHtml;
