What is this?
=============

This is for the pdf printing, with the help of html2canvas and jspdf. j-pdf used for sipmly print the screenshots and the pdf , maily foucsed for the bill printings

Installation
---

Simply add the css and js files, Do not forget to add the jQuery file. And no any frameworks required. you can find the uncompressed files, and also do to manipulate all the codes with your needs.

```
<link rel="stylesheet" href="css/j-pdf.min.css">

<script src="js/html2canvas.js"></script>
<script src="js/jspdf.js"></script>
<script src="js/j-pdf.js"></script>
```

Supporting features
---

- screenshot generation
- pdf generation
- pdf gererates with auto pages

Usage
---

```
**screenshot**
// element : element selector , default document.body
// $fileName : file name for save the screenshot , default sample.png

var screenshotObj = {
    element: '.j-pdf-block',
    $fileName: 'test.png'
}

jpdf.screenshot(screenshotObj);

```

```
**pdfDownload**
// element : element selector
// $fileName : file name for save the screenshot , default sample.pdf

var pdfObj = {
    element: '.j-pdf-block',
    $fileName: 'test'
}

jpdf.pdfDownload(pdfObj);

```

checkout the demo on codepen [j-pdf](https://codepen.io/JobyJoDiyon/pen/vYrjdmg).

[check live demo here](https://jobyaj.github.io/j-pdf/)
