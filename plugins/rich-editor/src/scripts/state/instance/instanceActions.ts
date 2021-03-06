/**
 * @author Adam (charrondev) Charron <adam.c@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license https://opensource.org/licenses/GPL-2.0 GPL-2.0
 */

import { ActionsUnion, createAction } from "@dashboard/state/utility";
import { RangeStatic } from "quill/core";

export const CREATE_INSTANCE = "[instance] create";
export const SET_SELECTION = "[instance] set selection";

export const actions = {
    createInstance: (editorID: string | number) => createAction(CREATE_INSTANCE, { editorID }),
    setSelection: (editorID: string | number, selection: RangeStatic | null) =>
        createAction(SET_SELECTION, { editorID, selection }),
};

export type ActionTypes = ActionsUnion<typeof actions>;
