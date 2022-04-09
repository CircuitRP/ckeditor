/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import Mention from "@ckeditor/ckeditor5-mention/src/mention";

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [Mention];

export default Editor;
