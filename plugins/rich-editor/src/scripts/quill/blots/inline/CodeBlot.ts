/**
 * @author Adam (charrondev) Charron <adam.c@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license https://opensource.org/licenses/GPL-2.0 GPL-2.0
 */

import { Code } from "quill/formats/code";

export default class CodeBlot extends Code {
    public static blotName = "codeInline";
    public static tagName = "code";
    public static className = "codeInline";

    constructor(domNode) {
        super(domNode);
        domNode.classList.add("code");
        domNode.classList.add("isInline");
        domNode.setAttribute("spellcheck", false);
    }
}
