
goog.module("notifier");

const AppCntrl = goog.require("controllers.app");

window["Notifier"] = {
  AppCntrl: AppCntrl
}

Silica.setContext("Notifier");
Silica.compile(document);
Silica.apply(() => {});
