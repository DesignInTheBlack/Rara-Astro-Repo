const options = {
    Watch: './src', // Folder to watch for changes
    FileTypes: ['astro'], // Valid filetypes to watch for changes
    Output: './src/styles', // Where to put the compiled CSS
    Extend: ['./elevate/ext/fonts.css', './elevate/ext/texture.css'], // CSS files to include as well
    ClassRegex: [
        /class\s*=\s*"([^"]+)"/g, // Matches class="..."
        /componentClass\s*=\s*\{'([^']+)'\}/g, // Matches componentClass={'...'}
        /bgClass\s*=\s*"([^"]+)"/g, // Matches class="..."
        /textClass\s*=\s*"([^"]+)"/g, // Matches class="..."
    ]
};

export const config = options;