import React from 'react'

const DemoTypography = () => {
  return (
    <div>
      <h1>Testing display of HTML elements</h1>
      <h2>This is 2nd level heading</h2>
      <p>This is a test paragraph.</p>
      <h3>This is 3rd level heading</h3>
      <p>This is a test paragraph.</p>
      <h4>This is 4th level heading</h4>
      <p>This is a test paragraph.</p>
      <h5>This is 5th level heading</h5>
      <p>This is a test paragraph.</p>
      <h6>This is 6th level heading</h6>
      <p>This is a test paragraph.</p>
      <h2>Basic block level elements</h2>
      <p>
        This is a normal paragraph (<code>p</code> element). To add some length
        to it, let us mention that this page was primarily written for testing
        the effect of <strong>user style sheets</strong>. You can use it for
        various other purposes as well, like just checking how your browser
        displays various HTML elements by default. It can also be useful when
        testing conversions from HTML format to other formats, since some
        elements can go wrong then.
      </p>
      <p>
        This is another paragraph. I think it needs to be added that the set of
        elements tested is not exhaustive in any sense. I have selected those
        elements for which it can make sense to write user style sheet rules, in
        my opionion.
      </p>
      <div>
        This is a <code>div</code> element. Authors may use such elements
        instead of paragraph markup for various reasons. (End of{' '}
        <code>div</code>
        .)
      </div>
      <blockquote>
        <p>
          This is a block quotation containing a single paragraph. Well, not
          quite, since this is not <em>really</em>
          quoted text, but I hope you understand the point. After all, this page
          does not use HTML markup very normally anyway.
        </p>
      </blockquote>
      <p>
        The following contains address information about the author, in an{' '}
        <code>address</code>
        element.
      </p>
      <address>
        <a href="../personal.html" lang="fi" hrefLang="en">
          Jukka Korpela
        </a>
        ,<a href="mailto:jkorpela@cs.tut.fi">jkorpela@cs.tut.fi</a>
        <br />
        Päivänsäteenkuja 4 A, Espoo, Finland
      </address>
      <h2>Lists</h2>
      <p>
        This is a paragraph before an <strong>unnumbered</strong> list (
        <code>ul</code>
        ). Note that the spacing between a paragraph and a list before or after
        that is hard to tune in a user style sheet. You can't guess which
        paragraphs are logically related to a list, e.g. as a "list header".
      </p>
      <ul>
        <li> One.</li>
        <li> Two.</li>
        <li>
          {' '}
          Three. Well, probably this list item should be longer. Note that for
          short items lists look better if they are compactly presented, whereas
          for long items, it would be better to have more vertical spacing
          between items.
        </li>
        <li>
          {' '}
          Four. This is the last item in this list. Let us terminate the list
          now without making any more fuss about it.
        </li>
      </ul>
      <p>
        The following is a <code>menu</code> list:
      </p>
      <menu>
        <li> One.</li>
        <li> Two.</li>
        <li>
          {' '}
          Three. Well, probably this list item should be longer so that it will
          probably wrap to the next line in rendering.
        </li>
      </menu>
      <p>
        The following is a <code>dir</code> list:
      </p>
      <dir>
        <li> One.</li>
        <li> Two.</li>
        <li>
          {' '}
          Three. Well, probably this list item should be longer so that it will
          probably wrap to the next line in rendering.
        </li>
      </dir>
      <p>
        This is a paragraph before a <strong>numbered</strong> list (
        <code>ol</code>
        ). Note that the spacing between a paragraph and a list before or after
        that is hard to tune in a user style sheet. You can't guess which
        paragraphs are logically related to a list, e.g. as a "list header".
      </p>
      <ol>
        <li> One.</li>
        <li> Two.</li>
        <li>
          {' '}
          Three. Well, probably this list item should be longer. Note that if
          items are short, lists look better if they are compactly presented,
          whereas for long items, it would be better to have more vertical
          spacing between items.
        </li>
        <li>
          {' '}
          Four. This is the last item in this list. Let us terminate the list
          now without making any more fuss about it.
        </li>
      </ol>
      <p>
        This is a paragraph before a <strong>definition</strong> list (
        <code>dl</code>
        ). In principle, such a list should consist of <em>terms</em> and
        associated definitions. But many authors use <code>dl</code> elements
        for fancy "layout" things. Usually the effect is not <em>too</em> bad,
        if you design user style sheet rules for <code>dl</code>
        which are suitable for real definition lists.
      </p>
      <dl>
        <dt> recursion</dt>
        <dd> see recursion</dd>
        <dt> recursion, indirect</dt>
        <dd> see indirect recursion</dd>
        <dt> indirect recursion</dt>
        <dd> see recursion, indirect</dd>
        <dt> term</dt>
        <dd>
          {' '}
          a word or other expression taken into specific use in a well-defined
          meaning, which is often defined rather rigorously, even formally, and
          may differ quite a lot from an everyday meaning
        </dd>
      </dl>
      <h2>Text-level markup</h2>
      <ul>
        <li>
          {' '}
          <abbr title="Cascading Style Sheets">CSS</abbr> (an abbreviation;
          <code>abbr</code> markup used)
        </li>
        <li>
          {' '}
          <acronym title="radio detecting and ranging">radar</acronym> (an
          acronym; <code>acronym</code> markup used)
        </li>
        <li>
          {' '}
          <b>bolded</b> (<code>b</code> markup used - just bolding with
          unspecified semantics)
        </li>
        <li>
          {' '}
          <big>big thing</big> (<code>big</code> markup used)
        </li>
        <li>
          {' '}
          <font size={6}>large size</font> (<code>font size=6</code> markup
          used)
        </li>
        <li>
          {' '}
          <font face="Courier">Courier font</font> (
          <code>font face=Courier</code> markup used)
        </li>
        <li>
          {' '}
          <font color="red">red text</font> (<code>font color=red</code> markup
          used)
        </li>
        <li>
          {' '}
          <cite>Origin of Species</cite> (a book title;
          <code>cite</code> markup used)
        </li>
        <li>
          {' '}
          <code>a[i] = b[i] + c[i);</code> (computer code; <code>code</code>{' '}
          markup used)
        </li>
        <li>
          {' '}
          here we have some <del>deleted</del> text (<code>del</code> markup
          used)
        </li>
        <li>
          {' '}
          an <dfn>octet</dfn> is an entity consisting of eight bits (
          <code>dfn</code> markup used for the term being defined)
        </li>
        <li>
          {' '}
          this is <em>very</em> simple (<code>em</code> markup used for
          emphasizing a word)
        </li>
        <li>
          {' '}
          <i lang="la">Homo sapiens</i> (should appear in italics;{' '}
          <code>i</code> markup used)
        </li>
        <li>
          {' '}
          here we have some <ins>inserted</ins> text (<code>ins</code> markup
          used)
        </li>
        <li>
          {' '}
          type <kbd>yes</kbd> when prompted for an answer (<code>kbd</code>{' '}
          markup used for text indicating keyboard input)
        </li>
        <li>
          {' '}
          <q>Hello!</q> (<code>q</code> markup used for quotation)
        </li>
        <li>
          {' '}
          He said:{' '}
          <q>
            She said <q>Hello!</q>
          </q>{' '}
          (a quotation inside a quotation)
        </li>
        <li>
          {' '}
          you may get the message <samp>Core dumped</samp> at times (
          <code>samp</code> markup used for sample output)
        </li>
        <li>
          {' '}
          <small>this is not that important</small> (<code>small</code> markup
          used)
        </li>
        <li>
          {' '}
          <strike>overstruck</strike> (<code>strike</code> markup used; note:
          <code>s</code> is a nonstandard synonym for <code>strike</code>)
        </li>
        <li>
          {' '}
          <strong>this is highlighted text</strong> (<code>strong</code>
          markup used)
        </li>
        <li>
          {' '}
          In order to test how subscripts and superscripts (<code>sub</code> and
          <code>sup</code> markup) work inside running text, we need some dummy
          text around constructs like x<sub>1</sub> and H<sub>2</sub>O (where
          subscripts occur). So here is some fill so that you will (hopefully)
          see whether and how badly the subscripts and superscripts mess up
          vertical spacing between lines. Now superscripts: M<sup>lle</sup>, 1
          <sup>st</sup>, and then some mathematical notations: e<sup>x</sup>,
          sin
          <sup>2</sup> <i>x</i>, and some nested superscripts (exponents) too: e
          <sup>
            x<sup>2</sup>
          </sup>{' '}
          and f(x)
          <sup>
            g(x)
            <sup>a+b+c</sup>
          </sup>
          (where 2 and a+b+c should appear as exponents of exponents).
        </li>
        <li>
          {' '}
          <tt>text in monospace font</tt> (<code>tt</code> markup used)
        </li>
        <li>
          {' '}
          <u>underlined</u> text (<code>u</code> markup used)
        </li>
        <li>
          {' '}
          the command <code>cat</code> <var>filename</var> displays the file
          specified by the <var>filename</var> (<code>var</code> markup used to
          indicate a word as a variable).
        </li>
      </ul>
      <p>
        Some of the elements tested above are typically displayed in a monospace
        font, often using the <em>same</em> presentation for all of them. This
        tests whether that is the case on your browser:
      </p>
      <ul>
        <li>
          {' '}
          <code>This is sample text inside code markup</code>
        </li>
        <li>
          {' '}
          <kbd>This is sample text inside kbd markup</kbd>
        </li>
        <li>
          {' '}
          <samp>This is sample text inside samp markup</samp>
        </li>
        <li>
          {' '}
          <tt>This is sample text inside tt markup</tt>
        </li>
      </ul>
      <h2>Links</h2>
      <ul>
        <li>
          {' '}
          <a href="../index.html">main page</a>
        </li>
        <li>
          {' '}
          <a
            href="http://www.unicode.org/versions/Unicode4.0.0/ch06.pdf"
            title="Writing Systems and Punctuation"
            type="application/pdf"
          >
            Unicode Standard, chapter&nbsp;6
          </a>
        </li>
      </ul>
      <p>
        This is a text paragraph that contains some inline links. Generally,
        inline links (as opposite to e.g. links lists) are problematic from the
        <a href="http://www.useit.com">usability</a> perspective, but they may
        have use as “incidental”, less relevant links. See the document
        <cite>
          <a href="links.html">Links Want To Be Links</a>
        </cite>
        .
      </p>
      <h2>Forms</h2>
      <form action="http://www.cs.tut.fi/cgi-bin/run/~jkorpela/echo.cgi">
        <div>
          <input type="hidden" name="hidden field" defaultValue={42} />
          This is a form containing various fields (with some initial values
          (defaults) set, so that you can see how input text looks like without
          actually typing it):
        </div>
        <div>
          <label htmlFor="but">
            Button:
            <button id="but" type="submit" name="foo" value="bar">
              A cool
              <br />
              button
            </button>
          </label>
        </div>
        <div>
          <label htmlFor="f0">
            Reset button:
            <input id="f0" type="reset" name="reset" defaultValue="Reset" />
          </label>
        </div>
        <div>
          <label htmlFor="f1">
            Single-line text input field:{' '}
            <input id="f1" name="text" size={20} defaultValue="Default text." />
          </label>
        </div>
        <div>
          <label htmlFor="f2">Multi-line text input field (textarea):</label>
          <br />
          <textarea
            id="f2"
            name="textarea"
            rows={2}
            cols={20}
            defaultValue={'Default text.\n'}
          />
        </div>
        <div>
          The following two radio buttons are inside a <code>fieldset</code>{' '}
          element with a <code>legend</code>:
        </div>
        <fieldset>
          <legend>Legend</legend>
          <div>
            <label htmlFor="f3">
              <input id="f3" type="radio" name="radio" defaultValue={1} /> Radio
              button 1
            </label>
          </div>
          <div>
            <label htmlFor="f4">
              <input
                id="f4"
                type="radio"
                name="radio"
                defaultValue={2}
                defaultChecked
              />{' '}
              Radio button 2 (initially checked)
            </label>
          </div>
        </fieldset>
        <fieldset>
          <legend>Check those that apply</legend>
          <div>
            <label htmlFor="f5">
              <input id="f5" type="checkbox" name="checkbox" /> Checkbox 1
            </label>
          </div>
          <div>
            <label htmlFor="f6">
              <input id="f6" type="checkbox" name="checkbox2" defaultChecked />{' '}
              Checkbox 2 (initially checked)
            </label>
          </div>
        </fieldset>
        <div>
          <label htmlFor="f10">
            A <code>select</code> element with <code>size="1"</code>
            (dropdown box):
            <select id="f10" name="select1" size={1}>
              <option>one</option>
              <option selected>two (default)</option>
              <option>three</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="f11">
            A <code>select</code> element with <code>size="3"</code>
            (listbox):
          </label>
          <br />
          <select id="f11" name="select2" size={3}>
            <option>one</option>
            <option selected>two (default)</option>
            <option>three</option>
          </select>
        </div>
        <div>
          <label htmlFor="f99">
            Submit button:
            <input
              id="f99"
              type="submit"
              name="submit"
              defaultValue="Just a test"
            />
          </label>
        </div>
      </form>
      <h2>Tables</h2>
      <p>
        The following table has a caption. The first row and the first column
        contain table header cells (<code>th</code> elements) only; other cells
        are data cells (<code>td</code> elements), with{' '}
        <code>align="right"</code>
        attributes:
      </p>
      <table summary="Each row names a Nordic country and specifies its total area and land area, in square kilometers">
        <caption>Sample table: Areas of the Nordic countries, in sq km</caption>
        <tbody>
          <tr>
            <th scope="col">Country</th> <th scope="col">Total area</th>{' '}
            <th scope="col">Land area</th>
          </tr>
          <tr>
            <th scope="row">Denmark</th> <td align="RIGHT"> 43,070 </td>
            <td align="RIGHT"> 42,370</td>
          </tr>
          <tr>
            <th scope="row">Finland</th> <td align="RIGHT">337,030 </td>
            <td align="RIGHT">305,470</td>
          </tr>
          <tr>
            <th scope="row">Iceland</th> <td align="RIGHT">103,000 </td>
            <td align="RIGHT">100,250</td>
          </tr>
          <tr>
            <th scope="row">Norway</th> <td align="RIGHT">324,220 </td>
            <td align="RIGHT">307,860</td>
          </tr>
          <tr>
            <th scope="row">Sweden</th> <td align="RIGHT">449,964 </td>
            <td align="RIGHT">410,928</td>
          </tr>
        </tbody>
      </table>
      <h2>Character test</h2>
      <p>
        The following table has some sample characters with annotations. If the
        browser’s default font does not contain all of them, they may get
        displayed using backup fonts. This may cause stylistic differences, but
        it should not prevent the characters from being displayed at all.
      </p>
      <table>
        <tbody>
          <tr>
            <th>Char. </th>
            <th>Explanation </th>
            <th>Notes</th>
          </tr>
          <tr>
            <td>ê </td>
            <td>e with circumflex </td>
            <td>Latin 1 character, should be ok</td>
          </tr>
          <tr>
            <td>— </td>
            <td>em dash </td>
            <td>Windows Latin 1 character, should be ok, too</td>
          </tr>
          <tr>
            <td>Ā </td>
            <td>A with macron (line above) </td>
            <td>Latin Extended-A character, not present in all fonts</td>
          </tr>
          <tr>
            <td>Ω </td>
            <td>capital omega </td>
            <td>A Greek letter</td>
          </tr>
          <tr>
            <td>− </td>
            <td>minus sign </td>
            <td>Unicode minus</td>
          </tr>
          <tr>
            <td>⌀ </td>
            <td>diameter sign </td>
            <td>relatively rare in fonts</td>
          </tr>
        </tbody>
      </table>
      <h2>Hyphenation</h2>
      <p>
        In the following, a width setting should cause some hyphenation,
        depending on support to various methods of hyphenation.
      </p>
      <h3>CSS-based hyphenation</h3>
      <p className="limited hyphens">
        Until recently the great majority of naturalists believed that species
        were immutable productions, and had been separately created. This view
        has been ably maintained by many authors.
      </p>
      <h3>JavaScript-driven hyphenation</h3>
      <p className="limited hyphenate">
        Until recently the great majority of naturalists believed that species
        were immutable productions, and had been separately created. This view
        has been ably maintained by many authors.
      </p>
      <h3>Explicit hyphenation hints (soft hyphens)</h3>
      <p className="limited">
        Un­til re­cent­ly the great ma­jor­i­ty of nat­u­ral­ists be­lieved that
        spe­cies were im­mu­ta­ble pro­duc­tions, and had been sep­a­rate­ly
        cre­at­ed. This view has been ably main­tain­ed by many au­thors.
      </p>
      <hr title="Information about this document" />
      <address>
        <a href="../personal.html" hrefLang="en" lang="fi">
          Jukka Korpela
        </a>
      </address>
      <div>
        <a
          title="ISO 8601, the date and time representation standard"
          href="../iso8601.html"
        >
          Date
        </a>{' '}
        of creation: 2000-09-15. Last update: 2013-03-21.
      </div>
    </div>
  )
}

export default DemoTypography
