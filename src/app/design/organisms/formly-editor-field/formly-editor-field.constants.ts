export const TINYMCE_SETTINGS = {
  plugins: [
    'advlist',
    'autolink',
    'autosave',
    'lists',
    'link',
    'image',
    'charmap',
    'anchor',
    'searchreplace',
    'visualblocks',
    'media',
    'table',
    'help',
    'wordcount',
  ],
  toolbar: [
    'restoredraft undo redo | formatselect | bold italic underline strikethrough subscript superscript link unlink blockquote | backcolor forecolor hilitecolor fontsizeselect |',
    'alignleft aligncenter alignright | bullist numlist outdent indent | removeformat | table help',
  ],
  skin: 'oxide-dark',
  content_css: 'dark',
  browser_spellcheck: true,
  menubar: false,
  height: 500,
  convert_urls: false,
  relative_urls: false,
  branding: false,
  base_url: '/tinymce',
  suffix: '.min',
};

export type EditorSettings = typeof TINYMCE_SETTINGS;
