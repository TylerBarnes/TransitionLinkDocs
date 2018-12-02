import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import format from 'rehype-format'
import html from 'rehype-stringify'
import Parser from 'html-react-parser'

const ParseMarkdownToJsx = input => {
  return Parser(
    unified()
      .use(markdown)
      .use(remark2rehype)
      .use(format)
      .use(html)
      .processSync(input).contents
  )
}

export default ParseMarkdownToJsx
