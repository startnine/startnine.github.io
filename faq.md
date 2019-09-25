---
layout: default
menu: main
order: 4
permalink: /faq
title: FAQ
type: one-box faq fade-in js-self-link
---
<div class="skip-target" id="maincontent"></div>

FAQ
===
### What is Start9?
An in-progress, extensible, customizable shell replacement for Windows. 

### Why are you making Start9?
Many people are discontent with the default shell experience in Windows. To fix this, we slap a bunch of software (many non-free) together, hoping none of them will break with updates. We see a better solution by eliminating the Windows Explorer-based approach and taking the entire shell experience and ecosystem into our own hands. With Start9, all of these tools could - if rebuilt as Start9 modules - share the same common library of abstractions for these Windows features. This means that if Microsoft changes something, the abstractions library can be updated and all of these modules would immediately work again, after just one codebase is updated. This frees up these developers to focus on improving their software.

### Does Start9 theme existing programs?
No. Start9 itself doesn’t skin “conventional” programs. If you’d like to skin existing programs, you still have to patch and write your own skins for them. However, for programs and modules that integrate into the Start9 ecosystem, we will provide a platform that will allow for 

### What’s a module?
A module is a piece of shell GUI, such as an application launcher, File Manager, task switcher, etc., which exists independently of the rest of the shell, but uses Start9’s module intercommunications pipeline to connect to other modules - chosen by the user - which, together, act as a single, cohesive shell GUI.

### How will you make Start9 extensible?
Start9 isn’t just extensible. Start9 is extensibility itself. It’s  Start9 is a platform, a platform on which any developer can build modules, and any user can mix and match those modules to their heart’s content. We seek to alleviate the struggle of maintaining shell alterations for Windows and allow developers to focus on innovating. More on that mission below.

### How do I build a module?
The build process depends on the module. If what you’re building has a README, refer to that. Otherwise, try building the module in your favourite IDE. Before building, make sure that Start9 and its affiliated libraries are imported correctly.

### What’s a skin?
A “skin” is something which can alter the appearance of a piece of software. In our case, that “something” is a Start9 module. Our modules, and hopefully the majority of those provided by third-party developers, will support “skinning”, which is the ability for a module’s appearance to be altered at any time by switching between skins. Skins don’t generally alter the layout of a module’s GUI or content much, they simply make it look somewhat different. 

### How do skins work?
As we’re still very early into development and are still refining the structure of how skins work, we don’t have the exact details on how they’ll function. For details, check out our Discord server.

### What’s Shale?
Shale is our new, homemade design language. Shale is a tasteful, uncompromising, functional balance of the elegance and smoothness of the many minimal styles which permeate modern GUI design, and the depth and visual interest of the older skeuomorphic styles which characterized the software of the 2010’s.

### Do I have to use Shale?
No, there are other skins available. If none of the skins satisfy you, you can always modify an existing skin or create your own. 

### Where can I download Start9?
**There are no binaries to download.**
For the moment, you’ll need a time machine. Start9 is under heavy construction, and is not quite ready for the public yet. If you’re really curious what we’ve been working on, you can try building from the source. Otherwise, just hang in until we have a preview build to present.

### Does Start9 need DWM to run?
No, though your mileage may vary if you’re trying to disable DWM on Windows 8 or newer.

### Why are you taking so long?
We’re not a paid team of professional developers. We’re just a couple of students, trying to do our part to solve a problem in our spare time. We have exams, homework, and other commitments to tend to before we can work on Start9. If you want to help, please refer to the “[How do I contribute](#how-do-i-contribute)” section. It would be appreciated :)

### How do I contribute?
There are multiple ways you can help us. Obviously, you can help us just by showing support. Join our chats and tell us how you think about Start9 and how we can improve. Next, you could help by uncovering how Windows’s own shell functions, and how to create abstractions for those tasks. You can also submit code to us, hopefully adhering to the contributing guidelines. By following them, you save us time and save the sanities of future developers. If you’re English and other languages, you could join our globalization efforts to translate Start9, however we haven’t added lots of stuff to translate yet. We hope you will consider joining us with contributions and support.

### How feature-rich will Start9 be?
Start9 itself does not provide much functionality, as it is just a platform. Your modules are the deciding factor when it comes to features, so that’s pretty much up to you.
