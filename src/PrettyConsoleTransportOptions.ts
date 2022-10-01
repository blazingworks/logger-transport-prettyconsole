import { SurroundingCharacters } from "@blazingworks/utils/text";

export default interface PrettyConsoleTransportOptions {
    levelColorStyle?: "bg" | "text";
    timestampColorStyle?: "bg" | "text";
    levelTextStyle?: "allCaps" | "firstLetterCaps" | "allLowercase";
    timestamp?: "none" | "unformatted";
    surroundTimestamp?: SurroundingCharacters | string | [string] | [string, string];
    surroundLevel?: SurroundingCharacters | string | [string] | [string, string];
    useColon?: boolean;
}
