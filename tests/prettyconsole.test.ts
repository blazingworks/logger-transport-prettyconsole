import { Logger } from "@blazingworks/logger";
import PrettyConsoleTransport from "../src/index";

test(`Pretty Console Print`, () => {
    const logSpy = jest.spyOn(console, "log");

    const logger = new Logger({
        transports: [
            {
                module: new PrettyConsoleTransport(),
            },
        ],
    });

    logger.info("My name is Mai Sakurajima!");
    logger.debug("I'm Sakuta Azusagawa");
    logger.warn("My name is Tomoe Koga!");
    logger.error("I'm Rio Futaba!");
    logger.fatal("My name is Nodoka Toyohama!");
    logger.access("My name is Kaede Azusagawa :)");

    expect(logSpy).toHaveBeenCalledTimes(6);
});
