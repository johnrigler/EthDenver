note = new Array();

note.list = async function(name) {
return fetch(noteAPI + '?list').then( x => x.text());
}

note.read  = function( name ) {
return fetch(noteAPI + '?name=' + name).then( x => x.text());
}

note.write = function( name, payload ) {
// Build formData object.
 let formData = new FormData();
 formData.append('name', name);
 formData.append('payload', payload);

 fetch(noteAPI,
     {
     body: formData,
     method: "post"
     });
}

note.list_c = function() { note.list().then( x => console(x)) };
note.read_c = function(name) { note.read(name).then( x => console(x)) };

console.log("'note' functions added...")
