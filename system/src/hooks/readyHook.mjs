import { prepareSkills } from "../config.mjs";
import ACMigrationRunner from "../migrations/ACMigrationRunner.mjs";
import registerSocketEvents from "../socket.mjs";

export const readyHook = {
	attach: () => {
		cc2d20.logger.debug("Attaching ready hook");

		Hooks.once("ready", async () => {
			cc2d20.logger.debug("Running ready hook");

			if (game.user.isGM) {
				await new ACMigrationRunner().run();
			}

			cc2d20.apps.MomentumTrackerV2.instance.render({force: true});
			registerSocketEvents();

			prepareSkills();

			cc2d20.utils.showNewReleaseNotes();
		});
	},
};
