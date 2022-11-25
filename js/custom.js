/*!
 * PDF print - jQuery Plugin
 * version: 1.0.0 (November 2022)
 * @requires jQuery
 * @requires jsPdf
 * @requires html2canvas
 *
 * Examples at / https://jobyaj.github.io/j-pdf/
 *
 * Developed By Joby AJ 
 *
 */

// *****screenshot*****
// element : element selector , default document.body
//  $fileName : file name for save the screenshot , default sample.png

var screenshotObj = {
    element: '.j-pdf-block',
    $fileName: 'test.png'
}


// ********pdfDownload*****
//  $fileName : file name for save the screenshot , default sample.pdf
// element : element selector
var pdfObj = {
    element: '.j-pdf-block',
    $fileName: 'test'
}

$(function () {
    $('body').on('click', '.pdf__screenshot', function () {
        jpdf.screenshot(screenshotObj);
    }).on('click', '.pdf__gen', function () {
        jpdf.pdfDownload(pdfObj);
    });
});
