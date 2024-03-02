url = "https://rigler.org/easyBase2/server/notepad.php"

// Build formData object.
let formData = new FormData();
formData.append('name', 'putNote.js');
formData.append('payload', payload);

fetch(url,
    {
        body: formData,
        method: "post"
    });
