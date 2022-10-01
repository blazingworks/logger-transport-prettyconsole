import { LogLevel } from "@blazingworks/logger/enums";
import { TransportModule } from "@blazingworks/logger/interfaces";
import { setCapitilization, surround } from "@blazingworks/utils/text";
import * as colors from "colorette";
import PrettyConsoleTransportOptions from "./PrettyConsoleTransportOptions";
import PrettyConsoleTransportOptionsInternal from "./PrettyConsoleTransportOptionsInternal";

export default class PrettyConsoleTransport implements TransportModule {
    options: PrettyConsoleTransportOptionsInternal;

    constructor(options?: PrettyConsoleTransportOptions) {
        this.options = {
            levelColorStyle: options?.levelColorStyle ?? "bg",
            timestampColorStyle: options?.timestampColorStyle ?? "bg",
            levelTextStyle: options?.levelTextStyle ?? "allCaps",
            timestamp: options?.timestamp ?? "unformatted",
            surroundTimestamp: options?.surroundTimestamp ?? "spaces",
            surroundLevel: options?.surroundLevel ?? "spaces",
            useColon: options?.useColon ?? false,
        };
    }

    handle(message: string, level: LogLevel): void {
        let finalMessage = "";

        // Timestamp
        finalMessage += this.getTimestamp() + " ";

        // Level
        finalMessage += this.getLevel(level);

        // Colon
        if (this.options.useColon) {
            finalMessage += ": ";
        } else {
            finalMessage += " ";
        }

        // Add the message itself
        finalMessage += message;

        console.log(finalMessage);
    }

    private getTimestamp(): string {
        if (this.options.timestamp === "none") return "";

        let timestamp = "";

        if (this.options.timestamp === "unformatted") {
            timestamp = surround(new Date().toISOString(), this.options.surroundTimestamp);
        }

        if (this.options.timestampColorStyle === "bg") {
            return colors.bgBlackBright(timestamp);
        } else {
            return timestamp;
        }
    }

    private getLevel(level: LogLevel) {
        const levelString = surround(setCapitilization(level.toString(), this.options.levelTextStyle), this.options.surroundLevel);

        switch (level) {
            case LogLevel.Debug:
                if (this.options.levelColorStyle === "bg") return colors.bgBlue(levelString);
                return colors.blue(levelString);
            case LogLevel.Info:
                if (this.options.levelColorStyle === "bg") return colors.bgGreen(levelString);
                return colors.green(levelString);
            case LogLevel.Warn:
                if (this.options.levelColorStyle === "bg") return colors.bgYellow(levelString);
                return colors.yellow(levelString);
            case LogLevel.Error:
                if (this.options.levelColorStyle === "bg") return colors.bgRed(levelString);
                return colors.red(levelString);
            case LogLevel.Fatal:
                if (this.options.levelColorStyle === "bg") return colors.bgRedBright(levelString);
                return colors.bgRedBright(levelString);
            case LogLevel.Access:
                if (this.options.levelColorStyle === "bg") return colors.bgMagenta(levelString);
                return colors.magenta(levelString);
        }
    }
}
