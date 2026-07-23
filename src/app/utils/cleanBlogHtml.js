function decodeHtmlEntities(value = "") {
  return value
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&");
}

export function cleanBlogHtml(html = "") {
  if (!html || typeof html !== "string") {
    return "";
  }

  let cleanedHtml = html;

  /*
    Convert code blocks containing escaped HTML into actual HTML.

    Before:
    <pre><code>&lt;div className="bg-blue-50"&gt;...&lt;/div&gt;</code></pre>

    After:
    <div class="bg-blue-50">...</div>
  */
  cleanedHtml = cleanedHtml.replace(
    /<pre[^>]*>\s*<code[^>]*>([\s\S]*?)<\/code>\s*<\/pre>/gi,
    (_, encodedContent) => decodeHtmlEntities(encodedContent),
  );

  /*
    Decode HTML when the entire response contains escaped tags.
  */
  if (
    cleanedHtml.includes("&lt;") ||
    cleanedHtml.includes("&gt;") ||
    cleanedHtml.includes("&quot;")
  ) {
    cleanedHtml = decodeHtmlEntities(cleanedHtml);
  }

  /*
    API HTML must use class, not React's className.
  */
  cleanedHtml = cleanedHtml.replace(/\bclassName\s*=/gi, "class=");

  /*
    HTML attributes also use for instead of htmlFor.
  */
  cleanedHtml = cleanedHtml.replace(/\bhtmlFor\s*=/gi, "for=");

  /*
    React event handlers cannot work through dangerouslySetInnerHTML.
    Remove them for safety.
  */
  cleanedHtml = cleanedHtml.replace(
    /\s(onclick|onload|onerror|onmouseover|onfocus|onmouseenter|onmouseleave)\s*=\s*("[^"]*"|'[^']*')/gi,
    "",
  );

  /*
    Remove script tags from API HTML.
  */
  cleanedHtml = cleanedHtml.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");

  return cleanedHtml.trim();
}
