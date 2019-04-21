---
layout: docs
project: getting_started
title: Styling Guidelines
---

<span class="note info" role="alert">This is an early draft, and will completely change at release.</span>  

## Commits
- Use commit names to summarize what you did
- Put references to issues at the bottom
- Use the body to explain what you did in further detail, if required

## Code style 
In general, just respect the rules that are used in C# in other places. You can see the C# design guidelines [here](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/inside-a-program/coding-conventions). To summarize:

**Do:** 
- Allman style bracketing.
- Everything uses `PascalCase`.
	- Exceptions: Parameters and locals use `camelCase`. Private instance fields use `_camelCase.`
- Use `var` only if the type is apparent.

However, we ask that you use tabs instead of spaces.

**Don't:** 
- Write hard to read code 
- Refuse to write documentation for the code you write for Start9 
- Spam pull requests if your first one was rejected, unless you've fixed the problem pointed out. 

## Comments 
- Please comment on all your code, including functions, using XML documentation. Fill out as much information about the member or type as you can.
- All comments must have a space after the ``//``. (eg: // Comment )
- Use comment tags (derived from [Wikipedia](https://en.wikipedia.org/wiki/Comment_(computer_programming))):
  - ``// BUG: ``: a known bug that should be corrected
  - ``// FIXME: ``: should be corrected
  - ``// ! ``: A hack or workaround
  - ``// TODO: ``: something to be done
  - ``// ? ``: an inquiry
  - ``// * ``: important information