const options = {
    Watch:'./src', // Folder to watch for changes
    FileTypes:['astro'], //Valid filetypes to watch for changes
    Output:'./src/styles', //Where to put the compiled CSS
    Extend:['./elevate/ext/fonts.css'] //CSS files to include as well
}

export const config = options