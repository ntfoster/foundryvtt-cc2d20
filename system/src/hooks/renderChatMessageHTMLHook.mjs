import { ACChat } from "../system/ACChat.mjs";

export const renderChatMessageHTMLHook = {
	attach: () => {
		cc2d20.logger.debug("Attaching renderChatMessageHTML hook");

		Hooks.on("renderChatMessageHTML", ACChat.onRenderChatMessage);
	},
};
