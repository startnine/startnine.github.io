https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf
# Markdown
**Markdown** is a way to style text on the web. You control the display of the document; formatting words as
bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly,
Markdown is just regular text with a few non-alphabetic characters thrown in, like # or *.

## Headers
# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag

## Lists
Unordered
* Item 1
* Item 2
 * Item 2a
 * Item 2b
 
Ordered
1. Item 1
2. Item 2
3. Item 3
 * Item 3a
 * Item 3b
 
## Images
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)

## Blockquotes
As Grace Hopper said:
> I’ve always been more interested
> in the future than in the past.

## Backslash escapes
Markdown allows you to use backslash escapes to generate literal characters which 
\*literal asterisks\*
Markdown provides backslash escapes for
the following characters:  
\ backslash   
` backtick   
\* asterisk  
_ underscore  
{} curly braces  
[] square brackets  
() parentheses  
# hash mark  
+ plus sign  
- minus sign (hyphen)  
. dot  
! exclamation mark  

# GitHub flavoured Markdown
GitHub.com uses its own version of the Markdown syntax, GFM, that provides an additional set of useful
features, many of which make it easier to work with content on GitHub.com.

## Username @ mentions
Typing an @ symbol, followed by
a username, will notify that person
to come and view the comment.
This is called an “@mention”,
because you’re mentioning the
individual. You can also @mention
teams within an organization

## Issue References
Any number that refers to an Issue or
Pull Request will be automatically
converted into a link.
#1
github-flavored-markdown#1
defunkt/github-flavored-markdown#1

## Fenced Code Blocks
```javascript
function test() {
 console.log("look ma’, no spaces");
}
```
Markdown coverts text with four leading spaces into a code block; with GFM you can
wrap your code with ``` to create a code block without the leading spaces. Add an
optional language identifier and your code will get syntax highlighting.

## Task Lists
- [x] this is a complete item
- [ ] this is an incomplete item
- [x] @mentions, #refs, [links](),
**formatting**, and <del>tags</del>
supported
- [x] list syntax required (any
unordered or ordered list

## Tables
You can create tables by assembling
a list of words and dividing them
with hyphens - (for the first row),
and then separating each column
with a pipe | :

First Header | Second Header
------------ | -------------
Content cell 1 | Content cell 2
Content column 1 | Content column 2
supported)


## Emoji
To see a list of every image we
support, check out
www.emoji-cheat-sheet.com
GitHub supports emoji!
:+1: :sparkles: :camel: :tada:
:rocket: :metal: :octocat: 
