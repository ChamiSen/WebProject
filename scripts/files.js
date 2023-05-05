window.onload = function() {
    let droparea = document.getElementById("droparea");

    droparea.ondrag = droparea.ondragover = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    droparea.ondrop = (event) => {
        event.preventDefault();
        event.stopPropagation();

        document.getElementById("fileToUpload").files = event.dataTransfer.files;
        document.getElementById("uploadForm").submit();
    };
}

function getLoad(content) {
    window.location.href = "index.php?read=1&data=" + content;
}


function downloadTxtFile(text, filename) {
    // Create a Blob object from the text
    const blob = new Blob([text], { type: "text/plain" });

    // Create a temporary URL to the Blob
    const url = URL.createObjectURL(blob);

    // Create a link to download the file
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;

    // Click the link to trigger the download
    link.click();

    // Clean up the temporary URL
    URL.revokeObjectURL(url);
}
