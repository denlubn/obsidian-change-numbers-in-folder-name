# Change numbers in folders name

As you know, folders are filtered in alphabetical order. To customize the order, you can add numbers before the name. For example:
- 00 Salad
- 05 Potato
- 10 Cabbage


This plugin removes numbers and leaves only text.

## How to use

Add css code for <kbd>.obsidian/snippets/snippet.css</kbd> file:
```
.numbers-in-folder-name {
  display: none;
/*  color: blue;*/
/*  font-size: 10px;*/
}
```
The plugin fires once every time the program is launched. If you change the name of the folders, you can run again in the **command palette**.
