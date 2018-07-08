---
layout: post
title: New stuff on the horizon
author: rob55rod/Splitwirez and Reflectronic
category: update
---
Hello everyone,  
&emsp;&emsp;Development is going well so far. Firstly, we've decided to migrate Start9's extensibility manager to use the Managed Add-In Framework (<code>System.AddIn</code>). MAF is going to assist us with module discovery and communication, stability of the Start9 host program, and backwards-compatibility in the event of major changes to the API down the line. While not using MAF yet, preliminary work has started on a few modules:  

<div class="gallery">
<a href="https://i.imgur.com/650TMQe.png" data-size="411x536">
  <img src="https://i.imgur.com/gOt2hgf.jpg" alt="Windows 7-style Start Menu" />
  <figure>Windows 7-style Start Menu</figure>
</a>
<a href="https://i.imgur.com/l3PDHb1.gif" data-size="1366x768">
  <img src="https://i.imgur.com/QnK8Ebx.jpg" alt="Jumpstart Menu" />
  <figure>Jumpstart Menu</figure>
</a>
</div>  

Rather than reinventing the wheel, these modules take advantage of WPF's <code>ResourceDictionary</code> capabilities for skinning purposes, yielding incredible flexibility for skin artists while also ensuring module developers have a much smaller amount of work to do to facilitate skinning.  

Related to our efforts to enhancing the codebase quality, the Start9 project, as a whole, on GitHub has been trisected - <code>Start9.Host</code>, <code>Start9.Api</code>, and <code>Start9.SkinDesigner</code>, corresponding to the projects' respective namespaces. This will make everything easier for everyone to manage everything, and to facilitate getting the <code>Start9.Api</code> onto NuGet. We've also decided to give each (planned) module its own repository - we'll inform you when new developments start related to new modules.  

On another note, We've started working on a Sticky Note application, entitled Sticky9, as a proof-of-concept of the Start9 API's uses outside of just modules:  

<div class="gallery">
<a href="https://i.imgur.com/2Kjq4Wb.gif" data-size="608x416">
  <img src="https://i.imgur.com/PcZQ0Nd.jpg" alt="Checkboxes in Sticky9" />
  <figure>Checkboxes in Sticky9</figure>
</a>
<a href="https://i.imgur.com/J1mO8lP.gif" data-size="578x458">
  <img src="https://i.imgur.com/pKRyT7e.jpg" alt="Coloures in Sticky9" />
  <figure>Coloures in Sticky9</figure>
</a>
</div>  

Finally, we'd like to apologize for slow development recently. We're hoping to speed things up, moving forward...speaking of which, we're still looking for developers, so if you have experience with C# and are comfortable with .NET 4.0 and WPF, feel free to join our Discord server, we'll discuss matters further there :OD  
If you don't feel like making a commitment, feel free to fork us! We'll probably accept your pull request.  

Expect more news soon - we're hoping to update this log more often in the future.