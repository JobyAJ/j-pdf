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

const jpdf = {

    // element : element selector , default document.body
    //  $fileName : file name for save the screenshot , default sample.png

    // var screenshotObj = {
    //     element: '.header',
    //     $fileName: 'test.png'
    // }

    // screenshot(screenshotObj);

    screenshot: (screenshotObj) => {

        console.log(screenshotObj)
        const element = screenshotObj?.element ? document.querySelector(screenshotObj?.element) : document.body;
        const $fileName = screenshotObj?.$fileName ? screenshotObj?.$fileName : 'sample.png';

        html2canvas(element)
            .then(canvas => {
                canvas.style.display = 'none'
                document.body.appendChild(canvas)
                return canvas
            })
            .then(canvas => {
                const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
                saveFile(image, $fileName);
                canvas.remove()
            })

        const saveFile = (image, fileName) => {
            var link = document.createElement("a");
            if (typeof link.download === "string") {
                link.href = image;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                window.open(uri);
            }
        }
    },





    //  $fileName : file name for save the screenshot , default sample.pdf
    // element : element selector 
    // var pdfObj = {
    // element:'.j-pdf-block',
    //     $fileName: 'test'
    // }

    pdfDownload: (pdfObj) => {

        const doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
            hotfixes: ['px_scaling'],
        });


        let $fileName = pdfObj?.$fileName ? `${pdfObj?.$fileName}.pdf` : 'sample.pdf';

        var imageWidth,
            imageHeight,
            canvasHeight = 297,
            pendingHeight,
            position = 0;

        html2canvas(document.querySelector(pdfObj?.element), {
            allowTaint: true,
            backgroundColor: '#fff',
            useCORS: true,
        }).then(function (canvas) {
            var imgData = canvas.toDataURL('image/png');
            imageWidth = (canvas.width * 50) / 210;
            imageHeight = canvas.height * imageWidth / canvas.width;
            pendingHeight = imageHeight;

            doc.addImage(imgData, 'PNG', 0, 0, imageWidth, imageHeight, '', 'SLOW');
            pendingHeight -= canvasHeight;

            while (pendingHeight > 0) {
                position = pendingHeight - imageHeight;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 0, position, imageWidth, imageHeight, '', 'SLOW');
                pendingHeight -= canvasHeight;
            }
            doc.save($fileName);
        });
    }

}