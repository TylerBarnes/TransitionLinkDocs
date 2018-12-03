import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import format from 'rehype-format'
import html from 'rehype-stringify'
import Parser from 'html-react-parser'
import rehypeSlug from 'rehype-slug'

const ParseMarkdownToJsx = input => {
  return Parser(
    unified()
      .use(markdown)
      .use(remark2rehype, { allowDangerousHTML: true })
      .use(rehypeSlug)
      .use(format)
      .use(html, { allowDangerousHTML: true })
      .processSync(input).contents
  )
}

export default ParseMarkdownToJsx
