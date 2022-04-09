/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount";

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [WordCount];

export default Editor;
