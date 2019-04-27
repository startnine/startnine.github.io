---
layout: docs
project: getting_started
title: Styling Guidelines
---

<span class="note info" role="alert">This is an early draft, and will completely change at release.</span>  

## Commit style
- Use commit names to summarize what you did
- Put references to issues at the bottom
- Use the body to explain what you did in further detail, if required
- Try to use one commit per feature / bugfix

## Code style 
In general, just respect the rules that are used in C# in other places. You can see the C# programming guidelines [here](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/inside-a-program/coding-conventions). To summarize:

**Do:** 
- Allman style bracketing.
- Everything uses `PascalCase`.
	- Exceptions: Parameters and locals use `camelCase`. Private instance fields use `_camelCase.`
- Use `var` only if the type is apparent.
- Use self documenting variable names, such as ``IsOpened`` <!-- this part may not conform to the docs it's describing ._. -->

We ask that you use tabs instead of spaces, to allow for customizable tab sizes for everyone. Of course, spaces are allowed for alignment.

**Don't:** 
- Write hard to read code 
- Refuse to write documentation for the code you write for Start9 
- Spam pull requests if your first one was rejected, unless you've fixed the problem pointed out. 

### Colour Style
- Using hex is preferred, however other formats are allowed if required
- Colours are to be formatted in all caps (`#2D2D2D`), compressed if possible (`#AAA`), and using color names if applicable (`white`).

## Comments 
- Please comment on all your code, including functions, using XML documentation. Fill out as much information about the member or type as you can.
- All comments must have a space after the ``//``. (eg: `// Comment` )
- Write useful comments instead of reiterating what you see in the code
- Rewrite bad code instead of commenting it
- Use these comment tags (derived from [Wikipedia](https://en.wikipedia.org/wiki/Comment_(computer_programming))):  
```js
// !: a hack
// ?: an inquiry to your future self and to other readers
// *: important information
// BUG: a known bug that should be fixed
// FIXME: a known issuse that should be fixed
// TODO: something to be done later
```