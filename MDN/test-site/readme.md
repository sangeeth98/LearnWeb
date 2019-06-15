# Topics covered on MDN tutorial website

This is the list of topics covered in learning to create website from MDN website

---

1. Getting started with web
2. Softwares required
3. What will your website look like
    * Sketching
    * choosing assets
    * fonts
4. Dealing with files
    * The file hierarchy should look like the image given below
    ![hierarchy](/MDN/test-site/images/file_hierarchy.jpg)
5. What is HTML and basic tags
    * opening tags
    * closing tags
    * content
    * element
        > normal element
        > nesting element
        > empty element
6. CSS (Anatomy)
    * Selector
    * Declaration
    * Property
    * Property Value
7. Javascript  
   | **Variable** | **Explanation**                                                                                                                  | **Example**                                                                                                               |
   | -------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
   | *String*   | A sequence of text known as a string. To signify that the value is a string, you must enclose it in quote marks.             | ```var myVariable = 'Bob';```                                                                                                |
   | *Number*   | A number. Numbers don't have quotes around them.                                                                             | ```var myVariable = 10;```                                                                                                   |
   | *Boolean*  | A True/False value. The words ```true``` and ```false``` are special keywords in JS, and don't need quotes.                              | ```var myVariable = true;```                                                                                                 |
   | *Array*    | A structure that allows you to store multiple values in one single reference.                                                | ```var myVariable = [1,'Bob','Steve',10];```Refer to each member of the array like this: ```myVariable[0]```, ```myVariable[1]```, etc. |
   | *Object*   | Basically, anything. Everything in JavaScript is an object, and can be stored in a variable. Keep this in mind as you learn. | ```var myVariable = document.querySelector('h1');``` All of the above examples too.                                          |

---
---
---

## Testing various markdown syntaxes

### javascript function

```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
var x = "Syntax are highlightened automatically"
```

### python function

```python
def foo:
    if x is True:
        return False
    else:
        return True
```

### This is blockquote

> blockquotes are very handy in email to emulate text reply

You need another line of text to break blockquote

> this is another blockquote

### Horizontal rules

Hypens

---

Asterisks

***

Even underscores work

___

But they are inconsistent and only --- should be used to trigger horizontal rules

### Emphasis tags

Asterisks - bold text **This is bold text**

Underscores indicate Italic text _This is italics_

---

## Embedding URL's

Click here to reach [Youtube](https://www.youtube.com)

This is a valid [Empty fragment](#fragment)

### For embedding video links with image

[![mozilla hacks](/MDN/test-site/images/mozilla-hacks.jpg)](https://www.youtube.com/playlist?list=PLo3w8EB99pqLEopnunz-dOOBJ8t-Wgt2g)

click this image to view playlist on **web demystified** by mozilla hacks youtube channel.

---

## Tables

Tables can be copy pasted from another application.

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| *Still*  | `renders` | **nicely** |
| 1        | 2         | 3          |

## HTML

Raw html will work pretty well

```html
<html>
    <head>
        <title> raw html document <title>
    </head>
    <body>
        <p> This is a raw html document </p>
    </body>
</html>
```

1. First ordered list item
2. Another item
    * Unordered sub-list.

---

1. Actual numbers don't matter, just that it's a number
    1. Ordered sub-list
2. And another item.  
   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.  
   Note that this line is separate, but within the same paragraph.  
   This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use
    * asterisks (*)
    * minus (-)
    * plus (+) symbols
